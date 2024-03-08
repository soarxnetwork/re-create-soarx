import React from "react";
import AddEvent from "./_components/AddEvent";
import { getCurrentUser } from "@/services/user";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Add Event",
  description: "Add Event Page",
};

const AdminEventAdd = async () => {
  const user = await getCurrentUser();
  return <AddEvent creatorId={user?.id!} />;
};

export default AdminEventAdd;
