import React from "react";
import { getAllEvents, getEventsWithSearch } from "@/services/events";
import { Metadata } from "next";
import CampusAmbasaddors from "../_components/CampusAmbasaddors";
import { getAllCampusAmbassador, getCampusWithSearch } from "@/services/campus";
import InputSearchCampus from "../_components/InputSearchCampus";

interface CampusAmbassadorSearch {
  params: {
    search: string;
  };
}

const CampusAmbassadorSearchPage = async ({
  params,
}: CampusAmbassadorSearch) => {
  const campusAmbassadors = await getCampusWithSearch(params.search);

  return (
    <section className=" flex flex-col gap-8">
      <div className="flex items-center justify-between">
        {campusAmbassadors.length > 0 ? (
          <h1 className="text-3xl font-bold">Campus Ambassadors</h1>
        ) : (
          <h1 className="text-3xl font-bold">Empty Campus Ambassadors</h1>
        )}
        <InputSearchCampus />
      </div>
      {campusAmbassadors.map((campus) => (
        <CampusAmbasaddors key={campus.id} {...campus} />
      ))}
    </section>
  );
};

export default CampusAmbassadorSearchPage;
