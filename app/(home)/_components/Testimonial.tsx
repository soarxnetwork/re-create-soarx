"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { TestimonialMessage } from "@/constants/homepage";
import Image from "next/image";

import { Pagination, Navigation } from "swiper/modules";
import "swiper/css/pagination";
const Testimonial = () => {
  const testimonials = [
    {
      quote:
        "No, Rose, they are not breathing. And they have no arms or legs … Where are they? You know what? If we come across somebody with no arms or legs, do we bother resuscitating them? I mean, what quality of life do we have there?",
      author: "CEO",
    },
    {
      quote:
        "No, Rose, they are not breathing. And they have no arms or legs … Where are they? You know what? If we come across somebody with no arms or legs, do we bother resuscitating them? I mean, what quality of life do we have there?",
      author: "Michael Scott 1",
    },
    {
      quote:
        "No, Rose, they are not breathing. And they have no arms or legs … Where are they? You know what? If we come across somebody with no arms or legs, do we bother resuscitating them? I mean, what quality of life do we have there?",
      author: "Michael Scott 3",
    },

    // Add more testimonials as needed
  ];
  return (
    <section className="section px-24">
      <div className="container">
        {/* <div className="mt-5">
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
        </div> */}

        <section className="">
          <div className="mx-auto max-w-[1340px] px-4 py-12 sm:px-6 lg:me-0 lg:py-16 lg:pe-0 lg:ps-8 xl:py-24">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:items-center lg:gap-16">
              <div className="max-w-xl text-left">
                <div className="text-left text-primary cursor-pointer">
                  {"Testimonials".split("").map((child, idx) => (
                    <span className={"hoverText"} key={idx}>
                      {child}
                    </span>
                  ))}
                </div>
                <h2 className="text-left text-4xl text-textColor pt-2 font-bold leading-normal">
                  Our Success Stories
                </h2>{" "}
                <p className="mt-4 text-light text-sm">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Voluptas veritatis illo placeat harum porro optio fugit a
                  culpa sunt id!
                </p>
              </div>

              <div className="-mx-6 lg:col-span-2  lg:mx-0">
                <Swiper
                  pagination={{
                    type: "progressbar",
                  }}
                  centeredSlides={true}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  modules={[Pagination, Autoplay]}
                  spaceBetween={30}
                  slidesPerView={1}
                >
                  {testimonials.map((testimonial, index) => (
                    <SwiperSlide key={index}>
                      <div className="bg-[#9241d40d] rounded-lg p-6 shadow-md sm:p-8 lg:p-12">
                        <div>
                          <div className="mt-4 leading-relaxed text-gray-700">
                            <p className="text-lg font-bold ">Mahatma Gandhi</p>
                            <p className="mt-4 leading-relaxed text-gray-700">
                              {testimonial.quote}
                            </p>
                          </div>
                        </div>
                        <footer className="mt-4 text-sm font-medium text-gray-700 sm:mt-6">
                          &mdash; {testimonial.author}
                        </footer>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Testimonial;
