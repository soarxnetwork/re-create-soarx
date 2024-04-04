/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React, { useEffect, useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import validator from "validator";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-toastify";
import { User } from "@prisma/client";
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

const SigninForm = ({
  callbackUrl
}: signinProps) => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);
  const [isVisiblePassword, setIsVisiblePassword] = useState(false);

  const {
    watch,
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
  })


  const onSubmit = (data: signinType) => {
    startTransition(() => {
      signIn("credentials", {
        // ! redirect false soalnya kalo true bakal nge refresh saat redirect, jadi pake router.push
        redirect: false,
        email: data.email,
        password: data.password,
      })
        .then((result) => {
          if (!result?.ok) {
            const unknownBehaviour = result?.error === "data and hash arguments required" ? "You have ur account with google, please sign in with google" : result?.error!
            toast.error(unknownBehaviour);
            return setError(unknownBehaviour);
          }
          router.push("/");
          toast.success(`Login successful`);
          reset();
        })
        .catch((err) => {
          console.error(err);
          throw err;
        }).finally(() => {
          setError(null);
        })
    });
  };

  return (
    <form className="max-w-xl  min-h-screen" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <div>
          <input placeholder="email" type="text" {...register("email")} />
          {errors.email && (
            <p className="text-red-500">{errors.email.message}</p>
          )}
          <div className="flex items-center relative">
            <input
              placeholder='password'
              type={
                isVisiblePassword
                  ? 'text'
                  : 'password'
              }
              {...register('password')}
            />
            <button
              type='button'
              onClick={() => setIsVisiblePassword(!isVisiblePassword)}
              className='
                absolute w-4 h-4 right-0
                '
            >
              {
                isVisiblePassword
                  ? <EyeIcon />
                  : <EyeSlashIcon />

              }
            </button>

          </div>
          <div className="flex flex-col gap-8items-start">
            <button type="submit" disabled={isPending}>
              {
                isPending
                  ? 'Loading...'
                  : 'Sign in'
              }
            </button>
            {error && <p className="text-red-500">{error}</p>}
            <button type="button" disabled={isPending}
              onClick={() => signIn("google")}
            >
              Sign in with Google
            </button>
          </div>
        </div>
        <p>
          Dont have an account?
          <Link href="/sign-up">Sign up</Link>
        </p>
        <Link href="/forgot-password">Forgot Password</Link>
      </div>
    </form>
  );
};

export default SigninForm;
