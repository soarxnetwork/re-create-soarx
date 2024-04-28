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
            className="bg-border-dlc lg:block dark:bg-gray-800 bg-white shadow-xl border border-opacity-20 border-black hidden sticky top-32 p-4 bg-black-dlc z-10 -right-24  w-[360px]  h-[340px] text-black rounded-xl space-y-6"
            variants={floatingHeroVars}
            {...floatingHeroMotionProps}
          >
            <div className="fl-ic gap-4">
              <span className="text-3xl font-semibold text-primaryPurple">
                ₹999
              </span>
              <del className="text-shark text-2xl">₹2499</del>
            </div>
            <p className="text-xl font-semibold dark:text-white">This Course Includes :</p>
            {courseDetailsHeroFloat.map((course) => (
              <p key={course} className="dark:text-white">
                {course}
              </p>
            ))}
            <div>
            <Link href="https://pages.razorpay.com/dsa-soarx">
              <button className=" signInbut hover:bg-purple-800 ease-in-out transition-all duration-300 w-full text-white px-2 font-medium rounded-xl">
                Enroll Now
              </button>
            </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default FloatingHero;
