import React from "react";
import AddEvent from "./_components/AddEvent";
import { getCurrentUser } from "@/services/user";
import { Metadata } from "next";
import FormEvent from "./_components/FormEvent";
import { createEvent } from "@/actions/event";

export const metadata: Metadata = {
  title: "Add Event",
  description: "Add Event Page",
};

const AdminEventAdd = async () => {
  const user = await getCurrentUser();
  return <FormEvent creatorId={user?.id!} action={createEvent} />;
};

export default AdminEventAdd;
