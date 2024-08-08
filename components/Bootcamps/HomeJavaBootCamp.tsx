"use client";
import React from "react";
import { ThreeDCardDemo } from "./ThreeDCardDemo";
import { BsCameraReels } from "react-icons/bs";
import { LuAirplay } from "react-icons/lu";
import { ImEmbed2 } from "react-icons/im";

const HomeJavaBootCamp = () => {
  return (
    <div className="pl-8 pr-8 md:pl-28 md:pr-32">
      <h2 className="flex  justify-center gap-x-5 text-[30px] sm:text-[40px] md:text-[60px] lg:text-[70px] pt-2 font-bold leading-normal">
        <span>
          {"Salesforce Training Program".split("").map((child, idx) => (
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
            Unlock your potential with the SoarX Salesforce Training Program, a comprehensive <span className="font-bold">10-week</span> course designed to provide you with a deep understanding of <span className="font-bold">Salesforces powerful CRM platform</span>.
          <br />
            <p>
            Starting on <span className="font-bold">August 10, 2024</span>, this program offers a structured approach to mastering Salesforce Administration, Development, and <span className="font-bold">Lightning Web Components</span> (LWC), tailored for both beginners and those seeking to advance their skills.
            </p>
            </p>
            <div className="hidden xl:grid grid-cols-1 sm:grid-cols-2 gap-x-7 gap-y-8">
              <div className="border-2  hover:cursor-pointer transition-all duration-300 p-3 md:p-4 border-opacity-30 rounded-md">
                <div className="fl-ic gap-2">
                  <div className="min-w-12 min-h-12 rounded-full dark:bg-black bg-white border border-black border-opacity-20 bg-border-dlc fl-ic justify-center text-lg">
                    <BsCameraReels />
                  </div>
                  <div className="space-y-2">
                    <p className="text-base text-gray-500 dark:text-gray-400 font-medium">
                      Start Date
                    </p>
                    <p className="text-base font-medium">10 August 2024</p>
                  </div>
                </div>
              </div>

              <div className="border-2  hover:cursor-pointer transition-all duration-300 p-3 md:p-4 border-opacity-30 rounded-md">
                <div className="fl-ic gap-2">
                  <div className="min-w-12 min-h-12 rounded-full dark:bg-black bg-white border border-black border-opacity-20 bg-border-dlc fl-ic justify-center text-lg">
                    <LuAirplay />
                  </div>
                  <div className="space-y-2">
                    <p className="text-base text-gray-500 dark:text-gray-400 font-medium">
                      Duration
                    </p>
                    <p className="text-base font-medium">10 Week</p>
                  </div>
                </div>
              </div>

              <div className="border-2  hover:cursor-pointer transition-all duration-300 p-3 md:p-4 border-opacity-30 rounded-md">
                <div className="fl-ic gap-2">
                  <div className="min-w-12 min-h-12 rounded-full dark:bg-black bg-white border border-black border-opacity-20 bg-border-dlc fl-ic justify-center text-lg">
                    <ImEmbed2 />
                  </div>
                  <div className="space-y-2">
                    <p className="text-base text-gray-500 dark:text-gray-400 font-medium">
                      Class Duration
                    </p>
                    <p className="text-base font-medium">1 hrs</p>
                  </div>
                </div>
              </div>

              <div className="border-2  hover:cursor-pointer transition-all duration-300 p-3 md:p-4 border-opacity-30 rounded-md">
                <div className="fl-ic gap-2">
                  <div className="min-w-12 min-h-12 rounded-full dark:bg-black bg-white border border-black border-opacity-20 bg-border-dlc fl-ic justify-center text-lg">
                    <ImEmbed2 />
                  </div>
                  <div className="space-y-2">
                    <p className="text-base text-gray-500 dark:text-gray-400 font-medium">
                    Total Classes
                    </p>
                    <p className="text-base font-medium">60</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </span>
      </div>
    </div>
  );
};

export default HomeJavaBootCamp;
