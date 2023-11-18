import React from 'react'
import Image from './Image'
import p from '../assets/cover.jpg'

const Project = () => {
  return (
    <>
    <div className="w-4/5 mx-auto py-3">
        <div className="w-full p-8 border-2  border-blue-200 rounded-sm">
        <h1 className='font-main-font  text-xl font-bold text-black pb-3 '>Projects</h1>
        <div className="h-[355px] w-full flex gap-2 flex-wrap box-border overflow-y-scroll ">
            <Image classname={"h-4/5 w-[30%] object-cover "} src={p}/>
            <Image classname={"h-4/5 w-[30%] object-cover "} src={p}/>
            <Image classname={"h-4/5 w-[30%] object-cover "} src={p}/>
        </div>
        </div>
    </div>
    </>
  )
}

export default Project