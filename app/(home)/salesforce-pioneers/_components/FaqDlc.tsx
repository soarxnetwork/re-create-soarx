import { faqDlc, faqDlcSalesForce } from "@/constants/dlc";
import React from "react";
import FaqItem from "../../campus-ambassador/_components/FaqItem";

const FaqDlc = () => {
  return (
    <>
      <div className="space-y-10 myfonts mt-14 sm:ml-10 sm:mr-10 md:ml-24 md:mr-24 mb-20">
        <div className="space-y-6 text-center">
          <h4 className="font-semibold text-3xl sm:text-4xl">Frequently Asked Questions</h4>
          <p className="text-2xl pl-5 pr-5 sm:pl-0 sm:pr-0">
            <span className="text-gray-500 dark:text-gray-400">Have a question that is not answered ? You can contact us at</span>{" "}
            <span className="font-medium">team@soarx.tech</span>
          </p>
        </div>
        <div className="space-y-10 ml-5 mr-5">
          {faqDlcSalesForce.map((item) => (
            <div key={item.id} className="border-2 rounded-md md:rounded-sm">
              <FaqItem key={item.id} {...item} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default FaqDlc;
