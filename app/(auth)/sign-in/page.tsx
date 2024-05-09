import React from 'react'
import Image from 'next/image'
import Login_girl_image from '../../../public/images/login-page-girl.png'
import SigninForm from './_components/SigninForm';
interface SignInPageProps {
  searchParams: {
    callbackUrl: string
  }
}
const SignInPage = ({ searchParams }: SignInPageProps) => {
  return (
    <section className=' py-4 mt-[120px]'>
      <div className='flex px-[250px] justify-between'>
        <div>
        <Image 
          src={Login_girl_image}
          height={500}
          width={500}
          alt = {'girl-image'}
        />
        </div>
        <div className='min-w-[500px] pl-12'>
        <div className='text-[40px] font-semibold pb-[40px]'>Sign In</div>
      <SigninForm
        callbackUrl={searchParams.callbackUrl}
      />
      </div>
      </div>
      
    </section>)
}

export default SignInPage