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
          <div className="space-x-2">
            <Link href="/profile">
              Profile
            </Link>
            <button
              onClick={() => signOut()}
            >Logout</button>
          </div>
        </>

      ) :
        <>
          <div className="space-x-2">

            <Link href="/sign-in" className='signInbut'>Sign in</Link>
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