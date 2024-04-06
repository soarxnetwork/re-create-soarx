import { activateUser } from '@/actions/user'
import { signIn } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'
interface ActivationPageProps {
  params: {
    id: string
  }
}
const ActivationPage = async (
  { params: { id } }: ActivationPageProps
) => {

  const result = await activateUser(id)

  const loginNow = () => {
    return (
      <Link href="/api/auth/signin">
        Login Now
      </Link>
    )
  }


  return (
    <section className='container'>
      {result === "User Not Exist" ? (
        <>
          <h1 className='text-red-500'>User Not Exist</h1>
          {loginNow()}
        </>
      ) : result === "User Already Activated" ? (
        <>
          <h1 className='text-red-500'>User Already Activated</h1>
          {loginNow()}
        </>
      ) : result === "User Activated" ? (
        <>
          <h1 className='text-green-500'>Success! User Activated</h1>
          {loginNow()}
        </>
      ) : <h1>Something went wrong!</h1>}
    </section>
  )
}

export default ActivationPage