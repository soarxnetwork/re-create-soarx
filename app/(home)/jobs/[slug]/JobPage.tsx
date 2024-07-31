"use client";
import React, { useEffect, useRef, useState } from "react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { IoLocationSharp } from "react-icons/io5";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import GoogleAdSense from "@/components/googleAds";
import Link from "next/link";
import { getAllJobs } from "@/services/jobs";
import { Spinner } from "@nextui-org/react";
import { FaBriefcase } from "react-icons/fa";
import { MdOutlineHomeWork } from "react-icons/md";
import { PiExamFill } from "react-icons/pi";
import { FaLocationDot, FaMoneyBills } from "react-icons/fa6";
import { GiSkills } from "react-icons/gi";

function JobPage({ jobData }: { jobData: any }) {
  const { data: session } = useSession();
  const [jobs, setJobs] = useState<any>([]);
  const toast = useRef<any>(null);
  const [isLoading, setIsLoading] = useState(false);

  const DESC = jobData?.description;
  const description = DESC.split("..");
  // console.log(description);
  const title = jobData?.title || "";
  const companyDetails = jobData?.aboutCompany.split("..");
  const skills = jobData?.skills.split(",");

  useEffect(() => {
    const res = async () => {
      setIsLoading(true);
      try {
        const allJobs = await getAllJobs();
        let len = allJobs?.length;
        let startIndex = Math.floor(Math.random() * len! || 6);
        let endIndex = Math.floor(Math.random() * len! || 6);

        if (startIndex > endIndex) {
          [endIndex, startIndex] = [startIndex, endIndex];
        }
        setJobs(allJobs?.slice(startIndex, startIndex + 3));
      } catch (error) {
        toast.current.show({
          severity: "info",
          summary: "Rejected",
          detail: "Something went wrong",
          life: 2000,
        });
      } finally {
        setIsLoading(false);
      }
    };
    res();
  }, []);

  if (isLoading) {
    return (
      <div className="h-[700px] w-full flex items-center justify-center">
        <Spinner color="secondary" labelColor="secondary" />
      </div>
    );
  }

  return (
    <>
    <GoogleAdSense />
    <div className="container mx-auto p-4 mt-28">
      <div className="lg:flex lg:gap-x-6 lg:ml-14 xl:ml-28">
        <div className="lg:w-3/5 shadow-2xl dark:bg-[rgba(24,24,27,1)] rounded-xl dark:shadow-gray-800 mt-2 mb-4 p-4">
          <div className="lg:min-w-[400px] md:min-w-[200px] min-w-[150px] max-w-full mx-auto mb-8">
            <Image
              src={jobData?.imageUrl}
              alt="poster"
              className="w-full rounded-[20px] shadow-3xl ease-in-out duration-300 hover:cursor-pointer"
              width={500}
              height={500}
            />
            <div className="pt-6 font-semibold pb-2 flex justify-between">
              <h4 className="text-xs font-medium sm:block text-[#34EF95] bg-[#D7FCEA] hidden p-2 rounded-xl">
                {jobData.jobRole}
              </h4>
              <div className="space-x-2">
                <Link
                  href={`/${jobData.applyLink}`}
                  className="signInbut bg-purple-900"
                >
                  Apply Now
                </Link>
              </div>
            </div>
          </div>

          <div className="pb-16">
            <h1 className="text-[1.2rem] sm:text-[1.4rem] md:text-[1.8rem] lg:text-[2.4rem] leading-tight space-y-5">
              {title.split("").map((child: any, idx: any) => (
                <span className="hoverText font-semibold" key={idx}>
                  {child}
                </span>
              ))}
            </h1>
            <div className="pt-[25px]">
              <div className="space-y-4">
                <h3 className="text-2xl font-medium">Details</h3>
              </div>
            </div>
            <div className="pt-[25px]">
              <div className="space-y-4">
                <h3 className=" font-light text-medium flex-wrap">
                  {jobData.companyName} is hiring for {jobData.jobRole}
                </h3>
              </div>
            </div>

            <div className="pt-6">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Job Description</h3>
                <ul className="text-sm ml-4  pr-4 text-wrap rounded-lg list-outside list-disc">
                  {description.map(
                    (item: any, index: number) =>
                      item.length > 0 && (
                        <li key={index} className=" p-2 duration-200 text-wrap">
                          {item}.
                        </li>
                      )
                  )}
                </ul>
              </div>
            </div>

            {/* <div className="pt-[25px]">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Job Description</h3>
                <p className="text-sm">{DESC}</p>
              </div>
            </div> */}

            <div className="pt-6">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Company Details</h3>
                <ul className="text-sm ml-4 pr-4 text-wrap rounded-lg list-outside list-disc">
                  {companyDetails.map(
                    (item: any, index: number) =>
                      item.length > 0 && (
                        <li key={index} className=" p-2 duration-200 text-wrap">
                          {item}.
                        </li>
                      )
                  )}
                </ul>
              </div>
            </div>

            {/* <div className="pt-[25px]">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Company Details</h3>
                <p className="text-sm">{jobData.aboutCompany}</p>
              </div>
            </div> */}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-7 mt-8">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md flex items-center space-x-4 hover:bg-gradient-to-br hover:from-blue-700 hover:to-blue-500  transition-transform duration-500 transform hover:rotate-3 hover:cursor-pointer">
                {/* Left Side: Job Role Info */}
                <div className="flex-grow">
                  <h3 className="text-lg font-semibold text-black dark:text-white">
                    Job Role
                  </h3>
                  <p className="text-sm text-black text-wrap dark:text-white mt-1">
                    {jobData.jobRole}
                  </p>
                </div>
                {/* Right Side: Job Icon */}
                <div className="flex-shrink-0">
                  <FaBriefcase className="text-blue-500 dark:text-blue-300 h-8 w-8" />
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md flex items-center space-x-4 hover:bg-gradient-to-br hover:from-blue-700 hover:to-blue-500  transition-transform duration-500 transform hover:rotate-3 hover:cursor-pointer">
                {/* Left Side: Job Role Info */}
                <div className="flex-grow">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                    Experience
                  </h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">
                    {jobData.experience}
                  </p>
                </div>
                {/* Right Side: Job Icon */}
                <div className="flex-shrink-0">
                  <MdOutlineHomeWork className="text-blue-500 dark:text-blue-300 h-8 w-8" />
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md flex items-center space-x-4 hover:bg-gradient-to-br hover:from-blue-700 hover:to-blue-500  transition-transform duration-500 transform hover:rotate-3 hover:cursor-pointer">
                {/* Left Side: Job Role Info */}
                <div className="flex-grow">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                    Qualifications
                  </h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">
                    {jobData.qualificationRequired}
                  </p>
                </div>
                {/* Right Side: Job Icon */}
                <div className="flex-shrink-0">
                  <PiExamFill className="text-blue-500 dark:text-blue-300 h-8 w-8" />
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md flex items-center space-x-4 hover:bg-gradient-to-br hover:from-blue-700 hover:to-blue-500  transition-transform duration-500 transform hover:rotate-3 hover:cursor-pointer">
                {/* Left Side: Job Role Info */}
                <div className="flex-grow">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                    Location
                  </h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">
                    {jobData.location}
                  </p>
                </div>
                {/* Right Side: Job Icon */}
                <div className="flex-shrink-0">
                  <FaLocationDot className="text-blue-500 dark:text-blue-300 h-8 w-8" />
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md flex items-center space-x-4 hover:bg-gradient-to-br hover:from-blue-700 hover:to-blue-500  transition-transform duration-500 transform hover:rotate-3 hover:cursor-pointer">
                {/* Left Side: Job Role Info */}
                <div className="flex-grow">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                    Skills
                  </h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">
                    {skills.map((skill: any, index: number) => (
                      <span key={index} className="text-wrap">
                        {skill}
                        {"  "}
                      </span>
                    ))}
                  </p>
                </div>
                {/* Right Side: Job Icon */}
                <div className="flex-shrink-0">
                  <GiSkills className="text-blue-500 dark:text-blue-300 h-8 w-8" />
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md flex items-center space-x-4 hover:bg-gradient-to-br hover:from-blue-700 hover:to-blue-500  transition-transform duration-500 transform hover:rotate-3 hover:cursor-pointer ease-in-out hover:ease-in-out">
              {/* Left Side: Job Role Info */}
              <div className="flex-grow">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                  Stipend
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">
                  {jobData.salary || "Not Disclosed"}
                </p>
              </div>
              {/* Right Side: Job Icon */}
              <div className="flex-shrink-0">
                <FaMoneyBills className="text-blue-500 dark:text-blue-300 h-8 w-8" />
              </div>
            </div>
            </div>
          </div>
        </div>

        <div className="pt-6 space-y-5 lg:pl-6">
          <h3 className="text-2xl font-semibold hidden lg:block">
            Related Jobs
          </h3>
          <div className="hidden lg:block">
            {jobs.map((myjob: any, index: any) => (
              <Link href={`/jobs/${myjob.id}`} key={index}>
                <Card className="hover:cursor-pointer mb-8 pb-2 pt-2 hover:scale-105 shadow-2xl dark:shadow-gray-800">
                  <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                    <p className="text-tiny uppercase font-bold">
                      {myjob.jobRole}
                    </p>
                    <small className="text-default-500">Related Jobs</small>
                    <h4 className="font-bold text-large">{myjob.title}</h4>
                  </CardHeader>
                  <CardBody className="overflow-visible py-2 ">
                    <Image
                      alt="Card background"
                      className="object-cover rounded-xl"
                      src={myjob.imageUrl}
                      width={270}
                      height={200}
                    />
                  </CardBody>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default JobPage;
