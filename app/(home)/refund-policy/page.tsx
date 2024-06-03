import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Refund Policy",
  description: "Refund Policy",
};

function RefundPage() {
  return (
    <div className="mb-20 mt-40 md:mt-30">
      <h1 className="w-full text-center text-[25px] mb-10 md:text-3xl lg:text-5xl font-bold">
        REFUND & CANCELATION POLICY
      </h1>
      <p className="pl-7 pr-7 md:py-10 md:px-32 text-[1.2rem] text-center">
        There is a strict no refund & no cancellation policy. You are entitled
        to a refund only in the case where you have not been allotted the course
        after payment.
      </p>
    </div>
  );
}

export default RefundPage;
