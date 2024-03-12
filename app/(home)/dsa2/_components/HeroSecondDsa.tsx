import { Montserrat } from "next/font/google";
import Image from "next/image";
import React from "react";
import HeadingSecondDsa from "./HeadingSecondDsa";
import ButtonSecondDsa from "./ButtonSecondDsa";

const montserrat = Montserrat({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

const HeroSecondDsa = () => {
  return (
    <article>
      <div className="container md:grid md:grid-cols-2 space-y-4 md:space-y-0 gap-4">
        {/* ! */}
        <div className=" space-y-4">
          <span
            className={`${montserrat.className} font-bold text-secondDsaPrimary text-xl`}
          >
            SoarX
          </span>
          <HeadingSecondDsa text="Represent your university as a HackerEarth Campus Ambassador" />
          <p className=" text-secondDsaBlack lg:text-lg text-base ">
            Becoming a HackerEarth Campus Ambassador helps pave the way towards
            professional success. That’s because it enables you to network with
            leading coders from across the world and enhance your leadership
            abilities. So, sign up today and be a key part of one of the world’s
            largest developer communities!
          </p>
          <ButtonSecondDsa text="Register Now" />
        </div>
        {/* ! */}
        <div>
          <Image
            src="https://i.pinimg.com/736x/37/d1/0e/37d10e0868abfa4f8b8421137cf3da70.jpg"
            alt="DSA"
            width={682}
            height={381}
            className="rounded-xl  object-contain w-[682px] h-[381px] "
          />
        </div>
      </div>
    </article>
  );
};

export default HeroSecondDsa;
