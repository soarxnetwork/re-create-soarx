import React from 'react'

function SummaryForm({handleShowForm}:{handleShowForm:()=>void}) {
  return (
    <div className='z-[200px] fixed inset-0 flex justify-center items-center bg-black bg-opacity-50'>
        <div className='max-w-[725px] shadow bg-white z-[200px]'>
            <div className='flex justify-between items-center border-b-[6px] border-[#D9D9D9] py-4 px-6 '>
                <h1 className='text-[30px] font-semibold '>Summary </h1>
                <button className=' px-4' onClick={handleShowForm}> 
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 19L19 1M1 1L19 19" stroke="#636363" stroke-width="1.5" stroke-linecap="round"/>
                        </svg>
                </button>
            </div>
            <div className='mb-4 px-6 pt-2'>
                <p className=''>Tell us about your years of experience, industry, or skills. People also talk about their achievements or previous job experiences.</p>
                <textarea className='w-full h-[150px] border-[1px] border-[#837E7E] mt-4 rounded-sm p-4' placeholder='Write here...'></textarea>
                <p className='text-right'>0/2000</p>
            </div>
            <div className='text-right px-10 py-4 bg-[#E3DDDD]'>
            <button className='signInbut min-w-[90px] font-semibold mx-auto'>Save</button>
            </div>
        </div>
    </div>
  )
}

export default SummaryForm