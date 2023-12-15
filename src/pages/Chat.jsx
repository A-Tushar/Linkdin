import React from 'react'
import Massageuserlist from '../components/Massageuserlist'
import Message from '../components/Message'

const Chat = () => {
  return (
   <>
   <div className='flex justify-between mx-10 my-10'>
    <div className='w-3/12 h-[600px]  border border-gray-100 rounded-xl shadow-xl overflow-hidden'>
    <div className=" mx-auto w-72 text-lg font-semibold font-main-font text-left py-5 border-b border-gray-400 box-border">
            Chats
        </div>
      <Massageuserlist/>
    </div>
    <div className='w-[72%] h-[85vh] shadow-2xl'>
      <Message/>
    </div>
   </div>
   </>
  )
}

export default Chat