import React from 'react'
import { userSchema , userSchemaProps } from '@/schema/user';
import { zodResolver } from '@hookform/resolvers/zod';
import {toast } from 'react-toastify';
import { updateUser } from '@/actions/user';
import { useTransition } from "react"
import { useForm } from 'react-hook-form';


interface Props {
    handleShowForm: () => void;
    email : string;
    id : string ;
    summary?: string | null;
  }



const SummaryForm: React.FC<Props> =  ({
    handleShowForm,
    email,
    id,
    summary = '',

}) =>{
    const [isPending, startTransition] = useTransition();
    const {register, handleSubmit, formState: { errors } } = useForm<userSchemaProps>({
        resolver: zodResolver(userSchema),
        defaultValues: {
            id: id,
            email: email,
            summary: summary || '',
        }   
        
    });

    const onSubmit = (data: userSchemaProps) => {
        console.log(data)
        startTransition(() => {
            updateUser(id, data)
              .then((data) => {
                if (data.error) return toast.error(data.error)
                toast.success("Profile successfully updated , changes might take a few minutes to reflect back")
                handleShowForm()              
              }).catch((err) => {
                throw err
              })
          })
    }

  return (
    <div className='z-[200] fixed inset-0 flex justify-center items-center bg-black bg-opacity-50'>
    <div className='max-w-[725px] w-full bg-white dark:bg-gray-800 shadow-md rounded-lg'>
      <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col'>
        <div className='flex justify-between items-center border-b-2 border-gray-300 dark:border-gray-700 py-4 px-6'>
          <h1 className='text-2xl font-semibold text-gray-900 dark:text-white'>Summary</h1>
          <button className='p-2' type='button' onClick={handleShowForm}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 19L19 1M1 1L19 19" stroke="#636363" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </button>
        </div>
        <div className='mb-4 px-6 pt-2'>
          <p className='text-gray-700 dark:text-white'>
            Tell us about your years of experience, industry, or skills. People also talk about their achievements or previous job experiences.
          </p>
          <textarea
            className='w-full h-[150px] border border-gray-300 dark:border-gray-600 mt-4 rounded-sm p-4 bg-white dark:bg-gray-700 text-gray-900 dark:text-white'
            placeholder='Write here...'
            {...register('summary')}
          ></textarea>
          {errors.summary && <p className='text-red-500'>{errors.summary.message}</p>}
        </div>
        <div className='text-right px-6 py-4 bg-gray-200 dark:bg-gray-700'>
          <button
            className='bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 disabled:bg-gray-400 signInbut'
            type="submit"
            disabled={isPending}
          >
            Save
          </button>
        </div>
      </form>
    </div>
  </div>
  )
}

export default SummaryForm