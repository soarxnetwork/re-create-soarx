"use client";
import React, { useEffect } from "react";
import CourseDlc from "./CourseDlc";
import {
  courseDetails2,
  javaCourseDetails,
  javaCourseDetails2,
  pythonCourseDetails,
  pythonCourseDetails2,
} from "./CourseDetails";
import { useInView } from "react-intersection-observer";
import { useGlobalState } from "@/lib/zustand";
import JavaDlc from "./JavaDlc";
import PythonDlc from "./JavaDlc";

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
      <div className="">
        <div className="2xl:mr-40 mb-8 lg:ml-24 sm:ml-6 sm:mr-3 lg:mr-5 font-semibold  text-3xl">
          {" "}
          Basic Course Details
        </div>
        <div
          className="2xl:mr-40 grid sm:grid-cols-2 grid-cols-1 sm:ml-5 sm:mr-4 lg:ml-24 lg:mr-24 gap-4 text-sm"
          ref={ref}
        >
          <CourseDlc courseDetails={pythonCourseDetails} />
        </div>
      </div>
      <div className="2xl:mr-40 space-y-4 lg:ml-24 sm:ml-6 sm:mr-3 lg:mr-5">
        <h4 className="font-semibold text-3xl">This Course Includes</h4>
        <p className="text-base">
          This course includes comprehensive lectures and hands-on exercises to
          enhance your understanding of Data Structures and Algorithms,
          preparing you to confidently tackle technical interviews.
        </p>
      </div>
      <div className="2xl:mr-40 grid sm:grid-cols-2 grid-cols-1 sm:ml-5 sm:mr-4 lg:ml-24 lg:mr-24 gap-4 text-sm ">
        <PythonDlc courseDetails={pythonCourseDetails2} />
      </div>
      <div className="space-y-4 pl-4 2xl:pl-1 lg:ml-24 2xl:mr-40">
        <h4 className="font-semibold  text-3xl">Daily Outline</h4>
        <p>
          Embark on a structured learning journey with weekly sessions covering
          essential concepts and practical problem-solving techniques.
        </p>
      </div>
    </>
  );
};

export default CoursesDlc;
