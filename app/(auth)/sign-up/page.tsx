import React from 'react'
import SignupForm from './_components/SignupForm'
import { getAllUser } from '@/services/user'

const SignUpPage = async () => {

  const users = await getAllUser()

  return (
    <section className='space-y-12 py-4'>
      <h2>SignUpPage</h2>
      <SignupForm
        users={users!}
      />
    </section>
  )
}

export default SignUpPage