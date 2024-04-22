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
      <div>
        <div
          className="flex justify-between items-center cursor-pointer p-6"
          onClick={() => handleToggle(id)}
        >
          <h6 className="text-xl font-medium">{question}</h6>
          <span className="h-full">
            <IoMdArrowDropdown
              size={24}
              className={cn(
                "rotate-0 text-[#9241d4] transition-all duration-200",
                {
                  "rotate-180": isOpen[id],
                }
              )}
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
              <p className="text-black/50 text-base font-semibold pl-6 pb-2">{answer}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default FaqItem;
