import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Refund Policy",
  description: "Refund Policy",
};

function RefundPage() {
  return (
    <div className="mt-[15%]">
      <h1 className="w-full text-center font-bold">
        REFUND & CANCELLATION POLICY
      </h1>
      <p className="py-10 px-32 text-[1.2rem] text-center">
        There is a strict no refund & no cancellation policy. You are entitled
        to a refund only in the case where you have not been allotted the course
        after payment.
      </p>
    </div>
  );
}

export default RefundPage;
