import React from "react";

const JoinDsa = () => {
  return (
    <article
      className=" w-full min-h-[50vh] bg-no-repeat bg-center object-contain bg-dsaPrimary  items-center flex flex-col justify-center space-y-6 text-xl font-semibold py-12 bg-cover "
      style={{ backgroundImage: "url('/images/dsa.png')" }}
    >
      <h3 className="text-white text-2xl font-bold">BASICS TO ADVANCED</h3>
      <p className=" text-white text-3xl">
        JOIN ALPHA <span className=" text-rose-400">PLUS</span> - WINTER BATCH
      </p>
      <p className=" text-white">Starting from 24th Dec, 2023</p>
      <button className=" bg-white px-6 py-3 rounded-2xl">Join Now</button>
    </article>
  );
};

export default JoinDsa;
