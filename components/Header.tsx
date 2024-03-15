"use client";
import React, {
  ChangeEventHandler,
  useCallback,
  useEffect,
  useState,
} from "react";
import { AiOutlineMail } from "react-icons/ai";
import Image from "next/image";
import Link from "next/link";
import { Fade as Hamburger } from "hamburger-react";
import { usePathname, useRouter } from "next/navigation";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Admin, User } from "@prisma/client";
import { Dropdown, DropdownChangeEvent } from "primereact/dropdown";
import { cn } from "@/lib/utils";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import HeaderDropdown from "./HeaderDropdown";
const Header = ({ admin }: User) => {
  const router = useRouter();
  const pathname = usePathname();
  const [isClient, setIsClient] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <header>
      <div className="container mt-6 ">
        <nav
          id="main-navbar"
          className="navbar rounded-lg h-[70px] mx-[60px]"
          style={{ paddingLeft: 16, paddingRight: 16 }}
        >
          <div className=" md:grid md:grid-cols-3 flex justify-between h-[70px]">
            <Link href={"/"}>
              <div className="header-img flex items-center  ">
                <Image
                  src={"/images/Soarx-transparent-logo.png"}
                  width={210}
                  height={100}
                  className=""
                  alt="Header Logo"
                />
              </div>
            </Link>

            <div
              className={
                showNavbar
                  ? "flex items-center side-nav-flex justify-between gap-60 "
                  : "flex items-center side-nav-flex justify-between gap-60"
              }
            >
              <div>
                <ul className="flex items-center nav-ul  text-lg text-black gap-8 font-medium">
                  <li
                    className={
                      pathname === "/"
                        ? "bg-[#9241d40d] rounded-md"
                        : "rounded-md"
                    }
                  >
                    <Link className=" hover:text-primaryPurple" href="/">
                      Home
                    </Link>
                  </li>
                  <li
                    className={
                      pathname.includes("/events")
                        ? "bg-[#9241d40d] rounded-md"
                        : "rounded-md"
                    }
                  >
                    <Link className=" hover:text-primaryPurple" href="/events">
                      Events
                    </Link>
                  </li>

                  <HeaderDropdown />

                  {admin === Admin.Superadmin && (
                    <li
                      className={
                        pathname.includes("/admin")
                          ? "bg-[#9241d40d] rounded-md"
                          : "rounded-md"
                      }
                    >
                      <Link className=" hover:text-primaryPurple" href="/admin">
                        Admin
                      </Link>
                    </li>
                  )}
                </ul>
              </div>
            </div>
            <div className="flex items-center justify-self-end">
              {isClient && (
                <>
                  <SignedOut>
                    <Link
                      href="/sign-in"
                      className="bg-[#9241d4] px-6 py-2 rounded-xl text-[#FFFFFF] hover:bg-[#AD47FF] md:block hidden font-semibold  "
                    >
                      Sign in
                    </Link>
                  </SignedOut>
                  <SignedIn>
                    <UserButton afterSignOutUrl="/" />
                  </SignedIn>
                  <div
                    className="mbl-bars"
                    onClick={() => setShowNavbar(!showNavbar)}
                  >
                    <Hamburger distance="md" size={25} />
                  </div>
                </>
              )}
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
