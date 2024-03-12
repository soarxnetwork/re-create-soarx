import React from "react";
import HeroSecondDsa from "./_components/HeroSecondDsa";
import FormSecondDsa from "./_components/FormSecondDsa";
import AdvantageDsa from "./_components/AdvantageDsa";
import ResponsibilityDsa from "./_components/ResponsibilityDsa";
import BannerDsa from "./_components/BannerDsa";
import FaqDsa2 from "./_components/FaqDsa2";

const SecondDsaPage = () => {
  return (
    <section className=" pt-40 pb-8 space-y-12  ">
      <HeroSecondDsa />
      <hr className="w-full h-[2px] bg-secondDsaBlack" />
      <FormSecondDsa />
      <hr className="w-full h-[2px] bg-secondDsaBlack" />
      <AdvantageDsa />
      <hr className="w-full h-[2px] bg-secondDsaBlack" />
      <ResponsibilityDsa />
      {/* ! */}
      <BannerDsa />
      <FaqDsa2 />
    </section>
  );
};

export default SecondDsaPage;
