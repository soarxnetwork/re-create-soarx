"use client";
import React, { useState, useEffect } from "react";
import ExperienceForm from "./_sub_components/ExperienceForm";
import { useSession } from "next-auth/react";
import {
  fetchUserExperiences,
  deleteUserExperience,
} from "@/actions/experience";
import { toast } from "react-toastify";
import { FaPencil, FaPenToSquare } from "react-icons/fa6";
import { MdDeleteForever } from "react-icons/md";
interface ExperienceProps {
  id: string;
  userId: string;
  Jobtitle: string;
  company: string;
  location: string;
  StartDate: Date;
  EndDate: Date | null;
  currentlyWorking: boolean;
  EmploymentType: string;
}

function ProfileExperience() {
  const [experiences, setExperiences] = useState<ExperienceProps[]>([]);
  const [showformEdit, setShowFormEdit] = useState<any>("");
  const [showForm, setShowForm] = useState(false);
  const { data: session } = useSession();

  useEffect(() => {
    if (session) {
      fetchUserExperiences(session.user.id)
        .then((response) => {
          if (!response) return;
          setExperiences(response);
        })
        .catch((err) => {
          throw err;
        });
    }
  }, [session]);
  const handleShowFormEdit = (id: any) => {
    setShowFormEdit((prevId: any) => (prevId === id ? null : id));
  };
  const handleDelete = (experienceId: string) => {
    // delete experience
    deleteUserExperience(experienceId);
    toast.success("Experience Deleted Successfully");
  };
  const handleShowForm = () => {
    setShowForm(!showForm);
  };

  function Month(month_number: number | undefined) {
    const month = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    if (month_number !== undefined) {
      return month[month_number];
    } else return "";
  }

  return (
    <section className="shadow-lg pb-4 px-4 lg:pl-4 lg:pr-4 mx-4">
      <div className="border-b-2 border-gray-600 flex py-4 pr-5 justify-between items-center">
        <h3 className="text-[22px] font-semibold">Personal Experience</h3>
        <button className="text-purple-500 text-xl" onClick={handleShowForm}>
          <FaPenToSquare />
        </button>
      </div>

      <div>
        {experiences.length > 0 ? (
          <div className="">
            {experiences.map((experience) => (
              <div
                key={experience.id}
                className="flex flex-col md:flex-row justify-between py-6"
              >
                <div className="flex-1 py-4 px-4">
                  <div className="flex space-x-4">
                    <svg
                      width="30"
                      height="28"
                      viewBox="0 0 30 28"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M7.42533 5.27593V3.36846C7.42533 1.95594 8.43594 0.755975 9.80203 0.546442L11.7474 0.248059C13.9037 -0.082686 16.0963 -0.0826864 18.2526 0.248059L20.198 0.546441C21.5641 0.755975 22.5747 1.95594 22.5747 3.36846V5.27593L25.308 5.50153C27.4008 5.67427 29.108 7.28556 29.4436 9.40491C30.1855 14.0889 30.1855 18.8645 29.4436 23.5485C29.108 25.6679 27.4008 27.2792 25.308 27.4519L22.3229 27.6983C17.4489 28.1006 12.5511 28.1006 7.67708 27.6983L4.69199 27.4519C2.59917 27.2792 0.892014 25.6679 0.556366 23.5485C-0.185455 18.8645 -0.185455 14.0889 0.556366 9.40491C0.892014 7.28556 2.59917 5.67427 4.69199 5.50153L7.42533 5.27593ZM12.1022 2.66693C14.0233 2.37227 15.9767 2.37227 17.8978 2.66693L19.8432 2.96531C20.0383 2.99525 20.1827 3.16667 20.1827 3.36846V5.10443C16.7304 4.90309 13.2696 4.90309 9.81733 5.10443V3.36846C9.81733 3.16667 9.96171 2.99525 10.1569 2.96531L12.1022 2.66693ZM7.86954 7.69315C12.6155 7.30143 17.3845 7.30143 22.1305 7.69315L25.1156 7.93954C26.1109 8.02169 26.9228 8.78799 27.0824 9.79592C27.1818 10.4236 27.2671 11.053 27.3383 11.6837C19.5601 15.6001 10.4399 15.6001 2.66169 11.6837C2.7329 11.053 2.8182 10.4236 2.91761 9.79592C3.07724 8.78799 3.88913 8.02169 4.88445 7.93954L7.86954 7.69315ZM2.44818 14.2862C10.4206 17.9938 19.5794 17.9938 27.5518 14.2862C27.7038 17.2477 27.5474 20.2216 27.0824 23.1575C26.9228 24.1654 26.1109 24.9317 25.1156 25.0139L22.1305 25.2603C17.3845 25.652 12.6155 25.652 7.86954 25.2603L4.88445 25.0139C3.88913 24.9317 3.07724 24.1654 2.91761 23.1575C2.45265 20.2216 2.29617 17.2477 2.44818 14.2862Z"
                        fill="#A12DFF"
                      />
                    </svg>
                    <div>
                      <h5 className="text-[20px] font-semibold">
                        {experience.Jobtitle}
                      </h5>
                      <p className="text-[16px] text-[#636363] font-semibold">
                        {experience.company}
                      </p>
                      <p className="text-[16px] text-[#636363] font-semibold">
                        {experience.location}
                      </p>
                      <p className="text-[16px] font-semibold text-[#636363]">
                        {experience.EmploymentType}
                      </p>
                      <p className="text-[16px] text-[#636363] font-semibold">
                        {Month(experience.StartDate.getMonth())},{" "}
                        {experience.StartDate.getFullYear()} -
                        {experience.EndDate ? (
                          <>
                            {Month(experience.EndDate.getMonth())},{" "}
                            {experience.EndDate.getFullYear()}
                          </>
                        ) : (
                          <span>Currently Present</span>
                        )}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex justify-end space-x-6 mx-6 py-6 px-6 w-full md:w-auto">
                  <div
                    onClick={() => handleShowFormEdit(experience.id)}
                    className="cursor-pointer"
                  >
                    <FaPencil className="text-[20px] lg:text-[25px]" />
                    {showformEdit === experience.id && (
                      <div onClick={(e) => e.stopPropagation()}>
                        <ExperienceForm
                          handleShowForm={() => handleShowFormEdit(null)}
                        />
                      </div>
                    )}
                  </div>
                  <div
                    onClick={() => handleDelete(experience.id)}
                    className="text-black flex text-[20px] lg:text-[25px] dark:text-white"
                  >
                  <MdDeleteForever/>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex items-center justify-center ">
            <div className=" space-y-6 py-12">
              <svg
                width="32"
                height="36"
                viewBox="0 0 32 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mx-auto"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M23.3002 3.58366L24.9269 3.764C28.6816 4.18026 31.5 7.02095 31.5 10.3891V29.0639C31.5 32.3342 28.7635 35.0924 25.1179 35.4965C19.0627 36.1678 12.9373 36.1678 6.88215 35.4965C3.23652 35.0924 0.5 32.3342 0.5 29.0639V10.3891C0.5 7.02095 3.31839 4.18026 7.0731 3.764L8.6998 3.58366C9.34417 1.51695 11.4731 0 14 0H18C20.5269 0 22.6558 1.51695 23.3002 3.58366ZM8.5 6.29696L7.44386 6.41404C5.19103 6.6638 3.5 8.36821 3.5 10.3891V29.0639C3.5 30.9869 5.10916 32.6088 7.25291 32.8465C13.0619 33.4905 18.9381 33.4905 24.7471 32.8465C26.8908 32.6088 28.5 30.9869 28.5 29.0639V10.3891C28.5 8.36821 26.809 6.6638 24.5561 6.41404L23.5 6.29696V8.45663C23.5 9.19407 22.8284 9.79189 22 9.79189H10C9.17157 9.79189 8.5 9.19407 8.5 8.45663V6.29696ZM11.5 4.89595C11.5 3.66687 12.6193 2.67052 14 2.67052H18C19.3807 2.67052 20.5 3.66687 20.5 4.89595V7.12137H11.5V4.89595Z"
                  fill="#A12DFF"
                />
                <path
                  d="M23.5 16.9133C23.5 16.1758 22.8284 15.578 22 15.578H10C9.17157 15.578 8.5 16.1758 8.5 16.9133C8.5 17.6507 9.17157 18.2485 10 18.2485H22C22.8284 18.2485 23.5 17.6507 23.5 16.9133Z"
                  fill="#A12DFF"
                />
                <path
                  d="M21.5 22.2543C21.5 21.5169 20.8284 20.919 20 20.919H10C9.17157 20.919 8.5 21.5169 8.5 22.2543C8.5 22.9917 9.17157 23.5896 10 23.5896H20C20.8284 23.5896 21.5 22.9917 21.5 22.2543Z"
                  fill="#A12DFF"
                />
              </svg>

              <p className="max-w-[570px] text-center">
                Share your Professional Experience and yourcontribution to the
                companies you worked.
              </p>
              <div className="flex justify-center items-center">
                <button
                  className="signInbut min-w-[180px] font-semibold mx-auto"
                  onClick={handleShowForm}
                >
                  Add Experience
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      {showForm && (
        <ExperienceForm id={session?.user.id} handleShowForm={handleShowForm} />
      )}
    </section>
  );
}

export default ProfileExperience;
