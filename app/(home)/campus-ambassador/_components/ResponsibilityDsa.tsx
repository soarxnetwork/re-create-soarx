import React from "react";
import HeadingSecondDsa from "./HeadingSecondDsa";
import Image from "next/image";
import LeftResponsibilityDsa from "./LeftResponsibilityDsa";
import RightResponsibilityDsa from "./RightResponsibilityDsa";

const ResponsibilityDsa = () => {
  return (
    <article className="p-4 rounded-xl">
      <div className="container lg:grid lg:grid-cols-3 gap-8">
        <div className=" lg:flex hidden flex-col gap-12 relative pb-48">
          <LeftResponsibilityDsa />
        </div>
        <div className="  flex flex-wrap justify-between gap-4 col-span-2 [&>div:not(:first-child)]:mt-4">
          <div className=" headingResponsibility">
            <HeadingSecondDsa text="Your responsibilities as a SoarX Campus Ambassador" />
          </div>
          <RightResponsibilityDsa />
        </div>
      </div>
    </article>
  );
};

export default ResponsibilityDsa;
