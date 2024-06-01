import React from 'react';
import SignupForm from './_components/SignupForm';
import { getAllUser } from '@/services/user';
import Image from 'next/image';
import Login_girl_image from '../../../public/images/login-page-girl.png';

const SignUpPage = async () => {
  const users = await getAllUser();

  return (
    <section className="py-4 mt-[100px] px-5 md:px-20">
      <div className="lg:flex lg:flex-row lg:w-full gap-y-7">
        <div className="flex justify-center lg:w-1/2">
          <Image
            src={Login_girl_image}
            height={550}
            width={550}
            alt="girl-image"
            className="object-contain"
          />
        </div>
        <div className="w-full lg:w-1/2 lg:pl-12 mt-8 lg:mt-0">
          <div className="text-[32px] md:text-[40px] font-semibold pb-8 lg:pb-[40px] text-center lg:text-left">Sign Up</div>
          <SignupForm users={users!} />
        </div>
      </div>
    </section>
  );
};

export default SignUpPage;
