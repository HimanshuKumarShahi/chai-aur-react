import React from 'react'
import { useParams } from 'react-router'

function User() {
    const {Userid}=useParams()
  return (
    <div className='bg-blue-400 p-6 m-6 text-white text-2xl flex justify-center'>User:{Userid}</div>
  )
}

export default User