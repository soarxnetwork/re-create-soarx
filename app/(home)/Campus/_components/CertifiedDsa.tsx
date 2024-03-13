import Image from "next/image";
import React from "react";
import { GiAchievement } from "react-icons/gi";

const CertifiedDsa = () => {
  return (
    <article className=" bg-dsaSecondary py-12">
      <div className="container mx-auto space-y-8 ">
        <h3 className=" font-bold text-3xl text-center">
          Get <span className=" text-dsaPrimary">Certified</span>.
        </h3>
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex gap-6 flex-col text-xl">
            <div className="flex gap-2">
              <GiAchievement className=" fill-dsaPrimary" size={32} />
              <div className=" flex flex-col ">
                <h4 className="text-2xl font-semibold">Start Today</h4>
                <p>
                  You are just 4 months away from cracking your dream company.
                </p>
              </div>
            </div>
            <div className="flex gap-2">
              <GiAchievement className=" fill-dsaPrimary" size={32} />
              <div className=" flex flex-col ">
                <h4 className="text-2xl font-semibold">Start Today</h4>
                <p>
                  You are just 4 months away from cracking your dream company.
                </p>
              </div>
            </div>
          </div>
          <div className=" containerImageCerti w-full mx-auto">
            <Image
              src="/images/sertificate.jpeg"
              width={500}
              height={500}
              alt="DSA certificate "
              className="rounded-lg mx-auto"
            />
          </div>
        </div>
      </div>
    </article>
  );
};

export default CertifiedDsa;
