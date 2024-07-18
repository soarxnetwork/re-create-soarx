"use client";
import React, { useState, useEffect } from "react";

const SearchArea = ({ onSearch }: {onSearch : any}) => {
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      onSearch(searchQuery);
    }, 300); // Debounce for 300ms

    return () => clearTimeout(debounceTimer);
  }, [searchQuery, onSearch]);

  const handleInputChange = (e : any) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className='h-[150px] border-2 dark:border-0 bg-white dark:bg-gray-900 shadow-xl rounded-xl flex flex-col gap-y-4 pl-5 pr-5 pt-7'>
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
    </div>
  );
};

export default SearchArea;