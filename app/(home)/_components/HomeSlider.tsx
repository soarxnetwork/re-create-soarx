"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
import Image from "next/image";
import groovyWalkAnimation from "../../../public/images/star.json";
import Lottie from "lottie-react";
import { Autoplay } from "swiper/modules";
import { BannerImages } from "@/constants/homepage";
import { ScrollParallax } from "react-just-parallax";

const HomeSlider = () => {
  return (
    <section className="banner-section  px-32">
      <div className="custom-container  banner-container items-center gap-5 justify-between">
        <div className="grid gap-16 items-center xl:grid-cols-2  grid-cols-1 grid-rows-2">
          <div className=" ">
            <div className="flex items-center gap-2 pt-16">
              <div className="w-7">
                <Lottie animationData={groovyWalkAnimation} loop={true} />
              </div>

              <div className="text-center text-primary cursor-pointer">
                {"Engage, Innovate, Elevate"
                  .split("")
                  .map((child, idx) => (
                    <span className={"hoverText text-[20px]"} key={idx}>
                      {child}
                    </span>
                  ))}
              </div>
            </div>
            <h1 className="text-2xl  leading-relaxed font-bold    md:text-[73px] pt-3 ">
              SoarX Network
            </h1>
            <p className="pt-5 text-[30px] text-slate-500">
            A nationwide community committed to igniting the potential of students through engaging events, sessions, and hackathons. 
            </p>
            <button className=" signInbut mt-10" ><a href="https://chat.whatsapp.com/CcJFFC99PJv4iJnNvog2Jf">Join Us</a></button>
          </div>
          <div className="w-full min-w-[578px] relative ">
          <Swiper
            spaceBetween={15}
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
            className="mySwiper banner-swiperjs min-h-[350px]"
          >
            {BannerImages.map((e, index) => (
              <SwiperSlide key={index} 
              >
                <Image
                  src={e}
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="banner-img w-full h-auto"
                  alt="Banner"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
          
      </div>
      </div>
    </section>
  );
};

export default HomeSlider;
