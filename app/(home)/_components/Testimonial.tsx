"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { TestimonialMessage } from "@/constants/homepage";
import Image from "next/image";

const Testimonial = () => {
  return (
    <section className="section px-32">
      <div className="container">
        <h1 className="text-center text-[80px] text-[#000000] font-bold">Testimonials</h1>
        <div className="mt-5">
          <Swiper
            spaceBetween={10}
            slidesPerView={3}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            centeredSlides={true}
            loop={true}
            className="testimonial-swiper mySwiper"
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 10,
              },

              700: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              800: {
                slidesPerView: 2,
                spaceBetween: 10,
                centeredSlides: false,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
            }}
          >
            {TestimonialMessage.map((e, index) => (
              <SwiperSlide key={index}>
                <div className="relative mx-auto testimonial-box rounded-lg  p-10  text-gray-700 leading-snug flex flex-col justify-between">
                  <div className="-ml-4">
                    <svg
                      className="w-8 opacity-25 text-indigo-500"
                      xmlns="http://www.w3.org/2000/svg"
                      shapeRendering="geometricPrecision"
                      textRendering="geometricPrecision"
                      imageRendering="optimizeQuality"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      viewBox="0 0
                                                                                                         640 640"
                      fill="currentColor"
                    >
                      <path d="M557.133 561.704H442.128c-44.256 0-80.458-36.19-80.458-80.446 0-165.58-42.32-347.485 160.656-399.418 91.95-23.516 115.915 77.753 18.119 84.745-59.647 4.276-71.293 42.804-73.147 101.068h92.269c44.256 0 80.458 36.201 80.458 80.458v130.702c0 45.591-37.3 82.89-82.891 82.89zm-358.032 0H84.096c-44.256 0-80.446-36.19-80.446-80.446 0-165.58-42.331-347.485 160.644-399.418 91.95-23.516 115.915 77.753 18.118 84.745-59.646 4.276-71.292 42.804-73.146 101.068h92.269c44.256 0 80.457 36.201 80.457 80.458v130.702c0 45.591-37.3 82.89-82.89 82.89z" />
                    </svg>
                  </div>
                  <div className="mt-2">
                    <p>{e.message}</p>
                  </div>
                  <div>
                    <div className="mx-auto w-full border border-gray-300 my-8" />
                    <div className="flex items-center">
                      <div className="w-12 h-12">
                        <Image
                          className="w-full object-cover rounded-full border-2 border-indigo-400"
                          src={e.image}
                          alt="testimonial"
                          width={100}
                          height={100}
                        />
                      </div>
                      <div className="ml-4">
                        <div className="font-bold">{e.name}</div>
                        <div className="text-sm text-gray-600 mt-1">
                          {e.company}{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
