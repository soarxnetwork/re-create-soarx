import { formatDate } from "@/utils/formatDate";
import { Event } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlineCalendar } from "react-icons/ai";

const Events = ({ slug, id, imageUrl, createdAt, date, title }: Event) => {
  return (
    <Link
      href={`/event/${decodeURI(slug!)}`}
      className="events-box aim-box"
      key={id}
    >
      <div>
        <Image
          width={712}
          height={618}
          src={imageUrl}
          alt="Banner"
          className="img-responsive rounded-t-xl"
        />
      </div>
      <div className="event-content">
        <h2 className="text-2xl font-medium">{title}</h2>

        <p className="pt-2 flex items-center gap-2 font-medium">
          <AiOutlineCalendar />
          {formatDate(date)}
        </p>
        {/* <div className="flex items-center gap-3">
                      <Link href={`/${eventSlug}`}>
                        <button className="btn-primary mt-4">View</button>
                      </Link>
                    </div> */}
      </div>
    </Link>
  );
};

export default Events;
