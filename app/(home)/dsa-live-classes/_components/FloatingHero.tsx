"use client";
import { courseDetailsHero, courseDetailsHeroFloat } from "@/constants/dlc";
import Image from "next/image";
import React, { useEffect } from "react";
import { useGlobalState } from "@/lib/zustand";
import { AnimatePresence, motion } from "framer-motion";
import {
  floatingHeroMotionProps,
  floatingHeroVars,
} from "@/lib/framer-motion/dlc";

const FloatingHero = () => {
  const { isActiveFloatDlc, setIsActiveFloatDlc } = useGlobalState(
    (state) => state
  );

  return (
    <>
      <AnimatePresence>
        {isActiveFloatDlc && (
          <motion.div
            className=" bg-border-dlc lg:block hidden sticky top-24 p-4 bg-black-dlc z-10 -right-24  w-[360px]   h-[360px] text-white rounded-xl space-y-6"
            variants={floatingHeroVars}
            {...floatingHeroMotionProps}
          >
            <div className="fl-ic gap-4">
              <span className="  text-xl font-semibold text-primaryPurple">
                ₹2700
              </span>
              <span className="text-shark ">₹4800</span>
            </div>
            <p className="text-xl font-semibold ">This Course Includes :</p>
            {courseDetailsHeroFloat.map((course) => (
              <p key={course} className=" ">
                {course}
              </p>
            ))}
            <button className=" bg-primaryPurple w-full text-white  py-4 px-2 font-medium rounded-xl">
              Enrollment Closed
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default FloatingHero;
