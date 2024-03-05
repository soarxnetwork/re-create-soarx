import React from "react";
import Events from "../_components/Events";
import { getAllEvents } from "@/services/events";
import EventPage from "./_components/EventsPage";

const EventsPage = async () => {
  const events = await getAllEvents();
  return (
    <section>
      <EventPage events={events!} />
    </section>
  );
};

export default EventsPage;
