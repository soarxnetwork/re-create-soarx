"use client";
import React, { useState, useRef, useEffect } from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { TiArrowSortedDown } from "react-icons/ti";

const ButtonAuth = () => {
  const { data: session } = useSession();
  const [isOpen, setIsOpen] = useState(false);
  // console.log(session);
  const dropdownRef = useRef(null);

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
    <>
    <div ref={dropdownRef} className="relative w-full">
      {session?.user ? (
        <div>
          <div className="flex items-center gap-x-2 text-2xl hover:cursor-pointer">
            <span onClick={() => setIsOpen(!isOpen)} className="flex items-center gap-x-1 text-md font-medium">
              {" "}
              <TiArrowSortedDown
                className={`w-5 h-5 transition-transform duration-200 ${
                  isOpen ? "animate-moveDown" : ""
                }`}
              />
              {session.user.image && (
                <div className="w-8 h-8">
                  <img
                    src={session.user.image}
                    alt="Profile"
                    className="rounded-full w-full h-full object-cover"
                  />
                </div>
              )}
            </span>
          </div>

          {isOpen && (
            <div
              className="absolute right-0 w-56 mt-6 dark:shadow-xl bg-[#9335e0] dark:shadow-black  origin-top-right  rounded-md shadow-lg ring-1 ring-black dark:bg-gray-800  ring-opacity-5 focus:outline-none transform transition duration-200 ease-in-out opacity-0 translate-y-2"
             
              style={{
                animation: isOpen
                  ? "fadeIn 0.2s ease-in-out forwards"
                  : "fadeOut 0.2s ease-in-out forwards",
              }}
            >
              <div
                className="py"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="options-menu"
              >
                <Link
                  href="/profile"
                  className="block px-4 py-2 lg:text-md text-white border-white border-b-2 dark:border-black  dark:hover:bg-gray-900 hover:bg-purple-500 font-medium"
                  role="menuitem"
                  prefetch={true}
                >
                  Profile
                </Link>
                <button
                  onClick={() => signOut()}
                  className="block w-full text-left px-4 text-white  py-2 lg:text-md  dark:hover:bg-gray-900 hover:bg-purple-500 font-medium"
                  role="menuitem"
                >
                  Logout
                </button>
              </div>
            </div>
          )}
        </div>
      ) : (
        <>
          <div className="space-x-2 mb-3 md:mb-0">
            <Link href="/sign-in" className="signInbut bg-purple-900">
              Sign In
            </Link>
          </div>
        </>
      )}
    </div>
    </>
  );
};

export default ButtonAuth;
