import React from "react";
import Events from "../_components/Events";
import { getAllEvents } from "@/services/events";
import EventPage from "./_components/EventsPage";
import { Metadata } from "next";
import { SearchParamsType } from "@/types";

export const metadata: Metadata = {
  title: "Events",
  description: "Events Page",
};

const EventsPage = async ({ searchParams }: SearchParamsType) => {
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;
  const events = await getAllEvents();
  return (
    <section className="container mt-14 mb-28">
      <EventPage events={events!} />
    </section>
  );
};

export default EventsPage;
