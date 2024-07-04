"use client";
import { getAllJobs } from "@/services/jobs";
import Link from "next/link";
import { useEffect, useState, useTransition } from "react";
import { ConfirmDialog, confirmDialog } from "primereact/confirmdialog";
import JobCard from "@/app/(admin)/admin/jobsAdmin/_components/JobCard";
import { Metadata } from "next";



const Jobs = () => {
  const [isPending, startTransition] = useTransition();
  const [jobs, setJobs] = useState<any>([]);

  useEffect(() => {
    const fetchJobs = async () => {
      const allJobs = await getAllJobs();
      console.log(allJobs);
      setJobs(allJobs);
    };
    fetchJobs();
  }, []); // Adding an empty dependency array to ensure the effect runs only once

  const confirm2 = (id: string) => {
    confirmDialog({
      message: "Do you want to delete this record?",
      header: "Delete Confirmation",
      icon: "pi pi-info-circle",
      acceptClassName: "p-button-danger",
      // accept: () => accept(id),
      // reject,
    });
  };

  return (
    <div className="grid grid-cols-3 gap-4 ml-28 mr-28 mt-28 overlfow-x-hidden">
      {jobs
        .sort((a: any, b: any) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
        .map((e: any) => (
          <JobCard key={e.id} {...e} confirm2={confirm2} />
        ))}
    </div>
  );
};

export default Jobs;
