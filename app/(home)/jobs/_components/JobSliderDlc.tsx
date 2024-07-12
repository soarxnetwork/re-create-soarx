"use client";
// import Swiper from 'swiper';
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { instructorsDsa } from "@/constants/dsa";
import { Pagination, Navigation } from "swiper/modules";
import { useMotionValue, motion, MotionValue } from "framer-motion";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { getAllJobs } from "@/services/jobs";
import { JobSchema } from "@/schema/JobSchema";
const JobSliderDlc = () => {
  const [jobs, setJobs] = useState<any>([]);

  useEffect(() => {
    const fetchJobs = async () => {
      const allJobs = await getAllJobs();
      console.log(allJobs);
      setJobs(allJobs);
    };
    fetchJobs();
  }, []);

  console.log(jobs)

  return (
    <article className="my-8 bg-red-100 sm:mr-4 md:h-[1000px] lg:h-[500px] relative overflow-x-hidden">
    {/* <motion.div
      className=" active:cursor-grabbing flex items-center"
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      style={{
        x: dragX,
        cursor: isDragging ? "grabbing" : "grab",
      }}
      animate={{
        translateX: `-${instructorIndex * 100}%`,
      }}
      transition={{ type: "spring" }}
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
    > */}
    <div className="h-full">
      <Swiper
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        className="h-full"
      >
        {jobs.map((instructor: any) => {
          return (
            <SwiperSlide
              key={instructor.title}
              className="w-full h-full shrink-0"
            >
              {/* <h3 className="text-2xl font-semibold">{instructor.title}</h3> */}
              <div className="flex items-center justify-evenly gap-2">
                {/* {instructor.logos.map((logo) => (
                <Image
                  key={logo}
                  src={logo}
                  alt="Instructor"
                  width={102}
                  height={102}
                  className="rounded-xl"
                />
              ))} */}
              </div>
              <div className="flex flex-col lg:flex-row h-full items-center gap-x-4">
                <div className="lg:w-1/2 w-full lg:h-full h-1/2 flex">
                  <Image
                    src={instructor.imageUrl}
                    alt="Instructor"
                    width={312}
                    height={312}
                    className="sm:mx-auto lg:w-auto pl-4 pr-5 w-full sm:ml-3.5 rounded-sm"
                    quality={100}
                  />
                </div>
                <div className="space-y-4 mt-6 sm:mt-12 lg:w-1/2 w-full pl-5 pr-5 sm:pl-0 sm:pr-0 h-1/2 sm:h-full flex flex-col justify-center">
                  <p className="text-[#7043E3] sm:mt-2 mt-4 text-base font-semibold border-2 w-fit p-2 border-gray-500 dark:border-2 dark:border-gray-200 border-opacity-20 dark:border-opacity-30">
                    About The Instructor
                  </p>
                  <h3 className="text-3xl font-semibold">
                    {instructor.title}
                  </h3>
                  <p className="font-medium flex-wrap">{instructor.description}.</p>
                  <p className="font-medium">{instructor.subDescription}</p>
                  <div className="flex items-center gap-x-6">
                    
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
    {/* </motion.div> */}
  </article>
  );
};

export default JobSliderDlc;
