"use client"
import React, {useEffect, useState} from 'react';
import SummaryForm from './_sub_components/SummaryForm';
import { useSession } from "next-auth/react";


function ProfileSummary() {
    const [showForm, setShowForm] = useState(false);
    const {data: session} = useSession();

    function handleShowForm(){
        setShowForm(!showForm);
    }
    
  return (
    <section className='shadow-lg pb-4'>
        <div className='border-b-3 border-[#D9D9D9] flex py-4 px-4 justify-between  '>
            <h3 className='text-[30px]  font-semibold'>Summary</h3>
            <button className='' onClick={handleShowForm}>
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.39788 18C7.39788 17.1218 8.11095 16.4099 8.99056 16.4099H16.4074V9.00504C16.4074 8.12685 17.1204 7.41495 18 7.41495C18.8796 7.41495 19.5927 8.12685 19.5927 9.00504V16.4099H27.0096C27.8892 16.4099 28.6023 17.1218 28.6023 18C28.6023 18.8782 27.8892 19.5901 27.0096 19.5901H19.5927V26.9949C19.5927 27.8731 18.8796 28.585 18 28.585C17.1204 28.585 16.4074 27.8731 16.4074 26.9949V19.5901H8.99056C8.11095 19.5901 7.39788 18.8782 7.39788 18Z" fill="#8D00FF"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.0548 0.548709C14.6114 -0.182903 21.3886 -0.182903 27.9452 0.548709C31.8236 0.98148 34.9557 4.03159 35.4119 7.92618C36.196 14.6193 36.196 21.3807 35.4119 28.0738C34.9557 31.9684 31.8236 35.0185 27.9452 35.4513C21.3886 36.1829 14.6114 36.1829 8.0548 35.4513C4.17636 35.0185 1.04431 31.9684 0.588065 28.0738C-0.196022 21.3807 -0.196021 14.6193 0.588065 7.92618C1.04431 4.03158 4.17636 0.98148 8.0548 0.548709ZM27.5914 3.70922C21.2699 3.00385 14.7301 3.00385 8.40861 3.70922C5.97833 3.9804 4.03303 5.8954 3.75185 8.29561C2.99652 14.7432 2.99652 21.2568 3.75185 27.7044C4.03303 30.1046 5.97833 32.0196 8.40861 32.2908C14.7301 32.9962 21.2699 32.9962 27.5914 32.2908C30.0217 32.0196 31.967 30.1046 32.2482 27.7044C33.0035 21.2568 33.0035 14.7432 32.2482 8.29561C31.967 5.8954 30.0217 3.9804 27.5914 3.70922Z" fill="#8D00FF"/>
                </svg>

            </button>
        </div>

        <div>
       { session?.user.summary ?( 
            <div className='min-h-[200px] p-4 text-center'>
                {session?.user.summary}
            </div>
            
            ):(
                <div className='flex items-center justify-center '>
               <div className=' space-y-6 py-12'>
                <svg width="40" height="38" viewBox="0 0 40 38" fill="none" xmlns="http://www.w3.org/2000/svg" className='mx-auto'>
                <path d="M23 14.0938C23 13.2826 22.3284 12.625 21.5 12.625H9.5C8.67157 12.625 8 13.2826 8 14.0938C8 14.9049 8.67157 15.5625 9.5 15.5625H21.5C22.3284 15.5625 23 14.9049 23 14.0938Z" fill="#8D00FF"/>
                <path d="M21 19.9688C21 19.1576 20.3284 18.5 19.5 18.5H9.5C8.67157 18.5 8 19.1576 8 19.9688C8 20.7799 8.67157 21.4375 9.5 21.4375H19.5C20.3284 21.4375 21 20.7799 21 19.9688Z" fill="#8D00FF"/>
                <path d="M21.5 24.375C22.3284 24.375 23 25.0326 23 25.8438C23 26.6549 22.3284 27.3125 21.5 27.3125H9.5C8.67157 27.3125 8 26.6549 8 25.8438C8 25.0326 8.67157 24.375 9.5 24.375H21.5Z" fill="#8D00FF"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M8 37.5938H34C37.0376 37.5938 39.5 35.1827 39.5 32.2084V21.4375C39.5 20.6264 38.8284 19.9688 38 19.9688H31.5V4.68045C31.5 1.89295 28.2822 0.271518 25.9657 1.89172L25.6156 2.13657C24.0546 3.22833 21.9402 3.22466 20.3719 2.12778C17.7641 0.303923 14.2359 0.303923 11.6281 2.12778C10.0598 3.22466 7.94541 3.22833 6.38443 2.13657L6.03433 1.89172C3.71779 0.271518 0.5 1.89295 0.5 4.68045V30.25C0.5 34.3059 3.85786 37.5938 8 37.5938ZM13.3719 4.51812C14.9365 3.42381 17.0635 3.42381 18.6281 4.51812C21.2322 6.33942 24.7479 6.35334 27.3593 4.52692L27.7094 4.28206C28.0403 4.0506 28.5 4.28224 28.5 4.68045V32.2084C28.5 33.0898 28.7163 33.9218 29.0997 34.6563H8C5.51472 34.6563 3.5 32.6835 3.5 30.25V4.68045C3.5 4.28224 3.95969 4.0506 4.29062 4.28206L4.64071 4.52692C7.2521 6.35334 10.7678 6.33942 13.3719 4.51812ZM31.5 32.2084V22.9063H36.5V32.2084C36.5 33.5603 35.3807 34.6563 34 34.6563C32.6193 34.6563 31.5 33.5603 31.5 32.2084Z" fill="#8D00FF"/>
                </svg>
                <p className='max-w-[570px] text-center'>Tell us about your years of experience, industry, or skills. People also talk about their achievements or previous job experiences.</p>
                <div className='flex justify-center items-center'>
                    <button className='signInbut min-w-[180px] font-semibold mx-auto' onClick={handleShowForm}>Add Summary</button>
                </div>
                </div> 
            </div> 
            )}
            </div>
        
        {showForm && <SummaryForm
        email={session?.user.email!}
        id={session?.user.id!}
        summary={session?.user.summary}
        handleShowForm={handleShowForm}/>}
    </section>
  )
}

export default ProfileSummary