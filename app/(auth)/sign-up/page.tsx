import React from "react";
import SignupForm from "./_components/SignupForm";
import { getAllUser } from "@/services/user";
import Image from "next/image";
import Login_image from "../../../public/images/Programming-amico.png";

const SignUpPage = async () => {
  const users = await getAllUser();

  return (
    <section className="py-4 mt-[100px] px-5 md:px-20">
      <div className="lg:flex lg:flex-row lg:w-full gap-y-7 lg:px-[12%]">
        <div className="flex justify-center lg:w-1/2">
          <Image
            src={Login_image}
            height={550}
            width={550}
            alt="girl-image"
            className="object-contain"
          />
        </div>
        <div className="flex flex-col  items-center lg:w-1/2  p-5 md:p-10">
          <div className="text-[40px] font-semibold">Sign Up</div>
          <SignupForm users={users!} />
        </div>
      </div>
    </section>
  );
};

export default SignUpPage;
