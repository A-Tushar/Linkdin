import React from 'react'
import Image from './Image'
import logo from '../assets/ex.png'
import { Button, Modal } from 'flowbite-react';

const Experience = () => {
  return (
  <>
  <div className="w-4/5 h-96 border-2  border-blue-200 rounded-sm overflow-y-scroll mx-auto m-3">
        <div className=" relative w-full p-8 ">
        <Button className=' absolute top-3 right-3' onClick={() => setOpenModal(true)}>Add Experience</Button>
        <h1 className='font-main-font  text-xl font-bold text-black pb-3 '>Exprience</h1>
        <div className=" w-full h-1/4 py-4 flex">
            <Image classname={"w-14 h-14 object-contain"} src={logo}/>
            <div className=" px-5">
            <h2 className='font-main-font font-bold text-lg text-black mb-2'>UX/UI designer</h2>
            <h3 className='font-main-font font-medium text-sm '>Upwork International</h3>
            <p className='font-main-font font-medium text-sm mb-2'>Jun 2019 — Present</p>
            <p className='font-main-font font-medium text-sm '>New experience with Upwork system. Work in next areas: UX/UI design, graphic design, interaction design, UX research.</p>
            </div>
        </div>
        <div className=" w-full h-1/4 py-4 flex">
            <Image classname={"w-14 h-14 object-contain"} src={logo}/>
            <div className=" px-5">
            <h2 className='font-main-font font-bold text-lg text-black mb-2'>UX/UI designer</h2>
            <h3 className='font-main-font font-medium text-sm '>Upwork International</h3>
            <p className='font-main-font font-medium text-sm mb-2'>Jun 2019 — Present</p>
            <p className='font-main-font font-medium text-sm '>New experience with Upwork system. Work in next areas: UX/UI design, graphic design, interaction design, UX research.</p>
            </div>
        </div>
        </div>
    </div>
  </>
  )
}

export default Experience