"use client"
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
interface SigninGoogleProps {
  isPending: boolean;

}
const SigninGoogle = (
  {
    isPending
  }: SigninGoogleProps
) => {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  const signInWithGoogle = async () => {
    try {
      setIsLoading(true)
      await signIn("google")
      router.push("/profile")
    } catch (err) {
      console.error(err)
      throw err
    } finally {
      setIsLoading(false)
    }
  }
  return (
    <button type="button" disabled={isPending || isLoading}
      onClick={signInWithGoogle}
    >
      {isLoading ? "Loading..." : "Sign in with Google"}
    </button>
  )
}

export default SigninGoogle