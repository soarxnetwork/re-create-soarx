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
    <section className="section px-32">
      <div className="container mx-auto">
        <div className="text-center text-primary cursor-pointer">
          {"Events".split("").map((child, idx) => (
            <span className={"hoverText text-[40px]"} key={idx}>
              {child}
            </span>
          ))}
        </div>
        <h2 className="text-center text-[80px] pt-2 font-bold leading-normal">
          Our Past Events
        </h2>{" "}
        <section className="all-events  grid grid-cols-4 gap-5 pt-16">
          {events?.map((e, index) => (
            
            <Link key={index} href={`${e.slug}`}>
             

              <div className="relative hover-event-card flex flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <div className="relative hover-event-card-img mx-4 -mt-6 h-[250px] overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 ">
                  <Image
                    src={e.imageUrl}
                    alt="Banner"
                    className="img-responsive"
                    width={300}
                    height={200}
                  />
                </div>
                <div className="pt-6 pl-6 pr-6">
                  <p className="text-slate-400 text-[12px]">Online | Free</p>
                  <h5 className="mb-2 pt-2 block  text-base font-medium leading-snug tracking-normal text-blue-gray-900 antialiased">
                    {/* {truncateWord(e.title, 49)} */}
                    Your roadmap to study abroad and ace tech interviews!
                  </h5>
                  <p className="block  text-sm font-light leading-relaxed text-inherit antialiased">
                    {/* {truncateWord(e.description, 70)} */}
                    We hope this masterclass gives you the right insights to
                    kickstart your career! Explore mentors from diverse domains
                    and book sessions.
                  </p>
                </div>
                <div className="flex  items-center pt-2 justify-between pr-2 pl-6 pb-3">
                  <p className=" flex  items-center gap-2 font-light text-sm">
                    <AiOutlineCalendar />
                    {formatDate(e.createdAt)}
                  </p>
                  <button className="events-button">
                    <div className="button-box text-2xl text-[#c5c7ca]">
                      <span className="button-elem">
                        {/* <svg
                          viewBox="0 0 46 40"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M46 20.038c0-.7-.3-1.5-.8-2.1l-16-17c-1.1-1-3.2-1.4-4.4-.3-1.2 1.1-1.2 3.3 0 4.4l11.3 11.9H3c-1.7 0-3 1.3-3 3s1.3 3 3 3h33.1l-11.3 11.9c-1 1-1.2 3.3 0 4.4 1.2 1.1 3.3.8 4.4-.3l16-17c.5-.5.8-1.1.8-1.9z" />
                        </svg> */}
                        <MdArrowOutward />
                      </span>
                      <span className="button-elem">
                        {/* <svg viewBox="0 0 46 40">
                          <path d="M46 20.038c0-.7-.3-1.5-.8-2.1l-16-17c-1.1-1-3.2-1.4-4.4-.3-1.2 1.1-1.2 3.3 0 4.4l11.3 11.9H3c-1.7 0-3 1.3-3 3s1.3 3 3 3h33.1l-11.3 11.9c-1 1-1.2 3.3 0 4.4 1.2 1.1 3.3.8 4.4-.3l16-17c.5-.5.8-1.1.8-1.9z" />
                        </svg> */}
                        <MdArrowOutward />
                      </span>
                    </div>
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </section>
        <div className="flex items-center justify-center">
          <button className=" signInbut mt-10">View all</button>
        </div>
      </div>
    </section>
  );
};

export default Events;
