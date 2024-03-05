import { getAllUser, getCurrentUser } from "@/services/user";
import React from "react";
import AdminPermission from "./_components/AdminPermission";

const AdminUsersPage = async () => {
  const users = await getAllUser();
  const currentUser = await getCurrentUser();
  return <AdminPermission users={users!} {...currentUser!} />;
};

export default AdminUsersPage;
