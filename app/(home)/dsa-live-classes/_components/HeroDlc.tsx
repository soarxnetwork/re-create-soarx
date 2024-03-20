import { courseDetails1, courseDetails2 } from "./CourseDetails";
import CourseDlc from "./CourseDlc";
import { RiArrowDropDownLine } from "react-icons/ri";
import CoursesDlc from "./CoursesDlc";
import CourseModules from "./CourseModules";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import InstructorsDlc from "./InstructorsDlc";
import FeedbackDlc from "./FeedbackDlc";

const HeroDlc = () => {
  return (
    <div>
      <div className="container space-y-12">
        <div className="space-y-6">
          <h4 className="font-semibold">About Course</h4>
          <p>
            A comprehensive program that covers the{" "}
            <span className="font-bold">fundamentals</span> of Low Level Design.
            Ace the Low Level Design interview by solving problems asked in the
            System Design round of programming interviews.
          </p>
          <p>
            It includes <span className="font-bold">lectures</span> and{" "}
            <span className="font-bold">exercises</span> to help students design
            and implement efficient solutions. This course is suitable for
            beginners and experienced programmers and aims to prepare students
            for
            <span className="font-bold">
              technical interviews and placement exams
            </span>
          </p>
        </div>
        <CoursesDlc />
        <CourseModules />
        <InstructorsDlc />
        <FeedbackDlc />
      </div>
    </div>
  );
};

export default HeroDlc;
