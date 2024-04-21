import { faqDlc } from "@/constants/dlc";
import React from "react";
import FaqItem from "../../campus-ambassador/_components/FaqItem";

const FaqDlc = () => {
  return (
    <>
      <div className="space-y-10 mt-14 ml-24 mr-24 mb-14">
        <div className="space-y-6 text-center">
          <h4 className="font-semibold text-4xl">Frequently Asked Questions</h4>
          <p>
            Have a question that is not answered? You can contact us at{" "}
            <span className="font-medium">soarxnetwork@gmail.com</span>
          </p>
        </div>
        <div className=" space-y-10">
          {faqDlc.map((item) => (
            <div className="border-2 rounded-sm">
              <FaqItem key={item.id} {...item} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default FaqDlc;
