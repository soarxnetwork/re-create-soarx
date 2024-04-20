"use client";
import React, { useEffect } from "react";
import CourseDlc from "./CourseDlc";
import { courseDetails1, courseDetails2 } from "./CourseDetails";
import { useInView } from "react-intersection-observer";
import { useGlobalState } from "@/lib/zustand";

const CoursesDlc = () => {
  const [ref, inView] = useInView();
  const { setIsActiveFloatDlc } = useGlobalState((state) => state);

  useEffect(() => {
    if (inView) {
      setIsActiveFloatDlc(false);
    }
  }, [inView, setIsActiveFloatDlc]);
  return (
    <>
      <div
        className=" mr-5 ml-24 rounded-xl grid grid-cols-2 p-4 text-black gap-4 text-sm "
        ref={ref}
      >
        <CourseDlc courseDetails={courseDetails1} />
      </div>
      <div className="space-y-4 ml-24 mr-5">
        <h4 className="font-semibold text-3xl">This Course Includes</h4>
        <p className="text-base">
          Explore the comprehensive learning experience awaiting you on this
          course detail page. From fundamental concepts to advanced techniques,
          discover what you will learn and how it will propel your skills to new
          heights.
        </p>
      </div>
      <div className="grid grid-cols-2 p-4 ml-24 mr-6 text-black gap-4 text-sm ">
        <CourseDlc courseDetails={courseDetails2} />
      </div>
      <div className="space-y-4 ml-24">
        <h4 className="font-semibold text-3xl">Comprehensive Course Modules</h4>
        <p>
          Immerse yourself in a wealth of knowledge with our comprehensive
          course content.
        </p>
      </div>
    </>
  );
};

export default CoursesDlc;
