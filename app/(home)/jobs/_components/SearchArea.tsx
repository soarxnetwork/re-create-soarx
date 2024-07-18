"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
const SearchArea = () => {
  const [searchQuery, setHandlesearchQuery] = useState("");
  const router = useRouter();
  const handleSearchJob = (e: React.FormEvent) =>{
    e.preventDefault();
    const encodeSearchUri = encodeURI(searchQuery);
    console.log(encodeSearchUri);
    router.push(`/jobs/search?q=${encodeSearchUri}`)
  } 
  return (
    <div className='h-[150px] border-2 dark:border-0 bg-white dark:bg-gray-900 shadow-xl rounded-xl flex flex-col gap-y-4 pl-5 pr-5 pt-7'>
      <h2 className='text-xl font-medium'>Search</h2>
      <form action="handleSearchJob" className='flex gap-x-2'>
        <input type="text" placeholder="Search your Job here" className='p-2 rounded-lg outline-none bg-gray-200 dark:text-black' value={searchQuery} onChange={(e)=>setHandlesearchQuery(e.target.value)} />
        <button type='submit' onClick={handleSearchJob} className='bg-[#9000FF] p-2 rounded-lg text-white'>Search</button>
      </form>
    </div>
  )
}

export default SearchArea
