import Image from "next/image";
import React from "react";

const CertificateOfCompletion = () => {
  return (
    <div className="ml-24 h-[400px] p-5 flex items-center  rounded-xl">
      <div className="flex items-center gap-x-10">
        <p className="w-1/2 text-4xl font-semibold">
          Also, Get a Signed Certificate on successful Completion of the Course.
        </p>
        <p className="w-1/2">
          <Image
            src="/images/sertificate.jpeg"
            alt="Responsibility"
            width={420}
            height={420}
            className=" rounded-xl mx-auto"
          />
        </p>
      </div>
    </div>
  );
};

export default CertificateOfCompletion;
