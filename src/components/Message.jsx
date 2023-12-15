import React from 'react'
import { Button, TextInput } from 'flowbite-react';
import { BsEmojiGrin } from "react-icons/bs";


const Message = () => {
  return (
    <>
    <div className="h-[90%] border-b border-gray-300">
        <div className="w-full  flex py-10 border-b border-gray-600">
        <p className='font-main-font font-bold text-base pl-10 pr-5'>Chat With</p>
        <p className='font-main-font font-medium text-base'>Active 0 min ago</p>
        </div>

       <div className="mt-5 flex flex-col">
            <div className="">
                    <p className='my-[1px] inline-block mx-5  py-1 px-2 bg-sky-200 rounded-sm font-main-font font-medium text-base '>
                    hello</p>
            </div>
            <div className="flex justify-end">
                    <p className='my-[1px] inline-block mx-5  py-1 px-2 bg-sky-200 rounded-sm font-main-font font-medium text-base '>
                    hello</p>
            </div>
            <div className="">
                    <p className='my-[1px] inline-block mx-5  py-1 px-2 bg-sky-200 rounded-sm font-main-font font-medium text-base '>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, blanditiis.</p>
            </div>
        
       </div>
        
    </div>


    <div className=" mx-[5%] flex gap-x-2 py-2 items-center">
        <TextInput className=' w-4/5' type="text" />
        <BsEmojiGrin className='font-bold text-2xl text-sky-900' />
        <Button> Send</Button>
    </div>
    </>
  )
}

export default Message