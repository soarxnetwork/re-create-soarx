import Image from "next/image";
import React from "react";
import { BsArrowRight } from "react-icons/bs";
import JoinDsa from "./_components/JoinDsa";
import HeroDsa from "./_components/HeroDsa";
import CurriculumDsa from "./_components/CurriculumDsa";
import OverviewDsa from "./_components/OverviewDsa";
import LecturesDsa from "./_components/LecturesDsa";
import BrandDsa from "./_components/BrandDsa";
import PlacementDsa from "./_components/PlacementDsa";
import ProfileDsa from "./_components/ProfileDsa";
import CertifiedDsa from "./_components/CertifiedDsa";
import FaqDsa from "./_components/FaqDsa";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "DSA",
  description: "DSA Course Page",
};

const DsaPage = () => {
  return (
    <section className=" pt-40 pb-8 space-y-12  ">
      <HeroDsa />
      <JoinDsa />
      <CurriculumDsa />
      <OverviewDsa />
      <LecturesDsa />
      <BrandDsa />
      <PlacementDsa />
      <ProfileDsa />
      <CertifiedDsa />
      <FaqDsa />
    </section>
  );
};

export default DsaPage;
