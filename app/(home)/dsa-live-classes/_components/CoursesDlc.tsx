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
        className=" mr-24 ml-24 rounded-xl grid grid-cols-2 gap-4 text-sm "
        ref={ref}
      >
        <CourseDlc courseDetails={courseDetails1} />
      </div>
      <div className="space-y-4 ml-24 mr-5">
        <h4 className="font-semibold text-3xl">This Course Includes</h4>
        <p className="text-base">
        This course includes comprehensive lectures and hands-on exercises to enhance your understanding of Data Structures and Algorithms, preparing you to tackle technical interviews with confidence.
        </p>
      </div>
      <div className="grid grid-cols-2 ml-24 mr-24  gap-4 text-sm ">
        <CourseDlc courseDetails={courseDetails2} />
      </div>
      <div className="space-y-4 ml-24">
        <h4 className="font-semibold text-3xl">Weekly Outline</h4>
        <p>
        Embark on a structured learning journey with weekly sessions covering essential concepts and practical problem-solving techniques.
        </p>
      </div>
    </>
  );
};

export default CoursesDlc;
