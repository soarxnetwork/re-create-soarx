"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { TestimonialMessage } from "@/constants/homepage";
import Image from "next/image";

import { Pagination, Navigation } from "swiper/modules";
import "swiper/css/pagination";
const Testimonial = () => {
  const testimonials = [
    {
      name: "Shivam Sharma",
      company: "Co-Founder, 6DOF Solutions Pvt. Ltd",
      image: "/images/ShivamSharma.jpg",
      message:
        "The team's professionalism and attention to detail are evident in every event. I highly recommend this team to anyone looking to organize a successful workshop or event.",
    },
    {
      name: "Dr. Neha Tuli",
      company: "Co-Founder, 6DOF Solutions Pvt. Ltd",
      image: "/images/NehaTuli.jpg",
      message:
        "Feel the AR was a very well-planned and insightful event. It enlightened the students about emerging technologies. Overall, I loved being part of it.",
    },
    {
      name: "Ashwin Raj",
      company: "ASE Trainee - TCS",
      image: "/images/AshwinRaj.jpg",
      message:
        "They stand out from every other community I've worked with in the industry due to their unwavering dedication to excellence.",
    },
    {
      name: "Harshit Jindal",
      company: "Tech geek | Drone engineer",
      image: "/images/HarshitJindal.jpg",
      message:
        "The events conducted by SoarX are free of cost, which is a great thing, helping students and showing them new career paths.",
    },
    {
      name: "Rohit Sardana",
      company: "Co-Founder and CEO at Reskilll",
      image: "/images/RohitSardana.jpg",
      message:
        "They are super professionals and take their job very seriously. The reskilling of their students is in their heart and they do everything to make it happen.",
    },
    {
      name: "Kishan Kumar",
      company: "Operation and Support executive, Hack2Skill",
      image: "/images/KishanKumar.jpg",
      message:
        "They excelled in building a diverse and inclusive community, where individuals with different backgrounds and skill levels could come together.",
    },
    {
      name: "Dr. Shiraz Khurana",
      company: "Associate Professor, Sharda University",
      image: "/images/ShirajKhurana.jpg",
      message:
        "Their commitment to fostering innovation, promoting learning, and creating impactful events is remarkable.",
    },
    {
      name: "Kunal Kumar",
      company: "Video Editor | Motion Graphics Designer",
      image: "/images/KunalKumar.jpg",
      message:
        "Appreciate all the efforts and good work that SoarX has done for organizing such a revolutionizing initiative of The India Summer Lensathon.",
    },
    {
      name: "Naman Nagpal",
      company: "Software Developer @ Coforge",
      image: "/images/NamanNagpal.jpg",
      message:
        "The impact of being a part of the SoarX Network extends far beyond the college premises. The exposure one gain opens doors to numerous opportunities in the industry.",
    },
    {
      name: "Siddhant Khurana",
      company: "Data Security Analyst, Mphasis",
      image: "/images/SidhantKhurana.jpg",
      message:
        "SoarX Network helps people develop their skills which they usually can't develop during their academics. Learning with fun is what the SoarX offers.",
    },
    {
      name: "Soumili Mukherjee Tapadar",
      company: "Cloud DevOps Intern, Peacify",
      image: "/images/Soumili.jpg",
      message:
        "SoarX Network has helped me come a long way from being a mentee to a mentor. The environment and support provided by them feel like home, highly recommended.",
    },
    {
      name: "Gautam Makwana",
      company: "Security Researcher",
      image: "/images/Gautam.jpg",
      message:
        "Whether you are a beginner or an experienced professional, SoarX provides a platform to learn, grow, and connect with a vibrant community of tech enthusiasts.",
    },
    {
      name: "Mary Priyanka",
      company: "Chief of Community, C3 Universe",
      image: "/images/Mary.jpg",
      message:
        "Working with the SoarX Network at a job fair organized by C3 Community was fantastic! Their professionalism and enthusiasm made the collaboration enjoyable.",
    },
    {
      name: "Avni Srivastava",
      company: "Program Manager, Psylief",
      image: "/images/Avni.jpg",
      message:
        "Each workshop or event organized by the SoarX Network is a resounding success because of its meticulous planning and flawless execution.",
    },
    {
      name: "Jasnoor Singh",
      company: "XR Developer",
      image: "/images/jasnoor.jpg",
      message:
        "Being a part of the SoarX Network has been an inspiring journey, and I look forward to continuing our collaborative efforts in empowering aspiring XR developers.",
    },
    {
      name: "Punit Jain",
      company: "Co-Founder, Reskilll",
      image: "/images/punit.jpg",
      message:
        "Our collaboration on initiatives such as the Spark AR hackathon and Microsoft Azure events has been a resounding success, attracting a large number of enthusiastic participants.",
    },
    {
      name: "Shivani Deshpande",
      company: "XR Developer",
      image: "/images/shivani.jpg",
      message:
        "SoarX is an incredible initiative that I am pleased to be associated with. Their enthusiasm, supportive environment, and knowledgeable team have helped build the AR ecosystem in India.",
    },
    {
      name: "Itasha Modi",
      company: "Full Stack Developer || Gold MLSA",
      image: "/images/itasha.jpg",
      message:
        "The community's work in upskilling not only beginners but also empowering individuals in every aspect of their lives is commendable.",
    },
    {
      name: "Vishwas Narayan",
      company: "DevOps Engineer, Amnic",
      image: "/images/vishwas.jpg",
      message:
        "The level of engagement and expertise within this community is unparalleled, fostering an environment where ideas flourish and connections are made.",
    },
  ];
  return (
    <section className=" px-[11%] lg:pl-20 lg:ml-5 mt-[10%]">
      <div className="container">
        {/* <div className="mt-5">
          <Swiper
            spaceBetween={10}
            slidesPerView={3}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            centeredSlides={true}
            loop={true}
            className="testimonial-swiper mySwiper"
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 10,
              },

              700: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              800: {
                slidesPerView: 2,
                spaceBetween: 10,
                centeredSlides: false,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
            }}
          >
            {TestimonialMessage.map((e, index) => (
              <SwiperSlide key={index}>
                <div className="relative mx-auto testimonial-box rounded-lg  p-10  text-gray-700 leading-snug flex flex-col justify-between">
                  <div className="-ml-4">
                    <svg
                      className="w-8 opacity-25 text-indigo-500"
                      xmlns="http://www.w3.org/2000/svg"
                      shapeRendering="geometricPrecision"
                      textRendering="geometricPrecision"
                      imageRendering="optimizeQuality"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      viewBox="0 0
                                                                                                         640 640"
                      fill="currentColor"
                    >
                      <path d="M557.133 561.704H442.128c-44.256 0-80.458-36.19-80.458-80.446 0-165.58-42.32-347.485 160.656-399.418 91.95-23.516 115.915 77.753 18.119 84.745-59.647 4.276-71.293 42.804-73.147 101.068h92.269c44.256 0 80.458 36.201 80.458 80.458v130.702c0 45.591-37.3 82.89-82.891 82.89zm-358.032 0H84.096c-44.256 0-80.446-36.19-80.446-80.446 0-165.58-42.331-347.485 160.644-399.418 91.95-23.516 115.915 77.753 18.118 84.745-59.646 4.276-71.292 42.804-73.146 101.068h92.269c44.256 0 80.457 36.201 80.457 80.458v130.702c0 45.591-37.3 82.89-82.89 82.89z" />
                    </svg>
                  </div>
                  <div className="mt-2">
                    <p>{e.message}</p>
                  </div>
                  <div>
                    <div className="mx-auto w-full border border-gray-300 my-8" />
                    <div className="flex items-center">
                      <div className="w-12 h-12">
                        <Image
                          className="w-full object-cover rounded-full border-2 border-indigo-400"
                          src={e.image}
                          alt="testimonial"
                          width={100}
                          height={100}
                        />
                      </div>
                      <div className="ml-4">
                        <div className="font-bold">{e.name}</div>
                        <div className="text-sm text-gray-600 mt-1">
                          {e.company}{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div> */}

        <section className="">
          <div className="mx-auto max-w-[1340px] px-4 py-12 sm:px-6 lg:me-0 lg:py-16 lg:pe-0 lg:ps-8 xl:py-24">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3  lg:items-center lg:gap-16">
              <div className="max-w-xl text-left">
                {/* <div className="text-left text-primary cursor-pointer">
                  {"Testimonials".split("").map((child, idx) => (
                    <span className={"hoverText text-[10px] sm:text-[20px] lg:text-[30px]"} key={idx}>
                      {child}
                    </span>
                  ))}
                </div> */}
                <h2 className="text-left  text-[25px] sm:text-[30px] md:text-[50px] lg:text-[53px] pt-2 font-bold leading-normal">
                  {"Our Success Stories".split("").map((child, idx) => (
            <span className={"hoverText"} key={idx}>
              {child}
            </span>
          ))}
                </h2>{" "}
                <p className="mt-4 text-light text-xl">
                  Lets Hear from Those Who have Soared with SoarX!
                </p>
              </div>

              <div className="-mx-6 lg:col-span-2  lg:mx-0">
                <Swiper
                  pagination={{
                    type: "progressbar",
                  }}
                  centeredSlides={true}
                  autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                  }}
                  modules={[Pagination, Autoplay]}
                  spaceBetween={30}
                  slidesPerView={1}
                >
                  {testimonials.map((testimonial, index) => (
                    <SwiperSlide key={index}>
                      <div className="bg-[#8d4ac449] rounded-lg p-6 shadow-md sm:p-8 lg:p-12">
                        <div>
                          <div className="mt-2 leading-relaxed">
                            <div className="w-12 h-12 ">
                              <Image
                                className="w-full object-cover rounded-full border-2 border-indigo-400"
                                src={testimonial.image}
                                alt="testimonial"
                                width={100}
                                height={100}
                              />
                            </div>
                            <p className="text-lg font-bold mt-4">
                              {testimonial.name}
                            </p>
                            <p className="mt-4 leading-relaxed">
                              {testimonial.message}
                            </p>
                          </div>
                        </div>
                        <footer className="mt-4 text-sm font-medium sm:mt-6">
                          &mdash; {testimonial.company}
                        </footer>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Testimonial;
