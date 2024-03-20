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
        className="bg-primaryPurple rounded-xl grid grid-cols-2 p-4 text-white gap-4 text-sm "
        ref={ref}
      >
        <CourseDlc courseDetails={courseDetails1} />
      </div>
      <div className="space-y-4">
        <h4 className="font-semibold">This Course Includes</h4>
        <p>
          Explore the comprehensive learning experience awaiting you on this
          course detail page. From fundamental concepts to advanced techniques,
          discover what you will learn and how it will propel your skills to new
          heights.
        </p>
      </div>
      <div className="bg-primaryPurple rounded-xl grid grid-cols-2 p-4 text-white gap-4 text-sm ">
        <CourseDlc courseDetails={courseDetails2} />
      </div>
      <div className="space-y-4">
        <h4 className="font-semibold">Comprehensive Course Modules</h4>
        <p>
          Immerse yourself in a wealth of knowledge with our comprehensive
          course content.
        </p>
      </div>
    </>
  );
};

export default CoursesDlc;
