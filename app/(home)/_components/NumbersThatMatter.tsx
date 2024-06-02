"use client";
import React from "react";
import { FaUsers } from "react-icons/fa";
import { BsBuilding } from "react-icons/bs";
import { ScrollParallax } from "react-just-parallax";
import { BsMap } from "react-icons/bs";
function NumbersThatMatter() {
  const data = [
    {
      title: "4500+",
      desc: "Community Members",
    },
    {
      title: "500+",
      desc: "Colleges",
    },
    {
      title: "2+",
      desc: "Years of Experience",
    },
    {
      title: "50+",
      desc: "Team Members",
    },
  ];
  return (
    <ScrollParallax strength={-0.15}>
          <div className="flex justify-center mt-16 mb-16 font-bold">
          <h2 className="text-center text-[23px] sm:text-3xl md:text-4xl lg:text-5xl font-semibold sm:font-bold leading-normal">
          {/* Our Past Events */}
          {"Some Numbers That Matters".split("").map((child, idx) => (
            <span className={"hoverText"} key={idx}>
              {child}
            </span>
          ))}
        </h2>
          </div>
      <section className="px-[11%] my-[5%]">
        <div className="custom-container ">
          <div className="grid h-full w-full grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-4 md:gap-0 shadow-md  number-sgrid">
            {data?.map((e, index) => (
              <div
                className="flex flex-col items-center justify-center  number-section-wrapper p-2"
                key={index}
              >
                <h4 className="mb-4 text-2xl font-medium md:text-4xl">
                  {e?.title}
                </h4>
                <p className="text-sm">{e?.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </ScrollParallax>
  );
}

export default NumbersThatMatter;
