import HeadingSecondDsa from '@/app/(home)/campus-ambassador/_components/HeadingSecondDsa'
import React from 'react'
import { CiBatteryEmpty } from 'react-icons/ci'

interface TemporaryEmptyEventsProps {
  text: string
}

const TemporaryEmptyEvents = (
  { text }: TemporaryEmptyEventsProps
) => {
  return (
    <div className="container pt-24  flex justify-center gap-4">
      <HeadingSecondDsa text={text} />
      <CiBatteryEmpty size="40" />
    </div>
  )
}

export default TemporaryEmptyEvents