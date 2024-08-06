"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AiOutlineCalendar } from "react-icons/ai";
import { MdArrowOutward } from "react-icons/md";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import { formatDate } from "@/utils/formatDate";
import { Event } from "@prisma/client";

interface EventProps {
  events: Event[];
}

const Events = ({ events }: EventProps) => {
  return (
    <section className="section  my-[10%] lg:pl-28 lg:pr-20">
      <div className="container mx-auto">
        <h2 className="text-center text-[30px] sm:text-[40px] md:text-[60px] lg:text-[80px] pt-2 font-bold leading-normal">
          {"Events".split("").map((child, idx) => (
            <span className={"hoverText"} key={idx}>
              {child}
            </span>
          ))}
        </h2>{" "}
        <section className="all-events lg:grid grid-cols-3 gap-5 pt-16">
          {events?.slice(0, 3).map((e, index) => (
            <Link key={index} href={`${e.slug}`}>
              <div className="events-box aim-box dark:shadow-sm dark:shadow-purple-500 h-full ">
                <div className="relative mt-10 hover-event-card-img h-fit overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border  w-full text-white">
                  <Image
                    src={e.imageUrl}
                    alt="Banner"
                    className="w-full"
                    width={300}
                    height={300}
                  />
                </div>
                <div className="pt-6 pl-6 pr-6">
                  <p className="text-slate-400 text-[12px]">Online | Free</p>
                  <h5 className="mb-2 pt-2 block  text-base font-medium leading-snug tracking-normal text-blue-gray-900 antialiased">
                    {e.title}
                  </h5>
                  <p className="block  text-sm font-light leading-relaxed text-inherit antialiased ">
                    {e.home_description && (
                      <>{e.home_description.slice(0, 100) + "...."}</>
                    )}
                  </p>
                </div>
                <div className="flex   items-center pt-2 justify-between pr-2 pl-6 pb-2">
                  <p className=" flex  items-center gap-2 font-light text-sm">
                    <AiOutlineCalendar />
                    {formatDate(e.date)}
                  </p>
                  <button className="events-button">
                    <div className="button-box text-2xl text-[#c5c7ca]">
                      <span className="button-elem">
                        <MdArrowOutward />
                      </span>
                      <span className="button-elem">
                        <MdArrowOutward />
                      </span>
                    </div>
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </section>
        <div className="flex items-center lg:mt-8 justify-center">
          <Link href="/events">
            <button className="signInbut mt-10">
              <p className="text-xl">View all</p>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Events;
