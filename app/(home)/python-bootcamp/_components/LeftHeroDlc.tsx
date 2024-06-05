"use client";
import { AiFillThunderbolt } from "react-icons/ai";
import { AnimatePresence, motion } from "framer-motion";
import {
  floatingHeroMotionProps,
  floatingHeroVars,
} from "@/lib/framer-motion/dlc";
import Image from "next/image";
import { pythonCourseHero } from "@/constants/dlc";
import { useGlobalState } from "@/lib/zustand";
import { useMediaQuery } from "usehooks-ts";
import Link from "next/link";

const LeftHeroDlc = () => {
  const { isActiveFloatDlc, setIsActiveFloatDlc } = useGlobalState(
    (state) => state
  );

  return (
    <>
      <div className="lg:grid lg:grid-cols-3 myfonts space-y-12 pl-7 md:pl-20 md:pr-28 sm:pl-16 sm:pr-16 pr-7">
        <div className="break-words  2xl:ml-7 lg:mr-40 space-y-6 col-span-2">
          <div className="flex flex-col gap-y-3">
            <p className="text-lg dark:text-white border-black border-2 w-fit pl-2 pr-2 border-opacity-20 text-red-800 font-medium rounded-sm">
              LIVE
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-[25px] lg:text-4xl leading-normal lg:leading-relaxed sm:leading-normal sm:text-3xl font-semibold 2xl:text-5xl">
            
            {"5-Day Python Bootcamp".split("").map((child, idx) => (
            <span className={"hoverText"} key={idx}>
              {child}
            </span>
          ))}
            </h3>
            <h3 className="text-[18px] lg:text-3xl text-wrap leading-normal sm:text-[25px] font-semibold 2xl:mr-28 2xl:text-4xl">
            
            {"(From Basics to Advanced)".split("").map((child, idx) => (
            <span className={"hoverText"} key={idx}>
              {child}
            </span>
          ))}
            </h3>
          </div>
        </div>

        <AnimatePresence>
          {!isActiveFloatDlc && (
            <motion.div
              className="space-y-6 2xl:mr-14  lg:w-[380px] bg-white dark:bg-gray-800 shadow-xl z-20  bg-neutral-9 border-dlc border border-opacity-20 border-black rounded-xl container-hero-dlc lg:absolute top-24 right-32  p-6"
              variants={floatingHeroVars}
              {...floatingHeroMotionProps}
            >
              <Image
                src="/images/python_bootcamp.png"
                alt="Python BootCamp"
                width={600}
                height={600}
                quality={100}
                className=" rounded-xl mx-auto"
                style={{
                  width: "100%",
                  height: "auto",
                }}
              />
              <div className="fl-ic gap-4">
                <span className=" text-primaryPurple text-3xl font-semibold">
                  ₹99
                </span>
                <del className=" text-shark text-xl">₹399</del>
              </div>
              <p className="text-2xl font-semibold dark:text-white text-black">
                BONUS INCLUDES:
              </p>
              <div className="space-y-2">
                {pythonCourseHero.map((course) => (
                  <div key={course} className="fl-ic gap-2">
                    <span>
                      <AiFillThunderbolt size="28" fill="#9241D4" />
                    </span>
                    <p className=" text-black dark:text-white">{course}</p>
                  </div>
                ))}
              </div>
              <Link href="https://pages.razorpay.com/python-pinnacle">
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
