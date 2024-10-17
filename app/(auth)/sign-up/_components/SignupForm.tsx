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
import { sendOtp, verifyOtp } from "@/actions/otp";

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
    accept: z.boolean(), // Keep the accept validation for form integrity
    otp: z.string().optional(), // Add OTP to the schema
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
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
  const [otpVerified, setOtpVerified] = useState(false);
  const [otpSent, setOtpSent] = useState(false); // Track if OTP has been sent
  const [loading, setLoading] = useState(false);

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
      otp: "",
    },
  });

  const { email } = watch();

  // Handle email verification and OTP sending
  const handleVerifyEmail = () => {
    if (!email) {
      toast.error("Please provide a valid email");
      return;
    }

    setLoading(true);
    sendOtp(email)
      .then(() => {
        setOtpSent(true); // OTP sent, now reveal the OTP input
        toast.success("OTP sent to your email");
      })
      .catch((err) => {
        toast.error(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const onSubmit = (data: signUpType) => {
    startTransition(() => {
      if (otpVerified) {
        registerUser(data)
          .then((data) => {
            const emailExist = users.find((user) => user.email === email);
            if (emailExist) return toast.error("Email already exists");
            if (data?.error) return toast.error(data?.error);

            toast.success("Your account is created");
            router.push("/sign-in");
            reset();
          })
          .catch((err) => {
            toast.error(err.message);
            throw err;
          });
      }
    });
  };

  const handleVerifyOtp = (otp: string) => {
    verifyOtp(email, otp)
      .then(() => {
        setOtpVerified(true);
        toast.success("OTP verified successfully");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  return (
    <form
      className="w-full max-w-lg mx-auto mt-8 p-6 rounded-lg shadow-md"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div>
        <div className="mb-4">
          <input
            placeholder="Full Name"
            type="text"
            {...register("username")}
            className="w-full border-2 placeholder:text-[#5F5F5F] rounded-lg py-2 px-4"
            disabled={otpVerified}
          />
          {errors.username && <p className="">{errors.username.message}</p>}
        </div>

        <div className="mb-1">
          <input
            placeholder="Your Email"
            type="text"
            {...register("email")}
            className="w-full border-2 placeholder:text-[#5F5F5F] rounded-lg py-2 px-4"
            disabled={otpSent} // Disable after OTP is sent
          />
          {errors.email && <p className="">{errors.email.message}</p>}
        </div>

        {!otpSent && ( // Show "Verify Email" button only before OTP is sent
          <div className="flex align-center justify-center w-full mb-2">
            <button
              type="button"
              className="signInbut rounded-lg py-2 mt-2 disabled:opacity-50 w-[50%]"
              disabled={isPending || otpVerified || loading}
              onClick={handleVerifyEmail} // Call the OTP send function
            >
              {loading || isPending ? "Verifying Email..." : "Verify Email"}
            </button>
          </div>
        )}

        {otpSent &&
          !otpVerified && ( // Show OTP field after OTP is sent
            <div className="mb-4">
              <div className="flex items-center">
                <input
                  placeholder="OTP"
                  className="w-full border-2 placeholder:text-[#5F5F5F] rounded-lg py-2 px-4"
                  type="text"
                  {...register("otp", { required: true })} // Use react-hook-form's register
                />
                <button
                  type="button"
                  className="ml-2 signInbut rounded-lg py-2"
                  onClick={() => handleVerifyOtp(watch("otp"))} // Access OTP value via watch("otp")
                  disabled={isPending}
                >
                  Verify
                </button>
              </div>
            </div>
          )}

        {otpVerified && (
          <>
            <div className="mb-4 relative mt-2">
              <input
                placeholder="Your Password"
                className="w-full border-2 placeholder:text-[#5F5F5F] rounded-lg py-2 px-4"
                type={isVisiblePassword ? "text" : "password"}
                {...register("password")}
                disabled={!otpVerified}
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
                disabled={!otpVerified}
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
                disabled={!otpVerified}
              />
              {errors.phone && <p className="">{errors.phone.message}</p>}
            </div>

            {/* No need to show an error for accept */}
            <div className="mb-4">
              <div className="text-xs">
                By submitting, you have agreed to the{" "}
                <Link href={"/terms"}>
                  <label
                    htmlFor="accept"
                    className="hover:cursor-pointer underline text-blue-700"
                  >
                    Terms and Conditions.
                  </label>
                </Link>
              </div>
            </div>

            <button
              type="submit"
              className="w-full signInbut rounded-lg py-2 mt-2 disabled:opacity-50"
              disabled={isPending || !otpVerified}
            >
              {isPending ? "Signing up..." : "Submit"}
            </button>
          </>
        )}

        <div className="relative mt-4">
          <div className="border-b-2"></div>
          <div className="absolute inset-x-0 top-1/2 transform -translate-y-1/2 text-center px-2">
            or
          </div>
        </div>

        <button
          type="button"
          disabled={isPending}
          className="w-full flex items-center justify-center signInbut rounded-lg py-2 mt-4 disabled:opacity-50"
          onClick={() => signIn("google")}
        >
          <Image src={GoogleLogo} height={20} width={20} alt="google-image" />
          <span className="ml-2">Sign in with Google</span>
        </button>

        <p className="mt-4 text-center">
          Already have an account?{" "}
          <Link href="/sign-in" className="underline text-blue-800">
            Sign in
          </Link>
        </p>
      </div>
    </form>
  );
};

export default SignupForm;
