import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { getCurrentUser } from "@/services/user";
import React from "react";

interface HomeLayoutProps {
  children: React.ReactNode;
}

const HomeLayout = async ({ children }: HomeLayoutProps) => {
  const user = await getCurrentUser();
  return (
    <>
      <div className="px-20">
      <Header {...user!} />
      <main className="">{children}</main>
      </div>
      <Footer />
   
    </>
  );
};

export default HomeLayout;
