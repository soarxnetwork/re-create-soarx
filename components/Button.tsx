import React from "react";
import Link from "next/link";
import { AiOutlineArrowRight } from "react-icons/ai";

const Button = ({ name }: { name: string }) => {
  return (
    <div className="box bg-1">
      <button className="button button--itzel button--text-thick">
        <i className="button__icon icon ">
          <AiOutlineArrowRight />
        </i>
        <p className="text-lg font-medium text-prim">{name}</p>
      </button>
    </div>
  );
};

export default Button;
