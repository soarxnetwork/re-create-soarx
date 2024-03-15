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
    <section className="section px-24">
      <div className="container">
        <h1 className="text-center mb-10 text-[80px] text-[#000000] font-bold">Our Partners</h1>

        <Swiper
          className="mySwiper"
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
            <SwiperSlide key={index}>
              <div className="partner-imgwrap">
                <Image
                  src={e}
                  width={0}
                  height={0}
                  alt="Banner"
                  className="img-responsive"
                  sizes="100vw"
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
