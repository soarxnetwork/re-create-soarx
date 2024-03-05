import React from "react";
import { FaDiscord } from "react-icons/fa";
const Discord = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="surface-0 text-700 text-center">
          <div className="text-primary font-bold mb-3">
            &nbsp;POWERED BY DISCORD
          </div>
          <div className="text-900 font-bold  mb-3">
            Join Our Discord Community
          </div>
          <div className="text-700 text-2xl mb-5">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit
            numquam eligendi quos.
          </div>
          <button className="flex items-center gap-2 m-auto text-white btn-primary ">
            <FaDiscord className=" fill-white" />
            Join Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Discord;
