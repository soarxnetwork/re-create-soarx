import React from "react";
import { Accordion, AccordionItem, Checkbox } from "@nextui-org/react";

export default function LeftFilterComponent({
  workingSchedeule,
  setworkingSchedeule,
  employmentType,
  setEmploymentType,
}: any) {
  // Handle selection of working schedule
  // Handle selection of working schedule
  const handleWorkingScheduleChange = (value: string) => {
    if (workingSchedeule.includes(value)) {
      setworkingSchedeule(
        workingSchedeule.filter((item: string) => item !== value)
      );
    } else {
      setworkingSchedeule([...workingSchedeule, value]);
    }
  };

  // Handle selection of employment type
  const handleEmploymentTypeChange = (value: string) => {
    if (employmentType.includes(value)) {
      setEmploymentType(
        employmentType.filter((item: string) => item !== value)
      );
    } else {
      setEmploymentType([...employmentType, value]);
    }
  };

  return (
    <div className="w-64 bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4 text-[#545453]">Filters</h2>
      <Accordion selectionMode="multiple" className="w-full">
        <AccordionItem
          key="working-schedule"
          aria-label="Working schedule"
          title="Working schedule"
          classNames={{
            title: "text-[#545453] font-medium",
            content: "text-[#545453]",
          }}
        >
          <div className="flex flex-col gap-2">
            <Checkbox
              color="primary"
              className="text-[#545453]"
              isSelected={workingSchedeule.includes("Full time")}
              onChange={() => handleWorkingScheduleChange("Full time")}
            >
              Full time
            </Checkbox>
            <Checkbox
              color="primary"
              className="text-[#545453]"
              isSelected={workingSchedeule.includes("Part time")}
              onChange={() => handleWorkingScheduleChange("Part time")}
            >
              Part time
            </Checkbox>
            <Checkbox
              color="primary"
              className="text-[#545453]"
              isSelected={workingSchedeule.includes("Project work")}
              onChange={() => handleWorkingScheduleChange("Project work")}
            >
              Project work
            </Checkbox>
          </div>
        </AccordionItem>
        <AccordionItem
          key="employment-type"
          aria-label="Employment type"
          title="Employment type"
          classNames={{
            title: "text-[#545453] font-medium",
            content: "text-[#545453]",
          }}
        >
          <div className="flex flex-col gap-2">
            <Checkbox
              color="primary"
              className="text-[#545453]"
              isSelected={employmentType.includes("Full day")}
              onChange={() => handleEmploymentTypeChange("Full day")}
            >
              Full day
            </Checkbox>
            <Checkbox
              color="primary"
              className="text-[#545453]"
              isSelected={employmentType.includes("Flexible schedule")}
              onChange={() => handleEmploymentTypeChange("Flexible schedule")}
            >
              Flexible schedule
            </Checkbox>
            <Checkbox
              color="primary"
              className="text-[#545453]"
              isSelected={employmentType.includes("Shift work")}
              onChange={() => handleEmploymentTypeChange("Shift work")}
            >
              Shift work
            </Checkbox>
            <Checkbox
              color="primary"
              className="text-[#545453]"
              isSelected={employmentType.includes("Distant work")}
              onChange={() => handleEmploymentTypeChange("Distant work")}
            >
              Distant work
            </Checkbox>
            <Checkbox
              color="primary"
              className="text-[#545453]"
              isSelected={employmentType.includes("Shift method")}
              onChange={() => handleEmploymentTypeChange("Shift method")}
            >
              Shift method
            </Checkbox>
          </div>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
