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
import Card from "./_components/JobSections/Right/components/Card";

const Jobs = () => {
  const { data: session } = useSession();
  const [isPending, startTransition] = useTransition();
  const [jobs, setJobs] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(false);
  const toast = useRef<any>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [worktypeFilter, setWorkTypeFilter] = useState("");
  const bgColors = [
    'bg-[#ef9a9a]',  // Light Red
    'bg-[#90caf9]',  // Light Blue
    'bg-[#a5d6a7]',  // Light Green
    'bg-[#ffe082]',  // Light Yellow
    'bg-[#ffccbc]',  // Light Orange
    'bg-[#b39ddb]',  // Light Purple
    'bg-[#ffab91]',  // Light Coral
    'bg-[#80cbc4]',  // Light Teal
    'bg-[#f48fb1]',  // Light Pink
    'bg-[#e6ee9c]'   // Light Lime
  ];


  useEffect(() => {
    const res = async () => {
      setIsLoading(true);
      try {
        const allJobs = await getAllJobs();
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



  function JobfilterFunction(job: any) {
    if (
      job?.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job?.companyName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job?.jobRole.toLowerCase().includes(searchQuery.toLowerCase())
    ) {
      if (
        worktypeFilter !== "" &&
        job?.jobRole.toLowerCase().includes(worktypeFilter.toLowerCase())
      ) {
        return true;
      } else if (worktypeFilter === "" && searchQuery === "") {
        return true;
      } else if (searchQuery !== "" && worktypeFilter === "") {
        return true;
      } else if (worktypeFilter !== "") {
        return false;
      }
    } else {
      return false;
    }
  }

  const filteredJobs = jobs.filter((job: any) => JobfilterFunction(job));

  const handleSearch = (query: any) => {
    setSearchQuery(query);
  };
  const handleFilters = (data: any) => {
    console.log(data ? true : false);

    setWorkTypeFilter(data);
  };

  if (isLoading || !jobs) {
    return (
      <div className="h-[700px] w-full overflow-hidden flex items-center justify-center">
        <Spinner color="secondary" labelColor="secondary" />
      </div>
    );
  }

  return (
    <>
  <Toast ref={toast} />
  <div className="mb-20 w-full flex flex-col md:justify-center  md:flex-row">
    {/* Sidebar */}
    {/* <div className="md:w-1/4 mt-36  w-full bg-red-900 h-40 md:h-auto md:sticky top-36">Hii</div> */}

    {/* Card Section */}
    <div className="md:w-3/4 pt-36 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 ">
      {filteredJobs.map((e: any) => (
        <Card key={e.id} {...e} cardBg={bgColors[Math.floor(Math.random() * bgColors.length)]}/>
      ))}
    </div>
  </div>
</>

  );
};

export default Jobs;
// overflow-y-auto