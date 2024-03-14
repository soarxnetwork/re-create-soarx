import React from "react";

const BannerDsa = () => {
  return (
    <div>
      <div className=" container ">
        <div className=" p-8 rounded-3xl flex flex-wrap bg-gradient-to-tr from-dsaPrimary to-secondDsaSecondary  justify-between items-center gap-4">
          <h4 className=" text-2xl font-bold text-white">
            Become a HackerEarth Campus Ambassador today!
          </h4>
          <button className=" px-6 py-3 text-xl text-black rounded-lg bg-white font-medium btnMx ">
            Apply now
          </button>
        </div>
      </div>
    </div>
  );
};

export default BannerDsa;
