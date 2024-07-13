"use client";
import React, { ReactElement } from "react";
import { JobSchema } from "@/schema/JobSchema";
import { truncateWord } from "@/utils/truncateWord";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { TextGenerateEffectTitles } from "@/components/ui/text-generate-for-titles";
import { SlCalender } from "react-icons/sl";
import { MdOutlineAssuredWorkload } from "react-icons/md";
import { MdOutlineLocationOn } from "react-icons/md";
import { FaLongArrowAltRight } from "react-icons/fa";
import { useRouter } from "next/navigation";
import Link from "next/link";

const JobCardTwo = ({
  id,
  title,
  description,
  imageUrl,
  jobRole,
  lastDateToApply,
  companyName,
  location,
}: JobSchema) => {
  const router = useRouter();
  const mywords = truncateWord(title, 49);
  const mydescription = truncateWord(description as string, 100);
  return (
    <Link href={`jobs/${id}`}>
      <div className="h-[300px] w-8/12 hover:cursor-pointer flex hover:scale-105 ease-in-out duration-300 rounded-xl dark:bg-gradient-to-br from-gray-700 to-gray-900 bg-gray-200 shadow-black  m-4">
        <div className="w-1/2 h-full hover:scale-95 ease-in-out duration-300">
          <img
            src={imageUrl}
            alt="Job Image"
            width={0}
            height={0}
            className="w-full h-full rounded-3xl p-2"
          />
        </div>

        <div className="event-content w-1/2 h-full">
          <h4 className="text-xs font-medium bg-purple-500 inline p-1 rounded-xl">
            {jobRole}
          </h4>
          <h2 className="text-2xl font-medium">
            <TextGenerateEffectTitles words={mywords} />
          </h2>

          <p className="pt-2 max-w-[336px]">
            <TextGenerateEffect words={mydescription} />
          </p>
          <h4 className="text-sm font-medium inline p-1 rounded-xl">
            <p className="flex justify-between pl-4 pr-4 items-center">
              <span className="flex items-center gap-x-2">
                <SlCalender />
                {lastDateToApply}
              </span>
              <span className="flex items-center gap-x-2">
                <MdOutlineAssuredWorkload />
                {companyName}
              </span>
            </p>
          </h4>

          <h4 className="text-sm font-medium inline p-1 rounded-xl">
            <p className="flex justify-between pl-4 pr-4 items-center">
              <span className="flex items-center gap-x-2">
                <MdOutlineLocationOn />
                {location}
              </span>
              <span className="flex text-green-400 items-center gap-x-2">
                <p className="">Know more</p>
                <FaLongArrowAltRight />
              </span>
            </p>
          </h4>
        </div>
      </div>
    </Link>
  );
};

export default JobCardTwo;
