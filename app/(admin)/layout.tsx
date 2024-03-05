import { getCurrentUser } from "@/services/user";
import { AdminContainer } from "./_components/AdminContainer";

interface LayoutAdminProps {
  children: React.ReactNode;
}

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
