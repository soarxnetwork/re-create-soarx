"use client";
import { instructorsDsa } from "@/constants/dsa";
import { useMotionValue, motion } from "framer-motion";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const DRAG_BUFFER = 50;
const AUTO_SLIDE_INTERVAL = 5000;

const InstructorsDsa = () => {
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

  // TODO

  return (
    <article className="py-12  relative overflow-x-hidden ">
      <motion.div
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
      >
        {instructorsDsa.map((instructor) => {
          return (
            <motion.div
              key={instructor.title}
              className="sm:grid sm:grid-cols-2  w-full shrink-0 px-12 items-center gap-6 space-y-6"
            >
              <Image
                src={instructor.image}
                alt="Instructor"
                width={508}
                height={508}
                className="rounded-xl"
              />
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">{instructor.title}</h3>
                <p>{instructor.description}</p>
                <p>{instructor.subDescription}</p>
                <p>{instructor.logos}</p>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
      <div className="flex items-center justify-center pt-8 gap-4">
        <button
          className="btn-arrow-dsa"
          onClick={prevInstructor}
          disabled={instructorIndex === 0}
        >
          <FaArrowLeft color="#9241D4" size="20" />
        </button>
        <button
          className="btn-arrow-dsa"
          onClick={nextInstructor}
          disabled={instructorIndex === instructorsDsa.length - 1}
        >
          <FaArrowRight color="#9241D4" size="20" />
        </button>
      </div>
    </article>
  );
};

export default InstructorsDsa;
