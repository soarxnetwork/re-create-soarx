"use client"
import React, { useState } from 'react'
import { useSession } from 'next-auth/react';
import { toast } from 'react-toastify'
import { useRouter } from 'next/navigation';
import { TiDeleteOutline } from 'react-icons/ti';

function CampusApplyCard() {

    const { data: session } = useSession()
    const [isOpen, setIsOpen] = useState(false);
    const [isOpenLeader, setOpenLeader] = useState(false);
    const router = useRouter()


    const toggleModalAmbassador = () => {
        if (!isUserAllowToRegister()) return;
        setOpenLeader(!isOpenLeader);
      };
    
    const isUserAllowToRegister = () => {
        
        if (!session || !session.user) {
          toast.error("You need to login first to register");
          return router.push("/sign-in");
        }
        if (
          !session.user.id ||
          !session.user.email ||
          !session.user.username ||
          !session.user.image ||
          !session.user.phone ||
          !session.user.city ||
          !session.user.collegeName ||
          !session.user.degree ||
          !session.user.dob ||
          !session.user.name ||
          !session.user.skill ||
          !session.user.stream ||
          !session.user.yearOfPassing
        ) {
          toast.error("Please complete your profile first to register");
          return router.push("/profile")
        }
        return true;
      }
    
    const  toggleModalLeader = () => {
        if (!isUserAllowToRegister()) return;
        setIsOpen(!isOpen);
    }
  return (
    <div className='pb-10 pt-6' id='campus-apply-card'>
      <div className="flex flex-col gap-y-6 items-center">
        <div className="text-4xl font-semibold">Apply Now</div>
        <div className="text-[#8919E4] font-medium cursor-pointer">
        {"Empower yourself with our Campus Lead and Campus Ambassador programs.".split("").map((child, idx) => (
            <span className={"hoverText font-medium"} key={idx}>
              {child}
            </span>
          ))}
        
        </div>
      </div>
        <div
            id="crud-modal"
            aria-hidden="true"
            className="flex justify-center items-center w-full mt-12"
          >
            <div className="">
            <div className="flex items-stretch justify-evenly">
  <div className="w-2/5 flex flex-col">
    <div className="relative bg-white rounded-lg shadow-md shadow-gray-600 dark:bg-gray-900 flex-1">
      <div className="flex flex-col justify-between p-4 md:p-5 rounded-t dark:border-gray-600 h-full">
        <div>
          <div className="w-full flex pb-6">
            <button className="bg-gradient-to-r text-2xl from-purple-600 via-purple-500 to-purple-400 font-semibold text-transparent bg-clip-text">
              Chapter Leader Program
            </button>
          </div>
          <hr />
          <h5 className="font-bold mt-2">Duration: 1 Year</h5>
          <h6 className="font-bold mt-2">Roles & Responsibilities:</h6>
          <ul className="w list-disc p-4 flex flex-col gap-y-2">
            <li>Establish and effectively lead a SoarX chapter at your college.</li>
            <li>Form a core team by conducting interviews and selecting members.</li>
            <li>Organize and manage events, workshops, and hackathons on campus.</li>
            <li>Foster a tech community by engaging with students and organizing networking opportunities.</li>
            <li>Represent SoarX Network and build partnerships with industry professionals and organizations.</li>
          </ul>
        </div>
        <button onClick={toggleModalLeader} className="px-8 font-bold py-3 signInbut text-white rounded-xl text-lg mt-4">
          Apply As Campus Leader
        </button>
      </div>
    </div>
  </div>

  <div className="w-2/5 flex flex-col">
    <div className="relative bg-white rounded-lg shadow-md shadow-gray-600 dark:bg-gray-900 flex-1">
      <div className="flex flex-col justify-between p-4 md:p-5 rounded-t dark:border-gray-600 h-full">
        <div>
          <div className="w-full flex pb-6">
            <button className="bg-gradient-to-r text-2xl from-purple-600 via-purple-500 to-purple-400 font-semibold text-transparent bg-clip-text">
              Community Ambassador Program
            </button>
          </div>
          <hr />
          <h5 className="font-bold mt-2">Duration: 6 Months</h5>
          <h6 className="font-bold mt-2">Roles & Responsibilities:</h6>
          <ul className="w list-disc p-4 flex flex-col gap-y-2">
            <li>Promote SoarX events, workshops, and initiatives on campus.</li>
            <li>Engage with students and encourage participation in SoarX activities.</li>
            <li>Assist in organizing and coordinating events, both online and offline.</li>
            <li>Represent SoarX Network in a positive light and embody its values and mission.</li>
            <li>Provide feedback and suggestions for improving SoarX programs and initiatives.</li>
          </ul>
        </div>
        <button onClick={toggleModalAmbassador} className="px-8 font-bold py-3 signInbut text-white rounded-xl text-lg mt-4">
          Apply As Campus Ambassador
        </button>
      </div>
    </div>
  </div>
</div>

            </div>
          </div>
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
                      Campus Ambassadar
                    </h3>
                    <button
                      onClick={toggleModalAmbassador}
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
          
    </div>
  )
}

export default CampusApplyCard;