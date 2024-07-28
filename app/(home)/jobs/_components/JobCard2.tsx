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
import SearchArea from "./SearchArea";
import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

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
    <div className="w-full -mt-20">
      <Link href={`/jobs/${id}`}>
      <CardContainer className="inter-var">
        <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
          <CardItem
            translateZ="50"
            className="text-xl font-bold text-neutral-600 dark:text-white"
          >
            <div className="flex gap-x-4">
              <p>{title}</p>
              <h4 className="text-xs font-medium text-[#34EF95] bg-[#D7FCEA] inline p-2 rounded-xl">
                {jobRole}
              </h4>
            </div>
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
          >
            {mydescription}
          </CardItem>
          <CardItem translateZ="100" className="w-full mt-4">
            <Image
              src={imageUrl!}
              height="1000"
              width="1000"
              className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
              alt="thumbnail"
            />
          </CardItem>
          <div className="flex justify-between items-center mt-14">
            <CardItem
              translateZ={20}
              as={Link}
              href="https://twitter.com/mannupaaji"
              target="__blank"
              className="px-4 rounded-xl text-sm font-medium dark:text-white"
            >
              {companyName}
            </CardItem>
            <CardItem
              translateZ={20}
              as="button"
              className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
            >
              Know More
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>
      </Link>
    </div>
  );
};

export default JobCardTwo;
