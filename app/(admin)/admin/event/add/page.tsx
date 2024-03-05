import React from "react";
import AddEvent from "./_components/AddEvent";
import { getCurrentUser } from "@/services/user";

const AdminEventAdd = async () => {
  const user = await getCurrentUser();
  return <AddEvent creatorId={user?.id!} />;
};

export default AdminEventAdd;
