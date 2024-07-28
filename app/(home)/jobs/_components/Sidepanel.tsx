"use client";
import React, { useRef, useState } from "react";
import SearchArea from "./SearchArea";
import RecentJobs from "./RecentJobs";
import JobCategory from "./Catergory";

const Sidepanel = () => {
  const [jobs, setJobs] = useState<any>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [worktypeFilter, setWorkTypeFilter] = useState("");

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
    <div className="w-full space-y-4 h-full"> 
      <SearchArea onSearch={handleSearch} onSearchFilter={handleFilters} />
      <RecentJobs />
      <JobCategory />
    </div>
  );
};

export default Sidepanel;
