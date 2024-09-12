import React from "react";
import AdvertiseMent from "./Advertisement";
import LeftFilterComponent from "./LeftFilterComponent";

const Left = ({
  workingSchedeule,
  setworkingSchedeule,
  employmentType,
  setEmploymentType,
}: any) => {
  return (
    <div className="flex flex-col space-y-4 mr-2">
      <AdvertiseMent />
      <LeftFilterComponent
        workingSchedeule={workingSchedeule}
        setworkingSchedeule={setworkingSchedeule}
        employmentType={employmentType}
        setEmploymentType={setEmploymentType}
      />
    </div>
  );
};

export default Left;
