"use client";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { coursesModules } from "./CourseDetails";
import {
  faqAndCoursesMotionProps,
  faqAndCoursesVars,
} from "@/lib/framer-motion/dlc";
import { useInView } from "react-intersection-observer";
import { useGlobalState } from "@/lib/zustand";
import { useMediaQuery } from "usehooks-ts";

const CourseModules = () => {
  const [isOpen, setIsOpen] = useState<Record<string, boolean>>({});
  const handleToggle = (id: string) =>
    setIsOpen((prev) => ({ ...prev, [id]: !prev[id] }));

  const [ref, inView] = useInView();
  const { setIsActiveFloatDlc } = useGlobalState((state) => state);
  const matches = useMediaQuery("(min-width: 1024px");

  useEffect(() => {
    if (inView && matches) {
      setIsActiveFloatDlc(true);
    }
  }, [inView, setIsActiveFloatDlc, matches]);

  return (
    <motion.div
      layout
      className="bg-black-dlc rounded-xl p-4 text-black border-2 bg-gray-100 space-y-8 text-base  ml-24"
      ref={ref}
    >
      {coursesModules.map((course) => (
        <motion.div
          layout
          key={course.name}
          className={cn("space-y-0", {
            "space-y-4": isOpen[course.name],
          })}
        >
          <motion.button
            layout
            className="font-semibold fl-ic justify-between w-full "
            onClick={() => handleToggle(course.name)}
          >
            <span>{course.name}</span>
            <motion.span
              animate={{
                rotate: isOpen[course.name] ? 180 : 0,
                transition: { type: "spring" },
              }}
            >
              <RiArrowDropDownLine size="32" />
            </motion.span>
          </motion.button>
          <AnimatePresence>
            <div
              className={cn(" p-0 rounded-none", {
                "p-4 bg-border-dlc": isOpen[course.name],
                "rounded-xl bg-white": isOpen[course.name],
              })}
            >
              {isOpen[course.name] &&
                course.topics.map((topic) => (
                  <motion.div
                    key={topic.name}
                    variants={faqAndCoursesVars}
                    {...faqAndCoursesMotionProps}
                    transition={{
                      transition: { duration: 0.3 },
                    }}
                  >
                    <p>{topic.name}</p>
                    <p className="font-light text-white/50">{topic.duration}</p>
                  </motion.div>
                ))}
            </div>
          </AnimatePresence>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default CourseModules;
