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
                // signOut()
                toast.success(data.message)
              }).catch((err) => {
                throw err
              })
          })
    }

  return (
    <div className='z-[200px] fixed inset-0 flex justify-center items-center bg-black bg-opacity-50'>
        <div className='max-w-[725px] shadow bg-white z-[200px]'>
            <form onSubmit={handleSubmit(onSubmit)}>
            <div className='flex justify-between items-center border-b-[6px] border-[#D9D9D9] py-4 px-6 '>
                
                <h1 className='text-[30px] font-semibold '>Summary </h1>
                <button className=' px-4' type='button' onClick={handleShowForm}> 
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 19L19 1M1 1L19 19" stroke="#636363" stroke-width="1.5" stroke-linecap="round"/>
                        </svg>
                </button>
            </div>
            <div className='mb-4 px-6 pt-2'>
                <p className=''>Tell us about your years of experience, industry, or skills. People also talk about their achievements or previous job experiences.</p>
                <textarea className='w-full h-[150px] border-[1px] border-[#837E7E] mt-4 rounded-sm p-4' placeholder='Write here...'  {...register('summary')}></textarea>
                {errors.summary && <p className='text-red-500'>{errors.summary.message }</p>}
                <p className='text-right'>0/2000</p>
            </div>
            <div className='text-right px-10 py-4 bg-[#E3DDDD]'>
            <button className='signInbut min-w-[90px] font-semibold mx-auto' type="submit" disabled={isPending}>Save</button>
            </div>
            </form>
        </div>
    </div>
  )
}

export default SummaryForm