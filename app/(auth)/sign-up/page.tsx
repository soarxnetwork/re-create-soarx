import React from 'react'
import SignupForm from './_components/SignupForm'
import { getAllUser } from '@/services/user'
import Image from 'next/image';
import Login_girl_image from '../../../public/images/login-page-girl.png'

const SignUpPage = async () => {

  const users = await getAllUser()

  return (
    <section className=' py-4 mt-[100px]'>
    <div className='flex px-[250px] justify-between'>
      <div>
      <Image 
        src={Login_girl_image}
        height={550}
        width={550}
        alt = {'girl-image'}
      />
      </div>
      <div className='min-w-[500px] pl-12'>
      <div className='text-[40px] font-semibold pb-[40px]'>Sign Up</div>
    <SignupForm
      users={users!}
    />
    </div>
    </div>
    
  </section>
  )
}

export default SignUpPage