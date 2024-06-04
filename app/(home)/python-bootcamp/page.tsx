import React from "react";
import HeroDlc from "./_components/HeroDlc";
import LeftHeroDlc from "./_components/LeftHeroDlc";
import FaqDlc from "./_components/FaqDlc";
import FloatingHero from "./_components/FloatingHero";
import InstructorsDlc from "./_components/InstructorsDlc";
import CertificateOfCompletion from "./_components/CertificateOfCompletion";
import PrevLectures from "./_components/Prev_Lectures";
import '../../globals.css';
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "5-Day Python Bootcamp by SoarX",
  description: "Our 5-Day Python Bootcamp is designed to provide an immersive learning experience in Python programming. Led by industry experts Mohit Manuja, Software Engineer at Google, and Rajat Kumar, Software Engineer at Intuit, this bootcamp will help you learn Python from scratch and build a strong foundation in programming.",
  icons: '/images/5_Day_Python_Bootcamp.png',
}

const PythonBootcamp = () => {
  return (
    <>
      <div className="sm:pl-14 pt-32 min-h-[50vh] myfonts fl-ic bg-gradient-to-b from-purple-500 to-white  dark:bg-gradient-to-b  dark:from-[#9241d4] dark:to-black">
        <LeftHeroDlc />
      </div>
      <section className="lg:grid lg:grid-cols-3 relative py-4">
        <div className=" col-span-2 relative">
          <HeroDlc />
        </div>
        {/* ! right */}
        <FloatingHero />
        {/* <div className=" bg-primaryPurple p-4">
          <p>test</p>
        </div> */}
      </section>
      <section className="py-4 sm:container">
        <InstructorsDlc />
        <PrevLectures/>
        <CertificateOfCompletion />
        <FaqDlc />
      </section>
    </>
  );
};

export default PythonBootcamp;
