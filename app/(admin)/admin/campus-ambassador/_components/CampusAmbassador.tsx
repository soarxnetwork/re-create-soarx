"use client";
import type { CampusAmbassador } from "@prisma/client";
import React, { useEffect, useState } from "react";
import { CSVLink } from "react-csv";
import InputSearchCampus from "./InputSearchCampus";
import CampusAmbasaddors from "./CampusAmbasaddors";
interface CampusAmbassadorPageProps {
  campusAmbassadors: CampusAmbassador[];
}
const CampusAmbassador = ({ campusAmbassadors }: CampusAmbassadorPageProps) => {
  const [isCLient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <section className=" flex flex-col gap-8">
      <div className=" flex items-center justify-between">
        {campusAmbassadors.length > 0 ? (
          <h1 className="text-3xl font-bold">Campus Ambassadors</h1>
        ) : (
          <h1 className="text-3xl font-bold">Empty Campus Ambassadors</h1>
        )}
        <InputSearchCampus />
        {campusAmbassadors.length > 0 && isCLient && (
          <CSVLink data={campusAmbassadors}>Test Download</CSVLink>
        )}
      </div>
      {campusAmbassadors.map((campus) => (
        <CampusAmbasaddors key={campus.id} {...campus} />
      ))}
    </section>
  );
};

export default CampusAmbassador;
