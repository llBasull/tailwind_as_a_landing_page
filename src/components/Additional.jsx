import React from 'react'
import tailwind from '../assets/tailwind.png'

const Additional = () => {
  return (
    <div className='w-full bg-white py-16 px-4 '>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img src={tailwind} alt="/" className=' md:w-[440px] mx-auto my-4 w-[360px]'/>
            <div className='flex flex-col justify-center'>
                <p className='text-blue-400 font-bold md:text-xl '>TAILWIND STYLING</p>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-1'>Style using Tailwind classes</h1>
                <p className='font-serif pt-1 '>Tailwind CSS can be used to style websites in the fastest and easiest way. Tailwind CSS is basically a utility-first CSS framework for rapidly building custom user interfaces. It is a highly customizable, low-level CSS framework that gives you all of the building blocks you need to build bespoke designs without any annoying opinionated styles you have to fight to override.</p>
                <button className='text-blue-200 bg-gray-800 w-[170px] md:w-[180px] mx-auto rounded-md font-bold my-4 py-2 md:py-3'>Getting Started</button>
            </div>
        </div>
    </div>
  )
}

export default Additional;