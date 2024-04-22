"use client";
import { instructorsDsa } from "@/constants/dsa";
import { useMotionValue } from "framer-motion";
import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import InstructorDLc from "./InstructorDlc";
const DRAG_BUFFER = 50;
const AUTO_SLIDE_INTERVAL = 5000;
const InstructorsDlc = () => {
  const [instructorIndex, setInstructorIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const dragX = useMotionValue(0);

  const onDragStart = () => setIsDragging(true);
  const onDragEnd = () => {
    setIsDragging(false);
    const x = dragX.get();
    if (x <= -DRAG_BUFFER) {
      if (instructorIndex === instructorsDsa.length - 1) return;
      setInstructorIndex((prev) => prev + (1 % instructorsDsa.length));
    } else if (x >= DRAG_BUFFER) {
      if (instructorIndex === 0) return;
      setInstructorIndex((prev) => prev - (1 % instructorsDsa.length));
    }
  };

  const nextInstructor = () => {
    if (instructorIndex === instructorsDsa.length - 1) return;
    setInstructorIndex((prev) => prev + 1);
  };
  const prevInstructor = () => {
    if (instructorIndex === 0) return;
    setInstructorIndex((prev) => prev - 1);
  };

  return (
    <>
      <div className="ml-6 mr-20  p-4 rounded-xl">
        <div className="fl-ic gap-4">
          <div className="space-y-4">
            {/* <h4 className="font-semibold text-3xl">Our Instructors</h4> */}
            {/* <p>
              Discover brilliance in code with our expert instructors.
              Passionate mentors dedicated to fueling your coding journey at
              SoarX.
            </p> */}
          </div>
          <div className="fl-ic gap-4">
            {/* <button
              className=" bg-border-dlc rounded-full w-12 h-12 fl-ic justify-center"
              onClick={prevInstructor}
              disabled={instructorIndex === 0}
            >
              <FaArrowLeft size="20" className="fill-white" />
            </button>
            <button
              className=" bg-border-dlc rounded-full w-12 h-12 fl-ic justify-center"
              onClick={nextInstructor}
              disabled={instructorIndex === instructorsDsa.length - 1}
            >
              <FaArrowRight size="20" className="fill-white" />
            </button> */}
          </div>
        </div>
        <InstructorDLc
          onDragStart={onDragStart}
          onDragEnd={onDragEnd}
          isDragging={isDragging}
          dragX={dragX}
          instructorIndex={instructorIndex}
          setInstructorIndex={setInstructorIndex}
        />
      </div>
    </>
  );
};

export default InstructorsDlc;
