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

function ScrollingToPage() {
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
            }

const HeroSecondDsa = () => {
  return (
    <article>
      <div className="container myfonts 2xl:pr-10 flex flex-col-reverse md:flex-row md:grid md:grid-cols-2 space-y-4 gap-4">
        {/* ! */}
        <div className=" space-y-4 py-16">
          <HeadingSecondDsa text="Represent SoarX at your Campus" />
          <p className="text-2xl lg:text-2xl text-gray-500 lg:text-[30px] tracking-wider font-normal lg:leading-10">
          Organize online and offline events with industry professionals and take your students to visit Microsoft Office for upskilling events.
          </p>
          <a
            onClick={ScrollingToPage}
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
            className="object-contain w-[682px] md:ml-5 xl:ml-0 lg:ml-16 pt-10 h-[381px] dark:brightness-200"
          />
        </div>
      </div>
    </article>
  );
};

export default HeroSecondDsa;
