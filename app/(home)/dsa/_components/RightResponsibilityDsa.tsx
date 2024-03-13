"use client";
import { responsibilityDsa2 } from "@/constants/dsa2";
import React from "react";

const RightResponsibilityDsa = () => {
  const colorSwitch = "text-secondDsaBlack text-secondDsaWhite";
  return responsibilityDsa2.map((item) => (
    <div
      key={item}
      className=" w-[240px] flex items-center justify-center bg-white p-4 mx-auto"
    >
      <h4 className="  font-semibold">{item}</h4>
    </div>
  ));
};

export default RightResponsibilityDsa;
