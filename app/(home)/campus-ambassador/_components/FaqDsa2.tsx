"use client";
import HeadingSecondDsa from "./HeadingSecondDsa";
import SeparatorFaq from "./SeparatorFaq";
import FaqItem from "./FaqItem";
import { motion } from "framer-motion";
import { itemsFaqDsa2 } from "@/constants/dsa2";

const FaqDsa2 = () => {
  return (
    <article>
      <div className="container space-y-6 md:pt-10 xl:pt-16 2xl:pr-36">
        <div className="text-center">
          <HeadingSecondDsa text="Frequently Asked Questions" />
        </div>
        <div className="">
          {/* <h4 className=" text-xl font-medium">For prospective SoarX</h4> */}
          <SeparatorFaq />
          <motion.div className="mb-9 space-y-4">
            {itemsFaqDsa2.map((item) => (
              <FaqItem key={item.id} {...item} />
            ))}
          </motion.div>
        </div>
      </div>
    </article>
  );
};

export default FaqDsa2;
