"use client";
const PrevLectures = () => {
    return (
      <div className="max-w-screen-xl p-8 mb-32 ml-12 mt-10  flex flex-col justify-center">
        <h2 className="text-5xl font-semibold mb-20 pr-5 flex justify-center">Have a look at our previous live lectures</h2>
        <div className="prev-lectures w-full">
          <div className="lecture-wrapper w-full flex justify-center gap-x-4">
            <div className="lecture overflow-hidden rounded-lg shadow-lg w-2/5">
              <div className="aspect-video">
                <iframe
                  title="Lecture 1"
                  src="https://www.youtube.com/embed/gMlDznw7zKU"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full transition-transform duration-300 transform scale-105 hover:scale-110"
                ></iframe>
              </div>
              
            </div>
            <div className="lecture overflow-hidden rounded-lg shadow-lg w-2/5">
              <div className="aspect-video">
                <iframe
                  title="Lecture 2"
                  src="https://www.youtube.com/embed/GbNj2de2qBc"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full transition-transform duration-300 transform scale-105 hover:scale-110"
                ></iframe>
              </div>
            
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default PrevLectures;
