"use server";
import { db } from "@/lib/db";
import { sendMail } from "@/lib/mail";
import { generateOtp } from "@/utils/generateOtp";

export const sendOtp = async (email: string) => {
  try {
    // Check if the email already exists in the users tabl
    const existingUser = await db.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      throw new Error("Email already exists");
    }

    const { otp, expiresAt } = generateOtp();

    // Check if an OTP already exists for the email
    const existingOtpRecord = await db.otp.findUnique({
      where: { email },
    });

    if (existingOtpRecord) {
      // Update the existing OTP record with a new OTP and expiration
      await db.otp.update({
        where: { email },
        data: {
          value: otp,
          expiresAt,
        },
      });
    } else {
      // Create a new OTP record if none exists
      await db.otp.create({
        data: {
          email,
          value: otp,
          expiresAt,
        },
      });
    }

    const body = `
        <h3>Your OTP code is: ${otp}</h3>
        <p>This OTP is valid for 10 minutes. Please do not share it with anyone.</p>
      `;

    await sendMail({
      to: email!,
      subject: "Your Otp Code",
      body,
    });
  } catch (error) {
    throw error;
  }
};

export const verifyOtp = async (email: string, otp: string) => {
  try {
    const otpRecord = await db.otp.findUnique({
      where: { email },
    });

    if (!otpRecord) {
      throw new Error("OTP not found");
    }

    const currentTime = new Date().getTime();
    const isExpired = currentTime > new Date(otpRecord.expiresAt).getTime();

    if (isExpired) {
      // Delete expired OTP from the database
      await db.otp.delete({
        where: { email },
      });
      throw new Error("OTP expired");
    }

    // Verify OTP and delete after successful verification
    if (otpRecord.value === otp) {
      await db.otp.delete({
        where: { email },
      });
      // Proceed with login or user actions
    } else {
      throw new Error("Invalid OTP");
    }
  } catch (err) {
    throw err;
  }
};
