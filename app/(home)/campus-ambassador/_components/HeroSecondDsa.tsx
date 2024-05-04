"use client";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import React, { useState } from "react";
import HeadingSecondDsa from "./HeadingSecondDsa";
import ButtonSecondDsa from "./ButtonSecondDsa";
import { TiDeleteOutline } from "react-icons/ti";

const montserrat = Montserrat({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

const HeroSecondDsa = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const [isOpenLeader, setOpenLeader] = useState(false);

  const toggleSelection = (): any => {
    setIsPopoverOpen(!isPopoverOpen);
  };

  const toggleModal = () => {
    setIsOpen(!isOpen);
    setIsPopoverOpen(false);
    document.body.classList.toggle("modal-open");
  };

  const toggleModalLeader = () => {
    setOpenLeader(!isOpenLeader);
    setIsPopoverOpen(false);
    document.body.classList.toggle("modal-open");
  };

  return (
    <article>
      <div className="container md:grid md:grid-cols-2 space-y-4 md:space-y-0 gap-4">
        {/* ! */}
        <div className=" space-y-4">
          <span
            className={`${montserrat.className} font-bold text-[#9241d4] text-xl`}
          >
            SoarX
          </span>
          <HeadingSecondDsa text="Represent your university as a SoarX Campus Ambassador" />
          <p className=" lg:text-lg text-base ">
            Becoming a SoarX Campus Ambassador helps pave the way towards
            professional success. Thats because it enables you to network with
            leading coders from across the world and enhance your leadership
            abilities. So, sign up today and be a key part of one of the world’s
            largest developer communities!
          </p>
          <a
            // href="#form"
            className="block py-2"
            onClick={toggleSelection}
            data-modal-toggle="crud-modal"
          >
            <ButtonSecondDsa text="Apply Now" />
          </a>
        </div>
        {/* ! */}

        {isPopoverOpen && (
          <div
            id="crud-modal"
            aria-hidden="true"
            className="fixed inset-0 z-50 overflow-y-auto overflow-x-hidden flex justify-center items-center bg-gray-800 bg-opacity-75"
          >
            <div className="relative left-32">
              <div className="flex gap-x-10">
                <div className="w-2/5">
                  <div className="relative bg-white rounded-lg shadow-md shadow-gray-600   dark:bg-gray-900">
                    <div className="flex flex-col items-center justify-between p-4 md:p-5 rounded-t dark:border-gray-600">
                      <div>
                        <div className="w-full flex pb-6">
                          <button
                            className="bg-gradient-to-r text-2xl from-purple-600 via-purple-500 to-purple-400 font-semibold text-transparent bg-clip-text"
                          >
                            Campus Leader
                          </button>
                          <button
                            onClick={toggleSelection}
                            type="button"
                            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                            data-modal-toggle="crud-modal"
                          >
                            <svg
                              className="w-3 h-3"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 14 14"
                            >
                              <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                              />
                            </svg>
                          </button>
                        </div>
                        <hr/>
                        <ul className="w list-disc pt-6 p-4 flex flex-col gap-y-4">
                     <li>hey Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam et quam suscipit dicta id eos quasi. Odit ab ex amet!
                      </li>
                      <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus ut praesentium, dolores consequatur officia excepturi voluptatibus, delectus porro tempora debitis quis tenetur dolore dolorem quos quas officiis distinctio quisquam reiciendis!
                      </li>
                      <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et accusamus itaque deleniti perferendis, doloribus tempore exercitationem voluptas, quisquam dolor alias aliquam velit similique ex cumque nihil blanditiis ipsam dolores officia!
                      </li>
                      <button onClick={toggleModal} className="px-8 font-bold py-3 signInbut text-white rounded-xl text-lg">Apply As Campus Leader</button>
                     </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="w-2/5">
                  <div className="relative bg-white rounded-lg shadow-md shadow-gray-600 dark:bg-gray-900">
                    <div className="flex flex-col items-center justify-between p-4 md:p-5 rounded-t dark:border-gray-600">
                      <div>
                        <div className="w-full flex pb-6">
                          <button
                            className="bg-gradient-to-r text-2xl from-purple-600 via-purple-500 to-purple-400 font-semibold text-transparent bg-clip-text"
                          >
                            Campus Ambassadar
                          </button>
                          <button
                            onClick={toggleSelection}
                            type="button"
                            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                            data-modal-toggle="crud-modal"
                          >
                            <svg
                              className="w-3 h-3"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 14 14"
                            >
                              <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                              />
                            </svg>
                          </button>
                        </div>
                          <hr />
                        <ul className="w list-disc pt-6 p-4 flex flex-col gap-y-4">
                          <li>
                            hey Lorem ipsum dolor, sit amet consectetur
                            adipisicing elit. Ullam et quam suscipit dicta id
                            eos quasi. Odit ab ex amet!
                          </li>
                          <li>
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Temporibus ut praesentium, dolores consequatur
                            officia excepturi voluptatibus, delectus porro
                            tempora debitis quis tenetur dolore dolorem quos
                            quas officiis distinctio quisquam reiciendis!
                          </li>
                          <li>
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Et accusamus itaque deleniti perferendis,
                            doloribus tempore exercitationem voluptas, quisquam
                            dolor alias aliquam velit similique ex cumque nihil
                            blanditiis ipsam dolores officia!
                          </li>
                          <button onClick={toggleModalLeader} className="px-8 font-bold py-3 signInbut text-white rounded-xl text-lg">
                            Apply As Campus Ambassadar
                          </button>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {isOpen && (
          <div
            id="crud-modal"
            aria-hidden="true"
            className="fixed inset-0 z-50 overflow-y-scroll overflow-x-hidden flex justify-center pt-24 bg-gray-800 bg-opacity-75 h-screen w-screen"
          >
            <div className="relative p-4 h-1/2 w-1/2">
              <div className="relative bg-white rounded-lg shadow outline-none dark:bg-gray-700 flex justify-center items-center">
                <div className="w-full">
                  <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                    <h3 className="bg-gradient-to-r text-2xl from-purple-600 via-purple-500 to-purple-400 font-semibold text-transparent bg-clip-text">
                      Campus Ambassador
                    </h3>
                    <button
                      onClick={toggleModal}
                      type="button"
                      className=""
                      data-modal-toggle="crud-modal"
                    >
                      <TiDeleteOutline className="text-4xl text-purple-400" />
                    </button>
                  </div>
                  <form className="p-4 md:p-5">
                    <div className="grid gap-4 mb-4 grid-cols-2">
                      <div className="col-span-2">
                        <label
                          htmlFor="name"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          id="name"
                          className="bg-gray-50 dark:border-0 outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-900 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                          placeholder="Type your name"
                        />
                      </div>
                      <div className="col-span-2">
                        <label
                          htmlFor="email"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          College Email ID
                        </label>
                        <input
                          type="email"
                          name="email"
                          id="email"
                          className="bg-gray-50 dark:border-0 outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-900 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                          placeholder="Type your college email ID"
                        />
                      </div>
                      <div className="col-span-2">
                        <label
                          htmlFor="college"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Name of the College
                        </label>
                        <input
                          type="text"
                          name="college"
                          id="college"
                          className="bg-gray-50 dark:border-0 outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-900 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                          placeholder="Type name of your college"
                        />
                      </div>
                      <div className="col-span-2">
                        <label
                          htmlFor="location"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Location of the College
                        </label>
                        <input
                          type="text"
                          name="location"
                          id="location"
                          className="bg-gray-50 dark:border-0 outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-900 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                          placeholder="Type location of your college"
                        />
                      </div>

                      <div className="col-span-2 flex  gap-x-28">
                        <div className="w-2/5">
                          <label
                            htmlFor="stream"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                          >
                            Stream
                          </label>
                          <input
                            type="text"
                            name="stream"
                            id="stream"
                            className="bg-gray-50 dark:border-0 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 outline-none block w-full p-2.5 dark:bg-gray-900 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            placeholder="Type your stream"
                          />
                        </div>
                        <div className="w-2/5 sm:w-auto">
                          <label
                            htmlFor="graduationYear"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                          >
                            Graduation Year
                          </label>
                          <select
                            id="graduationYear"
                            name="graduationYear"
                            className="bg-gray-50 dark:border-0 outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-900 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                          >
                            <option value="">Select graduation year</option>
                            {[...Array(9)].map((_, index) => (
                              <option key={index} value={2020 + index}>
                                {2020 + index}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div className="col-span-2">
                        <label
                          htmlFor="codingClub"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Are you a part of any coding club in your college?
                        </label>
                        <input
                          type="text"
                          name="codingClub"
                          id="codingClub"
                          className="bg-gray-50 dark:border-0 outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-900 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                          placeholder="Type your coding club"
                        />
                      </div>
                      <div className="col-span-2">
                        <label
                          htmlFor="cseStrength"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Strength of CSE/IT students in your college
                        </label>
                        <input
                          type="number"
                          name="cseStrength"
                          id="cseStrength"
                          className="bg-gray-50 dark:border-0 outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-900 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                          placeholder="Enter CSE/IT student count"
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      className=" font-semibold  h-[40px] signInbut text-white rounded-xl"
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        )}

{isOpenLeader && (
          <div
            id="crud-modal"
            aria-hidden="true"
            className="fixed inset-0 z-50 overflow-y-scroll overflow-x-hidden flex justify-center pt-24 bg-gray-800 bg-opacity-75 h-screen w-screen"
          >
            <div className="relative p-4 h-1/2 w-1/2">
              <div className="relative bg-white rounded-lg shadow outline-none dark:bg-gray-700 flex justify-center items-center">
                <div className="w-full">
                  <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                    <h3 className="bg-gradient-to-r text-2xl from-purple-600 via-purple-500 to-purple-400 font-semibold text-transparent bg-clip-text">
                      Campus Leader
                    </h3>
                    <button
                      onClick={toggleModalLeader}
                      type="button"
                      className=""
                      data-modal-toggle="crud-modal"
                    >
                      <TiDeleteOutline className="text-4xl text-purple-400" />
                    </button>
                  </div>
                  <form className="p-4 md:p-5">
                    <div className="grid gap-4 mb-4 grid-cols-2">
                      <div className="col-span-2">
                        <label
                          htmlFor="name"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          id="name"
                          className="bg-gray-50 dark:border-0 outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-900 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                          placeholder="Type your name"
                        />
                      </div>
                      <div className="col-span-2">
                        <label
                          htmlFor="email"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          College Email ID
                        </label>
                        <input
                          type="email"
                          name="email"
                          id="email"
                          className="bg-gray-50 dark:border-0 outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-900 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                          placeholder="Type your college email ID"
                        />
                      </div>
                      <div className="col-span-2">
                        <label
                          htmlFor="college"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Name of the College
                        </label>
                        <input
                          type="text"
                          name="college"
                          id="college"
                          className="bg-gray-50 dark:border-0 outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-900 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                          placeholder="Type name of your college"
                        />
                      </div>
                      <div className="col-span-2">
                        <label
                          htmlFor="location"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Location of the College
                        </label>
                        <input
                          type="text"
                          name="location"
                          id="location"
                          className="bg-gray-50 dark:border-0 outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-900 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                          placeholder="Type location of your college"
                        />
                      </div>

                      <div className="col-span-2 flex  gap-x-28">
                        <div className="w-2/5">
                          <label
                            htmlFor="stream"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                          >
                            Stream
                          </label>
                          <input
                            type="text"
                            name="stream"
                            id="stream"
                            className="bg-gray-50 dark:border-0 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 outline-none block w-full p-2.5 dark:bg-gray-900 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            placeholder="Type your stream"
                          />
                        </div>
                        <div className="w-2/5 sm:w-auto">
                          <label
                            htmlFor="graduationYear"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                          >
                            Graduation Year
                          </label>
                          <select
                            id="graduationYear"
                            name="graduationYear"
                            className="bg-gray-50 dark:border-0 outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-900 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                          >
                            <option value="">Select graduation year</option>
                            {[...Array(9)].map((_, index) => (
                              <option key={index} value={2020 + index}>
                                {2020 + index}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div className="col-span-2">
                        <label
                          htmlFor="codingClub"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Are you a part of any coding club in your college?
                        </label>
                        <input
                          type="text"
                          name="codingClub"
                          id="codingClub"
                          className="bg-gray-50 dark:border-0 outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-900 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                          placeholder="Type your coding club"
                        />
                      </div>
                      <div className="col-span-2">
                        <label
                          htmlFor="cseStrength"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Strength of CSE/IT students in your college
                        </label>
                        <input
                          type="number"
                          name="cseStrength"
                          id="cseStrength"
                          className="bg-gray-50 dark:border-0 outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-900 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                          placeholder="Enter CSE/IT student count"
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      className=" font-semibold  h-[40px] signInbut text-white rounded-xl"
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        )}

        <div>
          <Image
            src="/images/hero_section_campus_ambasadar-removebg-preview.png"
            alt="DSA"
            width={682}
            height={381}
            quality={100}
            className="object-contain w-[682px] ml-16 h-[381px] dark:brightness-200"
          />
        </div>
      </div>
    </article>
  );
};

export default HeroSecondDsa;
