import Image from "next/image";
import React from "react";

const BrandDsa = () => {
  const brandImages = [
    "/images/microsoft.png",
    "/images/sachs.png",
    "/images/paypal.png",
    "/images/samsung.png",
    "/images/netapp.png",
    "/images/hitachi.png",
    "/images/jpm.png",
    "/images/dell.png",
    "/images/deloitte.png",
    "/images/kpmg.png",
    "/images/isro.png",
    "/images/mercedez.png",
    "/images/ey.png",
    "/images/amazon.png",
    "/images/airtel.png",
  ];
  return (
    <article className=" bg-dsaSecondary py-12">
      <div className="container space-y-8">
        <h3 className=" text-3xl font-semibold text-center">
          Thousands of our students achieved their{" "}
          <span className=" font-bold text-dsaPrimary">dream job at</span>
        </h3>
        <div className="containerBrand ">
          {brandImages.map((brand) => (
            <Image
              key={brand}
              width={120}
              height={60}
              alt={brand}
              src={brand}
              className="mx-auto"
            />
          ))}
        </div>
      </div>
    </article>
  );
};

export default BrandDsa;
