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
  const [worktypeFilter, setWorkTypeFilter] = useState("");
  

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

  if (isLoading) {
    return (
      <div className="h-[700px] w-full overflow-hidden flex items-center justify-center">
        <Spinner color="secondary" labelColor="secondary" />
      </div>
    );
  }

  function JobfilterFunction(job : any) {
    if(
      job?.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job?.companyName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job?.jobRole.toLowerCase().includes(searchQuery.toLowerCase()) 
    )
    {
      if((worktypeFilter !== "" && job?.jobRole.toLowerCase().includes(worktypeFilter.toLowerCase()))){
        return true;
      }
      else if( worktypeFilter === "" && searchQuery === ""){
        return true;
      }
      else if(searchQuery !== "" && worktypeFilter === ""){
        return true;
      }
      else if(worktypeFilter !== ""){
        return false;
      }
    }
    else{
      return false;
    }
  }

  const filteredJobs = jobs.filter((job : any) => JobfilterFunction(job));
  
  const handleSearch = (query : any) => {
    setSearchQuery(query);
  };
  const handleFilters = (data : any) =>{
    console.log(data ? true : false)

    setWorkTypeFilter(data)
  }
  return (
    <>
  <Toast ref={toast} />
  <div className="xl:ml-44 hide-vertical-scrollbar xl:mr-24 mt-28 overflow-x-hidden xl:flex xl:gap-x-20 lg:h-[calc(200vh)] ml-5 mr-5 mb-14 lg:mb-0"> 
    <div className="max-w-fit w-full  xl:w-7/12 sm:ml-20 md:ml-36 lg:ml-0 lg:grid grid-cols-2 gap-x-5 xl:grid-cols-1">
      {filteredJobs.map((e: any) => <JobCardTwo key={e.id} {...e} />)}
    </div>
    <div className="w-full xl:w-5/12 xl:ml-2 space-y-4  sticky top-0 right-0 h-full"> 
      <SearchArea onSearch={handleSearch} onSearchFilter={handleFilters} />
      <RecentJobs />
      <JobCategory />
    </div>
  </div>
</>

  );
};

export default Jobs;
