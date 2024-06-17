import React from 'react'
import astro4 from '../assets/astro4.jpeg'
import astro3 from '../assets/astro3.jpeg'
import astro2 from '../assets/asro2.jpeg'

const Cards = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-white'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
        <div className='w-full shadow-xl flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 bg-emerald-400'>
            <img className='w-20 mx-auto  bg-white' src={astro4} alt="/"/>
            <h2 className='text-2xl font-bold text-center py-8'>Zone-1 Ticket</h2>
            <p className='text-center text-4xl font-bold'>Rs 100</p>
            <div className='text-center font-medium'>
                <p className='py-2 border-b mx-8 mt-8'>Research area</p>
                <p className='py-2 border-b mx-8'>Meet-up</p>
                <p className='py-2 border-b mx-8'>laboratories</p>
            </div>
            
            <button className='bg-[#040505] w-[200px] rounded-md font-medium  my-6 mx-auto px-6 py-3 text-[#00df9a] '>Book</button>
        </div>
        <div className='w-full shadow-xl bg-gray-100 flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300 bg-teal-600'>
            <img className='w-20 mx-auto  bg-transparent' src={astro3} alt="/"/>
            <h2 className='text-2xl font-bold text-center py-8'>Zone-2 Ticket</h2>
            <p className='text-center text-4xl font-bold'>Rs 400</p>
            <div className='text-center font-medium'>
                <p className='py-2 border-b mx-8 mt-8'>Research area</p>
                <p className='py-2 border-b mx-8'>Rovers</p>
                <p className='py-2 border-b mx-8'>planet-zone</p>
            </div>
            <button className='bg-[#0d0e0e] w-[200px] rounded-md font-medium  my-6 mx-auto px-6 py-3 text-[#00df9a] '>Book</button>
        </div>
        <div className='w-full shadow-xl flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 bg-teal-400'>
            <img className='w-20 mx-auto  bg-white' src={astro2} alt="/"/>
            <h2 className='text-2xl font-bold text-center py-8'>Zone-3 Ticket</h2>
            <p className='text-center text-4xl font-bold'>Rs 700</p>
            <div className='text-center font-medium'>
                <p className='py-2 border-b mx-8 mt-8'>space-shuttle</p>
                <p className='py-2 border-b mx-8'>Zero-gravity-zone</p>
                <p className='py-2 border-b mx-8'>Hands-on session</p>
            </div>
            <button className='bg-[#0b0b0b] w-[200px] rounded-md font-medium  my-6 mx-auto px-6 py-3 text-[#00df9a] '>Book</button>
        </div>
      </div>
    </div>
  )
}

export default Cards
