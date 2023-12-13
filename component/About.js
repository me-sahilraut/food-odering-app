import React from 'react'
import user from '../user.jpeg'
const About = () => {
  return (
    <div className='flex justify-center'>
      <div className='shadow-lg w-[20%]  mt-10 bg-gray-300 rounded-lg'>
        <img src={user} alt='' className='w-full  p-2 rounded-md' />
        <h1 className='font-medium'><span className='font-bold p-2 text-lg'>Name:-</span>Sahil Raut</h1>
        <h1 className='font-medium'><span className='font-bold p-2 text-lg'>Location:-</span>Nagpur</h1>
      </div>
    </div>
  )
}

export default About
