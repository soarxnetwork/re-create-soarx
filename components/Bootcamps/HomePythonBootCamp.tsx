"use client";
import React from "react";
import { ThreeDCardDemo } from "./ThreeDCardDemo";

const HomePythonBootCamp = () => {
  return (
    <div className="pl-8 pr-8 md:pl-28 md:pr-32">
      <h2 className="flex  justify-center gap-x-5 text-[30px] sm:text-[40px] md:text-[60px] lg:text-[70px] pt-2 font-bold leading-normal">
        <span>
          {"Python".split("").map((child, idx) => (
            <span className={"hoverText"} key={idx}>
              {child}
            </span>
          ))}
        </span>
        <span>
          {"Bootcamp".split("").map((child, idx) => (
            <span className={"hoverText"} key={idx}>
              {child}
            </span>
          ))}
        </span>
      </h2>
      <div className="flex flex-col justify-normal xl:flex-row w-full h-full  xl:justify-around">
        <span className="n -mt-12 xl:mt-0">
          <ThreeDCardDemo />
        </span>
        <span className=" xl:w-1/2 hidden xl:inline xl:mt-10 mb-10">
          <div className="space-y-6 sm:pl-10 sm:pr-5 2xl:pr-10 xl:relative xl:top-10 lg:pl-10 lg:pr-20">
            <h4 className="font-semibold text-3xl pt-6">About Course</h4>
            <p>
              Our 5-Day Python Bootcamp is designed to provide an{" "}
              <span className="font-bold"> immersive learning</span> experience
              in Python programming. Led by industry experts
            </p>
            <span className="font-bold">Mohit Manuja,</span> Software Engineer
            at <span className="font-bold">Google</span>, and{" "}
            <span className="font-bold">Rajat Kumar</span>, Software Engineer at{" "}
            <span className="font-bold">Intuit</span>
            <p>
              This program aims to equip participants with{" "}
              <span className="font-bold">
                {" "}
                essential Python skills, problem-solving techniques
              </span>{" "}
              and a strong foundation in algorithms and data structures. This
              bootcamp is perfect for beginners and those looking to enhance
              their coding abilities for technical interviews, competitive
              programming, and{" "}
              <span className="font-bold">
                real-world software development.
              </span>
            </p>
          </div>
        </span>
      </div>
    </div>
  );
};

export default HomePythonBootCamp;
