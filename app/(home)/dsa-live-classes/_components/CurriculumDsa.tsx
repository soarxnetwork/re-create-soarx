"use client";
import { itemDropdown } from "@/constants/dsa";
import { useState } from "react";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { AnimatePresence, motion } from "framer-motion";

const CurriculumDsa = () => {
  const [isDropdown, setIsDropdown] = useState<Record<string, boolean>>({});
  const handleClick = (title: string) =>
    setIsDropdown({ ...isDropdown, [title]: !isDropdown[title] });

  return (
    <article className="container mx-auto space-y-8 py-12">
      <h3 className=" text-3xl font-bold text-center">
        Weekly Curriculum Java
      </h3>
      {itemDropdown.map((item) => {
        return (
          <motion.div
            layout
            className=" bg-dsaSecondary p-4 space-y-1"
            key={item.title}
          >
            <div
              className="justify-between flex items-center"
              onClick={() => handleClick(item.title)}
            >
              <h4 className=" font-semibold text-2xl">{item.title}</h4>
              <IoMdArrowDropdown size={32} />
            </div>
            {item.items.map((subItem) => {
              return (
                <motion.p
                  initial={{ height: 0 }}
                  animate={{
                    height: isDropdown[item.title] ? "auto" : 0,
                    visibility: isDropdown[item.title] ? "visible" : "hidden",
                  }}
                  transition={{ type: "spring" }}
                  key={subItem}
                >
                  {subItem}
                </motion.p>
              );
            })}
          </motion.div>
        );
      })}
    </article>
  );
};

export default CurriculumDsa;
