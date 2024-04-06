"use client"
import { authOptions } from "@/lib/next-auth";
import { getServerSession } from 'next-auth'
import { useSession } from "next-auth/react";
import { notFound, redirect } from 'next/navigation'
import React from 'react'

const ProfilePage = () => {
  const { data: session } = useSession()
  if (!session?.user) return redirect('/sign-in')
  return (
    <section className="container pt-avoid-nav">
      <div>{session?.user.email}</div>
      <div>{session?.user.username}</div>
      <div>{session?.user.id}</div>
    </section>
  )
}

export default ProfilePage