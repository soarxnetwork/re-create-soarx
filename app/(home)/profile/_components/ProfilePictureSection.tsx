"use client"
import React , {useState} from 'react'
import Image from 'next/image'
import ProfileForm from './_sub_components/ProfileForm';
import { useSession } from "next-auth/react";



function ProfilePictureSection() {
    const [showForm, setShowForm] = useState(false);
    const handleShowForm = () => {
        setShowForm(!showForm);
    }
    const { data: session } = useSession();
  return (
    <section className='shadow-lg pb-16 pt-4'>
        <div className='h-[160px] py-2 bg-[#D9D9D9]'>
                <div className='flex'>
                <button className='  ml-auto px-4'>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M18.8969 3.16575C19.0892 3.45687 19.0571 3.85248 18.8008 4.10876L9.60845 13.3011C9.51422 13.3954 9.39659 13.4628 9.26766 13.4965L5.43923 14.4965C5.31437 14.5291 5.18566 14.5284 5.06473 14.4976C4.93616 14.4649 4.81639 14.3982 4.71937 14.3011C4.5311 14.1129 4.45676 13.8389 4.52405 13.5813L5.52405 9.75284C5.55351 9.64003 5.60881 9.52861 5.68529 9.44121L14.9117 0.21967C14.9925 0.138906 15.0898 0.0784602 15.1957 0.0416313C15.2742 0.0143243 15.3574 0 15.4421 0C15.641 0 15.8318 0.0790175 15.9724 0.21967L18.8008 3.0481C18.8374 3.08471 18.8695 3.12416 18.8969 3.16575ZM17.2098 3.57843L15.4421 1.81066L6.92391 10.3288L6.29893 12.7216L8.69169 12.0966L17.2098 3.57843Z" fill="black"/>
                    <path d="M17.0834 14.9103C17.3568 12.5727 17.4438 10.2188 17.3444 7.87079C17.3397 7.75837 17.3819 7.64898 17.4615 7.56942L18.4448 6.58609C18.5657 6.46519 18.7723 6.54194 18.7836 6.71254C18.9685 9.50219 18.8984 12.3045 18.5733 15.0846C18.3367 17.1071 16.7124 18.6921 14.7003 18.917C11.2338 19.3044 7.65042 19.3044 4.18385 18.917C2.17179 18.6921 0.547457 17.1071 0.310903 15.0846C-0.103634 11.5403 -0.103635 7.95973 0.310903 4.41543C0.547456 2.3929 2.17179 0.807889 4.18385 0.583012C6.8136 0.289099 9.51054 0.218149 12.1727 0.370161C12.3443 0.379958 12.4225 0.587575 12.301 0.709093L11.3084 1.70165C11.2298 1.78034 11.1218 1.82261 11.0106 1.81885C8.78419 1.74376 6.54263 1.82872 4.35046 2.07373C3.02035 2.22239 1.95486 3.272 1.80075 4.58968C1.39975 8.01821 1.39975 11.4818 1.80075 14.9103C1.95486 16.228 3.02035 17.2776 4.35046 17.4263C7.70631 17.8013 11.1779 17.8013 14.5337 17.4263C15.8638 17.2776 16.9293 16.228 17.0834 14.9103Z" fill="black"/>
                    </svg>

                </button>
                </div>

        </div>

        <div className=' flex justify-between px-16 border-b-3 border-[#D9D9D9] '>
            <div className=' -mt-[4.5%] '>
                <div className=''>
                    <Image src='https://s3-alpha-sig.figma.com/img/3313/bbd4/28245edd506190822cece4ec8d515a1c?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UW-6pRHIcueEv2-bQrRgAS8zObv8B52eOVptfq-bfBg5z9oJ1S0506ksgNZmrbBCsCMyA7KFgyf92raNAFGo4TwxAt4~UgsijymbgEy77Wvlzh3x242Bmk-AqBqaAWExPoKW0N6w5NgnN-~jCfl9~qpmPjAmULLewgEN0HIlU5q54pS1c4q6lRN~dbTtzy~NVkcZwBflJdQi6QirvwxaoqJtjr5rYFfB6-KgJiwPv98wEaqvd~ppXYZ1bhuzfLBrBhRpo8pEZJQtN1o2vNG3WxLlyIKRCzKwJXgTG-RRmlyey11Dha2hKO1Wrzd3Lmau3HEb-2Yp4x1wKoUM-v~9tA__' width={100} height={100} alt = {"profileDP"} className='rounded-full' />
                </div>
                <div className=' pb-4 mt-8  '>
                    <div className='font-semibold text-[20px]'>
                        {session?.user.username ? session?.user.username : 'No Username'}
                    </div>
                    <div>
                        {session?.user.profession ? session?.user.profession : 'No Profession'}
                    </div>
                </div>
            </div>
            <div className='py-6 -mr-8  '>
                <button className='' onClick={handleShowForm}>
                <svg width="43" height="40" viewBox="0 0 43 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_0_14)">
                <path d="M25.1908 15.0333L26.8392 16.5667L10.6067 31.6667H8.95833V30.1333L25.1908 15.0333ZM31.6408 5C31.1929 5 30.7271 5.16667 30.3867 5.48333L27.1079 8.53333L33.8267 14.7833L37.1054 11.7333C37.8042 11.0833 37.8042 10.0333 37.1054 9.38333L32.9129 5.48333C32.5546 5.15 32.1067 5 31.6408 5ZM25.1908 10.3167L5.375 28.75V35H12.0938L31.9096 16.5667L25.1908 10.3167Z" fill="#2F2F2F"/>
                </g>
                <defs>
                <clipPath id="clip0_0_14">
                <rect width="43" height="40" fill="white"/>
                </clipPath>
                </defs>
                </svg>
                </button>
            </div>
        </div>
        <div className='flex w-full justify-between px-16'>
            <div className='text-[14px]  '>
                 Email ID (Private to you) 
                <span className=' ml-2 text-[#8D00FF]'>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className='  inline'>
                        <g clip-path="url(#clip0_2_16)">
                        <path d="M6 0.916672C3.24 0.916672 1 2.97001 1 5.5C1 8.03 3.24 10.0833 6 10.0833C8.76 10.0833 11 8.03 11 5.5C11 2.97001 8.76 0.916672 6 0.916672ZM6 9.16667C3.795 9.16667 2 7.52125 2 5.5C2 3.47875 3.795 1.83334 6 1.83334C8.205 1.83334 10 3.47875 10 5.5C10 7.52125 8.205 9.16667 6 9.16667ZM8.295 3.47417L5 6.49459L3.705 5.31209L3 5.95834L5 7.79167L9 4.12501L8.295 3.47417Z" fill="#8D00FF"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_2_16">
                        <rect width="12" height="11" fill="white"/>
                        </clipPath>
                        </defs>
                        
                    </svg>
                Verified
                </span>
                <div>
                    {session?.user.email!}    
                </div>
            </div>
            <div className=' '>

                <div>
                    Mobile Number (Private to you) 
                    <span className='ml-4 text-[#8D00FF]'>
                        Verify Now
                    </span> 
                </div>

                <div>
                {session?.user.phone ? session?.user.phone : 'No Phone Number'}
                </div>

            </div>
        </div>

        <div className='px-16 flex items-center justify-start space-x-10 mt-8'>
            <button className='bg-transparent text-[#7C0AD8] border-[#7C0AD8] border-1 rounded-xl px-10 py-2 font-semibold '> Download as Resume</button>
            <button className='signInbut min-w-[180px] font-semibold'>Share Profile</button>
        </div>
        {showForm && 
                <ProfileForm 
               
                handleShowForm={handleShowForm}
                profession={session?.user.profession}
                email={session?.user.email!}
                id={session?.user.id!}
                gender={session?.user?.gender }
                username={session?.user.username!}
                phone={session?.user.phone}
                city={session?.user.city}
                country={session?.user.country}
                pincode={session?.user.pincode}
                 />}
    </section>
  )
}

export default ProfilePictureSection