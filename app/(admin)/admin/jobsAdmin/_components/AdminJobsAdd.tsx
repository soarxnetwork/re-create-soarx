"use client";
import { getAllJobs } from "@/services/jobs";
import Link from "next/link";
import { useEffect, useState, useTransition } from "react";
import JobCard from "./JobCard";
import { ConfirmDialog, confirmDialog } from "primereact/confirmdialog";

const AdminJobsAdd = () => {
  const [isPending, startTransition] = useTransition();
  const [jobs, setJobs] = useState<any>([]);
  useEffect(() => {
    const res = async () => {
      const allJobs = await getAllJobs();
      console.log(allJobs);
      setJobs(allJobs);
    };
    res();
  });

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
    <>
      <div>
        <Link href={"/admin/Job/add"}>
          <button className="btn-primary" disabled={isPending}>
            Add Jobs
          </button>
        </Link>
      </div>
      <div className="grid-4 ">
        {jobs
          .sort(
            (a: any, b: any) =>
              new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
          )
          .map((e: any) => (
            <JobCard key={e.id} {...e} confirm2={confirm2} />
          ))}
      </div>
    </>
  );
};

export default AdminJobsAdd;
