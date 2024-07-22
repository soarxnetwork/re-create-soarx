"use client";
import React, { useState, useEffect } from "react";

const SearchArea = ({ onSearch  , onSearchFilter}: {onSearch : any , onSearchFilter : any}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [WorkType , setWorkType] = useState<string>("")
  const WorkTypes = ["Intern" , "Full-Time" , "Part-Time"];
  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      onSearch(searchQuery);
      onSearchFilter(WorkType);

    }, 300); // Debounce for 300ms

    return () => clearTimeout(debounceTimer);
  }, [searchQuery, onSearch , onSearchFilter , WorkType]);

  const handleInputChange = (e : any) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className='pb-5 border-2 dark:border-0 bg-white dark:bg-gray-900 shadow-xl rounded-xl flex flex-col gap-y-4 pl-5 pr-5 pt-7'>
      <h2 className='text-xl font-medium'>Search</h2>
      <div className='flex gap-x-2'>
        <input
          type="text"
          placeholder="Search your Job here"
          className='p-2 rounded-lg outline-none bg-gray-200 dark:text-black'
          value={searchQuery}
          onChange={handleInputChange}
        />
      </div>
      <h2 className='text-xl font-medium'>Work Type</h2>
      <div className="flex space-x-4">
      { WorkTypes.map((option, index) =>(
        <>
        <button
                                key={index}
                                type='button'
                                onClick={() => {
                                  if(option === WorkType){
                                    setWorkType("")
                                  }
                                  else{
                                    setWorkType(option)
                                  }
                                }}
                                className={`py-2 px-6 rounded-full border ${
                                    WorkType === option
                                    ? 'bg-[#122B49] text-white border-blue-500'
                                    : 'bg-white text-black border-gray-300'
                                } focus:outline-none`}
                                >
                                {option}
                                </button>
      </>))

      }
</div>

    </div>
  );
};

export default SearchArea;