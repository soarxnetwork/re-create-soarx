import React from "react";
import AmbassadorPerkCard from "./AmbassadorPerkCard";

import { PiHandshakeLight } from "react-icons/pi";
const AmbassadarPerks = () => {
  return (
    <div className="flex w-full myfonts gap-y-8 flex-col items-center mt-10 mb-10 ml-9 pr-24">
      <div className="flex flex-col gap-y-6 items-center">
        <div className="text-4xl font-semibold">Whats in it for you</div>
        <div className="text-[#8919E4] font-medium cursor-pointer">
          {"Discover the exclusive benefits and opportunities waiting for you!".split("").map((child, idx) => (
            <span className={"hoverText font-medium"} key={idx}>
              {child}
            </span>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 dark:text-white  gap-5 gap-y-7">

        <AmbassadorPerkCard title="Networking with Industry Experts" description="Engage with industry experts from Big MNCs like MAANG in our online and offline events." />

          <AmbassadorPerkCard title="Leadership Opportunities" description="Organize online/offline events at your college and facilitate visits to Microsoft Office." />

          <AmbassadorPerkCard title="Skill Enhancement" description="Develop practical skills in event organization, marketing, and community engagement." />

        <AmbassadorPerkCard title="Recognition and Recommendations" description="Earn certificates of appreciation, Letter of Recommendation, and LinkedIn recommendations." />

        <AmbassadorPerkCard title="Rewards and Incentives" description="Receive cash benefits for selling our paid programs and swag benefits for excellent performers." />
        
        
      </div>
    </div>
  );
};

export default AmbassadarPerks;
