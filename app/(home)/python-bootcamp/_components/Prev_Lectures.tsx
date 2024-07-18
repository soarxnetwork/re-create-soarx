"use client";
const PrevLectures = () => {
    return (
      <div className="max-w-screen-xl myfonts p-4 lg:p-8 lg:mb-32 mb-20 mx-auto mt-20 flex flex-col justify-center">
  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-10 sm:mb-20 pr-5 flex justify-center text-center">
    Have a look at our previous live lectures
  </h2>
  <div className="prev-lectures w-full">
    <div className="lecture-wrapper w-full flex flex-col md:flex-row justify-center gap-4 ">
      <div className="lecture overflow-hidden rounded-lg shadow-lg w-full md:w-2/5">
        <div className="aspect-video">
          <iframe
            title="Lecture 1"
            src="https://www.youtube.com/embed/ZL44rBcicRg"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full transition-transform duration-300 transform hover:scale-105"
          ></iframe>
        </div>
      </div>
      {/* <div className="lecture overflow-hidden rounded-lg shadow-lg w-full md:w-2/5">
        <div className="aspect-video">
          <iframe
            title="Lecture 2"
            src="https://www.youtube.com/embed/aYYydxM8UFU?si=8IYfdrcnMxCwK2dj"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full transition-transform duration-300 transform hover:scale-105"
          ></iframe>
        </div>
      </div> */}
    </div>
  </div>
</div>

    );
  };
  
  export default PrevLectures;
