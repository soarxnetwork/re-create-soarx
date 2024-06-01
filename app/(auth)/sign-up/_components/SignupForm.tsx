/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React, { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import validator from "validator";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-toastify";
import { registerUser } from "@/actions/user";
import { User } from "@prisma/client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import GoogleLogo from "../../../../public/images/google-logo.png";
import { signIn } from "next-auth/react";

export const signUpSchema = z
  .object({
    username: z.string().min(3, {
      message: "Username must be at least 3 characters long",
    }),
    password: z.string().min(8, {
      message: "Password must be at least 8 characters long",
    }),
    confirmPassword: z.string().min(8),
    phone: z.string().refine(validator.isMobilePhone, "Invalid phone number"),
    email: z.string().email({
      message: "Invalid email",
    }),
    accept: z.boolean(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  })
  .refine((data) => data.accept === true, {
    message: "You must accept the terms and conditions",
    path: ["accept"],
  });

export type signUpType = z.infer<typeof signUpSchema>;

interface SignupFormProps {
  users: User[];
}

const SignupForm = ({ users }: SignupFormProps) => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [isVisiblePassword, setIsVisiblePassword] = useState(false);
  const [isVisibleConfirmPassword, setIsVisibleConfirmPassword] =
    useState(false);

  const {
    watch,
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      username: "",
      password: "",
      confirmPassword: "",
      phone: "",
      accept: false,
      email: "",
    },
  });

  const { email } = watch();

  const onSubmit = (data: signUpType) => {
    startTransition(() => {
      registerUser(data)
        .then((data) => {
          const emailExist = users.find((user) => user.email === email);
          if (emailExist) return toast.error("Email already exists");
          if (data?.error) return toast.error(data?.error);

          toast.success("Please check your email to activate your account");
          router.push("/sign-in");
          reset();
        })
        .catch((err) => {
          toast.error(err.message);
          throw err;
        });
    });
  };

  return (
    <form
      className="w-full max-w-lg mx-auto mt-8 p-6  rounded-lg shadow-md"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div>
        <div className="mb-4">
          <input
            placeholder="Full Name"
            type="text"
            {...register("username")}
            className="w-full border-2 placeholder:text-[#5F5F5F] rounded-lg py-2 px-4"
          />
          {errors.username && <p className="">{errors.username.message}</p>}
        </div>

        <div className="mb-4">
          <input
            placeholder="Your Email"
            type="text"
            {...register("email")}
            className="w-full border-2 placeholder:text-[#5F5F5F] rounded-lg py-2 px-4"
          />
          {errors.email && <p className="">{errors.email.message}</p>}
        </div>

        <div className="mb-4 relative">
          <input
            placeholder="Your Password"
            className="w-full border-2 placeholder:text-[#5F5F5F] rounded-lg py-2 px-4"
            type={isVisiblePassword ? "text" : "password"}
            {...register("password")}
          />
          <button
            type="button"
            onClick={() => setIsVisiblePassword(!isVisiblePassword)}
            className="absolute w-4 h-4 right-4 top-4"
          >
            {isVisiblePassword ? <EyeIcon /> : <EyeSlashIcon />}
          </button>
        </div>
        {errors.password && <p className="">{errors.password.message}</p>}

        <div className="mb-4 relative">
          <input
            placeholder="Confirm Password"
            className="w-full border-2 placeholder:text-[#5F5F5F] rounded-lg py-2 px-4"
            type={isVisibleConfirmPassword ? "text" : "password"}
            {...register("confirmPassword")}
          />
          <button
            type="button"
            onClick={() =>
              setIsVisibleConfirmPassword(!isVisibleConfirmPassword)
            }
            className="absolute w-4 h-4 right-4 top-4"
          >
            {isVisibleConfirmPassword ? <EyeIcon /> : <EyeSlashIcon />}
          </button>
        </div>
        {errors.confirmPassword && (
          <p className="">{errors.confirmPassword.message}</p>
        )}

        <div className="mb-4">
          <input
            placeholder="Phone Number"
            className="w-full border-2 placeholder:text-[#5F5F5F] rounded-lg py-2 px-4"
            {...register("phone")}
            type="text"
          />
          {errors.phone && <p className="">{errors.phone.message}</p>}
        </div>

        <div className="mb-4">
          <Link href={"/terms"} className="flex pl-4 items-center gap-x-3">
            <p>
              <input
                type="checkbox"
                id="accept"
                {...register("accept")}
                className="mt-2"
              />
            </p>
            <label htmlFor="accept" className="">
              Terms & Conditions
            </label>
          </Link>
        </div>
        {errors.accept && <p className="">{errors.accept.message}</p>}

        <button
          type="submit"
          className="w-full signInbut rounded-lg py-2 mt-2 disabled:opacity-50"
          disabled={isPending}
        >
          {isPending ? "Signing up..." : "Submit"}
        </button>

        <div className="relative mt-4">
          <div className="border-b-2"></div>
          <div className="absolute inset-x-0 top-1/2 transform -translate-y-1/2 text-center  px-2">
            or
          </div>
        </div>

        <button
          type="button"
          disabled={isPending}
          className="w-full flex items-center justify-center signInbut  rounded-lg py-2 mt-4 disabled:opacity-50"
          onClick={() => signIn("google")}
        >
          <Image src={GoogleLogo} height={20} width={20} alt="google-image" />
          <span className="ml-2">Sign in with Google</span>
        </button>

        <p className="mt-4 text-center">
          Already have an account?
          <Link href="/sign-in" className="underline">
            &nbsp;Sign in
          </Link>
        </p>
      </div>
    </form>
  );
};

export default SignupForm;
