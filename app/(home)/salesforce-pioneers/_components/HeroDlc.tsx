import CoursesDlc from "./CoursesDlc";
import CourseModules from "./CourseModules";

const HeroDlc = () => {
  return (
    <div>
      <div className="container space-y-12 2xl:ml-10">
        <div className="space-y-6 sm:pl-10  lg:mr-20 2xl:mr-0 sm:pr-5 2xl:pr-40 lg:pl-24 lg:pr-20">
          <h4 className="font-semibold text-3xl pt-6">About Course</h4>
          <p>
          Unlock your potential with the <span className="font-bold">
              {" "}
              SoarX
            </span>{" "} <span className="font-bold">Salesforce Training Program</span>, a comprehensive 10-week course designed to provide you with a deep understanding of Salesforces powerful <span className="font-bold">
              CRM Platform</span>. Starting on {" "}
            <span className="font-bold">
              {" "}
              August 10, 2024
            </span>{" "}
            this program offers a structured approach to mastering Salesforce <span className="font-bold">Administration</span>, <span className="font-bold">Development</span>, and Lightning Web Components (LWC), tailored for both <span className="font-bold">beginners</span> and those <span className="font-bold">seeking to advance</span> their <span className="font-bold">skills</span>.
            <br />
            <br />
            Our course combines expert instruction from seasoned professionals, <span className="font-bold">Nikhil Chowdhury and Neha</span>, with hands-on projects to ensure <span className="font-bold">practical learning</span>. You will gain essential skills in Salesforce <span className="font-bold">setup</span>, user management, Apex programming, and <span className="font-bold">LWC development</span>. Additionally, benefit from career <span className="font-bold">guidance sessions, resume-building workshops</span>, and job referral opportunities, setting you up for success in the Salesforce ecosystem.
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
