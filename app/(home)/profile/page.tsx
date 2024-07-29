"use client"

import { useSession } from "next-auth/react";
import { notFound, redirect } from 'next/navigation'
import React from 'react'
import ProfileSection from "./_components/ProfileSection";

const ProfilePage = () => {
  const { data: session } = useSession()
  if (!session?.user) return redirect('/sign-in')

  return (
    <section className="overflow-hidden">

      {/* <FormProfile
        id={session?.user.id!}
        email={session?.user.email!}
        username={session?.user.username!}
        image={session?.user.image!}
        phone={session?.user.phone}
        city={session?.user.city}
        collegeName={session?.user.collegeName}
        degree={session?.user.degree}
        dob={session?.user.dob}
        name={session?.user.name}
        skill={session?.user.skill}
        stream={session?.user.stream}
        yearOfPassing={session?.user.yearOfPassing}

      /> */}

      
      <ProfileSection />
    </section>
  )
}

export default ProfilePage