"use client";
import { imgPcLists } from "@/constants/homepage";
import Image from "next/image";
import React, { useState, useEffect } from "react";

const PressClippings = () => {
  const [displayedImages, setDisplayedImages] = useState([""]);
  const [selectedImage, setSelectedImage] = useState<string | null>("");

  useEffect(() => {
    const intervalTime = 3000;

    setDisplayedImages(imgPcLists.slice(0, 14));
    const interval = setInterval(changeImages, intervalTime);
    return () => {
      clearInterval(interval);
    };
  }, []);

  const changeImages = () => {
    const imageLinks = [
      "/images/pr1.png",
      "/images/pr2.png",
      "/images/pr4.png",
      "/images/pr5.png",
      "/images/pr6.png",
      "/images/pr7.png",
      "/images/pr8.png",
      "/images/pr9.png",
      "/images/pr10.png",
      "/images/pr11.png",
      "/images/pr12.png",
      "/images/pr13.png",
      "/images/pr14.png",
      "/images/pr15.png",
      "/images/pr16.png",
      "/images/pr17.png",
      "/images/pr18.png",
      "/images/pr19.png",
      "/images/pr20.png",
      "/images/pr21.png",
      "/images/pr22.png",
      "/images/pr23.png",
      "/images/pr24.png",
      "/images/pr25.png",
      "/images/pr26.png",
      "/images/pr27.png",
      "/images/pr28.png",
      "/images/pr29.png",
      "/images/pr30.png",
      "/images/pr31.png",
      "/images/pr32.png",
      "/images/pr33.png",
      "/images/pr34.png",
    ];

    // setDisplayedImages((prevImages) => {
    //   const newDisplayedImages = [...prevImages];

    //   let randomIndex = Math.floor(Math.random() * newDisplayedImages.length);
    //   let randomImage =
    //     imageLinks[Math.floor(Math.random() * imageLinks.length)];

    //   // Check if the randomly selected image is already present in displayedImages
    //   while (newDisplayedImages.includes(randomImage)) {
    //     randomIndex = Math.floor(Math.random() * newDisplayedImages.length);
    //     randomImage = imageLinks[Math.floor(Math.random() * imageLinks.length)];
    //   }

    //   newDisplayedImages[randomIndex] = randomImage;

    //   return newDisplayedImages;
    // });

    setDisplayedImages((prevImages) => {
      const newDisplayedImages = [...prevImages];

      const randomIndex = Math.floor(Math.random() * newDisplayedImages.length);
      let randomImage;

      do {
        randomImage = imageLinks[Math.floor(Math.random() * imageLinks.length)];
      } while (newDisplayedImages.includes(randomImage));

      newDisplayedImages[randomIndex] = randomImage;

      return newDisplayedImages;
    });
  };

  const openImagePopup = (image: string) => {
    setSelectedImage(image);
  };

  return (
    <section className=" px-[11%] my-[10%]">
      <div className="container">
        <div className="text-center text-[#7300d0] dark:text-[#9f32f8] cursor-pointer">
          {"Wings of Inspiration".split("").map((child, idx) => (
            <span className={"hoverText text-[10px] sm:text-[30px] lg:text-[40px]"} key={idx}>
              {child}
            </span>
          ))}
        </div>
        <h2 className="text-center mb-10 text-[30px] sm:text-[40px] md:text-[60px] lg:text-[80px] pt-2 font-bold leading-normal">
        {"Soarx Gallery".split("").map((child, idx) => (
            <span className={"hoverText"} key={idx}>
              {child}
            </span>
          ))}
        </h2>{" "}
        
        <div className=" ">
          <ul id="hexGrid">
            {displayedImages.map((image, index) => (
              <li className="hex" key={index}>
                <div className="hexIn">
                  <a className="hexLink" href="#">
                    <div
                      className="img"
                      style={{
                        backgroundImage: `url(${image}) `,
                      }}
                    />

                   
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default PressClippings;
