import React from "react";
import AdminEvents from "./_components/AdminEvents";
import { getAllEvents } from "@/services/events";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Events",
  description: "Events Page",
};

const AdminEventsPage = async () => {
  const events = await getAllEvents();
  return (
    <>
      <AdminEvents events={events!} />
    </>
  );
};

export default AdminEventsPage;
