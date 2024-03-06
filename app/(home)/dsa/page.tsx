import Image from "next/image";
import React from "react";
import { BsArrowRight } from "react-icons/bs";
import JoinDsa from "./_components/JoinDsa";
import HeroDsa from "./_components/HeroDsa";
import CurriculumDsa from "./_components/CurriculumDsa";
import OverviewDsa from "./_components/OverviewDsa";
import LecturesDsa from "./_components/LecturesDsa";
import BrandDsa from "./_components/BrandDsa";

const DsaPage = () => {
  return (
    <section className=" pt-40 pb-8 space-y-12  ">
      <HeroDsa />
      <JoinDsa />
      <CurriculumDsa />
      <OverviewDsa />
      <LecturesDsa />
      <BrandDsa />
    </section>
  );
};

export default DsaPage;
