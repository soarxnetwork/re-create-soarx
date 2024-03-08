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
            Join our discord server and get the latest updates now!
          </div>
          <a href="https://discord.gg/tH6Cm3fRza">
          <button className="flex items-center gap-2 m-auto text-white btn-primary ">
            
            <FaDiscord className=" fill-white" />
            
            Join Now
          </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Discord;
