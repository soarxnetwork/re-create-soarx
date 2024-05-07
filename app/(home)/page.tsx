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
const HomePage = async () => {
  const events = await getAllEvents();
  const data = await getServerSession()
  console.log(data)

  return (
    <section>
      <HomeSlider />
      <OurAim />
      <Events events={events!} />
      <Partners />
      <PressClippings />
      <Testimonial />
      <NumbersThatMatter />
      <Discord />
    </section>
  );
};

export default HomePage;
