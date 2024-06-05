import CoursesDlc from "./CoursesDlc";
import CourseModules from "./CourseModules";


const HeroDlc = () => {
  return (
    <div>
      <div className="container space-y-12 2xl:ml-10">
        <div className="space-y-6 sm:pl-10  lg:mr-20 2xl:mr-0 sm:pr-5 2xl:pr-40 lg:pl-24 lg:pr-20">
          <h4 className="font-semibold text-3xl pt-6">About Course</h4>
          <p>
          Our 5-Day Python Bootcamp is designed to provide an{" "}
            <span className="font-bold"> immersive learning</span> experience in Python programming. Led by industry experts
          </p>
          <span className="font-bold">Mohit Manuja,</span> Software Engineer at <span className="font-bold">Google</span>, and <span className="font-bold">Rajat Kumar</span>, Software Engineer at <span className="font-bold">Intuit</span>
          <p>
          This program aims to  equip participants with <span className="font-bold"> essential Python skills, problem-solving techniques</span> and a strong foundation in algorithms and data structures. This bootcamp is perfect for beginners and those looking to enhance their coding abilities for technical interviews, competitive programming, and{" "} 
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
