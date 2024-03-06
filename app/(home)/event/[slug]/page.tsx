import { getEventBySlug } from "@/services/events";
import React from "react";
import Event from "./_components/Event";
import { notFound } from "next/navigation";
interface Props {
  params: {
    slug: string;
  };
}
const EventPage = async ({ params }: Props) => {
  const event = await getEventBySlug(decodeURIComponent(params.slug));
  if (!event) return notFound();
  return (
    <section className=" pt-40 pb-4 ">
      <article className="container mx-auto">
        <Event {...event} />
      </article>
    </section>
  );
};

export default EventPage;
