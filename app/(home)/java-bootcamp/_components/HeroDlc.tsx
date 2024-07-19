import CoursesDlc from "./CoursesDlc";
import CourseModules from "./CourseModules";

const HeroDlc = () => {
  return (
    <div>
      <div className="container space-y-12 2xl:ml-10">
        <div className="space-y-6 sm:pl-10  lg:mr-20 2xl:mr-0 sm:pr-5 2xl:pr-40 lg:pl-24 lg:pr-20">
          <h4 className="font-semibold text-3xl pt-6">About Course</h4>
          <p>
            Our 2-week DSA Live Classes Initiative is designed to provide a{" "}
            <span className="font-bold"> comprehensive learning</span>{" "}
            experience using Java in Data Structures and Algorithms (DSA).
          </p><p>This program aims to equip participants with the fundamental
            concepts, problem-solving skills, and algorithmic thinking needed to
            excel in coding interviews,{" "}
            <span className="font-bold">competitive programming</span>, and
            real-world software development.
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
