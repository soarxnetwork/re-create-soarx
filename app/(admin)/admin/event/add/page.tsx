import React from "react";
import { Metadata } from "next";
import FormEvent from "./_components/FormEvent";
import { createEvent } from "@/actions/event";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/next-auth";

export const metadata: Metadata = {
  title: "Add Event",
  description: "Add Event Page",
};

const AdminEventAdd = async () => {
  const session = await getServerSession(authOptions);
  return <FormEvent creatorId={session?.user?.id!} action={createEvent} />;
};

export default AdminEventAdd;
