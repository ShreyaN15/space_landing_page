import React from 'react'
import { ReactTyped } from "react-typed";

const Hero = () => {
  return (
    <div className='text-white'>
        <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
            <p className='text-[#2ad3a9] font-bold p-2 mt-12'>GET READY FOR AN ADVENTURE</p>
            <h1 className='md:text-7xl sm:text-6xl rext-4xl font-bold md:py-6'>Into the mysteries of universe </h1>
            <div className='flex justify-center items-center'>
                <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>Join us if you are  </p>
                <ReactTyped 
                className='md:text-5xl sm:text-4xl text-xl font-bold md: pl-4 pl-2'
                strings={['CURIOUS','IMAGINATIVE','PASSIONATE']} 
                typeSpeed={50} 
                backSpeed={60} 
                loop
                />
            </div>
            <p className='md:text-2xl text-xl font-bold text-gray-500'>Explore the cosmos to expand knowledge, spark curiosity, engage in hands-on learning, and connect with like-minded enthusiasts.</p>
            <button className='bg-[#2cdda2] w-[200px] rounded-md font-medium mx-auto my-6 py-6 text-black '>Get Started</button>
        </div>
    </div>
  )
}

export default Hero
