import type { Metadata } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/next-auth";
import { redirect } from "next/navigation";
import Header from "@/components/Header";


export const metadata: Metadata = {
  title: "SoarX",
  description: "SoarX",
};

export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions)
  if (session?.user) return redirect('/')
  return (
    <div >
      <Header {...session?.user!}/>
      {children}
    </div>
  );
}
