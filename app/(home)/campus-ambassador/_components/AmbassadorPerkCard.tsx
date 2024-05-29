import React from 'react'
import { PiHandshakeLight } from 'react-icons/pi'


function AmbassadorPerkCard({title , description} : {title: string, description: string} ) {
  return (
    <div className="bg-[#FAF0F1] rounded-sm flex flex-col p-4 gap-y-2 hover:cursor-pointer dark:bg-gray-800 w-fit sm:w-auto">
          <div className="flex gap-x-2">
            <p className="text-3xl">
              <PiHandshakeLight />
            </p>
            <p className="lg:text-2xl text-lg font-medium">{title}</p>
          </div>
          <p className="text-xs pl-2 md:pl-0 font-light">
            {description}
          </p>
        </div>
  )
}

export default AmbassadorPerkCard