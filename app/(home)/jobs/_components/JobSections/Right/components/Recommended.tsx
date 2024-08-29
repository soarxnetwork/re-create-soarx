import React from 'react'
import { ImLastfm } from 'react-icons/im'

const Recommended = () => {
  return (
    <div>
      <h1>Recommended Jobs</h1>
      <div className='flex gap-x-4'>
        <span>Sorted by: </span>
        <span>Last updated</span>
        <ImLastfm />
      </div>
    </div>
  )
}

export default Recommended
