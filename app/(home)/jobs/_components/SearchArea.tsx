"use client";
import React, { useState, useEffect } from "react";

const SearchArea = ({
  onSearch,
  onSearchFilter,
}: {
  onSearch: any;
  onSearchFilter: any;
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [WorkType, setWorkType] = useState<string>("");
  const WorkTypes = ["Intern", "Full-Time", "Part-Time"];
  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      onSearch(searchQuery);
      onSearchFilter(WorkType);
    }, 300); // Debounce for 300ms

    return () => clearTimeout(debounceTimer);
  }, [searchQuery, onSearch, onSearchFilter, WorkType]);

  const handleInputChange = (e: any) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="pb-5 sticky top-0 right-0 border-2 dark:border-0 bg-white dark:bg-gray-900 shadow-xl rounded-xl flex flex-col gap-y-4 pl-5 pr-5 pt-7">
      <h2 className="text-xl font-medium">Search</h2>
      <div className="flex gap-x-2">
        <input
          type="text"
          placeholder="Search your Job here"
          className="p-2 rounded-lg outline-none bg-gray-200 dark:text-black"
          value={searchQuery}
          onChange={handleInputChange}
        />
      </div>
      <h2 className="text-xl font-medium">Work Type</h2>
      <div className="flex space-x-4">
        {WorkTypes.map((option, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setWorkType(option === WorkType ? "" : option)}
            className={`border px-4 py-2 rounded-lg transition-colors duration-300 ease-in-out ${
              WorkType === option
                ? "bg-[#122B49] text-white border-blue-500"
                : "dark:bg-white bg-gray-200 text-black hover:scale-105 duration-300 ease-in-out border-gray-300"
            } hover:bg-[#122B49] hover:text-white dark:hover:text-black  hover:border-blue-500 focus:outline-none`}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SearchArea;
