"use client";
import React, { useEffect, useRef } from "react";
import HeadingSecondDsa from "./HeadingSecondDsa";
import { FaForumbee } from "react-icons/fa";
import ButtonSecondDsa from "./ButtonSecondDsa";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";
import FormCampus from "./FormCampus";
import ItemFormSecondDsa from "./ItemFormSecondDsa";

const FormSecondDsa = () => {
  // ! TODO
  return (
    <article className="p-4 rounded-xl " id="form">
      <div className="container lg:grid lg:grid-cols-2 gap-8  ">
        {/* ! */}
        <div className="relative">
          <ItemFormSecondDsa />
        </div>
        {/* !  */}
        <div className="p-4 rounded-xl dark:bg-gray-800">
          <FormCampus />
        </div>
      </div>
    </article>
  );
};

export default FormSecondDsa;
