"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

function Gallery() {
  const images = [
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

  const initialDisplayImages = images.slice(0, 13);
  const [displayImages, setDisplayImages] = useState(initialDisplayImages);

  useEffect(() => {
    const flipImages = (changedIndices: number[]) => {
      const imageElements = document.querySelectorAll('.flippable-image');
      imageElements.forEach((imageElement, index) => {
        if (changedIndices.includes(index)) {
          imageElement.classList.toggle('flipped');
        }
      });
    };

    const updateRandomImages = () => {
      const newDisplayImages = [...displayImages];
      const changedIndices = [];
      const numImagesToChange = Math.floor(Math.random() * 3) + 2; // Change 2 to 4 images
      for (let i = 0; i < numImagesToChange; i++) {
        const randomIndex = Math.floor(Math.random() * newDisplayImages.length);
        const randomImageIndex = Math.floor(Math.random() * images.length);
        newDisplayImages[randomIndex] = images[randomImageIndex];
        changedIndices.push(randomIndex);
      }
      setDisplayImages(newDisplayImages);
      flipImages(changedIndices);
    };

    const randomizeInterval = () => {
      const randomTime = Math.floor(Math.random() * 5000) + 1000; // 1 to 5 seconds
      return randomTime;
    };

    const intervals = Array.from({ length: 4 }, () =>
      setInterval(() => {
        updateRandomImages();
      }, randomizeInterval())
    );

    return () => intervals.forEach(clearInterval); // Clear intervals on component unmount
  }, [images, displayImages]);

  return (

    <section>
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
    <div className='mx-[10%] flex items-center justify-center'>
      <div className="inline-block">
        {displayImages.slice(0, 3).map((image, index) => (
          <div key={index} className='flip-animation mx-2 my-4 '>
            <Image
            
              width={200}
              height={300}
              alt='abc'
              src={image}
              className=' rounded-2xl  flippable-image'
            />
          </div>
        ))}
      </div>
      <div className="inline-block">
        {displayImages.slice(3, 5).map((image, index) => (
          <div key={index} className='flip-animation mx-2 hidden sm:block my-4 '>
            <Image
            
              width={200}
              height={300}
              alt='abc'
              src={image}
              className=' rounded-2xl   flippable-image'
            />
          </div>
        ))}
      </div>
      <div className="inline-block">
        {displayImages.slice(5, 8).map((image, index) => (
          <div key={index} className='flip-animation mx-2 hidden sm:block my-4'>
            <Image
            
              width={200}
              height={300}
              alt='abc'
              src={image}
              className=' rounded-2xl   flippable-image'
            />
          </div>
        ))}
      </div>
      <div className="inline-block">
        {displayImages.slice(8, 10).map((image, index) => (
          <div key={index} className='flip-animation mx-2 my-4'>
            <Image
            
              width={200}
              height={300}
              alt='abc'
              src={image}
              className=' rounded-2xl   flippable-image'
            />
          </div>
        ))}
      </div>
      <div className="inline-block">
        {displayImages.slice(10, 13).map((image, index) => (
          <div key={index} className='flip-animation mx-2 my-4'>
            <Image
            
              width={200}
              height={300}
              alt='abc'
              src={image}
              className=' rounded-2xl   flippable-image'
            />
          </div>
        ))}
      </div>
    </div>
    </section>
  );
}

export default Gallery;