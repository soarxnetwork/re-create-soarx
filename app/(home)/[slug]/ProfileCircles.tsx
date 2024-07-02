import React from 'react';
import Image from 'next/image';

interface User {
    id: string;
    username: string | null;
    password: string | null;
    phone: string | null;
    email: string | null;
    image: string | null;
    
  }



const ProfileCircles = ({ users }:{users : User[]} ) => {
    
  return (
    <>
    <div className="flex -space-x-4">
      {users.slice(0, 5).map((user, index) => (
        <div
          key={user.id}
          className="relative w-10 h-10 rounded-full ring-2 ring-white overflow-hidden"
          style={{ zIndex: 5 - index }}
        >
          <Image src={user.image || ""} alt={user?.username || "pic"} height={40} width={40} className="object-cover w-full h-full" />
        </div>
      ))}
      
    </div>
    <div className=' pt-2'>

        
        {users[0]?.username}, {users[1]?.username} and {users.length - 2} others
    </div>
    </>
  );
};

export default ProfileCircles;
