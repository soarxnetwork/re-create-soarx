import React from "react";
import AdminEvents from "./_components/AdminEvents";
import { getAllEvents } from "@/services/events";

const AdminEventsPage = async () => {
  const events = await getAllEvents();
  return (
    <>
      <AdminEvents events={events!} />
    </>
  );
};

export default AdminEventsPage;
