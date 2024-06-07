import React from "react";
import HomeSlider from "./_components/HomeSlider";
import OurAim from "./_components/OurAim";
import { getAllEvents } from "@/services/events";
import Events from "./_components/Events";
import Partners from "./_components/Partner";
import PressClippings from "./_components/PressClippings";
import Testimonial from "./_components/Testimonial";
import Discord from "./_components/Discord";
import NumbersThatMatter from "./_components/NumbersThatMatter";
import { sendMail } from "@/lib/mail";
import { getServerSession } from "next-auth";
import  HomePythonBootCamp  from "@/components/Bootcamps/HomePythonBootCamp";
import Gallery from "./_components/Gallery";
const HomePage = async () => {
  const events = await getAllEvents();

  return (
    <section>
      <HomeSlider />
      <OurAim />
      {/* <Events events={events!} /> */}
      <HomePythonBootCamp/>
      <Partners />
      <PressClippings />
      <Gallery/>
      <Testimonial />
      <NumbersThatMatter />
      <Discord />
    </section>
  );
};

export default HomePage;
