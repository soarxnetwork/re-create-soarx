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
      <div className=" max-h-[80vh] fixed top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/4 max-w-[640px] w-full shadow bg-white z-[200] overflow-y-auto">
        <form onSubmit={handleSubmit(onSubmit)} >
        <div className="flex justify-between items-center py-4 px-6 border-b-2 border-[#D9D9D9]">
          <h1 className="text-[30px] font-semibold">Personal Experience</h1>
          <button className="" onClick={handleShowForm}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 19L19 1M1 1L19 19" stroke="#636363" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
        </div>
        <div className="p-6 space-y-6">
          <div>
            <label htmlFor="school" className="">
              Company Name <span className="text-red-400">*</span>
              <input
                {...register("company")}
                type="text"
                className="border border-[#837E7E] p-4 rounded-lg mt-2 w-full"
                placeholder="Ex: SoarX , Google, Redhat "
              />
            </label>
          </div>
          <div className='flex space-x-4'>
            <label htmlFor="degree" className="w-1/2">
              Job Title <span className="text-red-400">*</span>
              <input
                {...register("Jobtitle")}
                type="text"
                className="border border-[#837E7E] p-4 rounded-lg mt-2 w-full"
                placeholder="Ex: Web Developer Intern"
              />
            </label>
            <label htmlFor="location" className=" w-1/2">
              Location <span className="text-red-400">*</span>
              <input
                {...register("location")}
                type="text"
                className="border border-[#837E7E] p-4 rounded-lg mt-2 w-full"
                placeholder="Ex: Onsite, Remote , Hybrid"
              />
            </label>
          </div>
         
          <div className="flex justify-between space-x-4 items-center">
            <label htmlFor="start-date" className="w-1/2">
              Start Date<span className="text-red-400">*</span>
              <input
                {...register("StartDate", { setValueAs: dateStringToDate })}
                type="month"
                id="start-date"
                className="border border-[#837E7E] p-4 rounded-lg mt-2 w-full"
              />
            </label>
            <label htmlFor="end-date" className="w-1/2" >
              End Date <span className="text-red-400">*</span>
              <input
  {...register("EndDate", { setValueAs: dateStringToDate })}
  disabled={currentlyWork}
  type="month"
  id="end-date"
  className={`border border-[#837E7E] p-4 rounded-lg mt-2 w-full ${currentlyWork ? "bg-gray-300": ""}`}
/>
              
            </label>
          </div>
          <div>
          <div className='flex justify-end '>
          <input 
  {...register("currentlyWorking")}
  type="checkbox" 
  name="currentlyWorking" 
  id="currentlyWorking"
  className='max-w-[50px]'
  checked={currentlyWork}
  onChange={(e) => {
    setCurrentlyWork(!currentlyWork);
    register("currentlyWorking").onChange(e);
  }}
/>          <div>I currently work here </div>
          </div>
          </div>
          <div>
            <label   className="">
            Employment Type <span className="text-red-400">*</span>
              <input
                {...register("EmploymentType")}
                type="text"
                className="border border-[#837E7E] p-4 rounded-lg mt-2 w-full"
                placeholder="Ex: Internship, Full-time, Part-time"
              />
            </label>
          </div>
        </div>
        <div className="text-right px-6 py-4 bg-[#E3DDDD]">
          <button className="signInbut min-w-[90px] font-semibold mx-auto" type='submit' disabled={isPending}>Save</button>
        </div>
        </form>
      </div>
    </div>
  )
}

export default ExperienceForm