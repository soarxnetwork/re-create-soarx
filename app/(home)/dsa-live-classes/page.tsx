import React from "react";
import HeroDlc from "./_components/HeroDlc";
import LeftHeroDlc from "./_components/LeftHeroDlc";
import FaqDlc from "./_components/FaqDlc";
import FloatingHero from "./_components/FloatingHero";

const DsaLiveClassesPage = () => {
  return (
    <>
      <div className="bg-border-dlc pl-32 pt-28 min-h-[50vh] pb-4 fl-ic  text-black bg-gray-200">
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
      <section className="py-4 container">
        <FaqDlc />
      </section>
    </>
  );
};

export default DsaLiveClassesPage;
