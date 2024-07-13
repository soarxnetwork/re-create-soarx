"use client";
import { useEffect, useRef, useState, useTransition } from "react";
import { getAllJobs } from "@/services/jobs";
import { Toast } from "primereact/toast";
import JobCardTwo from "./_components/JobCard2";
import {Spinner} from "@nextui-org/spinner";
import { useSession } from "next-auth/react";

const Jobs = () => {
  const { data: session } = useSession();
  const [isPending, startTransition] = useTransition();
  const [jobs, setJobs] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(false);
  const toast = useRef<any>(null);
  useEffect(() => {
    const res = async () => {
      setIsLoading(true);
      try {
        const allJobs = await getAllJobs();
        // console.log(allJobs);
        setJobs(allJobs);
      } catch (error) {
        toast.current.show({
          severity: "info",
          summary: "Rejected",
          detail: "Something went wrong",
          life: 2000,
        });
      }
      finally{
        setIsLoading(false);
      }
    };
    res();
  }, []);

  if(isLoading){
    // console.log(isLoading)
    return (
      <div className="h-[700px] w-full overflow-hidden flex items-center justify-center">
        <Spinner  color="secondary" labelColor="secondary"/>
      </div>
    )
  }

  return (
    <>
      <Toast ref={toast} />
      <div className="ml-28 mr-28 mt-28 overlfow-x-hidden">
        {/* <JobSlider /> */}
        <div className=" grid grid-cols-1">
          {jobs &&
            jobs
              .sort(
                (a: any, b: any) =>
                  new Date(b.createdAt).getTime() -
                  new Date(a.createdAt).getTime()
              )
              .map((e: any) => <JobCardTwo key={e.id} {...e} />)}
        </div>
      </div>
    </>
  );
};

export default Jobs;
