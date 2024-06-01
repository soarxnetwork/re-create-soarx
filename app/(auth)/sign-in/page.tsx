import React from "react";
import Image from "next/image";
import Login_girl_image from "../../../public/images/login-page-girl.png";
import SigninForm from "./_components/SigninForm";

interface SignInPageProps {
  searchParams: {
    callbackUrl: string;
  };
}

const SignInPage = ({ searchParams }: SignInPageProps) => {
  return (
    <section className="py-4 mt-[120px] px-5 md:px-20">
      <div className="lg:flex lg:flex-row lg:w-full gap-y-7">
        <div className="flex justify-center lg:w-1/2 lg:pb-36">
          <Image
            src={Login_girl_image}
            height={500}
            width={500}
            alt="girl-image"
            className="object-contain"
          />
        </div>
        <div className="flex flex-col  items-center lg:w-1/2  p-5 md:p-10">
          <div className="text-[40px] font-semibold">Sign In</div>
          <SigninForm callbackUrl={searchParams.callbackUrl} />
        </div>
      </div>
    </section>
  );
};

export default SignInPage;
