"use client";
import { formatDate } from "@/utils/formatDate";
import { truncateWord } from "@/utils/truncateWord";
import { Job } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlineCalendar } from "react-icons/ai";

interface AdminEventsCardProps extends Job {
  confirm2: (id: string) => void;
}

const JobCard = ({
  id,
  title,
  description,
  imageUrl,
  skills,
  confirm2,
}: AdminEventsCardProps) => {
  return (
    <div className="events-box aim-box break-words w-full" key={id}>
      <div className="events-img">
        <Image
          src={imageUrl ? imageUrl : "/images/placeholder.png"}
          alt="Banner"
          className="img-responsive"
          width={300}
          height={200}
        />
      </div>
      <div className="event-content ">
        <h2 className="text-2xl font-medium">{truncateWord(title, 49)}</h2>
        <p className="pt-2 max-w-[336px] ">{truncateWord(description as string, 70)}</p>
        <p className="pt-2 flex items-center gap-2 font-medium">
        {truncateWord(skills, 30)}
        </p>
      </div>
    </div>
  );
};

export default JobCard;
