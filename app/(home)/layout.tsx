import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/next-auth";
import React from "react";
import '@/app/globals.css';

interface HomeLayoutProps {
  children: React.ReactNode;
}

const HomeLayout = async ({ children }: HomeLayoutProps) => {
  const session = await getServerSession(authOptions);
  return (
    <>
      <Header {...session?.user!} />
      <main className="">
        {/* Background circles */}
        <div className="absolute top-10 left-5 w-52 h-52 bg-[#e474ff] rounded-full max-sm:hidden opacity-30"></div>
        <div className="absolute top-20 right-5 w-64 h-64 bg-[#9000ff] rounded-full max-sm:hidden opacity-30 "></div>
        
        {children}
      </main>
      <Footer />
    </>
  );
};

export default HomeLayout;
