import React from "react";
import { getAllEvents } from "@/services/events";
import { Metadata } from "next";
import AdminEvents from "../events/_components/AdminEvents";

export const metadata: Metadata = {
  title: "Events",
  description: "Events Page",
};

const CurrentEventsPage = async () => {
  const events = await getAllEvents();
  const currentEvents = events?.filter(
    (event) => new Date(event.date) > new Date()
  );
  return (
    <>
      <AdminEvents events={currentEvents!} label="Current Events" />
    </>
  );
};

export default CurrentEventsPage;
