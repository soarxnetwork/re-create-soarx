import Image from "next/image";
import React from "react";

const CertificateOfCompletion = () => {
  return (
    <div className="ml-24 bg-gray-100 p-5  rounded-xl border-2">
      <div className="flex items-center gap-x-10">
        <p className="w-3/5 text-4xl font-semibold">
          Also, Get a Signed Certificate on successful Completion of the Course.
        </p>
        <p className="w-2/5">
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
