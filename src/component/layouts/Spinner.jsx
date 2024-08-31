import React from 'react'
import spinner from './assests/spinner.gif'
export default function Spinner() {
  return (
    <div>
      <img src={spinner} width={180} className='text-center mx-auto'  alt="spinner....." />
    </div>
  )
}

