import React from 'react'
import Image from './Image'
import logo from '../assets/ex.png'

const Education = () => {
  return (
   <>
    <div className="w-4/5 h-96 border-2  border-blue-200 rounded-sm overflow-y-scroll mx-auto m-3">
        <div className="w-full p-8 ">
        <h1 className='font-main-font  text-xl font-bold text-black pb-3 '>Education</h1>
        <div className=" w-full h-1/4 py-4 flex">
            <Image classname={"w-14 h-14 object-contain"} src={logo}/>
            <div className=" px-5">
            <h2 className='font-main-font font-bold text-lg text-black mb-2'>Moscow State Linguistic University</h2>
            <h3 className='font-main-font font-medium text-sm '>Bachelor's degree Field Of StudyComputer and Information Systems Security/Information Assurance</h3>
            <p className='font-main-font font-medium text-sm mb-2'>2013 — 2017</p>
            <p className='font-main-font font-medium text-sm '>Additional English classes and UX profile courses​.</p>
            </div>
        </div>
        </div>
    </div>
   </>
  )
}

export default Education