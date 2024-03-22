import React from 'react'
import { FaUsers } from 'react-icons/fa';
import { BsBuilding } from 'react-icons/bs';
import { BsMap } from 'react-icons/bs';
function NumbersThatMatter() {
  return (
    <div className=' px-24'>
        <h1 className='text-[80px] font-bold w-full text-center'>Numbers That Matter</h1>
        <div className='flex px-10 pt-24'>
            <div className='text-[45px] font-bold w-full text-center hover:bg-[#9241d40d] rounded-3xl py-16'>
            <FaUsers  className='text-[50px] mx-auto mb-4'  />
            <p className='mb-4'>5000+</p>
            <p className='text-[20px]'> Members</p>
            </div>
            <div className='text-[45px] font-bold w-full text-center hover:bg-[#9241d40d] rounded-3xl py-16'>
            <BsBuilding  className='text-[50px] mx-auto mb-4'   />
            <p className='mb-4'>90+</p>
            <p className='text-[20px]'> Colleges</p>
            </div>
            <div className='text-[45px] font-bold w-full text-center hover:bg-[#9241d40d] rounded-3xl py-16'>
            <BsMap className='text-[50px] mx-auto mb-4'  />
             <p className='mb-4'>80+</p>
            <p className='text-[20px]'> Cities</p>
            </div>
        </div>
    </div>
  )
}

export default NumbersThatMatter