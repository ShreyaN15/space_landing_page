import React from 'react'
import {
    FaDribbbleSquare,
    FaFacebook,
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagram,
    FaTwitterSquare,

}from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
      <div>
      <h1 className='w-full text-3xl font-bold text-[#00df9a]'>REACT</h1>
      <p className='py-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum quos voluptas rerum ducimus totam obcaecati omnis velit, in id voluptates repudiandae ipsam eligendi aspernatur ullam ipsum ipsa architecto eaque aperiam.</p>
      <div className='flex justify-between md:w-[75%] my-6'>
        <FaDribbbleSquare/>
        <FaFacebook/>
        <FaFacebookSquare/>
        <FaGithubSquare/>
        <FaInstagram/>
        <FaTwitterSquare/>

      </div>
      </div>
      <div className='lg:col-span-2 flex justify-between mt-6'>
        <div>
            <h6 className='font-medium text-grey-400'>features</h6>
            <ul>
                <li className='py-2 text-sm'>Research</li>
                <li className='py-2 text-sm'>Labs</li>
                <li className='py-2 text-sm'>Astrophysics</li>
            </ul>
        </div>
        <div>
            <h6 className='font-medium text-grey-400'>Support</h6>
            <ul>
                <li className='py-2 text-sm'>Pricing</li>
                <li className='py-2 text-sm'>Documentation</li>
                <li className='py-2 text-sm'>Guides</li>
            </ul>
        </div>
        <div>
            <h6 className='font-medium text-grey-400'>legal</h6>
            <ul>
                <li className='py-2 text-sm'>Claims</li>
                <li className='py-2 text-sm'>policy</li>
                <li className='py-2 text-sm'>Terms</li>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer
