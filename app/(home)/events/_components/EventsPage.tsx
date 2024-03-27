import React, { useEffect, useState } from "react";
import { AiOutlineCalendar } from "react-icons/ai";
import Image from "next/image";
import { formatDate } from "@/utils/formatDate";
import { Event } from "@prisma/client";
import Link from "next/link";
import Events from "./Events";
import Pagination from "@/app/(admin)/_components/Pagination";
import { useSearchParams } from "next/navigation";
import HeadingSecondDsa from "../../campus-ambassador/_components/HeadingSecondDsa";
import { CiBatteryEmpty } from "react-icons/ci";
import { getOngoingEvents, getPastEvents } from "@/services/events";
import TemporaryEmptyEvents from "@/components/TemporaryEmptyEvents";


const EventPage = async () => {

  const pastEvents = await getPastEvents()
  const ongoingEvents = await getOngoingEvents()

  return (
    <section className="section ">
      <article className="container ">
        {ongoingEvents && ongoingEvents.length > 0 ?
          <>
            <div className="pt-24">
              <h1 className="text-5xl">Ongoing Events</h1>
            </div>
            <div className="all-events pt-8">
              <div className="grid-4">
                {ongoingEvents?.map((e) => (
                  <Events key={e.id} {...e} />
                ))}
              </div>
            </div>
          </>
          : <TemporaryEmptyEvents text="Empty Ongoing Events" />}
        {
          pastEvents && pastEvents.length > 0 ?
            <>
              <div className="pt-24">
                <h1 className="text-5xl">Past Events</h1>
              </div>
              <div className="all-events pt-8">
                <div className="grid-4">
                  {pastEvents?.map((e) => (
                    <Events key={e.id} {...e} />
                  ))}
                </div>
              </div>
            </>
            : <TemporaryEmptyEvents text="Empty Past Events" />
        }
        {/* <div className="mt-5 flex w-full justify-center">
          <Pagination totalPages={totalPages} />
        </div> */}
      </article>
    </section>
  );
};

export default EventPage;
