import Image from "next/image";
import React from "react";

const CertificateOfCompletion = () => {
  return (
    <div className="ml-32 mt-10 h-[400px] p-5 flex items-center justify-center  rounded-xl">
      <div className="flex items-center justify-center gap-x-16 h-full">
        <p className="w-1/2  text-4xl font-semibold ">
          Also, Get a Signed Certificate on successful Completion of the Course.
        </p>
        <p className="w-1/2 h-full">
          <Image
            src="/images/sertificate.jpeg"
            alt="Responsibility"
            width={420}
            height={420}
            className=" rounded-xl h-full shadow-2xl shadow-gray-400"
          />
        </p>
      </div>
    </div>
  );
};

export default CertificateOfCompletion;
