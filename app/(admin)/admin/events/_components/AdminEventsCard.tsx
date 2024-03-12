import { formatDate } from "@/utils/formatDate";
import { truncateWord } from "@/utils/truncateWord";
import { Event } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlineCalendar } from "react-icons/ai";

interface AdminEventsCardProps extends Event {
  confirm2: (id: string) => void;
}

const AdminEventsCard = ({
  id,
  title,
  description,
  imageUrl,
  date,
  confirm2,
}: AdminEventsCardProps) => {
  return (
    <div className="events-box aim-box break-words w-full" key={id}>
      <div className="events-img">
        <Image
          src={imageUrl}
          alt="Banner"
          className="img-responsive"
          width={300}
          height={200}
        />
      </div>
      <div className="event-content ">
        <h2 className="text-2xl font-medium">{truncateWord(title, 49)}</h2>
        <p className="pt-2 max-w-[336px] ">{truncateWord(description, 70)}</p>
        <p className="pt-2 flex items-center gap-2 font-medium">
          <AiOutlineCalendar />
          {formatDate(date)}
        </p>
        <div className="flex items-center gap-3">
          <button className="btn-primary red mt-4" onClick={() => confirm2(id)}>
            Delete
          </button>
          <Link
            href={`/admin/event/edit/${id}`}
            className="btn-primary red mt-4"
          >
            Edit
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdminEventsCard;
