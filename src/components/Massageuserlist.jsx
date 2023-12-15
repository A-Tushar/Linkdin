import React from 'react'
import Image from './Image'
import bg from '../assets/cover.jpg'

const Massageuserlist = () => {
  return (
    <div className='w-96 h-full mx-auto overflow-y-scroll'>

    <div className="w-full my-3 py-2 border-b border-gray-300 h-auto flex gap-x-2">
                <Image classname={'w-14 h-14 rounded-full object-cover'} src={bg}/>
                <div>
                    <h4 className='font-main-font font-bold text-lg text-blue-900 '>Abdur Rahman</h4>
                    <p className='font-main-font font-medium text-base '>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid, quia.</p>
                </div>
            </div>
    </div>
  )
}

export default Massageuserlist