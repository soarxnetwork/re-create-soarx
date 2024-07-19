"use client"
import React, {useEffect, useState} from 'react';
import SummaryForm from './_sub_components/SummaryForm';
import { useSession } from "next-auth/react";
import { fetchUser } from '@/actions/user';
import { FaPenToSquare } from "react-icons/fa6";


function ProfileSummary() {
    const [showForm, setShowForm] = useState(false);
    const {data: session} = useSession();
    const [User, SetUser] = useState<any>(null)
    function handleShowForm(){
        setShowForm(!showForm);
    }
    useEffect(() =>{
        async function gettingTheUser(){
        const User = await fetchUser(session?.user.id!)
        SetUser(User);
        }
        gettingTheUser();
        


    } , [User])
    
  return (
    <section className="shadow-lg pb-4 px-4 lg:pl-4 lg:pr-4 mx-4">
    <div className="border-b-2 border-gray-600 flex py-4 pr-5 justify-between items-center">
      <h3 className="text-[25px] font-semibold ">Summary</h3>
      <button className="text-purple-500 text-xl" onClick={handleShowForm}>
      <FaPenToSquare/>
      </button>
    </div>
  
    <div>
      {User?.summary ? (
        <div className="min-h-[200px] p-4 text-center">
          {User.summary}
        </div>
      ) : (
        <div className="flex items-center justify-center">
          <div className="space-y-6 py-12">
            <svg
              width="40"
              height="38"
              viewBox="0 0 40 38"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mx-auto"
            >
              <path
                d="M23 14.0938C23 13.2826 22.3284 12.625 21.5 12.625H9.5C8.67157 12.625 8 13.2826 8 14.0938C8 14.9049 8.67157 15.5625 9.5 15.5625H21.5C22.3284 15.5625 23 14.9049 23 14.0938Z"
                fill="#8D00FF"
              />
              <path
                d="M21 19.9688C21 19.1576 20.3284 18.5 19.5 18.5H9.5C8.67157 18.5 8 19.1576 8 19.9688C8 20.7799 8.67157 21.4375 9.5 21.4375H19.5C20.3284 21.4375 21 20.7799 21 19.9688Z"
                fill="#8D00FF"
              />
              <path
                d="M21.5 24.375C22.3284 24.375 23 25.0326 23 25.8438C23 26.6549 22.3284 27.3125 21.5 27.3125H9.5C8.67157 27.3125 8 26.6549 8 25.8438C8 25.0326 8.67157 24.375 9.5 24.375H21.5Z"
                fill="#8D00FF"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8 37.5938H34C37.0376 37.5938 39.5 35.1827 39.5 32.2084V21.4375C39.5 20.6264 38.8284 19.9688 38 19.9688H31.5V4.68045C31.5 1.89295 28.2822 0.271518 25.9657 1.89172L25.6156 2.13657C24.0546 3.22833 21.9402 3.22466 20.3719 2.12778C17.7641 0.303923 14.2359 0.303923 11.6281 2.12778C10.0598 3.22466 7.94541 3.22833 6.38443 2.13657L6.03433 1.89172C3.71779 0.271518 0.5 1.89295 0.5 4.68045V30.25C0.5 34.3059 3.85786 37.5938 8 37.5938ZM13.3719 4.51812C14.9365 3.42381 17.0635 3.42381 18.6281 4.51812C21.2322 6.33942 24.7479 6.35334 27.3593 4.52692L27.7094 4.28206C28.0403 4.0506 28.5 4.28224 28.5 4.68045V32.2084C28.5 33.0898 28.7163 33.9218 29.0997 34.6563H8C5.51472 34.6563 3.5 32.6835 3.5 30.25V4.68045C3.5 4.28224 3.95969 4.0506 4.29062 4.28206L4.64071 4.52692C7.2521 6.35334 10.7678 6.33942 13.3719 4.51812ZM31.5 32.2084V22.9063H36.5V32.2084C36.5 33.5603 35.3807 34.6563 34 34.6563C32.6193 34.6563 31.5 33.5603 31.5 32.2084Z"
                fill="#8D00FF"
              />
            </svg>
            <p className="max-w-[570px] text-center">
              Tell us about your years of experience, industry, or skills. People
              also talk about their achievements or previous job experiences.
            </p>
            <div className="flex justify-center items-center">
              <button
                className="signInbut min-w-[180px] font-semibold mx-auto"
                onClick={handleShowForm}
              >
                Add Summary
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  
    {showForm && (
      <SummaryForm
        email={session?.user.email!}
        id={session?.user.id!}
        summary={session?.user.summary}
        handleShowForm={handleShowForm}
      />
    )}
  </section>
  
  )
}

export default ProfileSummary