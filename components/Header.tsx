"use client";
import React, { useEffect, useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import Image from "next/image";
import Link from "next/link";
import { Fade as Hamburger } from "hamburger-react";
import { usePathname } from "next/navigation";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Admin, User } from "@prisma/client";
const Header = ({ admin }: User) => {
  const pathname = usePathname();
  const [isClient, setIsClient] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <header>
      <div className="mt-6 pr-40">
        <nav id="main-navbar" className="navbar container rounded-lg ">
          <div className=" flex items-center justify-between">
            <Link href={"/"}>
              <div className="header-img flex items-center  ">
                <Image
                  src={"/images/SoarX Logo.png"}
                  width={0}
                  height={0}
                  className="img-header img-responsive"
                  sizes="100vw"
                  alt="Header Logo"
                />
                <span className="text-2xl font-semibold text-[#DAACFF]"> Soar<span className="text-[#9241d4]">X</span></span>
              </div>
              
            </Link>
            <div
              className="mbl-bars"
              onClick={() => setShowNavbar(!showNavbar)}
            >
              <Hamburger distance="md" size={25} />
            </div>
            <div
              className={
                showNavbar
                  ? "flex items-center side-nav-flex justify-between gap-52 bg-[#9241d40d]"
                  : "flex items-center side-nav-flex justify-between gap-52"
              }
            >
              <div>
                <ul className="flex items-center nav-ul font-normal text-lg text-black gap-8">
                  <li
                    className={
                      pathname === "/" ? "bg-[#9241d40d] rounded-md" : "rounded-md"
                    }
                  >
                    <Link href="/">Home</Link>
                  </li>
                  <li
                    className={
                      pathname.includes("/events")
                        ? "bg-[#9241d40d] rounded-md"
                        : "rounded-md"
                    }
                  >
                    <Link href="/events">Events</Link>
                  </li>
                  <li
                    className={
                      pathname.includes("/about")
                        ? "bg-[#9241d40d] rounded-md"
                        : "rounded-md"
                    }
                  >
                    <Link href="/about">About</Link>
                  </li>
                  <li
                    className={
                      pathname.includes("/dsa")
                        ? "bg-[#9241d40d] rounded-md"
                        : "rounded-md"
                    }
                  >
                    <Link href="/dsa">Dsa</Link>
                  </li>
                  {admin === Admin.Superadmin && (
                    <li
                      className={
                        pathname.includes("/admin")
                          ? "bg-[#9241d40d] rounded-md"
                          : "rounded-md"
                      }
                    >
                      <Link href="/admin">Admin</Link>
                    </li>
                  )}
                </ul>
              </div>
              {/* <div className="btn-primary rounded-md white flex items-center gap-2">
                <AiOutlineMail className="bg-transparent fill-white" />
                Contact Us
              </div> */}
              {isClient && (
                <>
                  <SignedOut>
                    <Link href="/sign-in" className="bg-[#9241d4] px-4 py-[4px] rounded-xl text-[#FFFFFF] hover:bg-[#AD47FF]">Sign in</Link>
                  </SignedOut>
                  <SignedIn>
                    <UserButton afterSignOutUrl="/" />
                  </SignedIn>
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
