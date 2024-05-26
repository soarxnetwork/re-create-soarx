"use client";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import React, { useState } from "react";
import HeadingSecondDsa from "./HeadingSecondDsa";
import ButtonSecondDsa from "./ButtonSecondDsa";


const montserrat = Montserrat({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

const HeroSecondDsa = () => {
  

  return (
    <article>
      
      
      <div className="container myfonts md:grid md:grid-cols-2 space-y-4 md:space-y-0 gap-4">
        {/* ! */}
        <div className=" space-y-4">
          <span
            className={`${montserrat.className} font-bold dark:brightness-125 text-[#9241d4] text-5xl`}
          >
            SoarX
          </span>
          <HeadingSecondDsa text="Represent your university as a SoarX Campus Ambassador" />
          <p className=" lg:text-2xl text-gray-500 text-[30px] tracking-wider font-normal text-lg">
            Becoming a SoarX Campus Ambassador helps pave the way towards
            professional success. Thats because it enables you to network with
            leading coders from across the world and enhance your leadership
            abilities. So, sign up today and be a key part of one of the worlds
            largest developer communities.
          </p>
          <a
            onClick={() => {
              const element = document.getElementById('campus-apply-card');
              if (element) {
                const elementHeight = element.offsetHeight;
                const windowHeight = window.innerHeight;
                const scrollOffset = windowHeight / 2 - elementHeight / 2;
                window.scrollTo({
                  top: element.offsetTop - scrollOffset,
                  behavior: 'smooth',
                });
              }
            }}
            className="block py-2"
            
            data-modal-toggle="crud-modal"
          >
            <ButtonSecondDsa text="Apply Now" />
          </a>
        </div>
        {/* ! */}

        

        <div>
          <Image
            src="/images/hero_section_campus_ambasadar-removebg-preview.png"
            alt="DSA"
            width={682}
            height={381}
            quality={100}
            className="object-contain w-[682px] ml-16 h-[381px] dark:brightness-200"
          />
        </div>
      </div>
    </article>
  );
};

export default HeroSecondDsa;
