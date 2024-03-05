import React from "react";
import EditEvent from "../_components/EditEvent";
import { getEvent } from "@/services/events";
import { getCurrentUser } from "@/services/user";

interface AdminEditPageProps {
  params: {
    id: string;
  };
}

const AdminEdiPage = async ({ params }: AdminEditPageProps) => {
  const event = await getEvent(params.id);
  return <EditEvent {...event!} />;
};

export default AdminEdiPage;
