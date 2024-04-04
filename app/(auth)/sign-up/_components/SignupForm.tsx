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
          <p>
            Already have an account?
            <Link href="/sign-in">
              Sign in
            </Link>
          </p>
          <input
            placeholder='username'
            type='text'
            {...register('username')}
          />
          {
            errors.username && <p className='text-red-500'>{errors.username.message}</p>
          }
          <input
            placeholder='email'
            type='text'
            {...register('email')}
          />
          {
            errors.email && <p className='text-red-500'>{errors.email.message}</p>
          }

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
              placeholder='confirm password'
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
                absolute w-4 h-4 right-0
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
            placeholder='phone'
            {...register('phone')}
            type='text'
          />
          {
            errors.phone && <p className='text-red-500'>{errors.phone.message}</p>
          }
          <div className="flex items-center gap-2">
            <label htmlFor="accept">
              <span>Accept</span>
            </label>
            <input
              type="checkbox"
              id="accept"
              {...register('accept')}
            />
            {
              errors.accept && <p className='text-red-500'>{errors.accept.message}</p>
            }
          </div>
          <button type='submit'
            disabled={isPending}
          >
            {
              isPending
                ? 'Signing up...'
                : 'Sign up'
            }
          </button>

        </div>
      </div>
    </form>
  )
}

export default SignupForm