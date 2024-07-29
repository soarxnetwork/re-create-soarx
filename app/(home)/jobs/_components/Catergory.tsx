"use client";

import { getRecentPosts } from "@/services/RecentPost";
import { Spinner } from "@nextui-org/react";
import { useEffect, useState } from "react";

const JobCategory = () => {
  const [getRecentJobs, setGetRecentJobs] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(false);

  if (isLoading) {
    // console.log(isLoading)
    return (
      <div className="h-[300px] w-full overflow-hidden flex items-center justify-center">
        <Spinner color="secondary" labelColor="secondary" />
      </div>
    );
  }

  return (
    <div className="h-[290px] border-2 dark:border-0 bg-white dark:bg-gray-900 shadow-xl rounded-xl flex flex-col gap-y-4 pl-5 pr-5 pt-7">
      <h2 className="text-xl font-semibold">Category</h2>
      <ul className="flex flex-col gap-y-3">
        <li className="flex flex-col hover:text-purple-500 ease-in-out duration-300 gap-y-3 pt-2 hover:cursor-pointer font-medium">
          Internship
        </li>
        <hr className="dark:opacity-40 opacity-100 text-black dark:text-white" />
        <li className="flex flex-col hover:text-purple-500 ease-in-out duration-300 gap-y-3 pt-2 hover:cursor-pointer font-medium">
          Full Time Jobs
        </li>
        <hr className="dark:opacity-40 opacity-100 text-black dark:text-white" />
        <li className="flex flex-col hover:text-purple-500 ease-in-out duration-300 gap-y-3 pt-2 hover:cursor-pointer font-medium">
          Freelancing
        </li>
        <hr className="dark:opacity-40 opacity-100 text-black dark:text-white" />
      </ul>
    </div>
  );
};

export default JobCategory;
