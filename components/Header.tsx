"use client";
import React, { useCallback, useEffect, useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import Image from "next/image";
import Link from "next/link";
import { Fade as Hamburger } from "hamburger-react";
import { usePathname, useRouter } from "next/navigation";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Admin, User } from "@prisma/client";
import { Dropdown, DropdownChangeEvent } from "primereact/dropdown";

const Header = ({ admin }: User) => {
  const router = useRouter();
  const pathname = usePathname();
  const [isClient, setIsClient] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);
  const [selectedDsa, setSelectedDsa] = useState<null | typeof dsa>(null);

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

  const handleChange = (e: DropdownChangeEvent) => {
    setSelectedDsa(e.value);
    router.push(e.value.code);
  };

  const actualDsa = dsa.find((d) => d.code === pathname);

  useEffect(() => {
    if (pathname.includes(actualDsa?.code!)) {
      setSelectedDsa(null);
    }
  }, [pathname, actualDsa]);

  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <header>
      <div className="mt-4   px-24">
        <nav id="main-navbar" className="navbar container rounded-2xl h-[70px]" style={{paddingLeft:16, paddingRight: 16}}>
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
                <ul className="flex items-center nav-ul font-normal text-lg text-black gap-8">
                  <li
                    className={
                      pathname === "/"
                        ? "bg-[#9241d40d] rounded-md"
                        : "rounded-md"
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

                  <Dropdown
                    value={selectedDsa}
                    onChange={handleChange}
                    options={dsa}
                    optionLabel="name"
                    placeholder={actualDsa?.name || "Initiatives"}
                    className="w-full md:w-14rem"
                  />

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
            </div>
            <div className="flex items-center justify-self-end">
              {isClient && (
                <>
                  <SignedOut>
                    <Link
                      href="/sign-in"
                      className="bg-[#9241d4] px-6 py-2 rounded-xl text-[#FFFFFF] hover:bg-[#AD47FF] md:block hidden  "
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
