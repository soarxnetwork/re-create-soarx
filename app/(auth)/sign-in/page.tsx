import React from 'react'
import SigninForm from './_components/SigninForm'
interface SignInPageProps {
  searchParams: {
    callbackUrl: string
  }
}
const SignInPage = ({ searchParams }: SignInPageProps) => {
  return (
    <section className='space-y-12 py-4'>
      <h2>Sign in</h2>
      <SigninForm
        callbackUrl={searchParams.callbackUrl}
      />
    </section>)
}

export default SignInPage