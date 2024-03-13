import Image from "next/image";
import React from "react";

const HeroDsa = () => {
  return (
    <article className=" grid sm:grid-cols-2 grid-cols-1 text-start container gap-16 items-center justify-between py-12">
      <div className=" space-y-8 font-semibold">
        <h3 className="text-5xl ">
          Get <span className=" text-dsaPrimary font-bold">Placement</span>{" "}
          Ready in 4 Months!
        </h3>
        <p>New &quot;Data Structures & Algorithms&quot; Batch</p>
        <button className=" bg-dsaPrimary px-8 py-4 text-white rounded-xl text-xl">
          Join Alpha Plus
        </button>
      </div>
      <div className=" sm:place-self-end place-self-center">
        <Image
          src="https://i.pinimg.com/originals/05/48/dd/0548dd4afa665874c0c568fe5c189bda.gif"
          alt="DSA"
          width={350}
          height={150}
          className=" rounded-full"
        />
      </div>
    </article>
  );
};

export default HeroDsa;
