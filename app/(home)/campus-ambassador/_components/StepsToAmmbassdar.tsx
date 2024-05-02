import React from "react";
import { SlCalender } from "react-icons/sl";
import { CgProfile } from "react-icons/cg";
import { GoCodeReview } from "react-icons/go";
const StepsToAmmbassdar = () => {
  return (
    <div className="w-full flex flex-col items-center gap-y-14 pt-6 pb-10 pl-7 pr-12">
      <div className="text-3xl font-semibold">
        Become a <span className="text-purple-600">SoarX</span> Campus
        Ambassador in 3 simple steps
      </div>
      <div className="flex gap-x-7 w-full justify-between">
        <div className="flex gap-x-4 w-1/3 hover:scale-105 ease-in-out duration-300 hover:cursor-pointer shadow-lg dark:shadow-xl dark:shadow-gray-800 border-t-1 dark:border-t-0 rounded-md p-4 items-center">
          <p className="text-4xl text-purple-600">
            <SlCalender />
          </p>
          <p className="text-xl">
            Fill in the form with all your details.
          </p>
          <p className="text-5xl text-purple-600 font-bold">1</p>
        </div>

        <div className="flex gap-x-4 w-1/3 hover:scale-105 ease-in-out duration-300 hover:cursor-pointer shadow-lg dark:shadow-xl dark:shadow-gray-800 dark:border-t-0 border-t-1 rounded-md p-4 items-center">
          <p className="text-4xl text-purple-600">
            <CgProfile />
          </p>
          <p className="text-xl pr-7">Take the assessment.</p>
          <p className="text-5xl text-purple-600 font-bold">2</p>
        </div>

        <div className="flex gap-x-4 w-1/3 hover:scale-105 ease-in-out duration-300 hover:cursor-pointer shadow-lg border-t-1 rounded-md p-4 items-center dark:shadow-xl dark:shadow-gray-800 dark:border-t-0">
          <p className="text-4xl text-purple-600">
            <GoCodeReview />
          </p>
          <p className="text-xl">
            You are officially a SXECA if you pass the test!
          </p>
          <p className="text-5xl text-purple-600 font-bold">3</p>
        </div>
      </div>
    </div>
  );
};

export default StepsToAmmbassdar;
