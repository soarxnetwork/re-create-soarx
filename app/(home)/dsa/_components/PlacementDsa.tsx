import React from "react";
import { FaHtml5 } from "react-icons/fa";

const PlacementDsa = () => {
  const itemsPlacement = [
    {
      // icon: <FaHtml5 size={42} />,
      color: "red",
      title: "Top Instructors",
      description:
        "Learn Live from instructors working in companies like Microsoft, Amazon, Google, Atlassian etc.",
    },
    {
      // icon: <FaHtml5 size={42} />,
      color: "blue",
      title: "Live Mentorship",
      description:
        "How to build your resume, apply for off-campus, get a referral, prepare for interviews - all these will be covered in Mentorship Sessions.",
    },
    {
      // icon: <FaHtml5 size={42} />,
      color: "green",
      title: "Doubt Assistance",
      description:
        "Get access to Teaching assistants & Weekly Doubt assistance sessions when you are stuck.",
    },
  ];
  return (
    <article className=" bg-dsaSecondary px-4 py-12">
      <div className="container mx-auto space-y-8">
        <h3 className="text-3xl font-semibold text-center">
          Become the <span className=" text-dsaPrimary font-bold">Top 1%</span>{" "}
          in your Placement
        </h3>
        <div className=" grid lg:grid-cols-3 sm:grid-cols-2  grid-cols-1 gap-6">
          {itemsPlacement.map((item) => (
            <div
              key={item.title}
              className=" flex flex-col justify-center items-center text-center p-6  gap-4 bg-white  rounded-xl"
              style={{ boxShadow: "0px 6px 6px 0px " + item.color }}
            >
              <div className=" bg-dsaSecondary rounded-full p-4">
                <FaHtml5 size={42} style={{ fill: item.color }} />
              </div>
              <div className="space-y-2">
                <h4 className=" text-2xl font-semibold">{item.title}</h4>
                <p className="text-lg">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
};

export default PlacementDsa;
