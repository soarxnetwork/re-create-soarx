import React from "react";
import { FaHome } from "react-icons/fa";
import { SiSololearn } from "react-icons/si";
import { FaEdit } from "react-icons/fa";
import { MdAssistWalker } from "react-icons/md";

const LecturesDsa = () => {
  const itemLectures = [
    {
      icon: <SiSololearn className=" fill-dsaPrimary" />,
      title: "LECTURES",
      desc: "Lectures that cover all important DSA for internships/placements.",
      date: "Batch start date 24th Dec, 2023. Alternate Day Schedule",
    },
    {
      icon: <FaEdit className=" fill-dsaPrimary" />,
      title: "QUESTIONS PRACTICE",
      desc: "30 0+ Carefully Curated & Solved Questions Practice",
      date: "Course Duration - 4 months Course access is for one year.",
    },
    {
      icon: <MdAssistWalker className=" fill-dsaPrimary" />,
      title: "DOUBT ASSISTANCE",
      desc: "When you are stuck, use multi-step Doubt Assistance.",
      date: "Plus community with TAs",
    },
  ];
  return (
    <article>
      <div className="container py-12">
        <div className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 ">
          {itemLectures.map((item) => {
            return (
              <div className="flex flex-col gap-4" key={item.title}>
                <div className="text-4xl ">{item.icon}</div>
                <div className=" space-y-2">
                  <h1 className="text-2xl font-bold">{item.title}</h1>
                  <p className="text-lg">{item.desc}</p>
                  <p className="text-lg">{item.date}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </article>
  );
};

export default LecturesDsa;
