import { getAllCampusAmbassador } from "@/services/campus";
import React, { useEffect, useState } from "react";
import CampusAmbasaddors from "./_components/CampusAmbasaddors";
import InputSearchCampus from "./_components/InputSearchCampus";
import { CSVLink } from "react-csv";
import CampusAmbassador from "./_components/CampusAmbassador";

const CampusAmbassadorPage = async () => {
  const campusAmbassadors = await getAllCampusAmbassador();

  return <CampusAmbassador campusAmbassadors={campusAmbassadors} />;
};

export default CampusAmbassadorPage;
