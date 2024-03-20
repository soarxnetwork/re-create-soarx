"use client";

import { FaStar } from "react-icons/fa6";
import { CiVideoOn } from "react-icons/ci";
import { TbWorldWww } from "react-icons/tb";
import { AnimatePresence, motion } from "framer-motion";
import {
  floatingHeroMotionProps,
  floatingHeroVars,
} from "@/lib/framer-motion/dlc";
import Image from "next/image";
import { courseDetailsHero } from "@/constants/dlc";
import { useGlobalState } from "@/lib/zustand";
import { useMediaQuery } from "usehooks-ts";

const LeftHeroDlc = () => {
  const { isActiveFloatDlc, setIsActiveFloatDlc } = useGlobalState(
    (state) => state
  );

  return (
    <>
      <div className="container lg:grid lg:grid-cols-3 space-y-12 ">
        <div className="   break-words space-y-6 col-span-2 container-hero-dlc ">
          <h2 className="font-semibold text-2xl  ">
            Welcome to <span className="font-bold">@supra-coder</span> Family
          </h2>
          <div className="space-y-4">
            <h3 className="text-3xl">Low Level Design BootCamp @SUPRA Batch</h3>
            <div className="fl-ic gap-4 text-lg">
              <div className="fl-ic gap-2 text-green-500 fill-green-500">
                <CiVideoOn size="20" />
                <span>50+ Lectures</span>
              </div>
              <div className="fl-ic gap-2 text-blue-500 fill-blue-500">
                <TbWorldWww size="20" />
                <span>50+ Lectures</span>
              </div>
              <div className="fl-ic gap-2 text-orange-500 fill-orange-500">
                <span>5.0</span>
                {Array.from({ length: 5 }, (_, i) => (
                  <FaStar size="20" key={i} />
                ))}
              </div>
            </div>
          </div>
        </div>
        <AnimatePresence>
          {!isActiveFloatDlc && (
            <motion.div
              className=" space-y-6 w-[360px] z-20  bg-dsaPrimary rounded-xl container-hero-dlc  lg:absolute top-24 right-8  p-4"
              variants={floatingHeroVars}
              {...floatingHeroMotionProps}
            >
              <Image
                src="https://i.pinimg.com/236x/7e/da/77/7eda771d2742bf25ca28d105315f11c2.jpg"
                alt="Responsibility"
                width={320}
                height={320}
                className=" rounded-xl mx-auto"
              />
              <div className="fl-ic gap-4">
                <span className=" text-white text-xl font-semibold">₹2700</span>
                <span className=" text-white/50 font-light">₹4800</span>
              </div>
              <p className="text-xl font-semibold text-white">
                This Course Includes :
              </p>
              <div className="space-y-1">
                {courseDetailsHero.map((course) => (
                  <div key={course}>
                    <p className=" text-white">{course}</p>
                  </div>
                ))}
              </div>
              <button className=" bg-primaryPurple w-full text-white  py-4 px-2 font-medium rounded-xl">
                Enrollment Closed
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default LeftHeroDlc;
