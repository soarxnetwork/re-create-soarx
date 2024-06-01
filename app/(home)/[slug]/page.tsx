"use client";
import React, { useEffect, useState } from "react";
import { getEventBySlug } from "@/services/events";
import Image from "next/image";
import SoarXlogo from "../../../public/images/Soarx-transparent-logo.png";
import { FaXTwitter } from "react-icons/fa6";
import { SiGooglemeet } from "react-icons/si";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaBuilding } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { useSession } from "next-auth/react";
import { Event } from "@prisma/client";
import { registEventById } from "@/actions/registration";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

function Page({ params }: { params: { slug: string } }) {
  const [event, setEvent] = useState<any>(null);
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    const fetchEventData = async () => {
      try {
        const eventData = await getEventBySlug(params.slug);
        setEvent(eventData);
      } catch (error) {
        console.error("Error fetching event data:", error);
      }
    };
    fetchEventData();
  }, [params.slug]);

  async function RegisterUser() {
    if (!session) {
      router.push('/sign-in');
      // alert("Please login to register for and event!");
    } else if (
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
      console.log(session.user);
      router.push('/profile');
      // alert("Please Complete your profile to register for the event!");
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
    // Split the time string into hours and minutes
    const [hours, minutes] = timeString.split(":");

    // Convert hours from string to number
    let hour = parseInt(hours, 10);

    // Determine AM/PM based on hour value
    const period = hour >= 12 ? "PM" : "AM";

    // Convert hour to 12-hour format
    hour = hour % 12 || 12; // Convert 0 to 12 for 12-hour format

    // Format the time in 12-hour format with leading zero for minutes
    return `${hour}:${minutes.padStart(2, "0")} ${period}`;
  }

  function detectLinkType(link: string): string {
    if (link.match(/^https:\/\/meet\.google\.com\/[a-zA-Z0-9_-]+$/)) {
      return "Google Meet";
    } else if (
      link.match(
        /^https?:\/\/(?:www\.)?youtube\.com\/watch\?v=([a-zA-Z0-9_-]+)$/
      ) ||
      link.match(/^https?:\/\/youtu\.be\/([a-zA-Z0-9_-]+)$/)
    ) {
      return "YouTube";
    } else {
      return "Unknown";
    }
  }

    

  return (
    <>
      <div className="mt-36">
          <div className="flex xl:pl-28 flex-col items-center">
           <div className="flex flex-col xl:flex-row xl:p-7 gap-x-10 justify-center">
           <div className="flex flex-col justify-center items-center">
              <Image
                src={event?.imageUrl} // Insert the image source
                alt="poster"
                className="rounded-[20px] sm:w-[460px] md:w-[530px] xl:w-[700px]"
                width={360}
                height={360}
              />
              <div className="flex gap-x-2 pt-4 items-center justify-center pb-4">
                <div className="font-semibold text-2xl">Hosted by</div>
                <div className="company  flex gap-x-2 justify-center items-center">
                  <Image
                    src={SoarXlogo}
                    alt="logo"
                    className="w-[70px] text-2xl sm:w-[100px] dark:filter dark:invert dark:hue-rotate-180"
                    width={0}
                    height={0}
                  />
                  {/* <FaInstagram className="text-2xl" />
                  <FaXTwitter className="text-2xl" /> */}
                </div>
              </div>
            </div>
            <div className="pl-8 sm:pr-4">
              <h1 className="text-3xl font-medium sm:text-[2.4rem] xl:leading-normal">
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
                    GMT+5:30
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
                <a className="flex items-center ml-10 cursor-pointer">
                  <div className="border-[1px] border-[#b0aeae] p-[12px] rounded-lg mr-4">
                    <FaWhatsapp />
                  </div>{" "}
                  WhatsApp
                </a>
              </div>
              <div className="sm:mt-[5%] pt-4 sm:pt-0 min-h-fit pb-10">
                {/* <div className="rounded-t-md h-[40px] bg-[#F4F2FB] font-semibold text-[#8919E4] text-[18px] lg:flex lg:items-center pl-4 hidden">
                Registration
              </div>
              <div className="mt-[3%] hidden lg:block text-center text-[1.1rem]">
                Welcome! To join the event, please register below.
              </div> */}
                <div className="flex relative pt-4 sm:pt-0">
                  <button onClick={RegisterUser} className="Event-reg-button">
                    Register
                  </button>
                </div>
              </div>
            </div>
           </div>

            <div className="pl-8 pb-14 xl:pr-28">
              <div className="font-semibold text-[#bd6dff] xl:text-3xl  text-[20px]">
                About Event
              </div>
              <article className="mt-[2%] pr-3 text-2xl xl:leading-snug">
                {/* <p className="">🚀 During the session, we’ll tackle three array problems, ranging from easy  to hard. Whether you’re a beginner or an experienced coder, this event promises something for everyone.</p><br/><br/>
               <p className="">Learn from industry experts as they dive into the world of arrays and share their insights. Our dynamic speakers include:</p><br/><br/>
               <p className=""><b>Deepak Kumar</b> (SDE, Amazon, and Ex-Paytm)<br/>
                               <b>Niket Thakur</b> (SDE, InsuranceDekho, and Ex-Amazon)</p><br/><br/>
               <p className="">This demo is your chance to: <br/><br/>
               <b>Experience the teaching style </b>of our expert instructors. <br/>
               <b>See firsthand</b> how we approach DSA problem-solving.<br/>
               <b>Get a sneak peek </b>of the comprehensive curriculum offered in our
               upcoming <b> 2.5-month DSA Live Classes Initiative!</b>
               </p><br/><br/>
               <p className=""><b>Ready to take your coding skills to the next level?</b> <br/><br/>
               Master Data Structures & Algorithms with our structured learning program to equip you for coding challenges.
               </p><br/><br/> */}
                {DESC}
                <p className="">
                  <b>Register for the FREE Demo Class now!</b> <br /> <br />
                  For more queries and event updates, join the SoarX Network on
                  WhatsApp:{" "}
                  <a
                    href="https://chat.whatsapp.com/Lo86odRitWe6EBSeXSAkrX"
                    className="text-green-500"
                    target="blank"
                  >
                    https://chat.whatsapp.com/Lo86odRitWe6EBSeXSAkrX
                  </a>{" "}
                </p>
              </article>
            </div>
          </div>
        </div>
    </>
  );
}

export default Page;
