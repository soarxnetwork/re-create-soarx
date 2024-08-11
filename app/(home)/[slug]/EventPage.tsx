"use client";
import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { registEventById } from "@/actions/registration";
import { toast } from "react-toastify";
import Image from "next/image";
import SoarXlogo1 from "../../../public/images/SoarX_Logo.png"; // Renamed to avoid duplicate imports
import SoarXlogo2 from "../../../public/images/Soarx-transparent-logo.png";
import { FaLinkedinIn, FaInstagram, FaBuilding } from "react-icons/fa";
import { SiGooglemeet } from "react-icons/si";
import { FaYoutube } from "react-icons/fa6";
import ProfileCircles from "./ProfileCircles";
import { v4 as uuidv4 } from "uuid";
import { useRouter } from "next/navigation";
import GoogleAdHeader from "@/components/googleAds";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";
import { ImWhatsapp } from "react-icons/im";
import { GrSubtractCircle } from "react-icons/gr";
import styles from "./Event.module.css";

interface User {
  id: string;
  username: string | null;
  password: string | null;
  phone: string | null;
  email: string | null;
  image: string | null;
}

function EventPage({ event, users }: { event: any; users: User[] }) {
  const { data: session } = useSession();
  const router = useRouter();
  const [isUserAlreadyRegistered, setIsUserAlreadyRegistered] = useState<boolean>(false);

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

  useEffect(() => {
    const IsAlreadyRegistered = async () => {
      if (!users[0]) {
        // toast.success("Please login to register for any event!");
      } else {
        const res = await registEventById(event?.id, users[0]?.id);
        setIsUserAlreadyRegistered(res?.alreadyRegistered || false);
      }
    };
    IsAlreadyRegistered();
  }, []);

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
      res?.error
        ? toast.error(res.message)
        : (setIsUserAlreadyRegistered(true), toast.success(res?.message));
    }
  }

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
    toast.error("Event has ended!");
  }

  return (
    <>
      <GoogleAdHeader />

      <div className="sm:mt-[20%] md:mt-[15%] lg:mt-[12%] md:mx-[15%] sm:mx-[10%] max-sm:mt-[120px] mx-[7%] ">
        <div className="flex justify-center max-[500px]:block ">
          <div className="lg:min-w-[300px] md:min-w-[200px] min-w-[150px] max-[500px]:max-w-[250px] mx-auto max-[500px]:mb-8 ">
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
                src={SoarXlogo1} // Use SoarXlogo1 to avoid conflicts
                alt="logo"
                className="w-[100px]"
                width={0}
                height={0}
              />
              <div className="flex items-center min-[500px]:max-md:space-x-4 space-x-8">
                <a
                  href="https://www.instagram.com/soarxnetwork"
                  className="my-auto"
                >
                  <FaInstagram
                    className="h-[20px]"
                    style={{ color: "#828282" }}
                  />
                </a>
                <a
                  href="https://www.linkedin.com/company/soarxnetwork/"
                  className="my-auto"
                >
                  <FaLinkedinIn className="h-[20px]" />
                </a>
              </div>
            </div>
          </div>

          <div className="pb-[100px] ml-[4%] md:ml-20 md:mr-20 lg:ml-36 lg:mr-36 xl:ml-[4%] xl:mr-2 xl:w-3/5 sm:max-md:ml-8">
            <h1 className="text-[1.2rem] sm:text-[1.4rem] md:text-[1.8rem] font-semibold lg:text-[2.4rem] leading-snug">
              {event?.title}
            </h1>
            <div className="flex mt-[25px]">
              <div className="h-[45px] w-[40px] border-[1px] border-[#b0aeae] rounded-lg text-center">
                <div className="bg-[#b0aeae] h-[20px] rounded-t-md text-[12px] font-semibold">
                  {event ? Month[event.date.getMonth()] : "NA"}
                </div>
                {event?.date.getDate()}
              </div>
              <div className="ml-[15px]">
                <div>
                  {event?.date
                    ? new Date(event.date).toLocaleDateString("en-IN", {
                        weekday: "long",
                      })
                    : ""}
                  , {event ? FullMonth[event.date.getMonth()] : "NA"} {event?.date.getDate()}
                </div>
                <div>
                  {event?.startTime
                    ? convertTo12HourFormat(event.startTime)
                    : ""}{" "}
                  to {event?.endTime ? convertTo12HourFormat(event.endTime) : ""} IST
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
                        <SiGooglemeet />
                      ) : (
                        <FaYoutube />
                      )}
                    </>
                  ) : (
                    <FaBuilding />
                  )}
                </div>
                {event?.location == "Online" && event.meeturl
                  ? detectLinkType(event.meeturl)
                  : event?.venue}
              </a>
            </div>
            <div className="mt-[20px] leading-relaxed">{event?.description}</div>
            <div className="mt-[20px] leading-relaxed">
              <h1 className="text-[1.2rem] sm:text-[1.4rem] md:text-[1.8rem] font-semibold lg:text-[2.4rem] leading-snug">
                Guest Speaker
              </h1>
              <div className="mt-[20px] flex items-center">
                <ProfileCircles users={users}/>
                <div className="ml-[30px]">
                  <p>{event?.speaker.name}</p>
                  <p>{event?.speaker.position}</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col mt-8 md:mt-12 xl:mt-16">
              {isUserAlreadyRegistered ? (
                <>
                  <button
                    className={`${styles.disabledBtn} px-4 py-2 cursor-default`}
                  >
                    Already Registered
                  </button>
                </>
              ) : (
                <button
                  onClick={RegisterUser}
                  className={`${styles.activeBtn} px-4 py-2`}
                >
                  Register
                </button>
              )}
              <button
                className="mt-4 px-4 py-2 border-[1px] border-[#828282] text-[#828282] rounded-md"
                onClick={EventEnded}
              >
                Event Ended
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EventPage;
