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
import Link from "next/link";

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
              <del className="text-shark ">₹4800</del>
            </div>
            <p className="text-xl font-semibold ">This Course Includes :</p>
            {courseDetailsHeroFloat.map((course) => (
              <p key={course} className=" ">
                {course}
              </p>
            ))}
            <Link href="https://pages.razorpay.com/dsa-soarx">
              <button className="bg-primaryPurple mt-4 hover:bg-purple-800 ease-in-out transition-all duration-300 w-full text-white  py-4 px-2 font-medium rounded-xl">
                Enroll Now
              </button>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default FloatingHero;
