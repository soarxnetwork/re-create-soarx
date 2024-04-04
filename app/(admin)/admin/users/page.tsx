import { getAllUser } from "@/services/user";
import React from "react";
import AdminPermission from "./_components/AdminPermission";
import { Metadata } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/next-auth";

export const metadata: Metadata = {
  title: "Users",
  description: "Users Page",
};

const AdminUsersPage = async () => {
  const users = await getAllUser();
  const session = await getServerSession(authOptions);
  return <AdminPermission users={users!} {...session?.user!} />;
};

export default AdminUsersPage;
