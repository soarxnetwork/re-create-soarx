import React from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { createUserEducation, updateUserEducation } from '@/actions/education';
import { toast } from 'react-toastify';
import { educationSchema, educationSchemaProps } from '@/schema/education';
import { useTransition } from 'react';
import '@/app/globals.css';

interface Props {
  handleShowForm: () => void;
  educationId?: string;
  id?: string;
  college_schoolName?: string;
  degree?: string | null;
  fieldOfstudy?: string | null;
  StartDate?: Date;
  EndDate?: Date;
  grade?: number | null;
  
}

const EducationForm: React.FC<Props> =  ({
  handleShowForm,
  educationId = "",
  id = "",
  college_schoolName = "",
  degree = "",
  fieldOfstudy = "",
  StartDate = new Date(),
  EndDate = new Date(),
  grade = 0,
  
}: Props
) => {
    const [isPending, startTransition] = useTransition()
    const { register, handleSubmit, formState: { errors } } = useForm({
      resolver: zodResolver(educationSchema),
      defaultValues : {
        userId : id,
        college_schoolName : college_schoolName || "",
        degree: degree || "",
        fieldOfstudy: fieldOfstudy || "",
        StartDate: StartDate || new Date(),
        EndDate : EndDate || new Date(),
        grade : grade || 0,
      }
    });
    

    const onSubmit = (data: educationSchemaProps) => {
      if(educationId){
          startTransition(() => {
            const formattedData = {
              ...data,
            };
            updateUserEducation(educationId, formattedData)
              .then((response) => {
                if (!response) return toast.error("Something went wrong, please try again");
                toast.success("Education details updated successfully!");
                handleShowForm();
              })
              .catch((err) => {
                throw err;
              });
          });
      }
      else{
      try {
        startTransition(() => {
          const formattedData = {
            ...data,
          };
          createUserEducation(formattedData)
            .then((response) => {
              if (!response) return toast.error("Something went wrong, please try again");
              toast.success("Education details added successfully!");
              handleShowForm();
            })
            .catch((err) => {
              throw err;
            });
        });
      } catch (error) {
        toast.error("Something went wrong, please try again");
      }
    }
  };
    const dateStringToDate = (value: string): Date | null => {
      if (!value) return null;
      const date = new Date(value + "-01");
      return isNaN(date.getTime()) ? null : date;
    };
    

  return (
    <div className="z-[200] fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 overflow-auto">
  <div className="max-h-[80vh]  fixed top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/4 max-w-[640px] w-full shadow bg-white dark:bg-gray-800 z-[200] overflow-y-auto">
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex justify-between items-center py-4 px-6 border-b-2 border-gray-300 dark:border-gray-700">
        <h1 className="text-[30px] font-semibold text-gray-900 dark:text-white">Education Qualifications</h1>
        <button className="" onClick={handleShowForm}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 19L19 1M1 1L19 19" stroke="#636363" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>
      </div>
      <div className="p-6 space-y-6">
        <div>
          <label htmlFor="school" className="block">
            <span className="text-gray-900 dark:text-white">Name of School/College <span className="text-red-400">*</span></span>
            <input
              {...register("college_schoolName")}
              type="text"
              id="school"
              className="border border-gray-500 dark:border-gray-600 p-4 rounded-lg mt-2 w-full bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              placeholder="Ex: Maharshi Dayanand University"
            />
          </label>
        </div>
        <div>
          <label htmlFor="degree" className="block">
            <span className="text-gray-900 dark:text-white">Name of Degree</span>
            <input
              {...register("degree")}
              type="text"
              id="degree"
              className="border border-gray-500 dark:border-gray-600 p-4 rounded-lg mt-2 w-full bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              placeholder="Ex: Bachelor's"
            />
          </label>
        </div>
        <div>
          <label htmlFor="field" className="block">
            <span className="text-gray-900 dark:text-white">Field of study</span>
            <input
              {...register("fieldOfstudy")}
              type="text"
              id="field"
              className="border border-gray-500 dark:border-gray-600 p-4 rounded-lg mt-2 w-full bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              placeholder="Ex: Computer Science"
            />
          </label>
        </div>
        <div className="flex flex-col gap-x-2 md:flex-row justify-between space-y-4 md:space-y-0 md:space-x-4 items-center">
          <label htmlFor="start-date" className="w-full md:w-1/2 block">
            <span className="text-gray-900 dark:text-white">Start Date<span className="text-red-400">*</span></span>
            <input
              {...register("StartDate", {
                setValueAs: dateStringToDate,
              })}
              type="month"
              id="start-date"
              className="border border-gray-500 dark:border-gray-600 p-4 rounded-lg mt-5 w-full bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            />
            {errors.StartDate && <p className='text-red-500'>{errors.StartDate.message}</p>}
          </label>
          <label htmlFor="end-date" className="w-full md:w-1/2 block">
            <span className="text-gray-900 dark:text-white">End Date (or expected)<span className="text-red-400">*</span></span>
            <input
              {...register("EndDate", {
                setValueAs: dateStringToDate,
              })}
              type="month"
              id="end-date"
              className="border border-gray-500 dark:border-gray-600 p-4 rounded-lg mt-2 w-full bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            />
          </label>
        </div>
        <div>
          <label htmlFor="grade" className="block">
            <span className="text-gray-900 dark:text-white">Grade</span>
            <input
              {...register("grade", {
                setValueAs: (v: string) => (v === "" ? null : parseFloat(v)),
              })}
              type="number"
              id="grade"
              className="border border-gray-500 dark:border-gray-600 p-4 rounded-lg mt-2 w-full bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              placeholder="Ex: 72.6"
              step="0.1"
              onKeyDown={(event: React.KeyboardEvent<HTMLInputElement>) => {
                const allowedKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.', 'Backspace', 'ArrowLeft', 'ArrowRight', 'Tab'];
                if (!allowedKeys.includes(event.key)) {
                  event.preventDefault();
                }
                // Prevent multiple decimal points
                if (event.key === '.' && event.currentTarget.value.includes('.')) {
                  event.preventDefault();
                }
              }}
            />
            {errors.grade && <p className='text-red-500'>{errors.grade.message}</p>}
          </label>
        </div>
      </div>
      <div className="text-right px-6 py-4 bg-gray-200 dark:bg-gray-700">
        <button className="signInbut min-w-[90px] font-semibold mx-auto" type='submit' disabled={isPending}>Save</button>
      </div>
    </form>
  </div>
</div>

  );
}

export default EducationForm;
