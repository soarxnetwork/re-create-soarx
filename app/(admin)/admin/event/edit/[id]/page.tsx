import React from "react";
import EditEvent from "../_components/EditEvent";
import { getEvent } from "@/services/events";
import { getCurrentUser } from "@/services/user";
import { Metadata } from "next";

interface AdminEditPageProps {
  params: {
    id: string;
  };
}

export async function generateMetadata({
  params,
}: AdminEditPageProps): Promise<Metadata> {
  const event = await getEvent(params.id);
  return {
    title: `Edit ${event?.title}`,
    description: `Edit ${event?.title} Event`,
  };
}

const AdminEdiPage = async ({ params }: AdminEditPageProps) => {
  const event = await getEvent(params.id);
  return <EditEvent {...event!} />;
};

export default AdminEdiPage;
