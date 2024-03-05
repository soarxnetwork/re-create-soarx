import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
  FaFacebookF,
} from "react-icons/fa";
import { BsTelephone } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
const Footer = () => {
  return (
    <section className="footer over-x">
      <div className="container">
        <div className="footer-grid grid">
          <div className="footer-content">
            <div className="header-img flex items-center gap-3 ">
              <Image
                src={"/images/SoarX Logo.png"}
                width={100}
                height={100}
                className="img-header"
                alt="Header Logo"
              />
            </div>
            <p>
              SoarX is a dynamic nationwide community dedicated to empowering
              students through impactful events, sessions, and hackathons.
            </p>
          </div>
          <div className="footer-content">
            <h3>Quick Links</h3>
            <ul className="flex flex-col gap-3">
              <li className="line-on-hover ease-in duration-300 hover:pl-1 ">
                <Link href={"/"}>Home</Link>
              </li>
              <li className="line-on-hover ease-in duration-300 hover:pl-1 ">
                <Link href={"/events"}>Events</Link>
              </li>
              <li className="line-on-hover ease-in duration-300 hover:pl-1 ">
                <Link href={"/about"}>About</Link>
              </li>
            </ul>
          </div>
          <div className="footer-content">
            <h3>Contact Info</h3>
            <div className="last-portion flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <BsTelephone className="text-xl font-medium" />
                <a href="tel:+91 7988237971" title="phone-number">
                  +91 7988237971
                </a>
              </div>
              <div className="flex items-center gap-2">
                <AiOutlineMail className="text-xl font-medium" />{" "}
                <a href="mailto:soarxnetwork@gmail.com" title="email">
                  soarxnetwork@gmail.com
                </a>
              </div>

              <div className="social-icons-footer mt-2 flex items-center gap-2">
                <div className=" ">
                  <FaFacebookF className="text-4xl p-2 font-medium hover:fill-white border border-black rounded-full cursor-pointer hover:bg-primary hover:border-primary ease-in duration-300 " />
                </div>
                <div>
                  <FaWhatsapp className="text-4xl p-2 font-medium hover:fill-white border border-black rounded-full cursor-pointer hover:bg-primary hover:border-primary ease-in duration-300 " />
                </div>

                <div>
                  <FaLinkedinIn className="text-4xl p-2 font-medium hover:fill-white border border-black rounded-full cursor-pointer hover:bg-primary hover:border-primary ease-in duration-300 " />
                </div>
                <div>
                  <FaInstagram className="text-4xl p-2 font-medium hover:fill-white border border-black rounded-full cursor-pointer hover:bg-primary hover:border-primary ease-in duration-300 " />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" text-center pt-4 pb-4">
          <p>Copyright © 2023 SoarX. All Rights Reserved</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
