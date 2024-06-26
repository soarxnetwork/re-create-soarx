import Link from "next/link";
import React from "react";
import { FaDiscord } from "react-icons/fa";
const Discord = () => {
  return (
    <section className=" px-[11%] my-[10%] xl:my-14">
      <div className="custom-container">
        <div className="">
          <div className=" text-center ">
            {/* <div className="text-center text-primary cursor-pointer">
              {"Powered by Discord".split("").map((child, idx) => (
                <span className={"hoverText text-[10px] sm:text-[30px] lg:text-[40px]"} key={idx}>
                  {child}
                </span>
              ))}
            </div> */}
            <h2 className="text-center lg:text-[80px] pt-2 font-bold leading-normal">
              {"Join Our Discord Community".split("").map((child, idx) => (
            <span className={"hoverText max-sm:text-[25px] "} key={idx}>
              {child}
            </span>
          ))}
            </h2>{" "}
            <p className="mx-auto max-w-2xl text-[20px] lg:text-[30px] text-[#647084] pt-5">
            Engage with fellow tech enthusiasts, participate in insightful discussions, and stay updated on industry trends and opportunities.
            </p>
            <div className="pt-10 m-auto flex justify-center items-center">
              <Link
                href="https://discord.com/invite/B9kD9cbJSe"
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
