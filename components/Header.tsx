"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Fade as Hamburger } from "hamburger-react";
import { usePathname, useRouter } from "next/navigation";
// import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Admin, User } from "@prisma/client";
import {Switch} from "@nextui-org/react";

import HeaderDropdown from "./HeaderDropdown";
import ButtonAuth from "./ButtonAuth";
import ThemeSwitcher from "./DarkThemes";
const Header = ({ admin }: User) => {
  const router = useRouter();
  const pathname = usePathname();
  const [isClient, setIsClient] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);
  // const [ShowHamBurgerItems, setShowHamBurgerItems] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, [admin]);
  // console.log(showNavbar);
  return (
    <header className="mt-4">
      <div className="custom-container">
        <nav id="main-navbar" className="navbar rounded-lg dark:border-0 dark:bg-gray-800">
          <div className=" md:grid md:grid-cols-3 flex justify-between ">
            <Link href={"/"}>
              <div className="header-img flex items-center  ">
                <Image
                  src={"/images/Soarx-transparent-logo.png"}
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="img-responsive dark:filter dark:invert dark:hue-rotate-180"
                  alt="Header Logo"
                />
              </div>
            </Link>

            <div
              className={
                showNavbar
                  ? "flex items-center side-nav-flex justify-between gap-60 m-auto"
                  : "flex items-center side-nav-flex justify-between gap-60 m-auto"
              }
            >
              <div>
                <ul className="flex items-center nav-ul  text-textColor dark:text-white  font-medium">
                  <li
                    className={
                      pathname === "/"
                        ? "bg-[#9241d40d] rounded-lg"
                        : "rounded-lg"
                    }
                  >
                    <Link className=" hover:text-primaryPurple hover:transition-all ease-in-out duration-300" href="/">
                      Home
                    </Link>
                  </li>
                  <li
                    className={
                      pathname.includes("/events")
                        ? "bg-[#9241d40d] rounded-lg"
                        : "rounded-lg"
                    }
                  >
                    <Link className=" hover:text-primaryPurple" href="/events">
                      Events
                    </Link>
                  </li>

                  <HeaderDropdown />

                  {admin ? (
                    admin !== Admin.User ? (
                      <>
                        <li
                          className={
                            pathname.includes("/admin")
                              ? "bg-[#9241d40d] rounded-lg"
                              : "rounded-lg"
                          }
                        >
                          <Link
                            className=" hover:text-primaryPurple"
                            href="/admin"
                          >
                            Admin
                          </Link>
                        </li>
                      </>
                    ) : null
                  ) : null}
                </ul>
              </div>
            </div>
            <div className="flex items-center gap-x-5 justify-self-end">
            <ThemeSwitcher/>
              <ButtonAuth />
              {isClient && (
                <>
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
