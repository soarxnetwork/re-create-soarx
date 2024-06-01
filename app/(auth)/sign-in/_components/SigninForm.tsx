/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React, { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-toastify";
import Image from "next/image";
import GoogleLogo from '../../../../public/images/google-logo.png';
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

export const signinSchema = z.object({
  password: z.string({
    required_error: "Password is required",
  }),
  email: z.string().email({
    message: "Invalid email",
  }),
});
export type signinType = z.infer<typeof signinSchema>;

interface signinProps {
  callbackUrl?: string;
}

const SigninForm = ({ callbackUrl }: signinProps) => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);
  const [isVisiblePassword, setIsVisiblePassword] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signinSchema),
    defaultValues: {
      password: "",
      email: "",
    },
  });

  const onSubmit = (data: signinType) => {
    startTransition(() => {
      signIn("credentials", {
        redirect: false,
        email: data.email,
        password: data.password,
      })
        .then((result) => {
          if (!result?.ok) {
            const unknownBehaviour =
              result?.error === "data and hash arguments required"
                ? "You have your account with Google, please sign in with Google"
                : result?.error!;
            toast.error(unknownBehaviour);
            return setError(unknownBehaviour);
          }
          router.push(callbackUrl || "/");
          toast.success("Login successful");
          reset();
        })
        .catch((err) => {
          console.error(err);
          throw err;
        })
        .finally(() => {
          setError(null);
        });
    });
  };

  return (
    <form
      className="w-full max-w-md mx-auto p-6  rounded-lg"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div>
        <input
          placeholder="Your email"
          type="text"
          {...register("email")}
          className="w-full border-2 placeholder:text-[#5F5F5F] rounded-lg py-2 px-4 mb-4"
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
        
        <div className="flex items-center relative mb-4">
          <input
            placeholder="Password"
            className="w-full border-2 placeholder:text-[#5F5F5F] rounded-lg py-2 px-4"
            type={isVisiblePassword ? "text" : "password"}
            {...register("password")}
          />
          <button
            type="button"
            onClick={() => setIsVisiblePassword(!isVisiblePassword)}
            className="absolute w-4 h-4 right-4 top-1/2 transform -translate-y-1/2"
          >
            {isVisiblePassword ? <EyeIcon /> : <EyeSlashIcon />}
          </button>
        </div>
        
        {errors.password && <p className="text-red-500">{errors.password.message}</p>}

        <div className="flex flex-col items-center">
          <button
            type="submit"
            disabled={isPending}
            className="w-full signInbut rounded-lg py-2 mb-4 disabled:opacity-50"
          >
            {isPending ? "Loading..." : "Sign in"}
          </button>
          {error && <p className="">{error}</p>}

          <button
            type="button"
            disabled={isPending}
            className="w-full flex items-center justify-center  rounded-lg py-2 mb-4 space-x-2 disabled:opacity-50 signInbut"
            onClick={() => signIn("google")}
          >
            <Image src={GoogleLogo} height={20} width={20} alt="Google logo" />
            <span>Sign in with Google</span>
          </button>
        </div>

        <p className="text-center">
          Dont have an account? <Link href="/sign-up">Sign up</Link>
        </p>
        <p className="text-center mt-2">
          <Link href="/forgot-password">Forgot Password?</Link>
        </p>
      </div>
    </form>
  );
};

export default SigninForm;
