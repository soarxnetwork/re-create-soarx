"use server";
import { db } from "@/lib/db";
import { Admin, User } from "@prisma/client";
import { revalidatePath } from "next/cache";
import bcrypt from "bcrypt";
import { signUpType } from "@/app/(auth)/sign-up/_components/SignupForm";
import {
  signinSchema,
  signinType,
} from "@/app/(auth)/sign-in/_components/SigninForm";
import {
  compileActivationTemplate,
  compileResetPasswordTemplate,
  sendMail,
} from "@/lib/mail";
import { signJwt, verifyJwt } from "@/lib/jwt";
import { resetPasswordType } from "@/app/(auth)/reset-password/_components/ResetPasswordForm";
interface updateAdminPayload {
  id: string;
  admin: Admin;
}

// TODO

export const updateAdminPermission = async ({
  id,
  admin,
}: updateAdminPayload) => {
  try {
    await db.user.update({
      where: {
        id,
      },
      data: {
        admin,
      },
    });

    revalidatePath("/mock/user");
  } catch (err) {
    console.error(err);
    throw err;
  }
};
export const registerUser = async (user: signUpType) => {
  try {
    const { accept, confirmPassword, password, ...rest } = user;

    const existingUser = await db.user.findUnique({
      where: {
        email: rest.email,
      },
    });

    if (existingUser) return { error: "Email already exists" };

    const newUser = await db.user.create({
      data: {
        ...rest,
        password: await bcrypt.hash(password, 10),
      },
    });

    const jwtUserId = signJwt({
      userId: newUser.id,
    });

    const activationUrl = `${process.env.NEXTAUTH_URL}/activation/${jwtUserId}`;
    const body = compileActivationTemplate(newUser.username!, activationUrl);

    await sendMail({
      to: newUser.email!,
      subject: "Activate your account",
      body,
    });
  } catch (err) {
    console.error(err);
    throw err;
  }
};

type ActiveUserPayload = (
  id: string
) => Promise<"User Not Exist" | "User Already Activated" | "User Activated">;

export const activateUser: ActiveUserPayload = async (id) => {
  const payload = verifyJwt(id);
  const user = await db.user.findUnique({
    where: {
      id: payload.userId,
    },
  });

  if (!user) return "User Not Exist";
  if (user.emailVerified) return "User Already Activated";

  const updateEmailVerified = await db.user.update({
    where: {
      id: payload.userId,
    },
    data: {
      emailVerified: new Date(),
    },
  });
  return "User Activated";
};

export const forgotPassword = async (email: string) => {
  const user = await db.user.findUnique({
    where: {
      email,
    },
  });
  if (!user) return { error: "User not found" };
  const jwtUserId = signJwt({
    userId: user.id,
  });
  const resetPassUrl = `${process.env.NEXTAUTH_URL}/reset-password/${jwtUserId}`;
  const body = compileResetPasswordTemplate(user.username!, resetPassUrl);
  const sendResult = await sendMail({
    to: user.email!,
    subject: "Reset your password",
    body,
  });
  return sendResult;
};
export const resetPassword = async (data: resetPasswordType, id: string) => {
  const payload = verifyJwt(id);
  if (!payload) return { error: "Invalid token" };
  const user = await db.user.findUnique({
    where: {
      id: payload.userId,
    },
  });
  if (!user) return { error: "User not found" };

  await db.user.update({
    where: {
      id: payload.userId,
    },
    data: {
      password: await bcrypt.hash(data.password, 10),
    },
  });
};
