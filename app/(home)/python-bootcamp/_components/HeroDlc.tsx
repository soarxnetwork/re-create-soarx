import CoursesDlc from "./CoursesDlc";
import CourseModules from "./CourseModules";

const HeroDlc = () => {
  return (
    <div>
      <div className="container space-y-12 2xl:ml-10">
        <div className="space-y-6 sm:pl-10  lg:mr-20 2xl:mr-0 sm:pr-5 2xl:pr-40 lg:pl-24 lg:pr-20">
          <h4 className="font-semibold text-3xl pt-6">About Course</h4>
          <p>
            Our 5-Day Python Bootcamp is designed to provide an immersive
            learning experience in Python programming. Led by industry experts{" "}
            <span className="font-bold">
              {" "}
              Mohit Manuja, Software Engineer at Google
            </span>{" "}
            <span className="font-bold">
              and Rajat Kumar, Software Engineer at Intuit.
            </span>
            This program aims to equip participants with essential Python
            skills, problem-solving techniques, and a strong foundation{" "}
            <span className="font-bold"> algorithms and data structures.</span>
          </p>
          <p>
            This bootcamp is perfect for beginners and those looking to enhance
            their coding abilities for{" "}
            <span className="font-bold">
              technical interviews, competitive programming
            </span>{" "}
            and real-world software development.
          </p>
        </div>
        <CoursesDlc />
        <CourseModules />
        {/* <FeedbackDlc/> */}
      </div>
    </div>
  );
};

export default HeroDlc;
