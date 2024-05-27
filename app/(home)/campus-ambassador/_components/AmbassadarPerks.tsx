import React from "react";

import { PiHandshakeLight } from "react-icons/pi";
const AmbassadarPerks = () => {
  return (
    <div className="flex w-full myfonts gap-y-8 flex-col items-center mt-10 mb-10 ml-9 pr-24">
      <div className="flex flex-col gap-y-6 items-center">
        <div className="text-4xl font-semibold">Whats in it for you</div>
        <div className="text-[#8919E4] font-medium cursor-pointer">
          {"Join our campus ambassador program and enjoy these amazing perks and incentives!".split("").map((child, idx) => (
            <span className={"hoverText font-medium"} key={idx}>
              {child}
            </span>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 dark:text-white  gap-5 gap-y-7">
        <div className="bg-[#FAF0F1] rounded-sm  flex flex-col p-4 gap-y-2 hover:cursor-pointer dark:bg-gray-800">
          <div className="flex gap-x-2">
            <p className="text-3xl">
              <PiHandshakeLight />
            </p>
            <p className="text-2xl font-medium">Certificate of Appreciation</p>
          </div>
          <p className="j text-xs font-light">
            You can receive a certificate of appreciation from SoarX, which can
            enhance your CV.
          </p>
        </div>

        <div className="bg-[#FFFDF5] rounded-sm flex flex-col p-4 gap-y-2 hover:cursor-pointer dark:bg-gray-800">
          <div className="flex gap-x-2">
            <p className="text-3xl">
              <PiHandshakeLight />
            </p>
            <p className="text-2xl font-medium">Mentorship</p>
          </div>
          <p className="j text-xs font-light">
          Collaborating with experienced engineering leaders can significantly enhance your work efficiency and growth.
          </p>
        </div>

        <div className="bg-[#FAF0F1] rounded-sm flex flex-col p-4 gap-y-2 hover:cursor-pointer dark:bg-gray-800">
          <div className="flex gap-x-2">
            <p className="text-3xl">
              <PiHandshakeLight />
            </p>
            <p className="text-2xl font-medium">Rewards</p>
          </div>
          <p className="j text-xs font-light">
          Earn rewards and recognition for your efforts as a campus ambassador.
          </p>
        </div>

        <div className="bg-[#FAF0F1] rounded-sm flex flex-col p-4 gap-y-2 hover:cursor-pointer dark:bg-gray-800">
          <div className="flex gap-x-2">
            <p className="text-3xl">
              <PiHandshakeLight />
            </p>
            <p className="text-2xl font-medium">Networking Opportunities</p>
          </div>
          <p className="j text-xs font-light">
          Connect with industry professionals and expand your network through our campus ambassador program.
          </p>
        </div>

        <div className="bg-[#FAF0F1] rounded-sm flex flex-col p-4 gap-y-2 hover:cursor-pointer dark:bg-gray-800">
          <div className="flex gap-x-2">
            <p className="text-3xl">
              <PiHandshakeLight />
            </p>
            <p className="text-2xl font-medium">Skills Development</p>
          </div>
          <p className="j text-xs font-light">
          Enhance your skills and gain valuable experience in marketing, communication, and leadership.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AmbassadarPerks;
