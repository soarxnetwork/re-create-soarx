"use client";

import { getRecentPosts } from "@/services/RecentPost";
import { Spinner } from "@nextui-org/react";
import { useEffect, useState } from "react";

const RecentJobs = () => {
  const [getRecentJobs, setGetRecentJobs] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    async function fetchJob() {
      try {
        setIsLoading(true);
        const res = await getRecentPosts();
        setGetRecentJobs(res.msg);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchJob();
  }, []);

  if (isLoading) {
    // console.log(isLoading)
    return (
      <div className="h-[700px] w-full overflow-hidden flex items-center justify-center">
        <Spinner color="secondary" labelColor="secondary" />
      </div>
    );
  }

  return (
    <div className="h-[400px] border-2 dark:border-0 bg-white dark:bg-gray-900 shadow-xl rounded-xl flex flex-col gap-y-4 pl-5 pr-5 pt-7">
      <h2 className="text-xl font-semibold">Recent Jobs</h2>
      <ul>
        {getRecentJobs &&
          getRecentJobs
            .sort(
              (a: any, b: any) =>
                new Date(b.createdAt).getTime() -
                new Date(a.createdAt).getTime()
            )
            .map((recentjob: any) => (
              <li key={recentjob.id} className="flex flex-col hover:text-purple-500 ease-in-out duration-300 gap-y-3 pt-2 hover:cursor-pointer font-medium">
                {recentjob.jobRole}
                <hr className="dark:opacity-40 opacity-100 text-black dark:text-white"/>
              </li>
            ))}
      </ul>
    </div>
  );
};

export default RecentJobs;
