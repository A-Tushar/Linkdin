import React, { useState, useRef } from 'react'
import { CiImageOn } from "react-icons/ci";

const Postbox = () => {

    const fileInputRef = useRef(null);
    const handleButtonClick = () => {
        fileInputRef.current.click();
      };

  return (
   <>
   <div className="w-full  border border-sky-200 rounded-md">
    <div className='w-full h-12 p-10 font-main-font font-bold text-xl'>
        <h4>Create a Post </h4>
    </div>
    <div className='p-5 flex items-center gap-3 '>
        <input className='focus:outline-none border-none p-7 w-3/4' type="text" placeholder='What’s on your mind?' />
        <CiImageOn onClick={handleButtonClick} className='font-black text-5xl ' />
        <input ref={fileInputRef} className='hidden' type="file" />
        <button
       className='border-2 border-solid text-white bg-sky-800 rounded-xl text-center box-border hover:bg-sky-400 duration-300 px-5 py-2 '>Post</button>
    </div>
   </div>
   </>
  )
}

export default Postbox