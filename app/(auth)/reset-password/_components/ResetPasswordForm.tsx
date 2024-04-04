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
import { registerUser, resetPassword } from '@/actions/user'
import { User } from '@prisma/client'
import { useRouter } from 'next/navigation'
export const resetPasswordSchema = z.object({

  password: z.string().min(8, {
    message: "Password must be at least 8 characters long"
  }),
  confirmPassword: z.string().min(8),

}).refine(data => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"]
})
export type resetPasswordType = z.infer<typeof resetPasswordSchema>
interface ResetPasswordFormProps {
  id: string
}
const ResetPasswordForm = (
  { id }: ResetPasswordFormProps
) => {
  const router = useRouter()
  const [isPending, startTransition] = useTransition()
  const [isVisiblePassword, setIsVisiblePassword] = useState(false)
  const [isVisibleConfirmPassword, setIsVisibleConfirmPassword] = useState(false)

  const { watch, register, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: {
      password: '',
      confirmPassword: '',
    }
  })

  const onSubmit = (data: resetPasswordType) => {
    startTransition(() => {
      resetPassword(data, id)
        .then((data) => {
          if (data?.error) {
            return toast.error(data.error)
          }
          toast.success('Password reset successfully')
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

          <button type='submit'
            disabled={isPending}
          >
            {
              isPending
                ? 'Resetting...'
                : 'Reset Password'
            }
          </button>

        </div>
      </div>
    </form>
  )
}

export default ResetPasswordForm