import React from 'react'
import {toast} from 'react-toastify' ;
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { portfolioSchema, portfolioSchemaProps } from '@/schema/portfolio';
import { createUserPortfolio , fetchUserPortfolio, updateUserPortfolio } from '@/actions/portfolio';
import { useTransition } from 'react';

interface Props {
  handleShowForm: () => void;
  userId: string;
  WebsiteUrl?: string | null;
  GithubUrl?: string | null;
  LinkedInUrl?: string | null;

}


function PortfolioForm({
  handleShowForm,
  userId,
  WebsiteUrl = '',
  GithubUrl = '',
  LinkedInUrl = '',
}: Props
){

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(portfolioSchema),
    defaultValues: {
      userId,
      WebsiteUrl,
      GithubUrl,
      LinkedInUrl,
    }
  });
  const [isPending, startTransition] = useTransition();

  const onSubmit = async (data: portfolioSchemaProps) => {
    startTransition(() => {
      
        updateUserPortfolio(userId , data)
        .then(() => {
          toast.success('Portfolio updated successfully');
          handleShowForm();
        })
        .catch((err) => {
          createUserPortfolio(data)
        .then(() => {
          toast.success('Portfolio created successfully');
          handleShowForm();
        })
        .catch((err) => {
          toast.error('Failed to create Portfolio');
          throw err;
        });
        });
    });
  }

  return (
    <div className='z-[200] fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 overflow-auto'>
    <div className=" max-h-[80vh] fixed top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/4 max-w-[700px] w-full shadow bg-white z-[200] overflow-y-auto">
        <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex justify-between items-center py-4 px-6 border-b-[6px] border-[#D9D9D9]">
        <h1 className="text-[30px] font-semibold">Portfolio</h1>
        <button className="" onClick={handleShowForm}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 19L19 1M1 1L19 19" stroke="#636363" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
        </button>
        </div>

        <div className='my-10 space-y-6'>
            <div className='grid grid-cols-2 px-4 gap-4'>
                <div className='flex space-x-4 items-center'>
                <svg width="25" height="27" viewBox="0 0 25 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.94796 6.56246C5.94796 2.94384 8.88142 0.010376 12.5 0.010376C16.1187 0.010376 19.0521 2.94384 19.0521 6.56246C19.0521 10.1811 16.1187 13.1145 12.5 13.1145C8.88142 13.1145 5.94796 10.1811 5.94796 6.56246ZM12.5 2.32288C10.1586 2.32288 8.26046 4.221 8.26046 6.56246C8.26046 8.90392 10.1586 10.802 12.5 10.802C14.8415 10.802 16.7396 8.90392 16.7396 6.56246C16.7396 4.221 14.8415 2.32288 12.5 2.32288Z" fill="black"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M6.33337 17.7395C4.41764 17.7395 2.86462 19.2926 2.86462 21.2083V23.0402C2.86462 23.0681 2.88484 23.0919 2.91237 23.0964C9.26212 24.1331 15.738 24.1331 22.0877 23.0964C22.1152 23.0919 22.1355 23.0681 22.1355 23.0402V21.2083C22.1355 19.2926 20.5824 17.7395 18.6667 17.7395H18.1412C18.1006 17.7395 18.0602 17.746 18.0216 17.7586L16.6872 18.1943C13.9665 19.0827 11.0336 19.0827 8.31285 18.1943L6.97851 17.7586C6.93989 17.746 6.89951 17.7395 6.85888 17.7395H6.33337ZM0.552124 21.2083C0.552124 18.0154 3.14048 15.427 6.33337 15.427H6.85888C7.14331 15.427 7.42594 15.472 7.69632 15.5603L9.03065 15.996C11.285 16.7321 13.7151 16.7321 15.9694 15.996L17.3038 15.5603C17.5741 15.472 17.8568 15.427 18.1412 15.427H18.6667C21.8596 15.427 24.448 18.0154 24.448 21.2083V23.0402C24.448 24.2015 23.6064 25.1916 22.4603 25.3787C15.8638 26.4557 9.13628 26.4557 2.53975 25.3787C1.39369 25.1916 0.552124 24.2015 0.552124 23.0402V21.2083Z" fill="black"/>
                </svg>
               <div className='text-[30px]'> Website URL</div>
                </div>
                <input type="text" className='border-gray-500 border-1 ' {...register("WebsiteUrl")}/>
            </div>

            <div className='grid grid-cols-2 px-4 gap-4'>
                <div className='flex space-x-4 items-center'>
                <svg width="25" height="27" viewBox="0 0 25 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.94796 6.56246C5.94796 2.94384 8.88142 0.010376 12.5 0.010376C16.1187 0.010376 19.0521 2.94384 19.0521 6.56246C19.0521 10.1811 16.1187 13.1145 12.5 13.1145C8.88142 13.1145 5.94796 10.1811 5.94796 6.56246ZM12.5 2.32288C10.1586 2.32288 8.26046 4.221 8.26046 6.56246C8.26046 8.90392 10.1586 10.802 12.5 10.802C14.8415 10.802 16.7396 8.90392 16.7396 6.56246C16.7396 4.221 14.8415 2.32288 12.5 2.32288Z" fill="black"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M6.33337 17.7395C4.41764 17.7395 2.86462 19.2926 2.86462 21.2083V23.0402C2.86462 23.0681 2.88484 23.0919 2.91237 23.0964C9.26212 24.1331 15.738 24.1331 22.0877 23.0964C22.1152 23.0919 22.1355 23.0681 22.1355 23.0402V21.2083C22.1355 19.2926 20.5824 17.7395 18.6667 17.7395H18.1412C18.1006 17.7395 18.0602 17.746 18.0216 17.7586L16.6872 18.1943C13.9665 19.0827 11.0336 19.0827 8.31285 18.1943L6.97851 17.7586C6.93989 17.746 6.89951 17.7395 6.85888 17.7395H6.33337ZM0.552124 21.2083C0.552124 18.0154 3.14048 15.427 6.33337 15.427H6.85888C7.14331 15.427 7.42594 15.472 7.69632 15.5603L9.03065 15.996C11.285 16.7321 13.7151 16.7321 15.9694 15.996L17.3038 15.5603C17.5741 15.472 17.8568 15.427 18.1412 15.427H18.6667C21.8596 15.427 24.448 18.0154 24.448 21.2083V23.0402C24.448 24.2015 23.6064 25.1916 22.4603 25.3787C15.8638 26.4557 9.13628 26.4557 2.53975 25.3787C1.39369 25.1916 0.552124 24.2015 0.552124 23.0402V21.2083Z" fill="black"/>
                </svg>
               <div className='text-[30px]'> Linkedln Profile URL</div>
                </div>
                <input type="text" className='border-gray-500 border-1 ' {...register("LinkedInUrl")} />
            </div>

            <div className='grid grid-cols-2 px-4 gap-4'>
                <div className='flex space-x-4 items-center'>
                <svg width="25" height="27" viewBox="0 0 25 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.94796 6.56246C5.94796 2.94384 8.88142 0.010376 12.5 0.010376C16.1187 0.010376 19.0521 2.94384 19.0521 6.56246C19.0521 10.1811 16.1187 13.1145 12.5 13.1145C8.88142 13.1145 5.94796 10.1811 5.94796 6.56246ZM12.5 2.32288C10.1586 2.32288 8.26046 4.221 8.26046 6.56246C8.26046 8.90392 10.1586 10.802 12.5 10.802C14.8415 10.802 16.7396 8.90392 16.7396 6.56246C16.7396 4.221 14.8415 2.32288 12.5 2.32288Z" fill="black"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M6.33337 17.7395C4.41764 17.7395 2.86462 19.2926 2.86462 21.2083V23.0402C2.86462 23.0681 2.88484 23.0919 2.91237 23.0964C9.26212 24.1331 15.738 24.1331 22.0877 23.0964C22.1152 23.0919 22.1355 23.0681 22.1355 23.0402V21.2083C22.1355 19.2926 20.5824 17.7395 18.6667 17.7395H18.1412C18.1006 17.7395 18.0602 17.746 18.0216 17.7586L16.6872 18.1943C13.9665 19.0827 11.0336 19.0827 8.31285 18.1943L6.97851 17.7586C6.93989 17.746 6.89951 17.7395 6.85888 17.7395H6.33337ZM0.552124 21.2083C0.552124 18.0154 3.14048 15.427 6.33337 15.427H6.85888C7.14331 15.427 7.42594 15.472 7.69632 15.5603L9.03065 15.996C11.285 16.7321 13.7151 16.7321 15.9694 15.996L17.3038 15.5603C17.5741 15.472 17.8568 15.427 18.1412 15.427H18.6667C21.8596 15.427 24.448 18.0154 24.448 21.2083V23.0402C24.448 24.2015 23.6064 25.1916 22.4603 25.3787C15.8638 26.4557 9.13628 26.4557 2.53975 25.3787C1.39369 25.1916 0.552124 24.2015 0.552124 23.0402V21.2083Z" fill="black"/>
                </svg>
               <div className='text-[30px]'> Github URL</div>
                </div>
                <input type="text" className='border-gray-500 border-1 ' {...register("GithubUrl")}/>
            </div>


        </div>
        <div className="text-right px-6 py-4 bg-[#E3DDDD]">
          <button className="signInbut min-w-[90px] font-semibold mx-auto" type='submit' disabled={isPending}>Save</button>
        </div>
        </form>
        </div>
    </div>
  )
}

export default PortfolioForm