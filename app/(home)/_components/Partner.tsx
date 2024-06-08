"use client";
import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { imgPartnerLists } from "@/constants/homepage";

const Partners = () => {
  return (
    <section className=" px-[11%]">
      <div className="container">
        <div className="text-center text-primary cursor-pointer">
          {/* {"Partners".split("").map((child, idx) => (
            <span className={"hoverText text-[10px] sm:text-[30px] lg:text-[40px]"} key={idx}>
              {child}
            </span>
          ))} */}
        </div>
        <h2 className="text-center text-[30px] sm:text-[40px] md:text-[60px] lg:text-[80px] pt-2 font-bold leading-normal">
          {"Our Trusted Partners".split("").map((child, idx) => (
            <span className={"hoverText"} key={idx}>
              {child}
            </span>
          ))}
        </h2>{" "}
        <Swiper
          className="mySwiper mb-4"
          spaceBetween={10}
          slidesPerView={5}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          centeredSlides={true}
          loop={true}
          breakpoints={{
            0: {
              spaceBetween: 20,
              centeredSlides: false,
              slidesPerView: 1,
            },

            600: {
              slidesPerView: 2,
              spaceBetween: 200,
            },
            700: {
              slidesPerView: 3,
              spaceBetween: 100,
            },
            800: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 10,
            },
          }}
        >
          {imgPartnerLists.map((e, index) => (
            <SwiperSlide key={index} className="">
              <div className="partner-imgwrap select-none ">
                <Image
                  src={e}
                  width={0}
                  height={0}
                  alt="Banner"
                  className="img-responsive scale-110"
                  sizes="100vw"
                  quality={100}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Partners;
