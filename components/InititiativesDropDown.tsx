import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { IoMdArrowDropdown } from "react-icons/io";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { FaPython, FaSalesforce } from "react-icons/fa";

const InitiativesDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hovered, setHovered] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event: any) => {
    // @ts-ignore
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef} className="relative w-full z-50 dark:text-white">
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

          {/* <li>
            <Link
              href="/java-bootcamp"
              className="block px-4 py-2 md:hover:text-primaryPurple"
            >
              <p className="flex gap-x-3 text-2xl">
                <Image
                  src="/images/online-learning.png"
                  alt="Java Bootcamp"
                  width={23}
                  height={23}
                  className="h py-0.5 "
                />
                <span className="text-2xl">2-Week Java Bootcamp</span>
              </p>
            </Link>
          </li> */}
          {/* <hr /> */}
          <li>
            <Link
              href="/python-bootcamp"
              className="block px-4 py-2 md:hover:text-primaryPurple"
            >
              <p className="flex items-center gap-x-3 text-2xl">
                <FaPython size={24} className="text-white " />
                <span className="text-2xl text-white">
                  5 Days Python Bootcamp
                </span>
              </p>
            </Link>
          </li>
          <hr />
          <li>
            <Link
              href="/salesforce-pioneers"
              className="block px-4 py-2 md:hover:text-primaryPurple"
            >
              <p className="flex  items-center gap-x-3 text-2xl">
                <FaSalesforce size={24} className="text-white" />
                <span className="text-2xl text-white">
                  Salesforce Training Program
                </span>
              </p>
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default InitiativesDropdown;
