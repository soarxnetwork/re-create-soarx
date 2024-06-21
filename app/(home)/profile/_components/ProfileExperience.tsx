import React from 'react'

function ProfileExperience() {
  return (
    <section className='shadow-lg pb-4'>
    <div className='border-b-3 border-[#D9D9D9] flex py-4 px-4 justify-between  '>
        <h3 className='text-[30px]  font-semibold'>Personal Experience</h3>
        <button className=''>
            <svg width="29" height="28" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_13_88)">
                <path d="M16.9892 10.5233L18.1008 11.5967L7.15333 22.1667H6.04167V21.0933L16.9892 10.5233ZM21.3392 3.5C21.0371 3.5 20.7229 3.61667 20.4933 3.83833L18.2821 5.97333L22.8133 10.3483L25.0246 8.21333C25.4958 7.75833 25.4958 7.02333 25.0246 6.56833L22.1971 3.83833C21.9554 3.605 21.6533 3.5 21.3392 3.5ZM16.9892 7.22167L3.625 20.125V24.5H8.15625L21.5204 11.5967L16.9892 7.22167Z" fill="#2F2F2F"/>
                </g>
                <defs>
                <clipPath id="clip0_13_88">
                <rect width="29" height="28" fill="white"/>
                </clipPath>
                </defs>
            </svg>
        </button>
    </div>


    <div>
        <div className='flex items-center justify-center '>
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
        </div>

    </div>
</section>
  )
}

export default ProfileExperience