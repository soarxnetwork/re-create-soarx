import Link from "next/link";
import React from "react";
import { FaDiscord } from "react-icons/fa";
const Discord = () => {
  return (
    <section className="section">
      <div className="custom-container">
        <div className="">
          <div className=" text-center ">
            <div className="text-center text-primary cursor-pointer">
              {"Powered by Discord".split("").map((child, idx) => (
                <span className={"hoverText"} key={idx}>
                  {child}
                </span>
              ))}
            </div>
            <h2 className="text-center text-4xl text-textColor pt-2 font-bold leading-normal">
              Join Our Discord Community
            </h2>{" "}
            <p className="mx-auto max-w-2xl text-[#647084] pt-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis, lectus magna fringilla
              urna
            </p>
            <div className="pt-10 m-auto flex justify-center items-center">
              <Link
                href="https://discord.gg/tH6Cm3fRza"
                className=" signInbut mt-200 flex items-center w-fit gap-2"
              >
                <FaDiscord />
                Join Discord
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Discord;
