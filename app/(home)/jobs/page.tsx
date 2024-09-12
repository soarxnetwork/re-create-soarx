"use client";
import { useEffect, useRef, useState, useTransition } from "react";
import { getAllJobs } from "@/services/jobs";
import { Toast } from "primereact/toast";
import { Spinner } from "@nextui-org/spinner";
import { useSession } from "next-auth/react";
import Left from "./_components/JobSections/Left/Left";
import NavFilter from "./_components/NavFilter";
import Card from "./_components/JobSections/Right/components/Card";

const Jobs = () => {
  const { data: session } = useSession();
  const [isPending, startTransition] = useTransition();
  const [jobs, setJobs] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [worktypeFilter, setWorkTypeFilter] = useState("");
  const [sortOrder, setSortOrder] = useState("newest"); // Add sort order state
  const [experience, setExperience] = useState("");
  const [salaryRange, setSalaryRange] = useState([0, 1000000000]);
  const [workingSchedeule, setworkingSchedeule] = useState([]);
  const [employmentType, SetEmploymentType] = useState([]);
  const toast = useRef<any>(null);
  const bgColors = [
    "bg-[#ef9a9a]", // Light Red
    "bg-[#90caf9]", // Light Blue
    "bg-[#a5d6a7]", // Light Green
    "bg-[#ffe082]", // Light Yellow
    "bg-[#ffccbc]", // Light Orange
    "bg-[#b39ddb]", // Light Purple
    "bg-[#ffab91]", // Light Coral
    "bg-[#80cbc4]", // Light Teal
    "bg-[#f48fb1]", // Light Pink
    "bg-[#e6ee9c]", // Light Lime
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

  const JobfilterFunction = (job: any) => {
    const jobSalary = parseInt(job.salary, 10); // Assuming salary is a string
    const isWithinRange =
      jobSalary >= salaryRange[0] && jobSalary <= salaryRange[1];

    const matchesSearchQuery =
      job?.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job?.companyName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job?.jobRole.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesWorkType = worktypeFilter
      ? job?.jobRole.toLowerCase().includes(worktypeFilter.toLowerCase())
      : true;

    // No filter based on working schedule or employment type
    return matchesSearchQuery && matchesWorkType && isWithinRange;
  };

  useEffect(() => {
    console.log("Working Schedule:", workingSchedeule);
    console.log("Employment Type:", employmentType);
  }, [workingSchedeule, employmentType]);

  // Now filter and sort the jobs
  const sortedJobs = jobs
    .filter((job: any) => JobfilterFunction(job))
    .sort((a: any, b: any) => {
      const dateA = new Date(a.lastDateToApply).getTime();
      const dateB = new Date(b.lastDateToApply).getTime();
      return sortOrder === "newest" ? dateB - dateA : dateA - dateB;
    });

  console.log(sortedJobs);

  const handleSearch = (query: any) => {
    setSearchQuery(query);
  };

  const handleFilters = (data: any) => {
    setWorkTypeFilter(data);
  };

  const handleSortChange = (order: string) => {
    setSortOrder(order);
  };

  if (isLoading || !jobs) {
    return (
      <div className="h-[700px] w-full overflow-hidden flex items-center justify-center">
        <Spinner color="secondary" labelColor="secondary" />
      </div>
    );
  }

  console.log(sortedJobs);

  return (
    <>
      <Toast ref={toast} />

      <div className="mb-20 w-full flex flex-col md:justify-center md:flex-row mt-4 pt-32">
        <Left
          employmentType={employmentType}
          setEmploymentType={SetEmploymentType}
          workingSchedeule={workingSchedeule}
          setworkingSchedeule={setworkingSchedeule}
        />
        <div className="md:w-3/4  w-full flex flex-col">
          <div className="space-y-4 w-full mx-auto">
            <NavFilter experience={experience} setExperience={setExperience} />
          </div>
          <div className="flex justify-between items-center w-full mx-auto mt-8 px-8">
            <h2 className="text-3xl font-bold">Recommended Jobs</h2>

            {/* Sort By Dropdown */}
            <select
              value={sortOrder}
              onChange={(e) => handleSortChange(e.target.value)}
              className="border p-2 rounded-md"
            >
              <option value="newest">Newest First</option>
              <option value="oldest">Oldest First</option>
            </select>
          </div>

          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
            {sortedJobs.map((e: any) => (
              <Card
                key={e.id}
                {...e}
                cardBg={bgColors[Math.floor(Math.random() * bgColors.length)]}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Jobs;
