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
    <article className="container mx-auto space-y-8">
      <h3 className=" text-3xl font-bold text-center">ALPHA PLUS CURRICULUM</h3>
      {itemDropdown.map((item) => {
        return (
          <motion.div
            layout
            className=" bg-dsaSecondary p-4 space-y-4 "
            key={item.title}
          >
            <div
              className="justify-between flex items-center"
              onClick={() => handleClick(item.title)}
            >
              <h4 className=" font-bold text-xl">{item.title}</h4>
              <IoMdArrowDropdown size={32} />
            </div>
            <AnimatePresence>
              {isDropdown[item.title] &&
                item.items.map((subItem) => {
                  return (
                    <motion.div key={subItem}>
                      <p>{subItem}</p>
                    </motion.div>
                  );
                })}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </article>
  );
};

export default CurriculumDsa;
