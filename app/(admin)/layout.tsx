import { getCurrentUser } from "@/services/user";
import { AdminContainer } from "./_components/AdminContainer";
import { Metadata } from "next";

interface LayoutAdminProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: "Admin",
  description: "Admin Page",
};

const LayoutAdmin = async ({ children }: LayoutAdminProps) => {
  const user = await getCurrentUser();

  return (
    // <AdminRoute>
    <div className="flex">
      <AdminContainer user={user!}>{children}</AdminContainer>
    </div>
  );
};

export default LayoutAdmin;
