import React from "react";

interface MyDescription {
  question: string;
  answer: string;
}

interface CourseDlcProps {
  courseDetails: {
    icon: React.ReactNode;
    Description: MyDescription;
  }[];
}

const CourseDlc = ({ courseDetails }: CourseDlcProps) => {
  return courseDetails.map((course, index) => (
    <div
      key={index}
      className="border-2 hover:scale-105 hover:cursor-pointer transition-all duration-300 p-3 md:p-4 border-opacity-30 rounded-md"
    >
      <div className="fl-ic gap-2">
        <div className="min-w-12 min-h-12 rounded-full dark:bg-black bg-white border border-black border-opacity-20 bg-border-dlc fl-ic justify-center text-lg">
          {course.icon}
        </div>
        <div className="space-y-2">
          <p className="text-base text-gray-500 dark:text-gray-400 font-medium">{course.Description.question}</p>
          <p className="text-base font-medium">{course.Description.answer}</p>
        </div>
      </div>
    </div>
  ));
};

export default CourseDlc;
