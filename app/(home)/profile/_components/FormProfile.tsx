"use client"

import validator from "validator"
import { z } from "zod"
import { useForm } from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod"
import { user } from "@nextui-org/react"
import { useTransition } from "react"
import { User } from "@prisma/client"
import Image from "next/image"
import { IoMdCloseCircleOutline } from "react-icons/io"
import ImageUpload from "@/app/(admin)/_components/ImageUpload"
import { cn } from "@/lib/utils"
import { updateUser } from "@/actions/user"
import { toast } from "react-toastify"
import { getProviders, signOut } from "next-auth/react"

export const userSchema = z.object({
  username: z.string().min(3, {
    message: "Username must be at least 3 characters long"
  }),
  email: z.string().email({
    message: "Invalid email",
  }),
  phone: z.string().refine(validator.isMobilePhone, "Invalid phone number"),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters long"
  }),
  confirmPassword: z.string().min(8),
  imageUrl: z.string(),
  name: z.string().min(3, {
    message: "Name must be at least 3 characters long"
  }),
  collegeName: z.string().min(3, {
    message: "College name must be at least 3 characters long"
  }),
  yearOfPassing: z.string(),
  city: z.string(),
  degree: z.string(),
  dob: z.string(),
  skill: z.string(),
  stream: z.string(),
}).refine(data => data.password === data.confirmPassword, {
  path: ["confirmPasssword"],
  message: "Passwords do not match"
})
interface FormProfileProps {
  id: string
  email: string
  username: string
  image: string
  phone: string | null;
  name: string | null;
  collegeName: string | null;
  yearOfPassing: string | null;
  city: string | null;
  degree: string | null;
  dob: string | null;
  stream: string | null;
  skill: string | null;
}

const FormProfile = (
  { email, username, image, phone, id
    , name, collegeName, yearOfPassing, city, degree, dob, stream, skill

  }: FormProfileProps
) => {


  const [isPending, startTransition] = useTransition()
  const { register, handleSubmit, formState: { errors }, setValue, watch } = useForm({
    resolver: zodResolver(userSchema),
    defaultValues: {
      email,
      username,
      imageUrl: image,
      phone: phone || '',
      password: '',
      confirmPassword: '',
      name: name || '',
      collegeName: collegeName || '',
      yearOfPassing: yearOfPassing || '',
      city: city || '',
      degree: degree || '',
      dob: dob || '',
      stream: stream || '',
      skill: skill || '',
    }
  })

  const onSubmit = (data: z.infer<typeof userSchema>) => {
    startTransition(() => {
      updateUser(id, data)
        .then((data) => {
          if (data.error) return toast.error(data.error)
          signOut()
          toast.success(data.message)
        }).catch((err) => {
          throw err
        })
    })
  }

  const imageUrl = watch("imageUrl")

  return (
    <form className='  min-h-screen'
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className='grid grid-cols-2 gap-6'>
        <div>
          <label className='block text-sm font-medium text-gray-700'>Username</label>
          <input
            type='text'
            {...register('username')}
            className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
          />
          {
            errors.username && <p className='text-red-500'>{errors.username.message}</p>
          }
        </div>
        <div>
          <label className='block text-sm font-medium text-gray-700'>Email</label>
          <input
            type='email'
            {...register('email')}
            className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
          />
          {
            errors.email && <p className='text-red-500'>{errors.email.message}</p>
          }
        </div>
        <div>
          <label className='block text-sm font-medium text-gray-700'>Phone</label>
          <input
            type='tel'
            {...register('phone')}
            className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
          />
          {
            errors.phone && <p className='text-red-500'>{errors.phone.message}</p>
          }
        </div>
        <div>
          <label className='block text-sm font-medium text-gray-700'>Password</label>
          <input
            type='password'
            {...register('password')}
            className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
          />
          {
            errors.password && <p className='text-red-500'>{errors.password.message}</p>
          }
        </div>
        <div>
          <label className='block text-sm font-medium text-gray-700'>Confirm Password</label>
          <input
            type='password'
            {...register('confirmPassword')}
            className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
          />
          {
            errors.confirmPassword && <p className='text-red-500'>{errors.confirmPassword.message}</p>
          }
        </div>

        <div>
          <label className='block text-sm font-medium text-gray-700'>Name</label>
          <input
            type='text'
            {...register('name')}
            className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
          />
          {
            errors.name && <p className='text-red-500'>{errors.name.message}</p>
          }
        </div>
        <div>
          <label className='block text-sm font-medium text-gray-700'>College Name</label>
          <input
            type='text'
            {...register('collegeName')}
            className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
          />
          {
            errors.collegeName && <p className='text-red-500'>{errors.collegeName.message}</p>
          }
        </div>
        <div>
          <label className='block text-sm font-medium text-gray-700'>Stream</label>
          <input
            type='text'
            {...register('stream')}
            className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
          />
          {
            errors.stream && <p className='text-red-500'>{errors.stream.message}</p>
          }
        </div>
        <div>
          <label className='block text-sm font-medium text-gray-700'>Year Of Passing</label>
          <input
            type='text'
            {...register('yearOfPassing')}
            className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
          />
          {
            errors.yearOfPassing && <p className='text-red-500'>{errors.yearOfPassing.message}</p>
          }
        </div>
        <div>
          <label className='block text-sm font-medium text-gray-700'>City</label>
          <input
            type='text'
            {...register('city')}
            className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
          />
          {
            errors.city && <p className='text-red-500'>{errors.city.message}</p>
          }
        </div>
        <div>
          <label className='block text-sm font-medium text-gray-700'>Degree</label>
          <input
            type='text'
            {...register('degree')}
            className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
          />
          {
            errors.degree && <p className='text-red-500'>{errors.degree.message}</p>
          }
        </div>
        <div>
          <label className='block text-sm font-medium text-gray-700'>Date Of Birth</label>
          <input
            type='date'
            {...register('dob')}
            className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
          />
          {
            errors.dob && <p className='text-red-500'>{errors.dob.message}</p>
          }
        </div>
        <div>
          <label className='block text-sm font-medium text-gray-700'>Skill</label>
          <input
            type='text'
            {...register('skill')}
            className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
          />
          {
            errors.skill && <p className='text-red-500'>{errors.skill.message}</p>
          }
        </div>
        <div className="flex w-full e-nfg  gap-5 col-span-2 justify-center">
          <div
            className={cn(" ", {
              "": !imageUrl,
            })}
          >
            {imageUrl !== "" ? (
              <div
                className="relative"
              >
                <Image
                  src={imageUrl}
                  alt="event image"
                  width={240}
                  height={240}
                  className="w-full rounded-md object-contain"
                />
                <button
                  onClick={() => setValue("imageUrl", "")}
                  className=" absolute right-4 top-4 hover:opacity-50 opacity-100 transition-all duration-300 ease-in-out"
                >
                  <IoMdCloseCircleOutline color="red" size={24} />
                </button>
              </div>
            ) : (
              <ImageUpload setImageUrl={setValue} />
            )}
            {errors.imageUrl && (
              <span className="text-sm text-red-500">
                {errors.imageUrl.message}
              </span>
            )}
          </div>
        </div>
        <div>
          <button
            type='submit'
            className='
                        mt-4
                        bg-indigo-600
                        border border-transparent
                        rounded-md
                        py-2
                        px-4
                        inline-flex
                        justify-center
                        text-sm
                        font-medium
                        text-white
                        hover:bg-indigo-700
                        focus:outline-none
                        focus:ring-2
                        focus:ring-offset-2
                        focus:ring-indigo-500
                        '
            disabled={isPending}
          >
            {isPending ? 'Updating...' : 'Update'}
          </button>
        </div>
      </div>
    </form>
  )
}

export default FormProfile