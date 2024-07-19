import React, {useState , useEffect} from 'react'
import { useForm } from 'react-hook-form';
import { useTransition } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { skillsSchema, skillsSchemaProps } from '@/schema/skills';
import { create } from 'domain';
import { createUserSkills , fetchUserSkills, updateUserSkills } from '@/actions/skills';
import {toast} from 'react-toastify' ;
interface Props {
  handleShowForm: () => void;
  userId: string;
  technicalSkills?: string[];
  softSkills?: string[];
  AreasOfInterest?: string[];

}


const SkillsForm = ({
  handleShowForm,
  userId,
  technicalSkills = [],
  softSkills = [],
  AreasOfInterest = [],
}: Props
) => {


    const [TechnicalSkillsTag, setTechnicalSkillsTags] = useState<string[]>([]);
    const [TechnicalSkill, setTechnicalSkill] = useState<string>('');

    const [SoftSkillsTag, setSoftSkillsTags] = useState<string[]>([]);
    const [SoftSkill, setSoftSkill] = useState<string>('');

    const [InterestTag, setInterestTags] = useState<string[]>([]);
    const [Interest, setInterest] = useState<string>('');


    const [isPending, startTransition] = useTransition();
    useEffect(() => {
    fetchUserSkills(userId)
    .then((response) => {
        if(!response) return;
        setTechnicalSkillsTags(response.technicalSkills);
        setSoftSkillsTags(response.softSkills);
        setInterestTags(response.AreasOfInterest);
    })
    .catch((err) => {
        throw err;
    });
    } , [userId]);
    


    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(skillsSchema),
        defaultValues: {
          userId,
          technicalSkills: technicalSkills || [],
          softSkills: softSkills || [],
          AreasOfInterest: AreasOfInterest || [],
        },
      });

      const onSubmit = (data: any) => {
        
          startTransition(() => {
            const formattedData = {
              ...data,
              technicalSkills: TechnicalSkillsTag,
              softSkills: SoftSkillsTag,
              AreasOfInterest: InterestTag,
            };
            updateUserSkills(userId, formattedData)
            .then(() =>{
              handleShowForm();
            toast.success('Skills and Area of Interest updated successfully');
            })
            .catch((error)=>{
              startTransition(() => {
                createUserSkills(formattedData)
                .then(() => {
                  toast.success('Skills and Area of Interest added successfully');
                  handleShowForm();
                })
                .catch((error) => {
                  toast.error('Something went wrong');
                  console.log(error);
                });
              });
            })
            
          });

       
        
      
    };


    const handleAddInterestTag = (event : any) => {
        event.preventDefault();
        if (Interest.trim()) {
          setInterestTags([...InterestTag, Interest.trim()]);
          setInterest('');
        }
      }

    const handleInputInterestChange = (event : any) => {
        setInterest(event.target.value);
      }
      
    const handleRemoveInterestTag = (indexToRemove : number) => {
        setInterestTags(InterestTag.filter((_, index) => index !== indexToRemove));
      }


    const handleAddSoftTag = (event : any) => {
        event.preventDefault();
        if (SoftSkill.trim()) {
          setSoftSkillsTags([...SoftSkillsTag, SoftSkill.trim()]);
          setSoftSkill('');
        }
      }

      const handleInputSoftChange = (event : any) => {
        setSoftSkill(event.target.value);
      }

      const handleRemoveSoftTag = (indexToRemove : number) => {
        setSoftSkillsTags(SoftSkillsTag.filter((_, index) => index !== indexToRemove));
      };


    
    const handleAddTechnicalTag = (event : any) => {
        event.preventDefault();
        if (TechnicalSkill.trim()) {
          setTechnicalSkillsTags([...TechnicalSkillsTag, TechnicalSkill.trim()]);
          setTechnicalSkill('');
        }
      };

      const handleInputTechnicalChange = (event : any) => {
        setTechnicalSkill(event.target.value);
      };

      const handleRemoveTechnicalTag = (indexToRemove : number) => {
        setTechnicalSkillsTags(TechnicalSkillsTag.filter((_, index) => index !== indexToRemove));
      };


  return (
    <div className="z-[200] fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 overflow-auto">
  <div className="max-h-[80vh] max-w-[640px] w-full bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-y-auto">
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col h-full">
      <div className="flex justify-between items-center py-4 px-6 border-b-2 border-gray-300 dark:border-gray-700">
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">Skill and Area of Interest</h1>
        <button type="button" onClick={handleShowForm} className="p-2">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 19L19 1M1 1L19 19" stroke="#636363" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      <div className="mx-5 border-b-2 border-gray-300 dark:border-gray-700 pb-6">
        <h3 className="text-xl font-semibold my-4 text-gray-900 dark:text-white">Hard Skills/Technical Skills</h3>
        <div className="flex sm:flex-row items-center gap-4 mb-6">
          <input
            type="text"
            className="border-2 border-gray-400 dark:border-gray-600 py-3 px-4 rounded-lg w-full"
            value={TechnicalSkill}
            placeholder="Ex: HTML, CSS, JavaScript, Next.js"
            onChange={handleInputTechnicalChange}
          />
          <button
            type="button"
            className="font-semibold border-2 border-[#A12DFF] dark:border-[#A12DFF] shadow-lg rounded-2xl px-6 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
            onClick={handleAddTechnicalTag}
          >
            Add
          </button>
        </div>
        <div className="flex flex-wrap gap-2 mb-8">
          {TechnicalSkillsTag.map((tag, index) => (
            <div
              key={index}
              className="flex items-center space-x-2 bg-purple-600 dark:bg-purple-700 text-white px-4 py-2 rounded-full"
            >
              <span>{tag}</span>
              <button type="button" onClick={() => handleRemoveTechnicalTag(index)}>
                <span className="ml-2 text-white font-bold cursor-pointer">&times;</span>
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="mx-5 border-b-2 border-gray-300 dark:border-gray-700 pb-6">
        <h3 className="text-xl font-semibold my-4 text-gray-900 dark:text-white">Soft Skills</h3>
        <div className="flex sm:flex-row items-center gap-4 mb-6">
          <input
            type="text"
            className="border-2 border-gray-400 dark:border-gray-600 py-3 px-4 rounded-lg w-full"
            placeholder="Ex: Creative, Problem Solver, Leadership Qualities..."
            value={SoftSkill}
            onChange={handleInputSoftChange}
          />
          <button
            type="button"
            className="font-semibold border-2 border-[#A12DFF] dark:border-[#A12DFF] shadow-lg rounded-2xl px-6 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
            onClick={handleAddSoftTag}
          >
            Add
          </button>
        </div>
        <div className="flex flex-wrap gap-2 mb-8">
          {SoftSkillsTag.map((tag, index) => (
            <div
              key={index}
              className="flex items-center space-x-2 bg-purple-600 dark:bg-purple-700 text-white px-4 py-2 rounded-full"
            >
              <span>{tag}</span>
              <button type="button" onClick={() => handleRemoveSoftTag(index)}>
                <span className="ml-2 text-white font-bold cursor-pointer">&times;</span>
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="mx-5 pb-6">
        <h3 className="text-xl font-semibold my-4 text-gray-900 dark:text-white">Areas of Interest</h3>
        <div className="flex  sm:flex-row items-center gap-4 mb-6">
          <input
            type="text"
            className="border-2 border-gray-400 dark:border-gray-600 py-3 px-4 rounded-lg w-full"
            placeholder="Ex: Programming, Digital Marketing..."
            value={Interest}
            onChange={handleInputInterestChange}
          />
          <button
            type="button"
            className="font-semibold border-2 border-[#A12DFF] dark:border-[#A12DFF] shadow-lg rounded-2xl px-6 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
            onClick={handleAddInterestTag}
          >
            Add
          </button>
        </div>
        <div className="flex flex-wrap gap-2 mb-8">
          {InterestTag.map((tag, index) => (
            <div
              key={index}
              className="flex items-center space-x-2 bg-purple-600 dark:bg-purple-700 text-white px-4 py-2 rounded-full"
            >
              <span>{tag}</span>
              <button type="button" onClick={() => handleRemoveInterestTag(index)}>
                <span className="ml-2 text-white font-bold cursor-pointer">&times;</span>
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="text-right px-6 py-4 bg-gray-200 dark:bg-gray-700">
        <button
          className="signInbut text-white font-semibold py-2 px-4 rounded disabled:bg-gray-400"
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

export default SkillsForm