"use client"
import React, { useState , useEffect} from 'react';
import  ExperienceForm  from './_sub_components/ExperienceForm';
import { useSession } from 'next-auth/react';
import { fetchUserExperiences , deleteUserExperience } from '@/actions/experience';
import {toast } from 'react-toastify';
interface ExperienceProps {
    id: string;
    userId : string;
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
    const [showformEdit , setShowFormEdit] = useState<any>('');
    const [showForm, setShowForm] = useState(false);
    const {data: session} = useSession();

    useEffect(() => {
        if(session){
            fetchUserExperiences(session.user.id)
            .then((response) => {
                if(!response) return;
                setExperiences(response);
            })
            .catch((err) => {
                throw err;
            });
        }
    }, [session]);
    const handleShowFormEdit = (id: any) => {
        setShowFormEdit((prevId : any) => (prevId === id ? null : id));
    }
    const handleDelete = (experienceId: string) =>{
        // delete experience
        deleteUserExperience(experienceId);
        toast.success("Experience Deleted Successfully");
    }
    const handleShowForm = () => {
        setShowForm(!showForm);
    };
  return (
    <section className='shadow-lg pb-4'>
    <div className='border-b-3 border-[#D9D9D9] flex py-4 px-4 justify-between  '>
        <h3 className='text-[30px]  font-semibold'>Personal Experience</h3>
        <button className='' onClick={handleShowForm}>
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.39788 18C7.39788 17.1218 8.11095 16.4099 8.99056 16.4099H16.4074V9.00504C16.4074 8.12685 17.1204 7.41495 18 7.41495C18.8796 7.41495 19.5927 8.12685 19.5927 9.00504V16.4099H27.0096C27.8892 16.4099 28.6023 17.1218 28.6023 18C28.6023 18.8782 27.8892 19.5901 27.0096 19.5901H19.5927V26.9949C19.5927 27.8731 18.8796 28.585 18 28.585C17.1204 28.585 16.4074 27.8731 16.4074 26.9949V19.5901H8.99056C8.11095 19.5901 7.39788 18.8782 7.39788 18Z" fill="#8D00FF"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M8.0548 0.548709C14.6114 -0.182903 21.3886 -0.182903 27.9452 0.548709C31.8236 0.98148 34.9557 4.03159 35.4119 7.92618C36.196 14.6193 36.196 21.3807 35.4119 28.0738C34.9557 31.9684 31.8236 35.0185 27.9452 35.4513C21.3886 36.1829 14.6114 36.1829 8.0548 35.4513C4.17636 35.0185 1.04431 31.9684 0.588065 28.0738C-0.196022 21.3807 -0.196021 14.6193 0.588065 7.92618C1.04431 4.03158 4.17636 0.98148 8.0548 0.548709ZM27.5914 3.70922C21.2699 3.00385 14.7301 3.00385 8.40861 3.70922C5.97833 3.9804 4.03303 5.8954 3.75185 8.29561C2.99652 14.7432 2.99652 21.2568 3.75185 27.7044C4.03303 30.1046 5.97833 32.0196 8.40861 32.2908C14.7301 32.9962 21.2699 32.9962 27.5914 32.2908C30.0217 32.0196 31.967 30.1046 32.2482 27.7044C33.0035 21.2568 33.0035 14.7432 32.2482 8.29561C31.967 5.8954 30.0217 3.9804 27.5914 3.70922Z" fill="#8D00FF"/>
        </svg>

        </button>
    </div>


    <div>
        { experiences.length > 0 ? (
            <div>
                {experiences.map((experience) => (
                    <div className='flex justify-between '>
                    <div key={experience.id} className='py-4 px-4 border-b-2 border-[#D9D9D9]'>
                        <h4 className='text-[20px] font-semibold'>{experience.Jobtitle}</h4>
                        <p className='text-[14px] font-semibold'>{experience.company}</p>
                        <p className='text-[14px] font-semibold'>{experience.location}</p>
                        <p className='text-[14px] font-semibold'>{experience.EmploymentType}</p>
                        <p className='text-[14px] font-semibold'>{experience.StartDate.getMonth()} , {experience.StartDate.getFullYear()} - {experience.EndDate?.getMonth()} , {experience.EndDate?.getFullYear()} {experience.currentlyWorking ? (<>Currently Working</>): (<></>)}</p>
                        
                        </div>
                        
                        <div className='flex space-x-6'>
          <div onClick={() => handleShowFormEdit(experience.id)}>
            <svg width="29" height="28" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_155_103)">
                <path d="M16.9892 10.5233L18.1008 11.5967L7.15333 22.1667H6.04167V21.0933L16.9892 10.5233ZM21.3392 3.5C21.0371 3.5 20.7229 3.61667 20.4933 3.83833L18.2821 5.97333L22.8133 10.3483L25.0246 8.21333C25.4958 7.75833 25.4958 7.02333 25.0246 6.56833L22.1971 3.83833C21.9554 3.605 21.6533 3.5 21.3392 3.5ZM16.9892 7.22167L3.625 20.125V24.5H8.15625L21.5204 11.5967L16.9892 7.22167Z" fill="#2F2F2F"/>
              </g>
              <defs>
                <clipPath id="clip0_155_103">
                  <rect width="29" height="28" fill="white"/>
                </clipPath>
              </defs>
            </svg>
            {showformEdit === experience.id && (
              <div onClick={(e) => e.stopPropagation()}>
                <ExperienceForm 
                  handleShowForm={() => handleShowFormEdit(null)}
                />
              </div>
            )}
          </div>
          <div onClick={()=>{handleDelete(experience.id)}}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 2.25C9.58579 2.25 9.25 2.58579 9.25 3V3.75H5C4.58579 3.75 4.25 4.08579 4.25 4.5C4.25 4.91421 4.58579 5.25 5 5.25H19C19.4142 5.25 19.75 4.91421 19.75 4.5C19.75 4.08579 19.4142 3.75 19 3.75H14.75V3C14.75 2.58579 14.4142 2.25 14 2.25H10Z" fill="black"/>
        <path d="M10 10.65C10.4142 10.65 10.75 10.9858 10.75 11.4L10.75 18.4C10.75 18.8142 10.4142 19.15 10 19.15C9.58579 19.15 9.25 18.8142 9.25 18.4L9.25 11.4C9.25 10.9858 9.58579 10.65 10 10.65Z" fill="black"/>
        <path d="M14.75 11.4C14.75 10.9858 14.4142 10.65 14 10.65C13.5858 10.65 13.25 10.9858 13.25 11.4V18.4C13.25 18.8142 13.5858 19.15 14 19.15C14.4142 19.15 14.75 18.8142 14.75 18.4V11.4Z" fill="black"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M5.99142 7.91718C6.03363 7.53735 6.35468 7.25 6.73684 7.25H17.2632C17.6453 7.25 17.9664 7.53735 18.0086 7.91718L18.2087 9.71852C18.5715 12.9838 18.5715 16.2793 18.2087 19.5446L18.189 19.722C18.045 21.0181 17.0404 22.0517 15.7489 22.2325C13.2618 22.5807 10.7382 22.5807 8.25108 22.2325C6.95954 22.0517 5.955 21.0181 5.81098 19.722L5.79128 19.5446C5.42846 16.2793 5.42846 12.9838 5.79128 9.71852L5.99142 7.91718ZM7.40812 8.75L7.2821 9.88417C6.93152 13.0394 6.93152 16.2238 7.2821 19.379L7.3018 19.5563C7.37011 20.171 7.84652 20.6612 8.45905 20.747C10.8082 21.0758 13.1918 21.0758 15.5409 20.747C16.1535 20.6612 16.6299 20.171 16.6982 19.5563L16.7179 19.379C17.0685 16.2238 17.0685 13.0394 16.7179 9.88417L16.5919 8.75H7.40812Z" fill="black"/>
        </svg>

          </div>
          </div>
                       

                    </div>
                ))}
            </div>
        ):
        (<div className='flex items-center justify-center '>
           <div className=' space-y-6 py-12'>
            <svg width="32" height="36" viewBox="0 0 32 36" fill="none" xmlns="http://www.w3.org/2000/svg" className='mx-auto'>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M23.3002 3.58366L24.9269 3.764C28.6816 4.18026 31.5 7.02095 31.5 10.3891V29.0639C31.5 32.3342 28.7635 35.0924 25.1179 35.4965C19.0627 36.1678 12.9373 36.1678 6.88215 35.4965C3.23652 35.0924 0.5 32.3342 0.5 29.0639V10.3891C0.5 7.02095 3.31839 4.18026 7.0731 3.764L8.6998 3.58366C9.34417 1.51695 11.4731 0 14 0H18C20.5269 0 22.6558 1.51695 23.3002 3.58366ZM8.5 6.29696L7.44386 6.41404C5.19103 6.6638 3.5 8.36821 3.5 10.3891V29.0639C3.5 30.9869 5.10916 32.6088 7.25291 32.8465C13.0619 33.4905 18.9381 33.4905 24.7471 32.8465C26.8908 32.6088 28.5 30.9869 28.5 29.0639V10.3891C28.5 8.36821 26.809 6.6638 24.5561 6.41404L23.5 6.29696V8.45663C23.5 9.19407 22.8284 9.79189 22 9.79189H10C9.17157 9.79189 8.5 9.19407 8.5 8.45663V6.29696ZM11.5 4.89595C11.5 3.66687 12.6193 2.67052 14 2.67052H18C19.3807 2.67052 20.5 3.66687 20.5 4.89595V7.12137H11.5V4.89595Z" fill="#A12DFF"/>
                <path d="M23.5 16.9133C23.5 16.1758 22.8284 15.578 22 15.578H10C9.17157 15.578 8.5 16.1758 8.5 16.9133C8.5 17.6507 9.17157 18.2485 10 18.2485H22C22.8284 18.2485 23.5 17.6507 23.5 16.9133Z" fill="#A12DFF"/>
                <path d="M21.5 22.2543C21.5 21.5169 20.8284 20.919 20 20.919H10C9.17157 20.919 8.5 21.5169 8.5 22.2543C8.5 22.9917 9.17157 23.5896 10 23.5896H20C20.8284 23.5896 21.5 22.9917 21.5 22.2543Z" fill="#A12DFF"/>
                </svg>

            <p className='max-w-[570px] text-center'>Share your Professional Experience and yourcontribution to the companies you worked.</p>
            <div className='flex justify-center items-center'>
                <button className='signInbut min-w-[180px] font-semibold mx-auto'>Add Experience</button>
            </div>
            </div> 
        </div>)}

    </div>
    {showForm && (<ExperienceForm 
        id={session?.user.id}
    handleShowForm={handleShowForm} />)}
</section>
  )
}

export default ProfileExperience