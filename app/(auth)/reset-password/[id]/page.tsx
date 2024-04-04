import { activateUser } from '@/actions/user'
import { signIn } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'
import ResetPasswordForm from '../_components/ResetPasswordForm'
interface ResetPasswordProps {
  params: {
    id: string
  }
}
const ResetPassword = async (
  { params: { id } }: ResetPasswordProps
) => {

  if (!id) return <h1>Invalid Link</h1>

  return (
    <section className='container'>
      <ResetPasswordForm
        id={id}
      />
    </section>
  )
}

export default ResetPassword