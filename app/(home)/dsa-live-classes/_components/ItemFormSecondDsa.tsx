import React from "react";
import HeadingSecondDsa from "./HeadingSecondDsa";
import { FaForumbee } from "react-icons/fa";

const ItemFormSecondDsa = () => {
  const items = [
    {
      icon: <FaForumbee size={61} />,
      number: 1,
      title: " Fill in the form above with all your details.",
    },
    {
      icon: <FaForumbee size={61} />,
      number: 2,
      title: " Take the assessment.",
    },
    {
      icon: <FaForumbee size={61} />,
      number: 3,
      title: " You are officially a SoarX if you pass the test!",
    },
  ];
  return (
    <div className="space-y-8 sticky lg:w-[412px] top-44">
      <HeadingSecondDsa text="Become a HackerEarth Campus Ambassador in 3 simple steps" />
      <div className="space-y-4">
        {items.map((item) => (
          <div
            key={item.number}
            className=" bg-secondDsaWhite p-4 rounded-xl flex justify-between  "
          >
            <div className="flex gap-4 ">
              <div>{item.icon}</div>
              <p className=" text-xl font-semibold  ">{item.title}</p>
            </div>
            <p className=" text-6xl font-bold ">{item.number}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemFormSecondDsa;
