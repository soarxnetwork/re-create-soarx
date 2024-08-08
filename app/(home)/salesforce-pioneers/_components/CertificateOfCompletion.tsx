import Image from "next/image";
import React from "react";

const CertificateOfCompletion = () => {
  return (
    <div className="max-w-[800px] myfonts mb-28 mx-8 md:max-w-[1200px] lg:max-w-[1600px]">
      <div className="flex flex-col lg:flex-row items-center justify-around gap-8 md:gap-0 rounded-xl">
        <p className="text-[20px]  sm:text-3xl md:mb-10 lg:mb-0 lg:text-4xl font-semibold lg:w-2/5 text-center lg:leading-normal lg:text-left">
          Also, Get a Signed Certificate on successful Completion of the Program.
        </p>
        <div className="h-full w-full lg:w-2/5">
          <Image
            src="/images/salesforce_certificate.png"
            alt="Certificate of Completion"
            width={600}
            height={400}
            layout="responsive"
            className="rounded-xl shadow-xl shadow-gray-400"
          />
        </div>
      </div>
    </div>
  );
};

export default CertificateOfCompletion;
