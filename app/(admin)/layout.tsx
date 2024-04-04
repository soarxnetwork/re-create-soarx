import { AdminContainer } from "./_components/AdminContainer";
import { Metadata } from "next";
import { getServerSession } from "next-auth";
import { notFound } from "next/navigation";
import { authOptions } from "@/lib/next-auth";

interface LayoutAdminProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: "Admin",
  description: "Admin Page",
};

const LayoutAdmin = async ({ children }: LayoutAdminProps) => {
  const session = await getServerSession(authOptions);

  if (session?.user.admin === "User" || !session) return notFound();

  return (
    // <AdminRoute>
    <div className="flex">
      <AdminContainer user={session.user!}>{children}</AdminContainer>
    </div>
  );
};

export default LayoutAdmin;
