import React from "react";
import { SlCalender } from "react-icons/sl";
import { CgProfile } from "react-icons/cg";
import { GoCodeReview } from "react-icons/go";
const StepsToAmmbassdar = () => {
  return (
    <div className="w-full flex flex-col items-center gap-y-14 pt-6 pb-10 pl-6 pr-5 md:pr-12 lg:pr-4 xl:pl-0 xl:pr-8 2xl:pl-7 2xl:pr-36">
      <div className="text-3xl md:text-4xl font-semibold">
        Become a <span className="text-purple-600">SoarXer</span> in 3 simple
        steps
      </div>
      <div className="flex flex-col lg:flex-row  gap-x-7 lg:gap-x-4 gap-y-12 lg:gap-y-0 w-full justify-between">
        <div className="flex justify-around lg:justify-normal gap-x-4 lg:w-1/3 hover:scale-105 ease-in-out   duration-300    hover:cursor-pointer shadow-lg dark:shadow-xl dark:shadow-gray-800 border-t-1 dark:border-t-0 rounded-md p-4 items-center">
          <p className="text-4xl text-purple-600">
            <SlCalender />
          </p>
          <p className="text-2xl">Application Submission</p>
          <p className="text-5xl text-purple-600 font-bold">1</p>
        </div>

        <div className="flex justify-around lg:justify-normal gap-x-4 hover:scale-105 ease-in-out duration-300 hover:cursor-pointer shadow-lg dark:shadow-xl dark:shadow-gray-800 dark:border-t-0 border-t-1 rounded-md p-4 items-center">
          <p className="text-4xl text-purple-600">
            <CgProfile />
          </p>
          <p className="text-xl">Interview (Telephonic/Google Meet)</p>
          <p className="text-5xl text-purple-600 font-bold">2</p>
        </div>

        <div className="flex justify-around lg:justify-normal gap-x-4  hover:scale-105 ease-in-out duration-300 hover:cursor-pointer shadow-lg border-t-1 rounded-md p-4 items-center dark:shadow-xl dark:shadow-gray-800 dark:border-t-0">
          <p className="text-4xl text-purple-600">
            <GoCodeReview />
          </p>
          <p className="text-xl">Selection and Offer Letter via Email</p>
          <p className="text-5xl text-purple-600 font-bold">3</p>
        </div>
      </div>
    </div>
  );
};

export default StepsToAmmbassdar;
