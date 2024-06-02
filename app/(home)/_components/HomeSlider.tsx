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
    <section className="my-7 sm:my-28 px-[11%]">
      <div className=" items-center gap-5 justify-between">
        <div className="xl:flex gap-16 items-center grid xl:grid-cols-2  grid-cols-1 grid-rows-2">
          <div className=" ">
            <div className="flex items-center gap-2 pt-16">
              <div className="w-7">
                <Lottie animationData={groovyWalkAnimation} loop={true} />
              </div>

              <div className="text-center text-[#7300d0] dark:text-[#9f32f8] cursor-pointer">
                {"Engage, Innovate, Elevate"
                  .split("")
                  .map((child, idx) => (
                    <span className={"hoverText sm:text-[20px] text-[10px]"} key={idx}>
                      {child}
                    </span>
                  ))}
              </div>
            </div>
            <h1 className="sm:text-[50px] text-[30px]  leading-relaxed font-bold 2xl:text-[70px]    md:text-[60px] pt-3 ">
              SoarX Network
            </h1>
            <p className="pt-5 sm:text-[20px] text-[12px] 2xl:text-[30px] text-slate-500">
            A nationwide community committed to igniting the potential of students through engaging events, sessions, and hackathons. 
            </p>
            <button className=" signInbut mt-10" ><a href="https://chat.whatsapp.com/CcJFFC99PJv4iJnNvog2Jf">Join Us</a></button>
          </div>
          <div className="w-full flex items-center jusitfy-center  relative "> 
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
                slidesPerView: 1,
                spaceBetween: 30,
              },
              600: {
                slidesPerView: 1,
                spaceBetween: 30,
              },

              640: {
                slidesPerView: 3,
                spaceBetween: 10,
               
              },

              1024: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
            }}
            className="mySwiper banner-swiperjs min-h-[350px] max-w-[200px] sm:max-w-[578px] xl:min-w-[578px] "
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
