import React from 'react'
import astro1 from '../assets/astro1.jpeg'

const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img className='w-[500px] mx-auto my-4'src={astro1} alt="/" />
            <div className='flex flex-col justify-center'>
                <p className='text-[#00df9a] font-bold'>INTO THE COSMOS DASHBOARD</p>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Diving deeper into Astrophysics</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum quam libero optio quia perferendis, laboriosam a illum expedita, blanditiis, explicabo nemo modi. Est ad necessitatibus quibusdam! Eos nisi repudiandae nihil.</p>
            <button className='bg-black text-[#2cdda2] w-[200px] rounded-md font-medium mx-auto my-6 md:mx-0 py-6'>Get started</button>
            </div>
        </div>

    </div>
  )
}

export default Analytics
