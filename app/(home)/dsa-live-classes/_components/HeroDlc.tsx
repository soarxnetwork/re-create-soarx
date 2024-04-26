import { courseDetails1, courseDetails2 } from "./CourseDetails";
import CourseDlc from "./CourseDlc";
import { RiArrowDropDownLine } from "react-icons/ri";
import CoursesDlc from "./CoursesDlc";
import CourseModules from "./CourseModules";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import InstructorsDlc from "./InstructorsDlc";
// import FeedbackDlc from "./FeedbackDlc";
import CertificateOfCompletion from "./CertificateOfCompletion";

const HeroDlc = () => {
  return (
    <div>
      <div className="container space-y-12">
        <div className="space-y-6 pl-24 pr-20">
          <h4 className="font-semibold text-3xl pt-6">About Course</h4>
          <p>
          Our 2.5 Months DSA Live Classes{" "}
            <span className="font-bold">Initiatives</span> designed to provide a comprehensive learning experience in Data Structures and Algorithms (DSA) using Java.
          </p>
          <p>
            It led by <span className="font-bold">industry experts</span> this{" "}
            <span className="font-bold">program</span> aims to equip participants with the fundamental concepts, problem-solving skills, and algorithmic thinking needed to excel in coding interviews, competitive programming, and{" "}
            <span className="font-bold">
            real-world software development.
            </span>
          </p>
        </div>
        <CoursesDlc/>
        <CourseModules />
        {/* <FeedbackDlc/> */}
      </div>
    </div>
  );
};

export default HeroDlc;
