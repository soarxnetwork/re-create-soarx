"use client";
import { imgPcLists } from "@/constants/homepage";
import Image from "next/image";
import React, { useState, useEffect } from "react";

const PressClippings = () => {
  const [displayedImages, setDisplayedImages] = useState([""]);
  const [selectedImage, setSelectedImage] = useState<string | null>("");

  useEffect(() => {
    const intervalTime = 3000;

    setDisplayedImages(imgPcLists.slice(0, 8));
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

    const randomIndex = Math.floor(Math.random() * imageLinks.length);
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

  const closeImagePopup = () => {
    setSelectedImage(null);
  };

  return (
    <section className="section px-32">
      <div className="container">
        <h1 className="text-center pb-10 text-[80px] text-[#000000] font-bold">Press Clippings</h1>
        <div className="gallery">
          {displayedImages.map((image, index) => (
            <div
              key={index}
              style={{
                backgroundImage: `url(${image}) `,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                height: "300px",
              }}
              className={`image-container aim-box ${
                index === 1 || index === 3 ? "top-margin" : ""
              } ${index === 4 || index === 6 ? "bottom-margin" : ""}`}
              onClick={() => openImagePopup(image)}
            ></div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div className="image-popup">
          <div className="image-popup-content" id="style-2">
            <Image
              src={selectedImage}
              alt="Popup Image"
              width={500}
              height={500}
            />
            <button className="close-button" onClick={closeImagePopup}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default PressClippings;
