import React from "react";
import { getEvent } from "@/services/events";
import { Metadata } from "next";
import FormEvent from "../../add/_components/FormEvent";
import { EventSchema } from "@/schema/event";
import { editEvent } from "@/actions/event";

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
  const event = (await getEvent(params.id)) as EventSchema;

  return <FormEvent event={event!} action={editEvent} />;
};

export default AdminEdiPage;
