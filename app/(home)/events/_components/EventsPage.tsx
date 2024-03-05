import React, { useEffect, useState } from "react";
import { AiOutlineCalendar } from "react-icons/ai";
import Image from "next/image";
import { formatDate } from "@/utils/formatDate";
import { Event } from "@prisma/client";

interface EventProps {
  events: Event[];
}

const EventPage = ({ events }: EventProps) => {
  return (
    <section className="section ">
      <div className="container ">
        <div className="pt-24">
          <h1 className="text-5xl">Ongoing Events</h1>
        </div>
        <section className="all-events pt-8">
          <div className="grid-4">
            {events.map((e) => (
              <div className="events-box aim-box" key={e.id}>
                <div className="events-img">
                  <Image
                    width={700}
                    height={500}
                    src={e.imageUrl}
                    alt="Banner"
                    className="img-responsive"
                  />
                </div>
                <div className="event-content">
                  <h2 className="text-2xl font-medium">{e.title}</h2>

                  <p className="pt-2 flex items-center gap-2 font-medium">
                    <AiOutlineCalendar />
                    {formatDate(e.createdAt)}
                  </p>
                  {/* <div className="flex items-center gap-3">
                      <Link href={`/${e.eventSlug}`}>
                        <button className="btn-primary mt-4">View</button>
                      </Link>
                    </div> */}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
};

export default EventPage;
