"use client";
import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { registEventById } from "@/actions/registration";
import { toast } from "react-toastify";
import Image from "next/image";
import SoarXlogo from "../../../public/images/SoarX_Logo.png";
import { FaLinkedinIn } from "react-icons/fa";
import { SiGooglemeet } from "react-icons/si";
import { FaInstagram } from "react-icons/fa";
import { FaBuilding } from "react-icons/fa";
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
import { CheckUserAlreadyRegistered, isUserRegisteredWithEvent } from "@/services/registration";
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
  const [isUserAlreadyRegistered, setIsUserAlreadyRegistered] =
    useState<boolean>(false);

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

  // console.log(event);
  // console.log(users);
  useEffect(() => {
    const IsAlreadyRegistered = async () => {
      // console.log("Session is: ", session?.user);
      // console.log("Event Id is: ", event.id)
      if (!session?.user.id) {
        // toast.success("Please login to register for any event!");
      } else {
        const res = await CheckUserAlreadyRegistered(event.id, session?.user.id);
        // console.log("The response is: ", res);
        setIsUserAlreadyRegistered(res.status || false);
      }
    };

    const timer = setTimeout(() => {
      IsAlreadyRegistered();
    }, 500); // 2000 milliseconds = 2 seconds

    // Cleanup the timeout if the component unmounts before the timeout completes
    return () => clearTimeout(timer);
  }, [session, event]);

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
    toast.error("Event has been ended!!");
  }

  // console.log("User Excits cleint", isUserAlreadyRegistered)
  return (
    <>
      <GoogleAdHeader />

      <div className="mt-36 w-full">
        <div className="flex flex-col xl:flex-row justify-center items-center xl:items-start w-full max-[500px]:block">
          <div className="">
            <Image
              src={event?.imageUrl} // Insert the image source
              alt="poster"
              className="rounded-[20px] shadow-2xl dark:shadow-gray-700 shadow-gray-600"
              width={370}
              height={380}
            />
            <div className="pt-8 pl-4 pr-4 font-medium pb-2">
              <p className="pl-4 pb-3 hidden xl:block">Hosted By</p>
              <hr className="border-1 dark:border-gray-700 border-gray-300 hidden xl:block" />
              <div className="xl:flex justify-between pt-5 hidden">
                <div className="flex items-center gap-x-3 ">
                  <p className={`  ${event.hostImage ? "flex" : "hidden"}`}>
                    {event.hostImage && (
                      <img
                        src={event.hostImage}
                        alt="logo"
                        className="w-[40px] rounded-full"
                        width={0}
                        height={0}
                      />
                    )}
                  </p>
                  <p
                    className={`border-1 rounded-3xl bg-gray-100 ${
                      !event.hostImage ? "flex" : "hidden"
                    }`}
                  >
                    {
                      <Image
                        src={SoarXlogo}
                        alt="logo"
                        className="w-[40px] rounded-md"
                        width={0}
                        height={0}
                      />
                    }
                  </p>
                  {event?.hostName || "SoarX"}
                </div>
                <div className="flex items-center min-[500px]:max-md:space-x-4 space-x-8">
                  <Link
                    href={
                      event.hostInstgramId ||
                      "https://www.instagram.com/soarxnetwork"
                    }
                    className=" my-auto"
                  >
                    <FaInstagram className="h-[20px] text-purple-400 transition-transform hover:rotate-180 duration-300  hover:scale-110" />
                  </Link>

                  <Link
                    href={
                      event.hostLinkedinId ||
                      "https://www.linkedin.com/company/soarxnetwork/"
                    }
                    className="my-auto  "
                  >
                    <FaLinkedinIn className="h-[20px] text-blue-500 transition-transform hover:rotate-180 duration-300  hover:scale-110" />
                  </Link>
                </div>
              </div>
            </div>

            {users.length > 3 ? (
              <>
                <div className="pt-6 hidden xl:block font-semibold text-[14px] border-b-[1px] border-[#a8a8a8] pb-2">
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
          <div className="pb-[100px] ml-[4%] md:ml-20 md:mr-20 lg:ml-36 lg:mr-36  xl:ml-[4%] xl:mr-2 xl:w-3/5 sm:max-md:ml-8">
            <h1 className=" text-[1.2rem] sm:text-[1.4rem] md:text-[1.8rem] font-semibold lg:text-[2.4rem] leading-snug ">
              {event?.title}
            </h1>
            <div className="flex mt-[25px]">
              <div className="h-[45px] w-[40px]  border-[1px] border-[#b0aeae] rounded-lg text-center">
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
                  IST
                </div>
              </div>
            </div>
            <div className="mt-4 flex">
              <a
                href={event?.meeturl}
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
            <div className=" mt-[5%] rounded-lg shadow-md pb-4 xl:mr-28">
              <div className="rounded-t-md py-2 bg-[#F4F2FB] dark:bg-gray-900 font-semibold text-[#8919E4] dark:text-purple-500 text-[18px] flex items-center pl-4 mt-5">
                {new Date() > event?.date ? (
                  <div className="flex gap-x-2 items-center">
                    <GrSubtractCircle />
                    Registration Closed
                  </div>
                ) : (
                  <div>Registration</div>
                )}
              </div>

              <div className="flex justify-center mt-[4%] mb-[5%]">
  {new Date() > event?.date ? (
    // Event has ended
    !isUserAlreadyRegistered ? (
      <button
        disabled
        onClick={EventEnded}
        className="text-left pl-4 text-wrap pr-2 font-medium dark:font-normal"
      >
        This event is not currently taking registrations. You may contact the host or join the Whatsapp Group.
      </button>
    ) : (
      <div className="flex flex-col gap-y-5 w-full items-center">
        <div>Thank You for Joining</div>
        <div>We hope you enjoyed the event!</div>
      </div>
    )
  ) : (
    // Event is upcoming
    <div className="flex flex-col gap-y-5 w-full items-center">
      {!isUserAlreadyRegistered ? (
        <>
          <div className="text-center text-wrap text-[1.1rem] px-2">
            Welcome! To join the event, please register below.
          </div>
          <div className="w-full flex justify-center">
            {event?.redirectionwhileRegister ? (
              <Link href={event?.RedirectionLink} target="_blank">
                <button className="w-full Event-reg-button">Redirect</button>
              </Link>
            ) : (
              <button onClick={RegisterUser} className="w-full Event-reg-button">
                Register
              </button>
            )}
          </div>
        </>
      ) : (
        <div className="pr-4 text-left text-wrap w-full pl-4">
          <div className="text-2xl pb-2 font-semibold text-left text-wrap">You&apos;re In</div>
          <div className="text-base text-left text-wrap font-medium">
            A confirmation email has been sent to {session?.user.email || "your registered Email"}.
          </div>
        </div>
      )}
    </div>
  )}
</div>

            </div>
            <div className="xl:border-l-[3px] border-[#C2A1F4] border-dashed mt-10 xl:mr-28">
              <div className="lg:ml-[3%] font-semibold text-[#8919E4]  text-[20px]">
                About Event
                <hr className="dark:border-gray-600 border-gray-300 mt-3" />
              </div>
              <article className="mt-5 ml-3 mr-3 text-wrap ">
                {event.description && (
                  <div
                    className={styles.dynamicContent}
                    dangerouslySetInnerHTML={{ __html: event.description }}
                  />
                )}

                <p className="text-base sm:text-large"> <br /> 
                  For more queries and event updates, join the SoarX Network on{" "}
                  <Link
                    href="https://chat.whatsapp.com/FCwHXkhoOwaJkjlyzRq1RG"
                    className="text-green-500 text-large"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="flex items-center font-semibold gap-x-1">
                      <ImWhatsapp />
                      Whatsapp <MdArrowOutward />
                    </span>
                  </Link>
                </p>
              </article>
            </div>
            <div className="pt-8 pl-4 pr-4 font-medium pb-2">
              <p className="pb-3 text-[14px] block xl:hidden">Hosted By</p>
              <hr className="border-1 dark:border-gray-700 border-gray-300 block xl:hidden" />
              <div className="xl:hidden justify-between pt-4 flex">
                <div className="flex items-center gap-x-3 ">
                  <p
                    className={`border-1  ${
                      event.hostImage ? "flex" : "hidden"
                    }`}
                  >
                    {event.hostImage && (
                      <img
                        src={event.hostImage}
                        alt="logo"
                        className="w-[40px] rounded-md"
                        width={0}
                        height={0}
                      />
                    )}
                  </p>
                  <p
                    className={`border-1 rounded-3xl bg-gray-100 ${
                      !event.hostImage ? "flex" : "hidden"
                    }`}
                  >
                    {
                      <Image
                        src={SoarXlogo}
                        alt="logo"
                        className="w-[40px] rounded-md"
                        width={0}
                        height={0}
                      />
                    }
                  </p>
                  {event?.hostName || "SoarX"}
                </div>
                <div className="flex items-center min-[500px]:max-md:space-x-4 space-x-8">
                  <Link
                    href={
                      event.hostInstgramId ||
                      "https://www.instagram.com/soarxnetwork"
                    }
                    className=" my-auto"
                  >
                    <FaInstagram className="h-[20px] text-purple-400 transition-transform hover:rotate-180 duration-300  hover:scale-110" />
                  </Link>

                  <Link
                    href={
                      event.hostLinkedinId ||
                      "https://www.linkedin.com/company/soarxnetwork/"
                    }
                    className="my-auto  "
                  >
                    <FaLinkedinIn className="h-[20px] text-blue-500 transition-transform hover:rotate-180 duration-300  hover:scale-110" />
                  </Link>
                </div>
              </div>
            </div>
            {users.length > 3 ? (
              <>
                <div className="pt-6 block xl:hidden font-semibold text-[14px] border-b-[1px] border-[#a8a8a8] pb-2">
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
        </div>
      </div>
    </>
  );
}
export default EventPage;
