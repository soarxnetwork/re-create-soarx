import React from "react";
import HeroSecondDsa from "./_components/HeroSecondDsa";
import FormSecondDsa from "./_components/FormSecondDsa";
import AdvantageDsa from "./_components/AdvantageDsa";
import ResponsibilityDsa from "./_components/ResponsibilityDsa";
import BannerDsa from "./_components/BannerDsa";
import FaqDsa2 from "./_components/FaqDsa2";
import AmbassadarPerks from "./_components/AmbassadarPerks";
import StepsToAmmbassdar from "./_components/StepsToAmmbassdar";
import RolesAndResponsibility from "./_components/RolesAndResponsibility";
import ReviewOfAmbessadar from "./_components/ReviewOfAmbessadar";
import '../../globals.css'

const SecondDsaPage = () => {
  return (
    <section className=" pt-40 ml-28 myfonts pb-8 space-y-12 mr-24 ">
      <HeroSecondDsa />
      {/* <hr className="w-full h-[2px]" /> */}
      <AmbassadarPerks/>
      {/* <FormSecondDsa /> */}
      {/* <hr className="w-full h-[2px]" /> */}
      <StepsToAmmbassdar/>
      {/* <AdvantageDsa /> */}
      {/* <hr className="w-full h-[2px]" /> */}
      <RolesAndResponsibility/>
      {/* <ResponsibilityDsa /> */}
      {/* ! */}
      {/* <BannerDsa /> */}
      <ReviewOfAmbessadar/>
      <FaqDsa2 />
    </section>
  );
};

export default SecondDsaPage;
