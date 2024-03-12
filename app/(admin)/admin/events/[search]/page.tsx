import React from "react";
import { getAllEvents, getEventsWithSearch } from "@/services/events";
import { Metadata } from "next";
import AdminEvents from "../_components/AdminEvents";

interface AdminEventsPageProps {
  params: {
    search: string;
  };
}

const AdminSearchEventsPage = async ({ params }: AdminEventsPageProps) => {
  const events = await getEventsWithSearch(params.search);

  return (
    <>
      <AdminEvents
        label={events?.length! > 0 ? "Search Result" : "Empty Events"}
        events={events!}
      />
    </>
  );
};

export default AdminSearchEventsPage;
