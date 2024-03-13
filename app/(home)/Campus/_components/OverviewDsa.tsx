import { itemOverview } from "@/constants/dsa";
import Image from "next/image";
import React from "react";

const OverviewDsa = () => {
  return (
    <article className=" bg-dsaSecondary w-full  py-12 ">
      <div className="container space-y-6">
        <div className=" ">
          <h3 className=" font-bold text-3xl">BATCH OVERVIEW</h3>
        </div>
        <div className="grid sm:grid-cols-2 grid-cols-1 justify-between gap-8">
          <div>
            {itemOverview.map((item) => (
              <div key={item}>
                <p className="text-xl">{item}</p>
              </div>
            ))}
          </div>
          <div className=" place-self-center">
            <Image
              src="https://i.pinimg.com/originals/e8/4e/db/e84edb279472c7ab49e97ec276d4ffda.gif"
              alt="overview"
              width={500}
              height={400}
              className="rounded-xl"
            />
          </div>
        </div>
      </div>
    </article>
  );
};

export default OverviewDsa;
