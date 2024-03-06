import { Event } from "@prisma/client";
import React from "react";

const Event = ({ slug, title }: Partial<Event>) => {
  return (
    <div>
      <p>{title}</p>
      <p>{slug}</p>
    </div>
  );
};

export default Event;
