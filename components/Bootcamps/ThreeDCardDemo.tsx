"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import Link from "next/link";

export function ThreeDCardDemo() {
  return (
    <CardContainer className="">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-2xl font-semibold text-neutral-600 dark:text-white"
        >
          2.5 Month Salesforce Training Program
        </CardItem>
        {/* <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 pt-3 pb-3 dark:text-neutral-300"
        >
          Unlock your potential with the SoarX Salesforce Training Program, a comprehensive 10-week course designed to provide you with a deep understanding of Salesforces powerful CRM platform.
        </CardItem> */}
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src="/images/poster_salesforce.png"
            height="500"
            width="500"
            className="w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="Salesforce Program"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-10">
          {/* <CardItem
            translateZ={20}
            as={Link}
            href="https://twitter.com/mannupaaji"
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            Try now →
          </CardItem> */}
          <Link href="/salesforce-pioneers">
            <CardItem translateZ={20} as="button" className="signInbut">
              Enroll now
            </CardItem>
          </Link>
        </div>
      </CardBody>
    </CardContainer>
  );
}
