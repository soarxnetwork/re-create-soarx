"use client";
import React from "react";
import { useSession } from "next-auth/react";
import { toast } from "react-toastify";
import Image from "next/image";
import SoarXlogo from "@/public/images/SoarX Logo.png";
import { FaLinkedinIn } from "react-icons/fa";
import { SiGooglemeet } from "react-icons/si";
import { FaInstagram } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { FaYoutube } from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";
import { MdOutlineAssuredWorkload } from "react-icons/md";
import { MdAttachMoney } from "react-icons/md";
import { FaPersonChalkboard } from "react-icons/fa6";
import { GiSkills } from "react-icons/gi";
import { FaCriticalRole } from "react-icons/fa";

function JobPage({ event }: { event: any }) {
  const { data: session } = useSession();
  // console.log(event);

  const DESC = event?.description;
  interface StringtoString {
    [key: string]: string;
  }

  const title = event?.title || "";

  return (
    <>
      <div className=" sm:mt-[20%] md:mt-[15%] lg:mt-[12%] md:mx-[15%] sm:mx-[10%] max-sm:mt-[120px] mx-[7%] ">
        <div className="flex justify-center max-[500px]:block ">
          <div className=" lg:min-w-[400px] md:min-w-[200px] min-w-[150px] max-[700px]:max-w-[400px] mx-auto max-[500px]:mb-8 ">
            <Image
              src={event?.imageUrl} // Insert the image source
              alt="poster"
              className="rounded-[20px] hover:scale-105 ease-in-out duration-300 hover:cursor-pointer"
              width={500}
              height={500}
            />
            <div className="pt-6 font-semibold border-b-[1px] border-[#a8a8a8] pb-2">
              Promoted by
            </div>
            <div className="company flex justify-between">
              <Image
                src={SoarXlogo}
                alt="logo"
                className="w-[80px]"
                width={0}
                height={0}
              />
              <div className="flex items-center min-[500px]:max-md:space-x-4 space-x-8">
                <a
                  href="https://www.instagram.com/soarxnetwork"
                  className=" my-auto "
                >
                  <FaInstagram
                    className="h-[20px]"
                    style={{ color: "#828282" }}
                  />
                </a>

                <a
                  href="https://www.linkedin.com/company/soarxnetwork/"
                  className="my-auto  "
                >
                  <FaLinkedinIn
                    className="h-[20px]"
                    style={{ color: "#828282" }}
                  />
                </a>
              </div>
            </div>

           <div className="rounded-xl  border-2  dark:border-gray-400 border-black">
           <table className="text-lg w-full">
              <tr className="border-b dark:border-gray-400 border-black">
                <td className="border-r dark:border-gray-400 border-black p-2">
                  <div className="flex gap-x-3 items-center">
                    <MdOutlineAssuredWorkload />
                    Company
                  </div>
                </td>
                <td className="p-2">
                  <div>{event.companyName}</div>
                </td>
              </tr>

              <tr className="border-b dark:border-gray-400 border-black">
              <td className="border-r dark:border-gray-400 border-black p-2">
                  <div className="flex gap-x-3 items-center">
                    <MdAttachMoney />
                    Salary
                  </div>
                </td>
                <td className="p-2">
                  <div>{event.salary}</div>
                </td>
              </tr>

              <tr className="border-b dark:border-gray-400 border-black">
              <td className="border-r dark:border-gray-400 border-black p-2">
                  <div className="flex gap-x-3 items-center">
                    <FaPersonChalkboard />
                    Experience
                  </div>
                </td>
                <td className="p-2">
                  <div>{event.experience}</div>
                </td>
              </tr>

              <tr className="border-b dark:border-gray-400 border-black">
              <td className="border-r dark:border-gray-400 border-black p-2">
                  <div className="flex gap-x-3 items-center">
                    <GiSkills />
                    Skills
                  </div>
                </td>
                <td className="p-2">
                  <div>{event.skills}</div>
                </td>
              </tr>

              <tr className="border-b dark:border-gray-400 border-black">
              <td className="border-r dark:border-gray-400 border-black p-2">
                  <div className="flex gap-x-3 items-center">
                    <FaCriticalRole />
                    Job Role
                  </div>
                </td>
                <td className="p-2">
                  <div>{event.jobRole}</div>
                </td>
              </tr>
            </table>
           </div>
          </div>
          <div className="pb-[100px] ml-[4%]   sm:max-md:ml-8">
            <h1 className=" text-[1.2rem] sm:text-[1.4rem] md:text-[1.8rem] lg:text-[2.4rem] max-md:leading-tight leading-8 dark:text-purple-600 text-purple-700">
            {title.split("").map((child: any, idx: any) => (
            <span className={"hoverText font-semibold"} key={idx}>
              {child}
            </span>
          ))}
            </h1>

            <div className="flex mt-[25px]">
              <div className="h-[45px] flex justify-center items-center w-[40px] border-[1px] border-[#b0aeae] rounded-lg">
                <div className="">
                  <SlCalender />
                </div>
              </div>
              <div className="ml-[15px]">
                <div className="text-red-400 font-medium">
                  Last Date to Apply
                </div>
                <div className="">{event.lastDateToApply}</div>
              </div>
            </div>
            <div className="mt-4 flex gap-x-4 items-center">
              <div className="h-[45px] flex text-2xl justify-center items-center w-[40px] border-[1px] border-[#b0aeae] rounded-lg">
                <IoLocationSharp />
              </div>
              <div>{event.location}</div>
            </div>
            <div className=" mt-[5%] rounded-lg shadow-lg pb-4">
              <button className="Event-reg-button">Apply Now</button>
            </div>
            <div className="border-l-[3px] border-[#C2A1F4] border-dashed mt-[3%]">
              <div className="ml-[3%] font-semibold text-[#8919E4]  text-[20px]">
                About Job
              </div>
              <article className="mt-[2%] ml-[3%] text-[17.5px] sm:max-md:text-[12px] max-md:text-[8px]">
                {DESC}
                <p className="">
                  <br />
                  <span className="font-semibold">
                    For more queries and event updates, join the SoarX Network
                    on WhatsApp:
                  </span>{" "}
                  <a
                    href="https://chat.whatsapp.com/Lo86odRitWe6EBSeXSAkrX"
                    className="text-green-500 text-[8px] lg:text-[16px] md:text-[14px] sm:text-[10px]"
                    target="blank"
                  >
                    https://chat.whatsapp.com/Lo86odRitWe6EBSeXSAkrX
                  </a>{" "}
                </p>
              </article>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default JobPage;
