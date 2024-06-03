"use client";
import { feedBacksDlc } from "@/constants/dlc";
import { useGlobalState } from "@/lib/zustand";
import { truncateWord } from "@/utils/truncateWord";
import Image from "next/image";
import React, { useEffect } from "react";
import { FaStar } from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import { useMediaQuery } from "usehooks-ts";

const FeedbackDlc = () => {
  return (
    <></>
  )
  /*const [ref, inView] = useInView();
  const { isActiveFloatDlc, setIsActiveFloatDlc } = useGlobalState(
    (state) => state
  );
  const matches = useMediaQuery("(min-width: 1024px");

  useEffect(() => {
    if (inView && matches) {
      setIsActiveFloatDlc(true);
    }
  }, [inView, setIsActiveFloatDlc, matches]);
  return (
    <>
      <div className="space-y-4">
        <h4 className="font-semibold">Our Success Stories</h4>
        <p>
          Discover inspiration and insights through recent reviews from our
          students. Their success stories reflect the transformative journey of
          learning and growth with CodeHelp.
        </p>
      </div>
      <div className="bg-border-dlc p-4 rounded-xl grid  grid-cols-2 gap-6 text-black shadow-lg bg-white">
        {feedBacksDlc.map((feedback) => (
          <div className="flex flex-col gap-6" key={feedback.name}>
            <div className="fl-ic gap-4">
              <Image
                src={feedback.img}
                alt={feedback.name}
                width={48}
                height={48}
                className="rounded-full"
              />
              <div className="space-y-2">
                <p className="font-semibold">{feedback.name}</p>
                <span className="font-light">{feedback.year}</span>
              </div>
            </div>
            <div className="space-y-2">
              <p>{truncateWord(feedback.testimonial, 180)}</p>
              <div className="fl-ic gap-2" ref={ref}>
                {Array.from({ length: feedback.star }, (_, i) => (
                  <FaStar size="20" className="fill-yellow-500" key={i} />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );*/
};

export default FeedbackDlc;
