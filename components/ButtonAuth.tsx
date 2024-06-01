"use client"
import React from 'react'
import { signIn, signOut, useSession } from 'next-auth/react'
import Link from 'next/link'
const ButtonAuth = () => {
  const { data: session } = useSession()
  return (
    <>
      {session?.user ? (
        <>
          <div className="flex md:flex-row flex-col  md:items-center md:gap-x-4">
            <Link href="/profile" className='pl-2'>
              Profile
            </Link>
            <button
            className='mt-5 md:mt-0 ml-2 mb-3 signInbut duration-300 text-black ease-in-out md:mb-0 p-2 rounded-lg font-medium'
              onClick={() => signOut()}
            >Logout</button>
          </div>
        </>

      ) :
        <>
          <div className="space-x-2 mb-3 md:mb-0">

            <Link href="/sign-in" className='signInbut bg-purple-900'>Sign In</Link>
            {/* <Link href="/api/auth/signin">Login</Link> */}
            {/* <button onClick={() => signIn()}>Login Nextauth</button> */}
          </div>
          {/* <Link href="/sign-in">Login</Link> */}
        </>
      }
    </>
  )
}

export default ButtonAuth