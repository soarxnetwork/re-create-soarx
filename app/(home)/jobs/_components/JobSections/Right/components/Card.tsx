import { JobSchema } from '@/schema/JobSchema';
import { Spinner } from '@nextui-org/spinner';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { GrSave } from 'react-icons/gr';


const jobDetails = {
    aboutCompany: "Soarx is a good company",
    applyLink: "jhgsjhgdsjhgdjhgjghdjhdgjhdsgjhdsgjhdsgjhdsg",
    companyName: "DevMusic",
    createdAt: new Date("Thu Jul 04 2024 16:28:33 GMT+0530 (India Standard Time)"),
    creatorId: "clwu51z1r0000o69jrzowsuzi",
    description: "lksjhjkdhkjsdhjkhdskjhdjkh kkjhjkd kjdhkjd hskjhdjkh dkjshkjdh kjdhjkdhskjhdkjhdkjhdkjhdk jdjk djkh djkhdkjhdjksh kdjhkjdshkjds hkjdshkjdshjkd jdh skjhds jkdhs kjh djkh djkh dsjkh dkjh dkjhdjk hdjkhdskj",
    experience: "Fresher",
    id: "cly75ll5400007jozemw5b26n",
    imageUrl: "https://utfs.io/f/7826660d-33cc-421c-a144-fcc1882d1b84-e6u1h8.png",
    jobRole: "Human resource Intern",
    lastDateToApply: "25 Dec 2024",
    location: "Bengaluru",
    qualificationRequired: "Btech CSE AI | ML",
    salary: "9000000",
    section: null,
    skills: "React, Node, Js",
    slug: "next",
    title: "Nextjs",
    updatedAt: new Date("Tue Jul 16 2024 16:48:04 GMT+0530 (India Standard Time)")
  };
  

const Card = ({id, location, slug, lastDateToApply, companyName, jobRole, skills, salary, imageUrl, experience, cardBg}: any) => {

  if (!id) {
    return (
      <div className="h-[1000px] w-full overflow-hidden flex items-center justify-center">
        <Spinner color="secondary" labelColor="secondary" />
      </div>
    );
  }

    const skills2 = skills.trim().split(", ");
  return (
    <div className={` dark:bg-gray-950 hover:scale-95 w-[344px] max-w-sm h-[400px] rounded-xl m-4 p-2 overflow-hidden shadow-lg  dark:shadow-md dark:hover:shadow-lg dark:hover:shadow-purple-600 dark:shadow-purple-950 hover:shadow-2xl ease-in-out duration-250 hover:cursor-pointer border-gray-400 border-1 dark:border-gray-600`}>
    <div className={`${cardBg} h-3/4  rounded-xl p-4 space-y-4`}>
      <div className="flex justify-between items-center">
        <span className="bg-white text-black px-4 py-2 font-semibold rounded-2xl text-sm md:text-base">
          {lastDateToApply}
        </span>
        <span className="bg-white text-black font-semibold p-2 rounded-full flex justify-center items-center">
          <GrSave size={20} />
        </span>
      </div>
      <p className="pl-2  font-normal text-black">{companyName}</p>
      <div className="w-full flex justify-between ">
        <p className="pl-2 text-black px-2 py-1 text-lg md:text-xl rounded-md w-3/4 truncate font-semibold">
          {jobRole}
        </p>
        <div className="w-10 h-10 bg-black rounded-full overflow-hidden ml-2">
          <img src={imageUrl} alt="Job" className="w-full h-full" />
        </div>
      </div>
      <div className='grid grid-cols-3 gap-x-3 gap-y-4'>
        {
            skills2.slice(0, 5).map((skill: string, index: number)=>(
                <div className='pl-3 pr-3 pt-1 pb-1 border-2 border-opacity-30 border-[#546e7a] rounded-xl text-black text-center hover:rounded-md ease-in-out duration-300 font-medium' key={index}>{skill}</div>
            ))
        }
        <div className='pl-3 pr-3 pt-1 pb-1 border-2 border-opacity-30 border-[#546e7a] rounded-xl  text-center hover:rounded-md ease-in-out duration-300 font-medium text-black'>{experience}</div>
      </div>
    </div>
    <div className="h-1/4 rounded-xl pl-4 pr-4 flex justify-between pt-7">
        <div>
            <div className='text-black dark:text-white font-semibold'>Rs. {salary || "N/D"}</div>
            <div className='text-gray-800 dark:text-gray-400'>{location}</div>
        </div>
            <div className='mt-2 transition-transform duration-500 transform hover:rotate-3 hover:cursor-pointer ease-in-out hover:ease-in-out'>
            <Link href={`jobs/${slug}`} prefetch={true}><span className='pl-6 pr-6 pt-3 pb-3 bg-black dark:bg-gray-200 rounded-2xl text-gray-200 dark:text-black font-medium'>Details</span></Link>
            </div>
    </div>
  </div>
  
  )
}

export default Card
