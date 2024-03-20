"use client";
import { itemFaq } from "@/constants/dsa";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoMdArrowDropdown } from "react-icons/io";

const FaqDsa = () => {
  const [isActiveDropdown, setIsActiveDropdown] = useState<
    Record<string, boolean>
  >({});
  const handleIsActveDropdown = (title: string) =>
    setIsActiveDropdown((prev) => ({ ...prev, [title]: !prev[title] }));
  return (
    <article className=" py-12">
      <div className="container mx-auto space-y-8">
        <h3 className=" text-3xl font-bold text-center">
          FREQUENTLY ASKED QUESTIONS
        </h3>
        <div className=" space-y-4">
          {itemFaq.map((item) => (
            <motion.div
              layout
              key={item.title}
              className="bg-dsaSecondary p-4 rounded-xl "
            >
              <div
                className="justify-between flex items-center"
                onClick={() => handleIsActveDropdown(item.title)}
              >
                <h4 className=" font-bold text-xl">{item.title}</h4>
                <IoMdArrowDropdown size={32} />
              </div>
              <motion.p
                initial={{ height: 0 }}
                animate={{
                  height: isActiveDropdown[item.title] ? "auto" : 0,
                  visibility: isActiveDropdown[item.title]
                    ? "visible"
                    : "hidden",
                  transition: { type: "spring" },
                }}
              >
                {item.description}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </article>
  );
};

export default FaqDsa;
