import React from "react";
import Image from "next/image";
import './styles/Footer.css';
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import {
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { BsTelephone } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
const Footer = () => {
  return (
    <section className="footer over-x">
      <div className="custom-container">
        <div className="footer-grid grid pl-[100px]">
          <div className="footer-content">
            <div className=" flex items-center gap-3 ">
              <Image
                src={"/images/SoarX-transparent-logo-white.png"}
                width={130}
                height={0}
                className=" bg-transparent"
                alt="Header Logo"
              />
            </div>
            <p className="">
              SoarX is a dynamic nationwide community dedicated to empowering
              students through impactful events, sessions, and hackathons.
            </p>
          </div>
          <div className="footer-content">
            <h3>Quick Links</h3>
            <ul className="flex flex-col gap-3">
              <li className="line-on-hover ease-in duration-300 hover:pl-1 ">
                <Link href={"/privacy"}>Privacy Policy</Link>
              </li>
              <li className="line-on-hover ease-in duration-300 hover:pl-1 ">
                <Link href={"/refund-policy"}>
                  Refund & Cancellation Policy
                </Link>
              </li>
              <li className="line-on-hover ease-in duration-300 hover:pl-1 ">
                <Link href={"/terms"}>Terms & Conditions</Link>
              </li>
            </ul>
          </div>
          <div className="footer-content">
            <h3>Contact Info</h3>
            <div className="last-portion flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <BsTelephone className="text-xl font-medium" />
                <a href="tel:+91 8708686261" title="phone-number">
                  +91 8708686261
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
                  <a href="https://www.youtube.com/@soarxhub">
                    <FaYoutube className="text-4xl p-2 font-medium hover:fill-white border border-black rounded-full cursor-pointer hover:bg-[#FF0000] hover:border-[#FF0000] ease-in duration-300 " />
                  </a>
                </div>
                <div>
                  <a href="https://x.com/SoarXNetwork">
                    <div className="text-4xl p-2 font-medium hover:fill-white border border-black rounded-full h-[35px] w-[35px] cursor-pointer hover:bg-[#1DA1F2] hover:border-[#1DA1F2] ease-in duration-300 ">
                      <FontAwesomeIcon
                        icon={faXTwitter}
                        style={{ color: "white" }}
                      />{" "}
                    </div>
                  </a>
                </div>

                <div>
                  <a href="https://www.linkedin.com/company/soarxnetwork/">
                    <FaLinkedinIn className="text-4xl p-2 font-medium hover:fill-white border border-black rounded-full cursor-pointer hover:bg-[#0077b5] hover:border-[#0077b5] ease-in duration-300 " />
                  </a>
                </div>

                <div>
                  <a href="https://www.instagram.com/soarxnetwork">
                    <FaInstagram className="text-4xl p-2 font-medium hover:fill-white  instagram-footer-button border-black rounded-full cursor-pointer  ease-in duration-300 " />
                  </a>
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
