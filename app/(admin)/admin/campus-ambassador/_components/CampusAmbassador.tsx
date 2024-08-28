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

  const handleCampusAmbas = async () =>{
    try {
      const res = await fetch("/api/DownloadCampusAmbassadar", {
        method: "GET"
      });
      if(res.ok){
       const blob = await res.blob();
       const url = window.URL.createObjectURL(blob);
       const a = document.createElement('a');
       a.href = url;
       a.download = `campusAmbassadars${Math.round(Math.random() * 1000)}dev.csv`;
       a.click();
       document.body.removeChild(a);
       window.URL.revokeObjectURL(url);
      }
    } catch (error) {
      console.log(error)
    }
  }


  const handleCampusLeader = async () =>{
    try {
      const getLeaders = await fetch("/api/DownLeader", {
        method: "GET"
      })
      if(getLeaders.ok){
        const blob = await getLeaders.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `CampusLeaders${Math.round(Math.random() * 1000)}dev.csv`;
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
      }
    } catch (error) {
      console.log(error);
    }
  }

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
      <button onClick={handleCampusAmbas} className="signInbut">Download Campus Ambassadars</button>
      <button onClick={handleCampusLeader} className="signInbut">Download Campus Leaders</button>
      {campusAmbassadors.map((campus) => (
        <CampusAmbasaddors key={campus.id} {...campus} />
      ))}
    </section>
  );
};

export default CampusAmbassador;
