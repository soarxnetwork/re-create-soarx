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
    <div className='z-[200] fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 overflow-auto'>
        <div className=" max-h-[80vh] fixed top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/4 max-w-[640px] w-full shadow bg-white z-[200] overflow-y-auto">
            <form onSubmit={handleSubmit(onSubmit)} >
            <div className="flex justify-between items-center py-4 px-6 border-b-2 border-[#D9D9D9]">
            <h1 className="text-[30px] font-semibold">Skill and Area of interest</h1>
            <button className="" onClick={handleShowForm}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 19L19 1M1 1L19 19" stroke="#636363" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
            </button>
            </div>

            <div className='mx-5 border-b-3 border-[#D9D9D9] '>
                <h3 className='text-[20px] font-semibold my-4'>Hard Skills/ Technical Skills</h3>
                <div className='flex space-x-6 mb-6'  >
                <input type="text" className='border-2 border-gray-400 py-3 px-4' value={TechnicalSkill} placeholder='Ex:HTML, CSS , JavaScript, Nextjs' onChange={handleInputTechnicalChange} />
                <button className='font-semibold border-2 border-[#A12DFF]  shadow-lg  rounded-2xl px-10 hover:bg-gray-100' onClick={handleAddTechnicalTag} >Add</button>
                </div>
                <div className='flex flex-wrap gap-2 mb-8 '>
                    {TechnicalSkillsTag.map((tag, index) => (
                    <div
                        key={index}
                        className='flex items-center space-x-2 bg-purple-600 text-white px-4 py-2 rounded-full'
                    >
                        <span>{tag}</span>
                        <button onClick={() => handleRemoveTechnicalTag(index)}>
                        <span className='ml-2 text-white font-bold cursor-pointer'>&times;</span>
                        </button>
                    </div>
                    ))}
                </div>
            </div>
           

            <div className='mx-5 border-b-3 border-[#D9D9D9] '>
                <h3 className='text-[20px] font-semibold my-4'>Soft Skills</h3>
                <div className='flex space-x-6 mb-6'  >
                <input type="text" className='border-2 border-gray-400 py-3 px-4' placeholder='Ex:Creative, Problem Solver, Leadership Qualities...' value={SoftSkill} onChange={handleInputSoftChange} />
                <button className='font-semibold border-2 border-[#A12DFF]  shadow-lg  rounded-2xl px-10 hover:bg-gray-100' onClick={handleAddSoftTag}>Add</button>
                </div>
                <div className='flex flex-wrap gap-2 mb-8 '>
                    {SoftSkillsTag.map((tag, index) => (
                    <div
                        key={index}
                        className='flex items-center space-x-2 bg-purple-600 text-white px-4 py-2 rounded-full'
                    >
                        <span>{tag}</span>
                        <button onClick={() => handleRemoveSoftTag(index)}>
                        <span className='ml-2 text-white font-bold cursor-pointer'>&times;</span>
                        </button>
                    </div>
                    ))}
                </div>
            </div>

             
            <div className='mx-5  '>
                <h3 className='text-[20px] font-semibold my-4'>Areas of Interest</h3>
                <div className='flex space-x-6 mb-6'  >
                <input type="text" className='border-2 border-gray-400 py-3 px-4' placeholder='Ex:Programming, Digital Marketing...' value={Interest} onChange={handleInputInterestChange} />
                <button className='font-semibold border-2 border-[#A12DFF]  shadow-lg  rounded-2xl px-10 hover:bg-gray-100' onClick={handleAddInterestTag}>Add</button>
                </div>
                <div className='flex flex-wrap gap-2 mb-8 '>
                    {InterestTag.map((tag, index) => (
                    <div
                        key={index}
                        className='flex items-center space-x-2 bg-purple-600 text-white px-4 py-2 rounded-full'
                    >
                        <span>{tag}</span>
                        <button onClick={() => handleRemoveInterestTag(index)}>
                        <span className='ml-2 text-white font-bold cursor-pointer'>&times;</span>
                        </button>
                    </div>
                    ))}
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

export default SkillsForm