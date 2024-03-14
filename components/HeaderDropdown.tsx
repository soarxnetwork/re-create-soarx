"use client";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { RxDropdownMenu } from "react-icons/rx";
import { IoMdArrowDropdown } from "react-icons/io";
import { truncateWord } from "@/utils/truncateWord";

const dsa = [
  {
    name: "DSA Live Classes",
    code: "/dsa-live-classes",
  },
  {
    name: "Campus Ambassador Program",
    code: "/campus-ambassador",
  },
];

const HeaderDropdown = () => {
  const pathname = usePathname();
  const [_, setSelectedDsa] = useState<null | typeof dsa>(null);
  const [hovered, setHovered] = useState(false);

  const actualDsa = dsa.find((d) => d.code === pathname);

  useEffect(() => {
    if (pathname.includes(actualDsa?.code!)) {
      setSelectedDsa(null);
    }
  }, [pathname, actualDsa]);
  return (
    <li
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative w-full h-full "
    >
      <div>
        <div className="relative flex items-center gap-2">
          <p
            className={cn("select-none", {
              "text-primaryPurple": hovered,
            })}
          >
            {actualDsa?.name ? truncateWord(actualDsa.name, 12) : "Initiatives"}
          </p>
          <span>
            <IoMdArrowDropdown
              className={cn("rotate-0 transition-all duration-300", {
                "rotate-180": hovered,
              })}
            />
          </span>
        </div>
      </div>
      <AnimatePresence>
        {hovered && (
          <motion.div
            className="container-dropdown-nav"
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
            }}
            exit={{ opacity: 0 }}
            transition={{ type: "spring" }}
          >
            {dsa.map((d) => {
              return (
                <div key={d.name}>
                  <Link
                    href={d.code}
                    className={cn(
                      "hover:text-primaryPurple transition-all ease-in-out duration-200 text-sm",
                      {
                        "text-primaryPurple": pathname.includes(d.code),
                      }
                    )}
                  >
                    {d.name}
                  </Link>
                </div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
};

export default HeaderDropdown;
