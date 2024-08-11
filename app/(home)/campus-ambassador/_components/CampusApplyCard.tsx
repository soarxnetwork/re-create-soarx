"use client";
import React, { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { TiDeleteOutline } from "react-icons/ti";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CampusAmbassadorSchema, CampusLeaderSchema, CampusLeaderSchemaProps, CampusAmbassadorSchemaProps } from "@/schema/campus";
import { createCampusLeader, createCampusAmbassador, getCampusAmbassador, getCampusLeader  , deleteCampusAmbassador , deleteCampusLeader} from "@/actions/campus";
import { useTransition } from "react";
import { get } from "http";
import { set } from "zod";
function CampusApplyCard() {
  const { data: session } = useSession();
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenLeader, setOpenLeader] = useState(false);
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(CampusLeaderSchema),
    defaultValues: {
      userId: session?.user.id!,
      WhyCapterLeader: "",
      LeaderShipExperience: "",
      StudentOrganizations: "",
      StrategyForSoarx: "",
      CoreTeamSoarx: "",
      QualitiesForTeam: "",
      WeekHoursForChapterLeader: "",
      OneYearCommitment: "",
      HearAboutSoarx: "",
      AdditionalInfo: "",
    },
  });



  const {
    register: register2,
    handleSubmit: handleSubmit2,
    formState: { errors: errors2 },
  } = useForm({
    resolver: zodResolver(CampusAmbassadorSchema),
    defaultValues: {
      userId: session?.user.id!,
      WhyCampusAmbassador: "",
      EventOrganization: "",
      TechnicalSkills: "",
      StudentOrganizations: "",
      WeekHoursForAmbassador: "",
      SixMonthCommitment: "",
      HearAboutSoarx: "",
      AdditionalInfo: "",
    },
  });
  const [isUserFormSubmitted, setIsUserFormSubmitted] = useState(false);
  const toggleModalAmbassador = () => {
    if (!isUserAllowToRegister()) return;
    setOpenLeader(!isOpenLeader);
  };

  const isUserAllowToRegister = () => {
    if (!session || !session.user) {
      toast.error("You need to login first to register");
      return router.push("/sign-in");
    }
    if (
      !session.user.email ||
      !session.user.username
    ) {
      toast.error("Please complete your profile first to register");
      return router.push("/profile");
    }
    return true;
  };

  const toggleModalLeader = () => {
    if (!isUserAllowToRegister()) return;
    setIsOpen(!isOpen);
  };

  const OnSubmitCampusLeaderForm = (data: CampusLeaderSchemaProps) => {
    console.log("In Campus Leader form", data);
    startTransition(() => {
      createCampusLeader(data)
        .then(() => {
          toast.success("Campus Leader Application Submitted Successfully");
          setIsOpen(!isOpen);
          setIsUserFormSubmitted(true);
        }
        )
        .catch((error) => {
          toast.error("Failed to submit application");
          toast.error("One user can only submit an application once!!");
        });
    }
    )

  };

  const OnSubmitCampusAmbassardorForm = (data: CampusAmbassadorSchemaProps) => {
    console.log(data);
    startTransition(() => {
      createCampusAmbassador(data)
        .then(() => {
          toast.success("Campus Ambassador Application Submitted Successfully");
          setOpenLeader(!isOpenLeader);
          setIsUserFormSubmitted(true);
        }
        )
        .catch((error) => {
          toast.error("Failed to submit application");
          toast.error("One user can only submit an application once!!");
          console.log(error);

        });
    }
    )

  };

  useEffect(() => {

    if (errors) {
      console.log(errors)
    }
    if (errors2) {
      console.log(errors2)
    }
    CheckingUserForm(session?.user?.id!);

  }, [errors, errors2])

  function CheckingUserForm(userId: string) {
    try {
      getCampusAmbassador(userId)
        .then((data) => {
          console.log("Data: ", data);
          if (data) {
            setIsUserFormSubmitted(true);
          }
        })
        .catch((error) => {
          console.log("Error: ", error);
        });

      getCampusLeader(userId)
        .then((data) => {
          console.log("Data: ", data);
          if (data) {
            setIsUserFormSubmitted(true);
          }
        })
        .catch((error) => {
          console.log("Error: ", error);
        });
    }
    catch (error) {
      console.log("Error: ", error);
    }
  }

  function WithdrawForm() {
    console.log("Withdraw Form");
    try {
      deleteCampusAmbassador(session?.user.id!)
        .then(() => {
          toast.success("Campus Ambassador Application Withdrawn Successfully");
          setIsUserFormSubmitted(false);
        })
        .catch((error) => {
          deleteCampusLeader(session?.user.id!)
          .then(() => {
            toast.success("Campus Leader Application Withdrawn Successfully");
            setIsUserFormSubmitted(false);
          })
          .catch((error) => {
            console.log(error);
            toast.error("Failed to withdraw application");
          });        
        });

      
    }
    catch (error) {
      console.log("Error: ", error)

  }
}

  return (
    <div className="pb-10 lg:pt-6 2xl:pl-9 2xl:pr-28" id="campus-apply-card">
      <div className="flex flex-col gap-y-6 items-center">
        <div className="text-3xl xl:text-4xl font-semibold">Apply Now</div>
        <div className="text-[#8919E4] pl-4 md:pl-12 xl:pl-0 font-medium md:text-2xl cursor-pointer">
          {"Empower yourself with our Campus Lead and Campus Ambassador programs."
            .split("")
            .map((child, idx) => (
              <span className={"hoverText font-medium"} key={idx}>
                {child}
              </span>
            ))}
        </div>
      </div>
      <div
        id="crud-modal"
        aria-hidden="true"
        className="flex flex-col lg:flex-row justify-center items-center w-full mt-12"
      >
        <div className="">
          <div className="flex  flex-col lg:flex-row gap-y-9 xl:gap-y-0 items-stretch md:justify-evenly md:pl-5 xl:pl-0 xl:pr-0 md:pr-5 lg:pr-0">
            <div className="pl-5 pr-3 sm:pr-5 xl:pr-10 lg:w-1/2 flex flex-col">
              <div className="relative bg-white rounded-lg shadow-md shadow-gray-600 dark:bg-gray-900 flex-1">
                <div className="flex flex-col justify-between p-4 md:p-5 rounded-t dark:border-gray-600 h-full">
                  <div>
                    <div className="w-full flex pb-6">
                      <button className="bg-gradient-to-r text-2xl from-purple-600 via-purple-500 to-purple-400 font-semibold text-transparent bg-clip-text">
                        Chapter Leader Program
                      </button>
                    </div>
                    <hr />
                    <h5 className="font-bold mt-2">Duration: 1 Year</h5>
                    <h6 className="font-bold mt-2">
                      Roles & Responsibilities:
                    </h6>
                    <ul className="w list-disc p-4 flex flex-col gap-y-2">
                      <li>
                        Establish and effectively lead a SoarX chapter at your
                        college.
                      </li>
                      <li>
                        Form a core team by conducting interviews and selecting
                        members.
                      </li>
                      <li>
                        Organize and manage events, workshops, and hackathons on
                        campus.
                      </li>
                      <li>
                        Foster a tech community by engaging with students and
                        organizing networking opportunities.
                      </li>
                      <li>
                        Represent SoarX Network and build partnerships with
                        industry professionals and organizations.
                      </li>
                    </ul>
                  </div>
                  <button
                    onClick={() => { 
                      toggleModalLeader();
                      CheckingUserForm(session?.user.id!);
                    }}
                    className="px-8 font-bold py-3 signInbut text-white rounded-xl text-lg mt-4"
                  >
                    Apply As Campus Leader
                  </button>
                </div>
              </div>
            </div>

            <div className="pl-5 pr-3 sm:pr-5 xl:pl-0 xl:pr-8 lg:w-1/2 flex flex-col">
              <div className="relative bg-white rounded-lg shadow-md shadow-gray-600 dark:bg-gray-900 flex-1">
                <div className="flex flex-col justify-between p-4 md:p-5 rounded-t dark:border-gray-600 h-full">
                  <div>
                    <div className="w-full flex pb-6">
                      <button className="bg-gradient-to-r text-2xl from-purple-600 via-purple-500 to-purple-400 font-semibold text-transparent bg-clip-text">
                        Community Ambassador Program
                      </button>
                    </div>
                    <hr />
                    <h5 className="font-bold mt-2">Duration: 6 Months</h5>
                    <h6 className="font-bold mt-2">
                      Roles & Responsibilities:
                    </h6>
                    <ul className="w list-disc p-4 flex flex-col gap-y-2">
                      <li>
                        Promote SoarX events, workshops, and initiatives on
                        campus.
                      </li>
                      <li>
                        Engage with students and encourage participation in
                        SoarX activities.
                      </li>
                      <li>
                        Assist in organizing and coordinating events, both
                        online and offline.
                      </li>
                      <li>
                        Represent SoarX Network in a positive light and embody
                        its values and mission.
                      </li>
                      <li>
                        Provide feedback and suggestions for improving SoarX
                        programs and initiatives.
                      </li>
                    </ul>
                  </div>
                  <button
                    onClick={() =>{
                      toggleModalAmbassador();
                      CheckingUserForm(session?.user.id!);
                    }}
                    className="px-8 font-bold py-3 signInbut text-white rounded-xl text-lg mt-4"
                  >
                    Apply As Campus Ambassador
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isOpen && (!isUserFormSubmitted ? (
        <div
          id="crud-modal"
          aria-hidden="true"
          className="fixed inset-0 z-50 overflow-y-scroll overflow-x-hidden flex justify-center pt-2 bg-gray-800 bg-opacity-75 h-screen w-screen"
        >
          <div className="relative p-4 h-full w-full lg:w-3/4">
          <div className="relative bg-white rounded-lg shadow outline-none dark:bg-gray-700 flex justify-center items-center">
              <div className="w-full">
                <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                  <h3 className="bg-gradient-to-r text-2xl from-purple-600 via-purple-500 to-purple-400 font-semibold text-transparent bg-clip-text">
                    Campus Leader
                  </h3>
                  <button
                    onClick={toggleModalLeader}
                    type="button"
                    className=""
                    data-modal-toggle="crud-modal"
                  >
                    <TiDeleteOutline className="text-4xl text-purple-400" />
                  </button>
                </div>
                <form
                  className="p-4 md:p-5"
                  onSubmit={handleSubmit(OnSubmitCampusLeaderForm)}
                >
                  <div className="grid lg:gap-4 text-sm lg:text-md gap-x-4 gap-y-8  mb-4 grid-cols-2">
                    <div className="col-span-2">
                      <label
                        htmlFor="name"
                        className="block mb-2 font-medium text-gray-900 dark:text-white"
                      >
                        Why do you want to be a Chapter Leader for SoarX? (Short
                        essay)
                      </label>
                      <input
                        type="text"
                        id="WhyCapterLeader"
                        {...register("WhyCapterLeader")}
                        className="bg-gray-50 dark:border-0 outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-900 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="Type your name"
                      />
                      {errors.WhyCapterLeader && (
                        <p className="text-red-500 lg:text-sm text-xs">
                          {errors.WhyCapterLeader.message}
                        </p>
                      )}
                    </div>

                    <div className="col-span-2">
                      <label
                        htmlFor="name"
                        className="block mb-2  font-medium text-gray-900 dark:text-white"
                      >
                        Describe any leadership experience you have, including
                        managing teams or organizing large events. (Short essay)
                      </label>
                      <input
                        type="text"
                        id="LeaderShipExperience"
                        {...register("LeaderShipExperience")}
                        className="bg-gray-50 dark:border-0 outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-900 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="LeaderShip Experience"
                      />
                      {errors.LeaderShipExperience && (
                        <p className="text-red-500 lg:text-sm text-xs">
                          {errors.LeaderShipExperience.message}
                        </p>
                      )}
                    </div>

                    <div className="col-span-2">
                      <label
                        htmlFor="name"
                        className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
                      >
                        Have you ever founded or led any student organizations
                        or clubs? If yes, please describe your role and
                        achievements.
                      </label>
                      <input
                        type="text"
                        id="StudentOrganizations"
                        {...register("StudentOrganizations")}
                        className="bg-gray-50 dark:border-0 outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-900 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="Student Organizations"
                      />
                      {errors.StudentOrganizations && (
                        <p className="text-red-500 text-sm">
                          {errors.StudentOrganizations.message}
                        </p>
                      )}
                    </div>

                    <div className="col-span-2">
                      <label
                        htmlFor="name"
                        className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
                      >
                        How would you go about recruiting and building a core
                        team for the SoarX chapter?
                      </label>
                      <input
                        type="text"
                        id="StrategyForSoarx"
                        {...register("StrategyForSoarx")}
                        className="bg-gray-50 dark:border-0 outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-900 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="Strategy For Soarx"
                      />
                      {errors.StrategyForSoarx && (
                        <p className="text-red-500 text-sm">
                          {errors.StrategyForSoarx.message}
                        </p>
                      )}
                    </div>

                    <div className="col-span-2">
                      <label
                        htmlFor="name"
                        className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
                      >
                        How would you go about recruiting and building a core
                        team for the SoarX chapter?
                      </label>
                      <input
                        type="text"
                        id="CoreTeamSoarx"
                        {...register("CoreTeamSoarx")}
                        className="bg-gray-50 dark:border-0 outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-900 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="Recruiting & Team Building"
                      />
                      {errors.CoreTeamSoarx && (
                        <p className="text-red-500 text-sm">
                          {errors.CoreTeamSoarx.message}
                        </p>
                      )}
                    </div>

                    <div className="col-span-2">
                      <label
                        htmlFor="name"
                        className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
                      >
                        What qualities would you look for in your team members?
                      </label>
                      <input
                        type="text"
                        id="QualitiesForTeam"
                        {...register("QualitiesForTeam")}
                        className="bg-gray-50 dark:border-0 outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-900 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="Qualities For Team Members"
                      />
                      {errors.QualitiesForTeam && (
                        <p className="text-red-500 text-sm">
                          {errors.QualitiesForTeam.message}
                        </p>
                      )}
                    </div>

                    <div className="col-span-2">
                      <label
                        htmlFor="name"
                        className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
                      >
                        How many hours per week can you commit to the SoarX
                        chapter leader role?
                      </label>
                      <input
                        type="text"
                        id="WeekHoursForChapterLeader"
                        {...register("WeekHoursForChapterLeader")}
                        className="bg-gray-50 dark:border-0 outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-900 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="Weekly Hours"
                      />
                      {errors.WeekHoursForChapterLeader && (
                        <p className="text-red-500 text-sm">
                          {errors.WeekHoursForChapterLeader.message}
                        </p>
                      )}
                    </div>

                    <div className="col-span-2">
                      <label
                        htmlFor="name"
                        className="block mb-2 font-medium text-gray-900 dark:text-white"
                      >
                        Are you available for a one-year commitment?
                      </label>
                      <input
                        type="text"
                        id="OneYearCommitment"
                        {...register("OneYearCommitment")}
                        className="bg-gray-50 dark:border-0 outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-900 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="One Year Commitment"
                      />
                      {errors.OneYearCommitment && (
                        <p className="text-red-500 lg:text-sm text-xs">
                          {errors.OneYearCommitment.message}
                        </p>
                      )}
                    </div>

                    <div className="col-span-2">
                      <label
                        htmlFor="name"
                        className="block mb-2 font-medium text-gray-900 dark:text-white"
                      >
                        How did you hear about SoarX?
                      </label>
                      <input
                        type="text"
                        id="HearAboutSoarx"
                        {...register("HearAboutSoarx")}
                        className="bg-gray-50 dark:border-0 outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-900 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="Hear About Soarx"
                      />
                      {errors.HearAboutSoarx && (
                        <p className="text-red-500 lg:text-sm text-xs">
                          {errors.HearAboutSoarx.message}
                        </p>
                      )}
                    </div>

                    <div className="col-span-2">
                      <label
                        htmlFor="name"
                        className="block mb-2 font-medium text-gray-900 dark:text-white"
                      >
                        Any additional information you would like to share?
                      </label>
                      <input
                        type="text"
                        id="AdditionalInfo"
                        {...register("AdditionalInfo")}
                        className="bg-gray-50 dark:border-0 outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-900 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="Additional Info"
                      />
                      {errors.AdditionalInfo && (
                        <p className="text-red-500 lg:text-sm text-xs">
                          {errors.AdditionalInfo.message}
                        </p>
                      )}
                    </div>


                  </div>

                  <button
                    type="submit"
                    className=" font-semibold  h-[40px] signInbut text-white rounded-xl"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      ) : (<>
      <div className="fixed inset-0 z-50 overflow-y-scroll overflow-x-hidden flex justify-center pt-2 bg-gray-800 bg-opacity-75 h-screen w-screen"
      onClick={toggleModalLeader}
      >
      <div className="relative p-4 h-full w-full lg:w-3/4"
      
        >
      <div className="relative bg-white rounded-lg shadow outline-none dark:bg-gray-700 text-[#8919E4] text-center p-10"
      onClick={(e) => e.stopPropagation()}
      >
        <p className="text-[20px] ">You can only submit one form! If you want to withdraw your form click the button below</p>
        <button className=" signInbut mt-6" onClick={WithdrawForm}>Withdraw form</button>
        </div>
        </div>
        </div>
      </>))}

      {isOpenLeader && (!isUserFormSubmitted ? (
        <div
          id="crud-modal"
          aria-hidden="true"
          className="fixed inset-0 z-50 overflow-y-scroll overflow-x-hidden flex justify-center pt-2 bg-gray-800 bg-opacity-75 h-screen w-screen"
        >
          <div className="relative p-4 h-full w-full lg:w-3/4">
            <div className="relative bg-white rounded-lg shadow outline-none dark:bg-gray-700 flex justify-center items-center">
              <div className="w-full">
                <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                  <h3 className="bg-gradient-to-r text-2xl from-purple-600 via-purple-500 to-purple-400 font-semibold text-transparent bg-clip-text">
                    Campus Ambassadar
                  </h3>
                  <button
                    onClick={toggleModalAmbassador}
                    type="button"
                    className=""
                    data-modal-toggle="crud-modal"
                  >
                    <TiDeleteOutline className="text-4xl text-purple-400" />
                  </button>
                </div>
                <form
                  className="p-4 md:p-5"
                  onSubmit={handleSubmit2(OnSubmitCampusAmbassardorForm)}
                >
                  <div className="grid lg:gap-4 text-sm lg:text-md gap-x-4 gap-y-8  mb-4 grid-cols-2">
                    <div className="col-span-2">
                      <label
                        htmlFor="name"
                        className="block mb-2 font-medium text-gray-900 dark:text-white"
                      >
                        Why do you want to be a Community Ambassador for SoarX?
                        (Short essay)
                      </label>
                      <input
                        type="text"
                        id="WhyCampusAmbassador"
                        {...register2("WhyCampusAmbassador")}
                        className="bg-gray-50 dark:border-0 outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-900 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="Why Campus Ambassador"
                      />
                      {errors2.WhyCampusAmbassador && (
                        <p className="text-red-500 lg:text-sm text-xs">
                          {errors2.WhyCampusAmbassador.message}
                        </p>
                      )}
                    </div>

                    <div className="col-span-2">
                      <label
                        htmlFor="name"
                        className="block mb-2  font-medium text-gray-900 dark:text-white"
                      >
                        Describe any relevant experience you have in event
                        organization, marketing, or community engagement. (Short
                        essay)
                      </label>
                      <input
                        type="text"
                        id="EventOrganization"
                        {...register2("EventOrganization")}
                        className="bg-gray-50 dark:border-0 outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-900 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="Event Organization"
                      />
                      {errors2.EventOrganization && (
                        <p className="text-red-500 lg:text-sm text-xs">
                          {errors2.EventOrganization.message}
                        </p>
                      )}
                    </div>

                    <div className="col-span-2">
                      <label
                        htmlFor="name"
                        className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
                      >
                        List any technical skills or areas of expertise.
                      </label>
                      <input
                        type="text"
                        id="TechnicalSkills"
                        {...register2("TechnicalSkills")}
                        className="bg-gray-50 dark:border-0 outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-900 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="Technical Skills"
                      />
                      {errors2.TechnicalSkills && (
                        <p className="text-red-500 text-sm">
                          {errors2.TechnicalSkills.message}
                        </p>
                      )}
                    </div>

                    <div className="col-span-2">
                      <label
                        htmlFor="name"
                        className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
                      >
                        Have you previously been part of any student
                        organizations or clubs? If yes, please describe your
                        role and contributions.
                      </label>
                      <input
                        type="text"
                        id="StudentOrganizations"
                        {...register2("StudentOrganizations")}
                        className="bg-gray-50 dark:border-0 outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-900 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="Student Organizations"
                      />
                      {errors2.StudentOrganizations && (
                        <p className="text-red-500 text-sm">
                          {errors2.StudentOrganizations.message}
                        </p>
                      )}
                    </div>

                    <div className="col-span-2">
                      <label
                        htmlFor="name"
                        className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
                      >
                        How many hours per week can you dedicate to the
                        Community Ambassador role?
                      </label>
                      <input
                        type="text"
                        id="WeekHoursForAmbassador"
                        {...register2("WeekHoursForAmbassador")}
                        className="bg-gray-50 dark:border-0 outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-900 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="Recruiting & Team Building"
                      />
                      {errors2.WeekHoursForAmbassador && (
                        <p className="text-red-500 text-sm">
                          {errors2.WeekHoursForAmbassador.message}
                        </p>
                      )}
                    </div>

                    <div className="col-span-2">
                      <label
                        htmlFor="name"
                        className="block mb-2 font-medium text-gray-900 dark:text-white"
                      >
                        Are you available for a six-month commitment?
                      </label>
                      <input
                        type="text"
                        id="Six Month Commitment"
                        {...register2("SixMonthCommitment")}
                        className="bg-gray-50 dark:border-0 outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-900 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="Six Month Commitment"
                      />
                      {errors2.SixMonthCommitment && (
                        <p className="text-red-500 lg:text-sm text-xs">
                          {errors2.SixMonthCommitment.message}
                        </p>
                      )}
                    </div>

                    <div className="col-span-2">
                      <label
                        htmlFor="name"
                        className="block mb-2 font-medium text-gray-900 dark:text-white"
                      >
                        How did you hear about the SoarX Community Ambassador
                        Program?
                      </label>
                      <input
                        type="text"
                        id="HearAboutSoarx"
                        {...register2("HearAboutSoarx")}
                        className="bg-gray-50 dark:border-0 outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-900 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="Hear About Soarx"
                      />
                      {errors2.HearAboutSoarx && (
                        <p className="text-red-500 lg:text-sm text-xs">
                          {errors2.HearAboutSoarx.message}
                        </p>
                      )}
                    </div>

                    <div className="col-span-2">
                      <label
                        htmlFor="name"
                        className="block mb-2 font-medium text-gray-900 dark:text-white"
                      >
                        Any additional information you would like to share?
                      </label>
                      <input
                        type="text"
                        id="AdditionalInfo"
                        {...register("AdditionalInfo")}
                        className="bg-gray-50 dark:border-0 outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-900 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="Additional Info"
                      />
                      {errors2.AdditionalInfo && (
                        <p className="text-red-500 lg:text-sm text-xs">
                          {errors2.AdditionalInfo.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <button
                    type="submit"
                    className=" font-semibold  h-[40px] signInbut text-white rounded-xl"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="fixed inset-0 z-50 overflow-y-scroll overflow-x-hidden flex justify-center pt-2 bg-gray-800 bg-opacity-75 h-screen w-screen"
      onClick={toggleModalAmbassador}
      >
      <div className="relative p-4 h-full w-full lg:w-3/4"
      
        >
      <div className="relative bg-white rounded-lg shadow outline-none dark:bg-gray-700 text-[#8919E4] text-center p-10"
      onClick={(e) => e.stopPropagation()}
      >
        <p className="text-[20px] ">You can only submit one form! If you want to withdraw your form click the button below</p>
        <button className=" signInbut mt-6" onClick={WithdrawForm}>Withdraw form</button>
        </div>
        </div>
        </div>
        </>))}
    </div>
  );
}

export default CampusApplyCard;
