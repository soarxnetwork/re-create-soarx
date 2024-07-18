"use client";
import { useEffect, useRef, useState, useTransition } from "react";
import { getAllJobs } from "@/services/jobs";
import { Toast } from "primereact/toast";
import JobCardTwo from "./_components/JobCard2";
import { Spinner } from "@nextui-org/spinner";
import { useSession } from "next-auth/react";
import SearchArea from "./_components/SearchArea";
import RecentJobs from "./_components/RecentJobs";
import JobCategory from "./_components/Catergory";

const Jobs = () => {
  const { data: session } = useSession();
  const [isPending, startTransition] = useTransition();
  const [jobs, setJobs] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(false);
  const toast = useRef<any>(null);
  const [searchQuery, setSearchQuery] = useState("");
  
  

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
      } finally {
        setIsLoading(false);
      }
    };
    res();
  }, []);

  if (isLoading) {
    // console.log(isLoading)
    return (
      <div className="h-[700px] w-full overflow-hidden flex items-center justify-center">
        <Spinner color="secondary" labelColor="secondary" />
      </div>
    );
  }
  const filteredJobs = jobs.filter((job : any) => 
    job?.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    job?.companyName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    job?.jobRole.toLowerCase().includes(searchQuery.toLocaleLowerCase()) 
    // Add more fields to search through as needed
  );
  const handleSearch = (query : any) => {
    setSearchQuery(query);
  };
  return (
    <>
      <Toast ref={toast} />
      <div className="ml-28 mr-28 mt-28 overflow-x-hidden flex">
        {/* <JobSlider /> */}
        <div className=" grid grid-cols-1 max-w-fit w-8/12">
        {filteredJobs.map((e: any) => <JobCardTwo key={e.id} {...e} />)}

        </div>
        <div className="w-4/12 ml-2 space-y-4 sticky h-full">
          <SearchArea onSearch={handleSearch}  />
          <RecentJobs />
          <JobCategory/>
        </div>
      </div>
    </>
  );
};

export default Jobs;
