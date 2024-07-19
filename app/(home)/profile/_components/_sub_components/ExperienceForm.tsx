import React, {useState} from 'react'
import { useForm } from 'react-hook-form';
import { useTransition } from 'react';
import {toast} from 'react-toastify' ;
import { zodResolver } from '@hookform/resolvers/zod';
import { experienceSchema , experienceSchemaProps } from '@/schema/experience';
import { createUserExperience, updateUserExperience } from '@/actions/experience';
import { useRouter } from 'next/navigation';

interface Props {
  handleShowForm: () => void;
  experienceId?: string;
  id?: string;
  Jobtitle?: string;
  company?: string ;
  location?: string ;
  StartDate?: Date;
  EndDate?: Date | null;
  currentlyWorking?: boolean;
  EmploymentType?: string;
}




const ExperienceForm: React.FC<Props> = ({
  handleShowForm,
  experienceId = "",
  id = "",
  Jobtitle = "",
  company = "",
  location = "",
  StartDate = new Date(),
  EndDate = null,
  currentlyWorking = false,
  EmploymentType = "",

}: Props) => {
  const [currentlyWork, setCurrentlyWork] = useState(currentlyWorking);
  const [isPending, startTransition] = useTransition()

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(experienceSchema),
    defaultValues : {
      userId : id,
      Jobtitle : Jobtitle || "",
      company: company || "",
      location: location || "",
      StartDate: StartDate || new Date(),
      EndDate : EndDate || null,
      currentlyWorking : currentlyWorking,
      EmploymentType : EmploymentType || "",
    }
  });
  const router = useRouter();
  const onSubmit = (data: experienceSchemaProps) => {
    if(experienceId){
        startTransition(() => {
          const formattedData = {
            ...data,
          };
          updateUserExperience(experienceId, formattedData)
            .then((response) => {
              if (!response) return toast.error("Something went wrong, please try again");
              toast.success("Experience details updated successfully!");
            })
            .catch((error) => {
              toast.error(error.message);
            });
        });
      } else {
        startTransition(() => {
          const formattedData = {
            ...data,
          };
          createUserExperience(formattedData)
            .then((response) => {
              if (!response) return toast.error("Something went wrong, please try again");
              toast.success("Experience details added successfully!");

              handleShowForm();
              router.refresh(); // Refresh the current route
          router.push('/profile'); 

            })
            .catch((error) => {
              toast.error(error.message);
            });
        });
      }
    }

    const dateStringToDate = (value: string): Date | null => {
      if (!value) return null;
      const date = new Date(value + "-01");
      return isNaN(date.getTime()) ? null : date;
    };


  return (
    <div className="z-[200] fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 overflow-auto">
    <div className="max-h-[80vh] max-w-[640px] w-full bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-y-auto">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col h-full">
        <div className="flex justify-between items-center border-b-2 border-gray-300 dark:border-gray-700 py-4 px-6">
          <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">Personal Experience</h1>
          <button className="p-2" type="button" onClick={handleShowForm}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 19L19 1M1 1L19 19" stroke="#636363" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
        </div>
        <div className="p-6 space-y-6">
          <div>
            <label htmlFor="company" className="block text-gray-700 dark:text-white">
              Company Name <span className="text-red-400">*</span>
              <input
                {...register("company")}
                type="text"
                className="border border-gray-300 dark:border-gray-600 p-4 rounded-lg mt-2 w-full bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                placeholder="Ex: SoarX, Google, Redhat"
              />
            </label>
          </div>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <label htmlFor="Jobtitle" className="w-full md:w-1/2 text-gray-700 dark:text-white">
              Job Title <span className="text-red-400">*</span>
              <input
                {...register("Jobtitle")}
                type="text"
                className="border border-gray-300 dark:border-gray-600 p-4 rounded-lg mt-2 w-full bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                placeholder="Ex: Web Developer Intern"
              />
            </label>
            <label htmlFor="location" className="w-full md:w-1/2 text-gray-700 dark:text-white">
              Location <span className="text-red-400">*</span>
              <input
                {...register("location")}
                type="text"
                className="border border-gray-300 dark:border-gray-600 p-4 rounded-lg mt-2 w-full bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                placeholder="Ex: Onsite, Remote, Hybrid"
              />
            </label>
          </div>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <label htmlFor="start-date" className="w-full md:w-1/2 text-gray-700 dark:text-white">
              Start Date <span className="text-red-400">*</span>
              <input
                {...register("StartDate", { setValueAs: dateStringToDate })}
                type="month"
                id="start-date"
                className="border border-gray-300 dark:border-gray-600 p-4 rounded-lg mt-2 w-full bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              />
            </label>
            <label htmlFor="end-date" className="w-full md:w-1/2 text-gray-700 dark:text-white">
              End Date <span className="text-red-400">*</span>
              <input
                {...register("EndDate", { setValueAs: dateStringToDate })}
                disabled={currentlyWork}
                type="month"
                id="end-date"
                className={`border border-gray-300 dark:border-gray-600 p-4 rounded-lg mt-2 w-full bg-white dark:bg-gray-700 text-gray-900 dark:text-white ${currentlyWork ? "bg-gray-300 dark:bg-gray-600" : ""}`}
              />
            </label>
          </div>
          <div className="flex items-center space-x-2 text-gray-700 dark:text-white">
            <input
              {...register("currentlyWorking")}
              type="checkbox"
              name="currentlyWorking"
              id="currentlyWorking"
              className="form-checkbox h-5 w-5 text-blue-600 dark:text-blue-400"
              checked={currentlyWork}
              onChange={(e) => {
                setCurrentlyWork(!currentlyWork);
                register("currentlyWorking").onChange(e);
              }}
            />
            <label htmlFor="currentlyWorking" className="cursor-pointer">I currently work here</label>
          </div>
          <div>
            <label className="block text-gray-700 dark:text-gray-300">
              Employment Type <span className="text-red-400">*</span>
              <input
                {...register("EmploymentType")}
                type="text"
                className="border border-gray-300 dark:border-gray-600 p-4 rounded-lg mt-2 w-full bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                placeholder="Ex: Internship, Full-time, Part-time"
              />
            </label>
          </div>
        </div>
        <div className="text-right px-6 py-4 bg-gray-200 dark:bg-gray-700">
          <button
            className="text-white font-semibold py-2 px-4 rounded  disabled:bg-gray-400 signInbut"
            type="submit"
            disabled={isPending}
          >
            Save
          </button>
        </div>
      </form>
    </div>
  </div>
  
  )
}

export default ExperienceForm