"use client";

import { FaStar } from "react-icons/fa6";
import { CiCircleCheck, CiVideoOn } from "react-icons/ci";
import { TbWorldWww } from "react-icons/tb";
import { AiFillThunderbolt } from "react-icons/ai";
import { AnimatePresence, motion } from "framer-motion";
import {
  floatingHeroMotionProps,
  floatingHeroVars,
} from "@/lib/framer-motion/dlc";
import Image from "next/image";
import { courseDetailsHero } from "@/constants/dlc";
import { useGlobalState } from "@/lib/zustand";
import { useMediaQuery } from "usehooks-ts";
import Link from "next/link";


const LeftHeroDlc = () => {
  const { isActiveFloatDlc, setIsActiveFloatDlc } = useGlobalState(
    (state) => state
  );

  return (
    <>
      <div className="lg:grid lg:grid-cols-3 myfonts space-y-12">
        <div className="break-words space-y-6 col-span-2 container-hero-dlc">
          <div className="flex flex-col gap-y-3">
            <p className="tex text-lg dark:text-white border-black border-2 w-fit pl-2 pr-2 border-opacity-20 text-red-800 font-medium rounded-sm">
              LIVE
            </p>
            
          </div>
          <div className="space-y-4">
             <h3 className="text-3xl font-semibold">
              Data Structures & Algorithms Cohort 1.0
            </h3> 
            <div className="fl-ic  gap-4 text-3xl font-semibold pr-4">
              (Beginner to Advance)
            </div>
          </div>
        </div>

        <AnimatePresence>
          {!isActiveFloatDlc && (
            <motion.div
              className="space-y-6 lg:w-[380px] bg-white dark:bg-gray-800 shadow-xl z-20  bg-neutral-9 border-dlc border border-opacity-20 border-black rounded-xl container-hero-dlc lg:absolute top-24 right-32  p-6"
              variants={floatingHeroVars}
              {...floatingHeroMotionProps}
            >
              <Image
                src="/images/card-dsa-live.png"
                alt="Responsibility"
                width={500}
                height={500}
                quality={100}
                className=" rounded-xl mx-auto"
                style={{
                  width: '100%',
                  height: 'auto',
                }}
              />
              <div className="fl-ic gap-4">
                <span className=" text-primaryPurple text-3xl font-semibold">
                  ₹999
                </span>
                <del className=" text-shark text-xl">₹2499</del>
              </div>
              <p className="text-xl font-semibold dark:text-white text-black">
                BONUS INCLUDES:
              </p>
              <div className="space-y-2">
                {courseDetailsHero.map((course) => (
                  <div key={course} className="fl-ic gap-2">
                    <span>
                      <AiFillThunderbolt size="28" fill="#9241D4" />
                    </span>
                    <p className=" text-black dark:text-white">{course}</p>
                  </div>
                ))}
              </div>
              <Link href="https://pages.razorpay.com/dsa-soarx">
                <button className="mt-4 signInbut hover:bg-purple-800 ease-in-out transition-all duration-300 w-full text-white  py-4 px-2 font-medium rounded-xl">
                  Enroll Now
                </button>
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default LeftHeroDlc;
