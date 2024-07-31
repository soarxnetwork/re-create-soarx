"use client";
import React, { useEffect } from "react";
import { useSession } from "next-auth/react";
import { registEventById } from "@/actions/registration";
import { toast } from "react-toastify";
import Image from "next/image";
import SoarXlogo from "../../../public/images/Soarx-transparent-logo.png";
import { FaLinkedinIn } from "react-icons/fa";
import { SiGooglemeet } from "react-icons/si";
import { FaInstagram } from "react-icons/fa";
import { FaBuilding } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import ProfileCircles from "./ProfileCircles";
import { useRouter } from "next/navigation";

interface User {
  id: string;
  username: string | null;
  password: string | null;
  phone: string | null;
  email: string | null;
  image: string | null;
}

function  EventPage({ event, users }: { event: any; users: User[] }) {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => storePathValues, [router]);

  function storePathValues() {
    const storage = globalThis?.sessionStorage;
    if (!storage) return;
    // Set the previous path as the value of the current path.
      const prevPath = storage.getItem("currentPath");
    storage.setItem("prevPath", prevPath as any);
    // Set the current path value by looking at the browser's location object.
    storage.setItem("currentPath", globalThis.location.pathname);
  }

  // console.log(session)
  async function RegisterUser() {
    if (!session) {
      toast.success("Please login to register for any event!");
    } else if (
      !session.user.id || 
      !session.user.email ||
      !session.user.username ||
      !session.user.college ||
      !session.user.gender ||                                     
      !session.user.phone ||
      !session.user.profession ||
      !session.user.city || 
      !session.user.country
    ) {
      toast.error("Please complete your profile to register for the event!");
      router.push("/profile");

    } else {
      const res = await registEventById(event.id, session.user.id);
      res?.error ? toast.error(res.message) : toast.success(res?.message);
    }
  }

  const DESC = event?.description;
  interface StringtoString {
    [key: string]: string;
  }
  const Month: StringtoString = {
    "0": "JAN",
    "1": "FEB",
    "2": "MAR",
    "3": "APR",
    "4": "MAY",
    "5": "JUN",
    "6": "JUL",
    "7": "AUG",
    "8": "SEP",
    "9": "OCT",
    "10": "NOV",
    "11": "DEC",
  };
  const FullMonth: StringtoString = {
    "0": "January",
    "1": "February",
    "2": "March",
    "3": "April",
    "4": "May",
    "5": "June",
    "6": "July",
    "7": "August",
    "8": "September",
    "9": "October",
    "10": "November",
    "11": "December",
  };

  function convertTo12HourFormat(timeString: string) {
    const [hours, minutes] = timeString.split(":");
    let hour = parseInt(hours, 10);
    const period = hour >= 12 ? "PM" : "AM";
    hour = hour % 12 || 12;
    return `${hour}:${minutes.padStart(2, "0")} ${period}`;
  }

  function detectLinkType(link: string): string {
    if (link.match(/^https:\/\/meet\.google\.com\/[a-zA-Z0-9_-]+$/)) {
      return "Google Meet";
    } else {
      return "YouTube";
    }
  }
  function EventEnded() {
    toast.error("Event has been ended!!");
  }

  return (
    <>
      <div className=" sm:mt-[20%] md:mt-[15%] lg:mt-[12%] md:mx-[15%] sm:mx-[10%] max-sm:mt-[120px] mx-[7%] ">
        <div className="flex justify-center max-[500px]:block ">
          <div className=" lg:min-w-[300px] md:min-w-[200px] min-w-[150px] max-[500px]:max-w-[250px] mx-auto max-[500px]:mb-8 ">
            <Image
              src={event?.imageUrl} // Insert the image source
              alt="poster"
              className="rounded-[20px]"
              width={500}
              height={500}
            />
            <div className="pt-6 font-semibold border-b-[1px] border-[#a8a8a8] pb-2">
              Hosted by
            </div>
            <div className="company flex justify-between">
              <Image
                src={SoarXlogo}
                alt="logo"
                className="w-[100px]"
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
            {users.length > 3 ? (
              <>
                <div className="pt-6 font-semibold text-[14px] border-b-[1px] border-[#a8a8a8] pb-2">
                  {String(users.length)}{" "}
                  {new Date() > event?.date ? <>Attended</> : <>Going</>}
                </div>
                <div className="pt-4">
                  {" "}
                  <ProfileCircles users={users} />{" "}
                </div>{" "}
              </>
            ) : (
              <></>
            )}
          </div>
          <div className="pb-[100px] ml-[4%]   sm:max-md:ml-8">
            <h1 className=" text-[1.2rem] sm:text-[1.4rem] md:text-[1.8rem] lg:text-[2.4rem] max-md:leading-tight leading-8 ">
              {event?.title}
            </h1>
            <div className="flex mt-[25px]">
              <div className="h-[45px] w-[40px] border-[1px] border-[#b0aeae] rounded-lg text-center">
                <div className="bg-[#b0aeae] h-[20px] rounded-t-md text-[12px] font-semibold">
                  {event ? Month[event.date.getMonth()] : <>NA</>}
                </div>
                {event?.date.getDate()}
              </div>
              <div className="ml-[15px]">
                <div className="">
                  {event?.date
                    ? new Date(event.date).toLocaleDateString("en-IN", {
                        weekday: "long",
                      })
                    : ""}
                  , {event ? FullMonth[event.date.getMonth()] : <> NA</>}{" "}
                  {event?.date.getDate()}
                </div>
                <div className="">
                  {event?.startTime
                    ? convertTo12HourFormat(event.startTime)
                    : ""}{" "}
                  to{" "}
                  {event?.endTime ? convertTo12HourFormat(event.endTime) : ""}{" "}
                  UTC/GMT+5:30
                </div>
              </div>
            </div>
            <div className="mt-4 flex">
              <a
                href={`${event?.meeturl}`}
                target="_blank"
                className="flex items-center cursor-pointer"
              >
                <div className="border-[1px] border-[#b0aeae] p-[12px] rounded-lg mr-4">
                  {event?.location == "Online" && event.meeturl ? (
                    <>
                      {detectLinkType(event.meeturl) == "Google Meet" ? (
                        <>
                          {" "}
                          <SiGooglemeet />{" "}
                        </>
                      ) : (
                        <>
                          <FaYoutube />
                        </>
                      )}
                    </>
                  ) : (
                    <FaBuilding />
                  )}
                </div>{" "}
                {event?.location == "Online" && event.meeturl ? (
                  <>{detectLinkType(event.meeturl)}</>
                ) : (
                  <>{event?.venue}</>
                )}
              </a>
            </div>
            <div className=" mt-[5%] rounded-lg shadow-lg pb-4">
              <div className="rounded-t-md py-2 bg-[#F4F2FB] font-semibold text-[#8919E4] text-[18px] flex items-center pl-4">
                Registration
              </div>
              <div className="mt-[3%] text-center text-[1.1rem] px-2">
                Welcome! To join the event, please register below.
              </div>
              <div className="flex justify-center mt-[2%] ">
                {" "}
                {new Date() > event?.date ? (
                  <button onClick={EventEnded} className="Event-reg-button">
                    Event Ended
                  </button>
                ) : (
                  <button onClick={RegisterUser} className="Event-reg-button">
                    Register
                  </button>
                )}
              </div>
            </div>
            <div className="border-l-[3px] border-[#C2A1F4] border-dashed mt-[3%]">
              <div className="ml-[3%] font-semibold text-[#8919E4]  text-[20px]">
                About Event
              </div>
              <article className="mt-[2%] ml-[3%] text-[17.5px] sm:max-md:text-[12px] max-md:text-[8px]">
                {DESC}
                <p className="">
                  <b>Register for the FREE Demo Class now!</b> <br /> <br />
                  For more queries and event updates, join the SoarX Network on
                  WhatsApp:{" "}
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
export default EventPage;
