import Image from "next/image";
import React from "react";

const OurAim = () => {
  return (
    <section className="section our-aim px-32">
      <div className="container">
        <h1 className="text-center font-bold text-[#000000] text-[80px]">Our Aim</h1>
        <p className=" w-full pt-5 text-[25px]   text-center leading-10 text-[32px]">
          Our mission is to foster a community that promotes curiosity, nurtures
          innovation, and supports the growth of aspiring technologists. Through
          our carefully curated events, engaging sessions, and exciting
          hackathons, we bring together students, industry experts, and leading
          companies. We believe in the power of collaboration and hands-on
          experiences to shape the learning journey. By organizing workshops,
          thought-provoking discussions, and real-world challenges, we strive to
          ignite passion, expand horizons, and push the boundaries of
          creativity.
        </p>

        <div className="aim-grid mt-10">
          <div className="flex-col items-center justify-center aim-box flex ">
            <div className="aim-img">
              <Image
                src={"/images/Teacher.svg"}
                width={0}
                height={0}
                sizes="100vw"
                alt="Learn "
                style={{ width: "100%", height: "100%" }}
              />
            </div>
            <h2 className="text-2xl">Learn</h2>
          </div>
          <div className="flex-col items-center justify-center aim-box flex ">
            <div className="aim-img">
              <Image
                src={"/images/connect.svg"}
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "100%" }}
                alt="Connect"
              />{" "}
            </div>
            <h2 className="text-2xl">Connect</h2>
          </div>
          <div className="flex-col items-center justify-center aim-box flex ">
            <div className="aim-img">
              <Image
                src={"/images/grow.svg"}
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "100%" }}
                alt="Grow"
              />{" "}
            </div>
            <h2 className="text-2xl">Grow</h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurAim;
