"use client";
import {
  faqAndCoursesMotionProps,
  faqAndCoursesVars,
} from "@/lib/framer-motion/dlc";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";

interface FaqItemProps {
  id: string;
  question: string;
  answer: string;
}

const FaqItem = ({ question, answer, id }: FaqItemProps) => {
  const [isOpen, setIsOpen] = useState<Record<string, boolean>>({});
  const handleToggle = (id: string) =>
    setIsOpen((prev) => ({ ...prev, [id]: !prev[id] }));

  return (
    <motion.div layout>
      <div
        className=" flex justify-between cursor-pointer space-y-2"
        onClick={() => handleToggle(id)}
      >
        <h6 className=" font-medium text-lg">{question}</h6>
        <span>
          <IoMdArrowDropdown
            size={24}
            className={cn(" rotate-0 transition-all duration-200", {
              "rotate-180": isOpen[id],
            })}
          />
        </span>
      </div>
      <AnimatePresence>
        {isOpen[id] && (
          <motion.div
            variants={faqAndCoursesVars}
            {...faqAndCoursesMotionProps}
            transition={{
              transition: { duration: 0.3 },
            }}
          >
            <p className="text-sm text-black/50 font-light">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default FaqItem;
