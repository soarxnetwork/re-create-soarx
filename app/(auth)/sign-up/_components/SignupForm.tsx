/* eslint-disable react-hooks/exhaustive-deps */
"use client"
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import React, { useEffect, useState, useTransition } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import validator from 'validator'
import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from 'react-toastify'
import { registerUser } from '@/actions/user'
import { User } from '@prisma/client'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import GoogleLogo from '../../../../public/images/google-logo.png';
import { signIn } from "next-auth/react";

export const signUpSchema = z.object({
  username: z.string().min(3, {
    message: "Username must be at least 3 characters long"
  }),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters long"
  }),
  confirmPassword: z.string().min(8),
  phone: z.string().refine(validator.isMobilePhone, "Invalid phone number"),
  email: z.string().email({
    message: "Invalid email"

  }),
  accept: z.boolean(),
}).refine(data => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"]
}).refine(data => data.accept === true, {
  message: "You must accept the terms and conditions",
  path: ["accept"]

})
export type signUpType = z.infer<typeof signUpSchema>
interface SignupFormProps {
  users: User[]
}
const SignupForm = (
  { users }: SignupFormProps
) => {
  const router = useRouter()
  const [isPending, startTransition] = useTransition()
  const [isVisiblePassword, setIsVisiblePassword] = useState(false)
  const [isVisibleConfirmPassword, setIsVisibleConfirmPassword] = useState(false)

  const { watch, register, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      username: '',
      password: '',
      confirmPassword: '',
      phone: '',
      accept: false,
      email: '',
    }
  })
  const { email } = watch()

  const onSubmit = (data: signUpType) => {
    startTransition(() => {
      registerUser(data)
        .then((data) => {
          const emailExist = users.find(user => user.email === email)
          if (emailExist) return toast.error('Email already exists')
          if (data?.error) return toast.error(data?.error)

          toast.success('Please check your email to activate your account')
          router.push('/sign-in')
          reset()
        })
        .catch((err) => {
          toast.error(err.message)
          throw err
        })
    })
  }



  return (
    <form className='max-w-xl  min-h-screen'
      onSubmit={handleSubmit(onSubmit)}
    >
      <div
      >
        <div>
          
          <input
            placeholder='Full Name'
            type='text'
            {...register('username')}
            className="border-2 placeholder:text-[#5F5F5F] rounded-lg py-2 px-4 mb-[25px]"
          />
          {
            errors.username && <p className='text-red-500'>{errors.username.message}</p>
          }
          <input
            placeholder='Your Email'
            type='text'
            {...register('email')}
            className="border-2 placeholder:text-[#5F5F5F] rounded-lg py-2 px-4 mb-[25px]"
          />
          {
            errors.email && <p className='text-red-500'>{errors.email.message}</p>
          }

          <div className="flex items-center relative">
            <input
              placeholder='Your Password'
              className="border-2 placeholder:text-[#5F5F5F] rounded-lg py-2 px-4 mb-[25px]"
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
                absolute h-4 w-4 right-4 top-4
                '
            >
              {
                isVisibleConfirmPassword
                  ? <EyeIcon />
                  : <EyeSlashIcon />

              }
            </button>

          </div>
          {
            errors.password && <p className='text-red-500'>{errors.password.message}</p>
          }
          <div className="flex items-center relative">
            <input
              placeholder='Confirm Password'
              className="border-2 placeholder:text-[#5F5F5F] rounded-lg py-2 px-4 mb-[25px]"
              type={
                isVisibleConfirmPassword
                  ? 'text'
                  : 'password'
              }
              {...register('confirmPassword')}
            />

            <button
              type='button'
              onClick={() => setIsVisibleConfirmPassword(!isVisibleConfirmPassword)}
              className='
                absolute w-4 h-4 right-4 top-4
                '
            >
              {
                isVisibleConfirmPassword
                  ? <EyeIcon />
                  : <EyeSlashIcon />

              }
            </button>

          </div>
          {
            errors.confirmPassword && <p className='text-red-500'>{errors.confirmPassword.message}</p>
          }
          <input
            placeholder='Phone Number'
            className="border-2 placeholder:text-[#5F5F5F] rounded-lg py-2 px-4 mb-[25px]"
            {...register('phone')}
            type='text'
          />
          {
            errors.phone && <p className='text-red-500'>{errors.phone.message}</p>
          }
          <div className="flex items-center  ">
           <Link href={'/terms'} className='flex-1'> <label htmlFor="accept" >
              Terms & Conditions
            </label>
            </Link>
            <input
              type="checkbox"
              id="accept"
              {...register('accept')}
              className='flex-1'
            />
            {
              errors.accept && <p className='text-red-500'>{errors.accept.message}</p>
            }
          </div>
          <button type='submit'
           className='signInbut w-full mt-[20px]'
            disabled={isPending}
          >
            {
              isPending
                ? 'Signing up...'
                : 'Submit'
            }
          </button>
          <div className="relative ">
                <div className="border-b-2 min-w-[215px] mt-[12px] absolute">

                </div>
                <div className="absolute ml-[220px]">
                  or
                </div>
                <div className="border-b-2 absolute min-w-[210px] mt-[12px] ml-[240px]">

                </div>
            </div>
            <button type="button" disabled={isPending}
              className="signInbut flex items-center justify-center space-x-4 mt-[25px] w-full"
              onClick={() => signIn("google")}
            >
              <Image  
              src={GoogleLogo}
              height={20}
              width={20}
              alt="google-image"
              />
              <div>Sign in with Google</div>
            </button>
          <p className='mt-[20px]'>
            Already have an account?
            <Link href="/sign-in" className='underline'>
              &nbsp;Sign in
            </Link>
          </p>
        </div>
      </div>
    </form>
  )
}

export default SignupForm