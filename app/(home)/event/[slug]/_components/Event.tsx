import { BASE_URL_EVENT } from "@/constants/event";
import { Event } from "@prisma/client";
import React from "react";

const Event = ({ slug, title }: Partial<Event>) => {
  return (
    <section className="section h-[712px] ">
      <article className="container h-full w-full">
        <iframe
          className="w-full h-full"
          title={title}
          sandbox="allow-scripts allow-same-origin"
          aria-hidden="false"
          src={BASE_URL_EVENT + slug}
          style={{ border: "none" }}
        />
      </article>
    </section>
  );
};

export default Event;
