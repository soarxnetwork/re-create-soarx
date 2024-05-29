import React from "react";
import AmbassadorPerkCard from "./AmbassadorPerkCard";

const AmbassadarPerks = () => {
  return (
    <div className="flex w-full myfonts gap-y-8 flex-col items-center mt-10 mb-10 lg:pl-3 xl:pl-0 2xl:pl-9 2xl:pr-28">
      <div className="flex flex-col gap-y-6 items-center">
        <div className="text-3xl md:text-4xl font-semibold">
          Whats in it for you
        </div>
        <div className="text-[#8919E4] md:text-2xl font-medium pl-12 sm:pl-16 lg:pl-0 cursor-pointer">
          {"Discover the exclusive benefits and opportunities waiting for you!"
            .split("")
            .map((child, idx) => (
              <span className={"hoverText font-medium"} key={idx}>
                {child}
              </span>
            ))}
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 ml-3 md:ml-8 xl:ml-0 md:mr-4 mr-2 xl:mr-10 dark:text-white  gap-x-3 gap-y-5 sm:gap-y-7">
        <AmbassadorPerkCard
          title="Networking with Industry Experts"
          description="Engage with industry experts from Big MNCs like MAANG in our online and offline events."
        />

        <AmbassadorPerkCard
          title="Leadership Opportunities"
          description="Organize online/offline events at your college and facilitate visits to Microsoft Office."
        />

        <AmbassadorPerkCard
          title="Skill Enhancement"
          description="Develop practical skills in event organization, marketing, and community engagement."
        />

        <AmbassadorPerkCard
          title="Rewards and Incentives"
          description="Receive cash benefits for selling our paid programs and swag benefits for excellent performers."
        />
        <AmbassadorPerkCard
          title="Recognition and Recommendations"
          description="Earn certificates of appreciation, Letter of Recommendation, and LinkedIn recommendations."
        />
      </div>
    </div>
  );
};

export default AmbassadarPerks;
