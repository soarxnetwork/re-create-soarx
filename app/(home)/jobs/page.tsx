"use client";
import { useEffect, useRef, useState, useTransition } from "react";
import JobSlider from "./_components/JobsSlider";
import { getAllJobs } from "@/services/jobs";
import { toast } from "react-toastify";
import { Toast } from "primereact/toast";
import JobCardTwo from "./_components/JobCard2";


const Jobs = () => {
  const [isPending, startTransition] = useTransition();
  const [jobs, setJobs] = useState<any>([]);
  const toast = useRef<any>(null);
  useEffect(() => {
    const res = async () => {
    try {
      const allJobs = await getAllJobs();
      console.log(allJobs);
      setJobs(allJobs);
    } catch (error) {
      toast.current.show({
        severity: "info",
        summary: "Rejected",
        detail: "Something went wrong",
        life: 2000,
      })
    }
    };
    res();
  });

  return (
    <>
      <Toast ref={toast} />
      <div className="ml-28 mr-28 mt-28 overlfow-x-hidden">
        {/* <JobSlider /> */}
        <div className=" grid grid-cols-1">
        {jobs && jobs.sort(
              (a: any, b :any) => new Date(b.date).getTime() - new Date(a.date).getTime()
            )
            .map((e: any) => (
                <JobCardTwo key={e.id} {...e} />
            ))}
          
        </div>
      </div>
    </>
  );
};

export default Jobs;
