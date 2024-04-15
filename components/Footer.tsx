import React from "react";
import Image from "next/image";
import "./styles/Footer.css";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { BsTelephone } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";

const Footer = () => {
  return (
    <div>
      {/* <section className="footer over-x">
      <div className="custom-container">
        <div className="footer-grid grid pl-[100px]">
          <div className="footer-content">
            <div className=" flex items-center gap-3 ">
              <Image
                src={"/images/SoarX-transparent-logo-white-cropped.png"}
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
                <FontAwesomeIcon icon={faLocationDot} className="h-[23px]" />{" "}
                Kurukshetra, Haryana, India 136118
              </div>

              <div className="flex items-center gap-2">
                <AiOutlineMail className="text-xl font-medium" />{" "}
                <a href="mailto:soarxnetwork@gmail.com" title="email">
                  soarxnetwork@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <BsTelephone className="text-xl font-medium" />
                <a href="tel:+91 8708686261" title="phone-number">
                  +91 8708686261
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
    </section> */}
      <footer className="block bg-white text-black pt-24">
        <div className="custom-container pb-5">
          {/* Component */}
          <div className="flex-row flex items-center justify-between max-[767px]:flex-col max-[767px]:items-start">
            <div className="w-full max-w-[560px] max-[991px]:mr-4 max-[991px]:flex-initial max-[767px]:">
              <div className=" flex items-center gap-3 ">
                <Image
                  src={"/images/Soarx-transparent-logo.png"}
                  width={130}
                  height={0}
                  className="text-black"
                  alt="Header Logo"
                />
              </div>
              <h2 className="font-bold text-3xl md:text-5xl">
                Rise Together, Soar Higher
              </h2>
            </div>
            <div className="max-[991px]:ml-4 max-[991px]:flex-none max-[767px]: max-[767px]:mt-8">
              <div className="mb-4 flex max-w-[360px] items-center gap-2">
                <FontAwesomeIcon icon={faLocationDot} className="h-[23px]" />{" "}
                <p className="max-[479px]:text-sm">
                  Kurukshetra, Haryana, India 136118
                </p>
              </div>
              <div className="mb-4 flex gap-2 max-w-[360px] items-center">
                <AiOutlineMail className="text-xl font-medium" />{" "}
                <a
                  href="mailto:soarxnetwork@gmail.com"
                  title="email"
                  className="  max-[479px]:text-sm"
                >
                  soarxnetwork@gmail.com
                </a>
              </div>
              <div className="mb-4 flex gap-2 max-w-[360px] items-center">
                <BsTelephone className="text-xl font-medium" />
                <a href="tel:+91 8708686261" title="phone-number">{" "}
                  +91 8708686261
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
                        style={{ color: "black" }}
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
                    <FaInstagram className="text-4xl p-2 font-medium hover:fill-white border instagram-footer-button border-black rounded-full cursor-pointer  ease-in duration-300 " />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="mb-6 w-full border-hr mt-16"></div>
          <div className="flex-row pb-6 flex justify-between items-center max-[991px]:items-center max-[767px]:flex-col max-[767px]:items-start max-[479px]:flex-col-reverse">
            <div className="font-semibold max-[991px]: max-[479px]:mb-4 max-[991px]:py-1 text-center sm:text-center">
              <Link href= {'/privacy'} className="inline-block font-normal   transition hover:text-slate-500 hover:ease-in-out duration-200 sm:pr-6 lg:pr-12 py-1.5 sm:py-2 pr-6">
            
                Privacy Policy
          
              </Link>
              <Link href= {'/refund-policy'} className="inline-block font-normal   transition hover:text-slate-500 hover:ease-in-out duration-200 sm:pr-6 lg:pr-12 py-1.5 sm:py-2 pr-6">
            
                Refunds & Cancellation Policy
          
              </Link>
              <Link href= {'/terms'} className="inline-block font-normal   transition hover:text-slate-500 hover:ease-in-out duration-200 sm:pr-6 lg:pr-12 py-1.5 sm:py-2 pr-6">
            
                Terms & Conditons
          
              </Link>
              {/* <a
                href="#"
                className="inline-block font-normal   transition hover:text-slate-300 sm:pr-6 lg:pr-12 py-1.5 sm:py-2 pr-6"
              >
                Support
              </a>
              <a
                href="#"
                className="inline-block font-normal   transition hover:text-slate-300 sm:pr-6 lg:pr-12 py-1.5 sm:py-2 pr-6"
              >
                Help
              </a> */}
            </div>
            <div className="max-[991px]:flex-none">
              <p className="  max-[479px]:text-sm">
                © Copyright 2024. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
