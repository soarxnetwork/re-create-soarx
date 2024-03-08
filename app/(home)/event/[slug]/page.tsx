import { getEventBySlug } from "@/services/events";
import React, { cache } from "react";
import Event from "./_components/Event";
import { notFound } from "next/navigation";
import { Metadata } from "next";

const getEvent = cache(async (slug: string) => {
  const event = await getEventBySlug(slug);
  if (!event) return notFound();
  return event;
});

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const event = await getEvent(params.slug);

  return {
    title: event.title,
    description: event.description,
    openGraph: {
      images: [
        {
          url: event.imageUrl,
        },
      ],
    },
  };
}

interface Props {
  params: {
    slug: string;
  };
}
const EventPage = async ({ params }: Props) => {
  const event = await getEvent(params.slug);

  return (
    <section className=" pt-40 pb-4 ">
      <article className="container mx-auto">
        <Event {...event} />
      </article>
    </section>
  );
};

export default EventPage;
