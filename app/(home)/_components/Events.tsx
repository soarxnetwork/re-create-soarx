"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AiOutlineCalendar } from "react-icons/ai";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import Image from "next/image";
import { formatDate } from "@/utils/formatDate";
import Button from "@/components/Button";
import { Event } from "@prisma/client";
import { truncateWord } from "@/utils/truncateWord";

interface EventProps {
  events: Event[];
}

const Events = ({ events }: EventProps) => {
  return (
    <section className="section px-32">
      <div className="container mx-auto">
        <h1 className="text-center text-[80px] text-[#000000] font-bold">Recent Events</h1>
        <section className="all-events pt-10">
          <Swiper
            spaceBetween={10}
            slidesPerView={3}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            navigation={true}
            modules={[Navigation, Autoplay]}
            className="testimonial-swiper"
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 100,
              },
              600: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              700: {
                slidesPerView: 2,
                spaceBetween: 10,
              },

              800: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
            }}
          >
            {events.map((e) => (
              <SwiperSlide key={e.id}>
                <div className="events-box aim-box">
                  <div className="events-img">
                    <Image
                      src={e.imageUrl}
                      alt="Banner"
                      className="img-responsive"
                      width={300}
                      height={200}
                    />
                  </div>
                  <div className="event-content">
                    <h2 className="text-2xl font-medium">
                      {truncateWord(e.title, 49)}
                    </h2>
                    <p className="pt-2">{truncateWord(e.description, 70)}</p>
                    <p className="pt-2 flex items-center gap-2 font-medium">
                      <AiOutlineCalendar />
                      {formatDate(e.createdAt)}
                    </p>
                    {/* <div className="pt-4">
                      <Link href={`/${e.eventSlug}`}>
                        <button className="btn-primary">Register</button>
                      </Link>
                    </div> */}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="flex items-center justify-center">
            <Link href={"/events"}>
              <Button name="View All" />
            </Link>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Events;
