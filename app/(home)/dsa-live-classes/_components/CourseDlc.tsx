import React from "react";

interface CourseDlcProps {
  courseDetails: {
    icon: React.ReactNode;
    description: string;
  }[];
}

const CourseDlc = ({ courseDetails }: CourseDlcProps) => {
  return courseDetails.map((course) => (
    <div className="fl-ic gap-2" key={course.description}>
      <div className="min-w-12 min-h-12 rounded-full bg-white border border-black border-opacity-20 bg-border-dlc fl-ic justify-center text-lg">
        {course.icon}
      </div>
      <div>
        <p className="t text-base font-medium">{course.description}</p>
      </div>
    </div>
  ));
};

export default CourseDlc;
