import { Metadata } from "next";
import Discord from "../_components/Discord";
import OurAim from "../_components/OurAim";
import Partners from "../_components/Partner";
import PressClippings from "../_components/PressClippings";
import Testimonial from "../_components/Testimonial";
import OurTeam from "./_components/OurTeam";

export const metadata: Metadata = {
  title: "About Us",
  description: "About SoarX",
};

const AboutPage = () => {
  return (
    <>
      <div className="pt-40"></div>
      <OurAim />
      <Partners />
      <PressClippings />
      <OurTeam />
      <Testimonial />
      <Discord />
    </>
  );
};

export default AboutPage;
