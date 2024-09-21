import { useState, useRef } from "react";
import { Divider } from "@nextui-org/divider";
import { GrPowerReset } from "react-icons/gr";
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
import { CiTrophy } from "react-icons/ci";

export default function Component({
  experience,
  setExperience,
  setWorkLocation,
  setMaxSalary,
  setMinSalary,
  setResetJobs,
  setInputJobs
}: any) {
  const [visibleDropdown, setVisibleDropdown] = useState<number | null>(null);
  const [selectedExperience, setSelectedExperience] = useState<string | null>(
    null
  ); // Track selected experience
  const timeoutRef = useRef(null);
  const [salaryRange, setSalaryRange] = useState([0, 1000000]);
  const [isRotating, setIsRotating] = useState(false);

  const handleRotateClick = () => {
    setIsRotating(true); 
    setResetJobs(true);
    setTimeout(() => {
      setIsRotating(false);
    }, 500);
  };

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
    setMinSalary(minSalary);
  };

  const handleMaxSalaryChange = (event: any) => {
    const maxSalary = parseInt(event.target.value, 10);
    setSalaryRange([salaryRange[0], maxSalary]);
    setMaxSalary(maxSalary);
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

  const techCitiesOfIndia = [
    "Bengaluru",
    "Hyderabad",
    "Pune",
    "Chennai",
    "Mumbai",
    "Delhi",
    "Gurugram",
    "Noida",
    "Kolkata",
    "Ahmedabad",
    "Thiruvananthapuram",
    "Kochi",
    "Jaipur",
    "Indore",
    "Nagpur",
    "Bhubaneswar",
    "Coimbatore",
    "Mysuru",
    "Lucknow",
    "Visakhapatnam",
    "Vijayawada",
    "Surat",
    "Vadodara",
    "Chandigarh",
    "Patna",
    "Rajkot",
    "Nashik",
    "Goa",
    "Bhopal",
    "Ludhiana",
  ];

  const experienceLevels = [
    "Internship",
    "0-1 years",
    "1-3 years",
    "3-5 years",
    "5-7 years",
    "7-10 years",
    "10-12 years",
    "12+ years",
    "15+ years",
  ];

  const handleWorkLocation = (index: number) => {
    console.log(techCitiesOfIndia[index]);
    setVisibleDropdown(null);
    setWorkLocation(techCitiesOfIndia[index]);
  };

  const handleExperienceLevel = (index: number) => {
    setExperience(experienceLevels[index]);
    setVisibleDropdown(null);
  };

  return (
    <div className="flex items-center justify-between p-4 bg-black text-white rounded-lg py-2">
      <div className="flex items-center  space-x-7 hover:cursor-pointer">
        {["Work location", "Experience"].map((item, index) => (
          <>
            <div
              key={index}
              className="group relative flex items-center space-x-2"
              onMouseEnter={() => handleDropdownMouseEnter(index)}
              onMouseLeave={() => handleDropdownMouseLeave(index)}
            >
              {index === 0 && <MapPinIcon className="w-5 h-5" />}
              {index === 1 && <CalendarIcon className="w-5 h-5" />}
              <span className="whitespace-nowrap">{item}</span>
              <ChevronDownIcon className="w-4 h-4" />
              {visibleDropdown === index && (
                <div
                  className="absolute top-full left-0 z-10 mt-2 w-48 rounded-md bg-black p-2"
                  onMouseEnter={handleDropdownInnerMouseEnter}
                  onMouseLeave={handleDropdownInnerMouseLeave}
                >
                  <div className="flex flex-col space-y-2">
                    {/* {index === 0 && (
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
                      )} */}
                    {index === 0 && (
                      <>
                        <div className="max-h-60 w-full overflow-y-auto  rounded-md p-4 border border-gray-600 overflow-x-hidden hide-vertical-scrollbar">
                          {techCitiesOfIndia.map((city, index) => (
                            <div
                              onClick={() => handleWorkLocation(index)}
                              key={index}
                              className="py-2 px-4 text-white hover:bg-gray-600 rounded-md cursor-pointer"
                            >
                              {city}
                            </div>
                          ))}
                        </div>
                      </>
                    )}
                    {index === 1 && (
                      <>
                        <div className="max-h-60 w-full overflow-y-auto  rounded-md p-4 border border-gray-600 overflow-x-hidden hide-vertical-scrollbar">
                          {experienceLevels.map((city, index) => (
                            <div
                              onClick={() => handleExperienceLevel(index)}
                              key={index}
                              className="py-2 px-4 text-white hover:bg-gray-600 rounded-md cursor-pointer"
                            >
                              {city}
                            </div>
                          ))}
                        </div>
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
        ))}
        <div className="flex flex-col items-center justify-between space-y-2 pr-8">
          <div className="flex items-center justify-between gap-2">
            <span className="whitespace-nowrap">Salary range(In Rs.)</span>
            <span className="text-purple-600 whitespace-nowrap">
              {salaryRange[0]} - {salaryRange[1]}
            </span>
          </div>
          {/* Minimum salary slider */}
          <div className="flex items-center justify-center">
            <input
              type="range"
              className="w-full h-1 bg-purple-600"
              min={"0"}
              max={"250000"}
              step={"1000"}
              value={salaryRange[0]}
              onChange={handleMinSalaryChange}
            />
            {/* Maximum salary slider */}
            <input
              type="range"
              className="w-full h-1 bg-purple-600 ml-[-5px]"
              min={"250000"}
              max={"1000000"}
              step={"1000"}
              value={salaryRange[1]}
              onChange={handleMaxSalaryChange}
            />
          </div>
        </div>
        <Divider
          className="my-4 bg-white text-white w-[2px] h-8"
          orientation="vertical"
        />

        <div className="flex flex-col items-center justify-between space-y-2 pr-8">
          <div className="flex items-center justify-center">
            {/* Maximum salary slider */}
            <input
              type="text"
              placeholder="Search Jobs"
              onChange={(e)=>setInputJobs(e.target.value)}
              className="w-full border-purple-600 border-b-2 bg-black outline-none hover:outline-none text-white p-2  ml-[-5px]"
            />
          </div>
        </div>
        <div className="font-semibold">
      <GrPowerReset
        className={`font-semibold transition-transform duration-500 ease-in-out ${
          isRotating ? 'rotate-180' : ''
        }`}
        onClick={handleRotateClick}
      />
    </div>
      </div>
    </div>
  );
}
