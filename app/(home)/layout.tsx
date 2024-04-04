import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { getServerSession } from "next-auth";
import React from "react";
import { authOptions } from "../api/auth/[...nextauth]/route";

interface HomeLayoutProps {
  children: React.ReactNode;
}

const HomeLayout = async ({ children }: HomeLayoutProps) => {
  const session = await getServerSession(authOptions);
  return (
    <>
      <Header {...session?.user!} />
      <main className="">{children}</main>
      <Footer />
    </>
  );
};

export default HomeLayout;
