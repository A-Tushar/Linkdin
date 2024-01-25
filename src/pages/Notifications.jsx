import React, { useState } from 'react';
import Image from '../components/Image';
import logo from '../assets/ex.png'

const Notifications = () => {



  return (
    <>
    <div className='mx-auto w-[650px] my-2 px-5 py-2 bg-slate-100'>
      <h2 className=' font-main-font font-extrabold text-2xl text-amber-950'>Notifications</h2>
    </div>
    <div className="mx-auto w-[650px] my-2 px-5 py-2 bg-slate-100">
      <div className="flex items-center gap-3">
            <Image src={logo} classname={'w-14 h-14 rounded-full'}/>
            <div className="">
            <h4 className=' font-main-font capitalize font-bold text-lg'> Parbej hasan</h4>
            <h4 className=' font-main-font capitalize font-medium text-lg'> sent you a friend Request </h4>
            </div>
      </div>

    </div>
    </>
  )
}

export default Notifications