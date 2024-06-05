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
    <div className="relative w-full z-50 dark:text-white">
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
      {/* bg-[#570a95] */}
      {isOpen && (
        <ul className="absolute bg-custom rounded-lg shadow-lg mt-2">
          {/* <li>
            <Link
              href="/dsa-live-classes"
              className="block px-4 py-2 md:hover:text-primaryPurple hover:text-white rounded-t-lg"
            >
              <p className="flex gap-x-3">
                <Image
                  src="/images/online-learning.png"
                  alt="DSA_Course"
                  width={23}
                  height={23}
                  className="text-white w-[23px] py-0.5"
                />
                <span className="text-2xl">DSA Live Classes</span>
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
                  src="/images/online-learning.png"
                  alt="DSA_Course"
                  width={23}
                  height={23}
                  className=""
                />
                <span className="text-2xl">Campus Ambassadar Program</span>
              </p>
            </Link>
          </li> */}

          <li>
            <Link
              href="/python-bootcamp"
              className="block px-4 py-2 md:hover:text-primaryPurple"
            >
              <p className="flex gap-x-3 text-2xl">
                <Image
                  src="/images/online-learning.png"
                  alt="Python Bootcamp"
                  width={23}
                  height={23}
                  className="h py-0.5 "
                />
                <span className="text-2xl">5-Day Python Bootcamp</span>
              </p>
            </Link>
          </li>


        </ul>
      )}
    </div>
  );
};

export default InitiativesDropdown;
