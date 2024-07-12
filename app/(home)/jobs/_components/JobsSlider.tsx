"use client";
import { instructorsDsa } from "@/constants/dsa";
import { useMotionValue } from "framer-motion";
import React, { useEffect, useState } from "react";
import JobSliderDlc from "./JobSliderDlc";
import { getAllJobs } from "@/services/jobs";
import { confirmDialog } from "primereact/confirmdialog";
const DRAG_BUFFER = 50;
const AUTO_SLIDE_INTERVAL = 5000;
const JobSlider = () => {
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
      <div className="lg:ml-6 lg:mr-20 sm:mb-20  sm:mt-10 md:p-4 rounded-xl myfonts">
            <JobSliderDlc />
      </div>
    </>
  );
};

export default JobSlider;
