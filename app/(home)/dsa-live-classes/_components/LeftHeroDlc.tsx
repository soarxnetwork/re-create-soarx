"use client";

import { FaStar } from "react-icons/fa6";
import { CiCircleCheck, CiVideoOn } from "react-icons/ci";
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
import Link from "next/link";

const LeftHeroDlc = () => {
  const { isActiveFloatDlc, setIsActiveFloatDlc } = useGlobalState(
    (state) => state
  );

  return (
    <>
      <div className=" lg:grid lg:grid-cols-3 space-y-12 ">
        <div className="   break-words space-y-6 col-span-2 container-hero-dlc ">
          <h2 className="font-semibold text-2xl lg:pt-0 pt-16    ">
            Welcome to <span className="font-bold text-purple-500">Soarx</span> Family
          </h2>
          <div className="space-y-4">
            <h3 className="text-3xl">Low Level Design BootCamp Batch</h3>
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
              className=" space-y-6 lg:w-[380px]  z-20  bg-neutral-9 border-dlc border rounded-xl container-hero-dlc  lg:absolute top-20 right-8  p-6"
              variants={floatingHeroVars}
              {...floatingHeroMotionProps}
            >
              <Image
                src="/images/itasha.jpg"
                alt="Responsibility"
                width={320}
                height={320}
                className=" rounded-xl mx-auto"
              />
              <div className="fl-ic gap-4">
                <span className=" text-primaryPurple text-xl font-semibold">
                  ₹2700
                </span>
                <del className=" text-shark ">₹4800</del>
              </div>
              <p className="text-xl font-semibold text-white">
                This Course Includes :
              </p>
              <div className="space-y-2">
                {courseDetailsHero.map((course) => (
                  <div key={course} className="fl-ic gap-2">
                    <span>
                      <CiCircleCheck size="28" fill="#9241D4" />
                    </span>
                    <p className=" text-white">{course}</p>
                  </div>
                ))}
              </div>
             <Link href="https://pages.razorpay.com/dsa-soarx">
             <button className="bg-primaryPurple mt-4 hover:bg-purple-800 ease-in-out transition-all duration-300 w-full text-white  py-4 px-2 font-medium rounded-xl">
                Enroll Now
              </button></Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default LeftHeroDlc;
