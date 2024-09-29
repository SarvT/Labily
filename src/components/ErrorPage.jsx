import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'


export default function ErrorPage() {
    const navigate = useNavigate();
  return (
    <div className='min-h-screen flex flex-col justify-center text-center p-6 bg-red-700 text-white'>
      <h3 className='text-3xl font-black'>Error!</h3>
      <h2  className='text-2xl'>Page not found</h2>
      <p>You are seeing this page because the address you entered is not correct, please revisit us.</p>
      <button onClick={()=>navigate('/home')} className='mx-auto m-2 rounded-lg p-2 px-4 font-thin w-fit shadow-inner hover:shadow-xl bg-green-700 duration-250' >Click here</button>
    </div>
  )
}
