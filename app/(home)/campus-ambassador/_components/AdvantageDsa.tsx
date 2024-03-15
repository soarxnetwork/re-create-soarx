import React from "react";
import HeadingSecondDsa from "./HeadingSecondDsa";
import { advantageDsa2 } from "@/constants/dsa2";
import AdvantageCard from "./AdvantageCard";

const AdvantageDsa = () => {
  return (
    <article className="">
      <div className="container space-y-8">
        <HeadingSecondDsa text="Experience the SoarX advantage" />
        <div className="flex flex-wrap items-center justify-center gap-4">
          {advantageDsa2.map((item) => (
            <AdvantageCard key={item.title} {...item} />
          ))}
        </div>
      </div>
    </article>
  );
};

export default AdvantageDsa;
