import React, { useEffect, useState } from "react";
import { AiOutlineCalendar } from "react-icons/ai";
import Image from "next/image";
import { formatDate } from "@/utils/formatDate";
import { Event } from "@prisma/client";
import Link from "next/link";
import Events from "./Events";

interface EventProps {
  events: Event[];
}

const EventPage = ({ events }: EventProps) => {
  return (
    <section className="section ">
      <article className="container ">
        <div className="pt-24">
          <h1 className="text-5xl">Ongoing Events</h1>
        </div>
        <div className="all-events pt-8">
          <div className="grid-4">
            {events
              .filter((event) => new Date(event.date) > new Date())
              .sort(
                (a, b) =>
                  new Date(b.date).getTime() - new Date(a.date).getTime()
              )
              .map((e) => (
                <Events key={e.id} {...e} />
              ))}
          </div>
        </div>
        <div>
          <h1 className="text-5xl">Past Events</h1>
        </div>
        <div className="all-events pt-8">
          <div className="grid-4">
            {events
              .filter((event) => new Date(event.date) < new Date())
              .sort(
                (a, b) =>
                  new Date(b.date).getTime() - new Date(a.date).getTime()
              )
              .map((e) => (
                <Events key={e.id} {...e} />
              ))}
          </div>
        </div>
      </article>
    </section>
  );
};

export default EventPage;
