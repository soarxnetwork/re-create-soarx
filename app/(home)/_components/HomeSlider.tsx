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
      <div className="custom-container flex relative banner-container items-center gap-5 justify-between">
        <div className="grid gap-16 items-center grid-cols-2 ">
          <div className=" ">
            <div className="flex items-center gap-2">
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
          <div className="w-full">
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
                  className="banner-img"
                  alt="Banner"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
          {/* <div className="relative">
            <div className="blob-radius">
              <Image
                src={"/images/hero-potrait.jpg"}
                width={0}
                height={0}
                alt=""
                sizes="100vw"
                className="w-full"
              />
            </div>
            <ScrollParallax isAbsolutelyPositioned zIndex={-1}>
              <div className="particles-dots absolute  -z-10">
                <Image
                  width={200}
                  height={200}
                  src={"/images/particle-dots.png"}
                  className=""
                  sizes="100vw"
                  alt=""
                />
              </div>
            </ScrollParallax>
          </div>
        </div>

        <ScrollParallax
          isAbsolutelyPositioned
          zIndex={-1}
          strength={0.5}
          lerpEase={0.04}
          enableOnTouchDevice={true}
        >
          <div className="particles-circle">
            <Image width={25} height={25} src={"/images/circle.png"} alt="" />
          </div>
        </ScrollParallax>
        <ScrollParallax
          isAbsolutelyPositioned
          zIndex={-1}
          strength={0.3}
          lerpEase={0.02}
          enableOnTouchDevice={true}
        >
          <div className="particles-square">
            <Image width={35} height={35} src={"/images/square.png"} alt="" />
          </div>
        </ScrollParallax> */}
      </div>
      </div>
    </section>
  );
};

export default HomeSlider;
