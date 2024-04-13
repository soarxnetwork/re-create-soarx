import { faqDlc } from "@/constants/dlc";
import React from "react";
import FaqItem from "../../campus-ambassador/_components/FaqItem";

const FaqDlc = () => {
  return (
    <>
      <div className="space-y-6">
        <div className="space-y-4 text-center">
          <h4 className="font-semibold text-xl">Frequently Asked Questions</h4>
          <p>
            Have a question that is not answered? You can contact us at
            soarxnetwork@gmail.com
          </p>
        </div>
        <div className=" space-y-4">
          {faqDlc.map((item) => (
            <FaqItem key={item.id} {...item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default FaqDlc;
