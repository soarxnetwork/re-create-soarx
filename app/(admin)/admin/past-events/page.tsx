import React from "react";
import { getAllEvents } from "@/services/events";
import { Metadata } from "next";
import AdminEvents from "../events/_components/AdminEvents";

export const metadata: Metadata = {
  title: "Events",
  description: "Events Page",
};

const PastEventsPage = async () => {
  const events = await getAllEvents();
  const pastEvents = events?.filter(
    (event) => new Date(event.date) < new Date()
  );
  return (
    <>
      <AdminEvents events={pastEvents!} label="Past Events" />
    </>
  );
};

export default PastEventsPage;
