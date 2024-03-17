import React from "react";
import HeadingSecondDsa from "./HeadingSecondDsa";
import Image from "next/image";

const LeftResponsibilityDsa = () => {
  return (
    <>
      <HeadingSecondDsa text="Your responsibilities as a SoarX Campus Ambassador" />
      <div className=" bg-white p-4 place-self-end rounded-xl flex gap-4">
        <div>
          <Image
            src="https://i.pinimg.com/236x/d3/82/fe/d382fe12fb2d68f1e5e3c87e96310185.jpg"
            alt="Responsibility1"
            width={64}
            height={64}
            className=" rounded-xl"
          />
        </div>
        <div>
          <p className="text-xl font-medium">Joe</p>
          <p>Ambassador</p>
        </div>
      </div>
      <div className=" place-self-start absolute bottom-0 left-0 ">
        <Image
          src="https://i.pinimg.com/236x/25/51/5d/25515df664f5d76908bfb2d81f197011.jpg"
          alt="Responsibility1"
          width={120}
          height={120}
          className=" rounded-xl"
        />
      </div>
    </>
  );
};

export default LeftResponsibilityDsa;
