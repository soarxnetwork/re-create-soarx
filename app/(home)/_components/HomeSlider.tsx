"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import Button from "@/components/Button";
import { Autoplay } from "swiper/modules";
import { BannerImages } from "@/constants/homepage";

const HomeSlider = () => {
  return (
    <section className="banner-section flex items-center justify-center px-32">
      <div className="container flex banner-container items-center gap-5 justify-between">
        <div className="w-3/6	">
          <h2 className=" text-[#9241d4] text-xl pt-6 font-semibold">
            Empowering Minds. Unleashing Creativity
          </h2>
          <h1 className="text-[80px] font-bold text-[#000000]">SoarX Network</h1>
          <p className="pt-5 text-[30px] ">
          SoarX is a nationwide community dedicated to empowering students through impactful events, sessions, and hackathons
          </p>
          <Button name="Join Us" />
        </div>
        <div className="w-3/6">
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
            breakpoints={{
              0: {
                slidesPerView: 1,
                centeredSlides: false,
              },
              500: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              600: {
                slidesPerView: 3,
                spaceBetween: 30,
              },

              700: {
                slidesPerView: 3,
                spaceBetween: 10,
              },

              1024: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
            }}
            className="mySwiper banner-swiperjs"
          >
            {BannerImages.map((e, index) => (
              <SwiperSlide key={index}>
                <Image
                  src={e}
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="banner-img"
                  alt="Banner"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default HomeSlider;
