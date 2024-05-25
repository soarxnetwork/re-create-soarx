import { formatDate } from "@/utils/formatDate";
import { truncateWord } from "@/utils/truncateWord";
import { Event } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlineCalendar } from "react-icons/ai";

const Events = ({
  slug,
  id,
  imageUrl,
  createdAt,
  date,
  title,
  description,
}: Event) => {
  return (
    <Link
      href={`${decodeURI(slug!)}`}
      className="events-box aim-box"
      key={id}
    >
      <div>
        <Image
          width={420}
          height={420}
          src={imageUrl}
          alt="Banner"
          className="img-responsive rounded-t-xl object-contain"
        />
      </div>
      <div className="event-content break-words">
        <h2 className="text-2xl font-medium">{truncateWord(title, 49)}</h2>
        <p className="pt-2 max-w-[336px] ">{truncateWord(description, 60)}</p>

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
