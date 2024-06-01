import React, { useState } from "react";
import Link from "next/link";
import { IoMdArrowDropdown } from "react-icons/io";
import { cn } from "@/lib/utils";
import Image from "next/image";

const InitiativesDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hovered, setHovered] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative w-full text-white">
      <button
        onClick={toggleDropdown}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="p-2"
      >
        <p className="flex items-center gap-x-2 text-2xl">
          Initiatives
          <IoMdArrowDropdown
            className={cn("rotate-0 transition-all duration-300", {
              "rotate-180": hovered,
            })}
          />
        </p>
      </button>
      {isOpen && (
        <ul className="absolute bg-[#570a95] dark:bg-gray-900 rounded-lg shadow-lg mt-2">
          <li>
            <Link
              href="/dsa-live-classes"
              className="block px-4 py-2 md:hover:text-primaryPurple hover:text-white rounded-t-lg"
            >
              <p className="flex gap-x-3 text-2xl">
                <Image
                  src="/images/online-learning.png"
                  alt="DSA_Course"
                  width={23}
                  height={23}
                  className="text-white"
                />
                DSA Live Classes
              </p>
            </Link>
          </li>
          <li>
            <Link
              href="/campus-ambassador"
              className="block px-4 py-2 md:hover:text-primaryPurple hover:text-white"
            >
              <p className="flex gap-x-3 text-2xl">
                <Image
                  src="/images/announcer.png"
                  alt="DSA_Course"
                  width={23}
                  height={23}
                />
                Campus Ambassadar Program
              </p>
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default InitiativesDropdown;
