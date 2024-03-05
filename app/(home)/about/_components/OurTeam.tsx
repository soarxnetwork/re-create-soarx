import Image from "next/image";
import React from "react";
import { FaFacebookF } from "react-icons/fa";
const OurTeam = () => {
  return (
    <section className="section">
      <div className="container">
        <h1 className="text-center">Our Team</h1>
        <div className="our-team-grid mt-10">
          <div className="team-box-wrap">
            <div className="our-team-box">
              <div className="otb-img">
                <Image
                  src={"/images/banner1.avif"}
                  width={500}
                  height={500}
                  className="img-responsive"
                  alt="Banner"
                />
              </div>
              <h2 className="text-xl font-medium">Hanok Shrestha</h2>
              <p className="text-center">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Blanditiis, assumenda.
              </p>
            </div>
            <div className="social-icons">
              <FaFacebookF className="social-logos" />
            </div>
          </div>
          <div className="team-box-wrap">
            <div className="our-team-box">
              <div className="otb-img">
                <Image
                  src={"/images/banner1.avif"}
                  width={500}
                  height={500}
                  alt="Banner"
                  className="img-responsive"
                />
              </div>
              <h2 className="text-xl font-medium">Hanok Shrestha</h2>
              <p className="text-center">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Blanditiis, assumenda.
              </p>
            </div>
            <div className="social-icons">
              <FaFacebookF className="social-logos" />
            </div>
          </div>
          <div className="team-box-wrap">
            <div className="our-team-box">
              <div className="otb-img">
                <Image
                  src={"/images/banner1.avif"}
                  width={500}
                  alt="Banner"
                  height={500}
                  className="img-responsive"
                />
              </div>
              <h2 className="text-xl font-medium">Hanok Shrestha</h2>
              <p className="text-center">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Blanditiis, assumenda.
              </p>
            </div>
            <div className="social-icons">
              <FaFacebookF className="social-logos" />
            </div>
          </div>
          <div className="team-box-wrap">
            <div className="our-team-box">
              <div className="otb-img">
                <Image
                  src={"/images/banner1.avif"}
                  width={500}
                  alt="Banner"
                  height={500}
                  className="img-responsive"
                />
              </div>
              <h2 className="text-xl font-medium">Hanok Shrestha</h2>
              <p className="text-center">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Blanditiis, assumenda.
              </p>
            </div>
            <div className="social-icons">
              <FaFacebookF className="social-logos" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
