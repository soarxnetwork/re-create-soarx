import { useState, useRef } from "react";
import { Divider } from "@nextui-org/divider";
import {
  FaSearch as SearchIcon,
  FaFilter as FilterIcon,
  FaMapPin as MapPinIcon,
  FaMap as MapIcon,
  FaLocationArrow as LocateIcon,
  FaBriefcase as BriefcaseIcon,
  FaCalendarAlt as CalendarIcon,
  FaChevronDown as ChevronDownIcon,
} from "react-icons/fa";

export default function Component({ experience, setExperience }: any) {
  const [visibleDropdown, setVisibleDropdown] = useState<number | null>(null);
  const [selectedExperience, setSelectedExperience] = useState<string | null>(
    null
  ); // Track selected experience
  const timeoutRef = useRef(null);
  const [salaryRange, setSalaryRange] = useState([0, 10000]);

  const handleDropdownMouseEnter = (index: number) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setVisibleDropdown(index);
  };

  const handleDropdownMouseLeave = (index: number) => {
    // @ts-ignore
    timeoutRef.current = setTimeout(() => {
      setVisibleDropdown(null);
    }, 300);
  };

  const handleDropdownInnerMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  const handleDropdownInnerMouseLeave = () => {
    // @ts-ignore
    timeoutRef.current = setTimeout(() => {
      setVisibleDropdown(null);
    }, 300);
  };

  // Handle salary range input changes
  const handleMinSalaryChange = (event: any) => {
    const minSalary = parseInt(event.target.value, 10);
    setSalaryRange([minSalary, salaryRange[1]]);
  };

  const handleMaxSalaryChange = (event: any) => {
    const maxSalary = parseInt(event.target.value, 10);
    setSalaryRange([salaryRange[0], maxSalary]);
  };

  // Handle selecting an experience level
  const handleExperienceSelect = (level: string) => {
    if (selectedExperience === level) {
      setSelectedExperience(null); // Deselect if same level is clicked
      setExperience(null); // Update the parent state
    } else {
      setSelectedExperience(level); // Select new experience level
      setExperience(level); // Update the parent state with the selected level
    }
    setVisibleDropdown(null); // Close dropdown on selection
  };

  return (
    <div className="flex items-center justify-between p-4 bg-black text-white rounded-lg py-2">
      <div className="flex items-center space-x-4">
        {["Designer", "Work location", "Experience", "Per month"].map(
          (item, index) => (
            <>
              <div
                key={index}
                className="group relative flex items-center space-x-2"
                onMouseEnter={() => handleDropdownMouseEnter(index)}
                onMouseLeave={() => handleDropdownMouseLeave(index)}
              >
                {index === 0 && <SearchIcon className="w-5 h-5" />}
                {index === 1 && <MapPinIcon className="w-5 h-5" />}
                {index === 2 && <BriefcaseIcon className="w-5 h-5" />}
                {index === 3 && <CalendarIcon className="w-5 h-5" />}
                <span className="whitespace-nowrap">{item}</span>
                <ChevronDownIcon className="w-4 h-4" />
                {visibleDropdown === index && (
                  <div
                    className="absolute top-full left-0 z-10 mt-2 w-48 rounded-md bg-black p-2"
                    onMouseEnter={handleDropdownInnerMouseEnter}
                    onMouseLeave={handleDropdownInnerMouseLeave}
                  >
                    <div className="flex flex-col space-y-2">
                      {index === 0 && (
                        <>
                          <button className="flex items-center space-x-2 rounded-md p-2 hover:bg-gray-800">
                            <SearchIcon className="w-5 h-5" />
                            <span>Search</span>
                          </button>
                          <button className="flex items-center space-x-2 rounded-md p-2 hover:bg-gray-800">
                            <FilterIcon className="w-5 h-5" />
                            <span>Filter</span>
                          </button>
                        </>
                      )}
                      {index === 1 && (
                        <>
                          <button className="flex items-center space-x-2 rounded-md p-2 hover:bg-gray-800">
                            <MapIcon className="w-5 h-5" />
                            <span>Map</span>
                          </button>
                          <button className="flex items-center space-x-2 rounded-md p-2 hover:bg-gray-800">
                            <LocateIcon className="w-5 h-5" />
                            <span>Location</span>
                          </button>
                        </>
                      )}
                      {index === 2 && (
                        <>
                          <button
                            className={`flex items-center space-x-2 rounded-md p-2 hover:bg-gray-800 ${
                              selectedExperience === "Entry Level"
                                ? "bg-gray-800"
                                : ""
                            }`}
                            onClick={() =>
                              handleExperienceSelect("Entry Level")
                            }
                          >
                            <BriefcaseIcon className="w-5 h-5" />
                            <span>Entry Level</span>
                          </button>
                          <button
                            className={`flex items-center space-x-2 rounded-md p-2 hover:bg-gray-800 ${
                              selectedExperience === "Mid Level"
                                ? "bg-gray-800"
                                : ""
                            }`}
                            onClick={() => handleExperienceSelect("Mid Level")}
                          >
                            <BriefcaseIcon className="w-5 h-5" />
                            <span>Mid Level</span>
                          </button>
                          <button
                            className={`flex items-center space-x-2 rounded-md p-2 hover:bg-gray-800 ${
                              selectedExperience === "Senior Level"
                                ? "bg-gray-800"
                                : ""
                            }`}
                            onClick={() =>
                              handleExperienceSelect("Senior Level")
                            }
                          >
                            <BriefcaseIcon className="w-5 h-5" />
                            <span>Senior Level</span>
                          </button>
                        </>
                      )}
                      {index === 3 && (
                        <>
                          <button className="flex items-center space-x-2 rounded-md p-2 hover:bg-gray-800">
                            <CalendarIcon className="w-5 h-5" />
                            <span>Yearly</span>
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                )}
              </div>

              <Divider
                className="my-4 bg-white text-white w-[2px] h-8"
                orientation="vertical"
              />
            </>
          )
        )}
        <div className="flex flex-col items-center justify-between space-y-2 pr-8">
          <div className="flex items-center justify-between gap-2">
            <span className="whitespace-nowrap">Salary range</span>
            <span className="text-purple-600 whitespace-nowrap">
              ${salaryRange[0]} - ${salaryRange[1]}
            </span>
          </div>
          {/* Minimum salary slider */}
          <div className="flex items-center justify-center">
            <input
              type="range"
              className="w-full h-1 bg-purple-600"
              min={"0"}
              max={"1000000"}
              step={"100"}
              value={salaryRange[0]}
              onChange={handleMinSalaryChange}
            />
            {/* Maximum salary slider */}
            <input
              type="range"
              className="w-full h-1 bg-purple-600 ml-[-5px]"
              min={"0"}
              max={"1000000"}
              step={"100"}
              value={salaryRange[1]}
              onChange={handleMaxSalaryChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
