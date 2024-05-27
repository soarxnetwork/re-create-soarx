import React from 'react'
import { PiHandshakeLight } from 'react-icons/pi'


function AmbassadorPerkCard({title , description} : {title: string, description: string} ) {
  return (
    <div className="bg-[#FAF0F1] rounded-sm flex flex-col p-4 gap-y-2 hover:cursor-pointer dark:bg-gray-800">
          <div className="flex gap-x-2">
            <p className="text-3xl">
              <PiHandshakeLight />
            </p>
            <p className="text-2xl font-medium">{title}</p>
          </div>
          <p className="j text-xs font-light">
            {description}
          </p>
        </div>
  )
}

export default AmbassadorPerkCard