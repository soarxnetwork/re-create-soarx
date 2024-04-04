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
import { forgotPassword } from "@/actions/user";

export const forgotPasswordSchema = z.object({

  email: z.string().email({
    message: "Invalid email",
  }),
});
export type forgotPasswordType = z.infer<typeof forgotPasswordSchema>;

interface forgotPasswordProps {
  callbackUrl?: string;

}

const ForgotPasswordForm = ({
  callbackUrl
}: forgotPasswordProps) => {
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
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: "",
    },
  })


  const onSubmit = (data: forgotPasswordType) => {
    startTransition(() => {
      forgotPassword(data.email)
        .then((data) => {
          if (data?.error) {
            setError(data.error);
            return toast.error(data.error);
          }
          toast.success("Reset password link sent to your email");
          reset()
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

          <button type="submit" disabled={isPending}>
            {
              isPending
                ? 'Loading...'
                : 'Sign in'
            }
          </button>
          {error && <p className="text-red-500">{error}</p>}
        </div>
        <p>
          Dont have an account?
          <Link href="/sign-up">Sign up</Link>
        </p>
        <p>
          Have an account?
          <Link href="/sign-in">Sign up</Link>
        </p>
      </div>
    </form>
  );
};

export default ForgotPasswordForm;
