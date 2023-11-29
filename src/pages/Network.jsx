import React, { useState } from 'react'
import Friendrequest from '../components/Friendrequest';
import Friends from '../components/Friends';
import Sendrequest from '../components/Sendrequest';

const Network = () => {
    let [req,setReq]=useState(true);
    let [sent,setsent]=useState(false);
   
  return (
    <>
    <div className='w-full flex'>
    <div className='w-1/5'>
        <div className='mx-auto mt-5 w-4/5 h-8  box-border px-3 border-b border-solid border-sky-300'>
            <h2 className='font-main-font font-medium text-lg uppercase inline-block'>Connections</h2>
        </div>
        <div className='mx-auto  w-4/5 h-8  box-border px-3 border-b border-solid border-sky-300'>
            <h2 className='font-main-font font-medium text-lg uppercase inline-block'>My Groups</h2>
        </div>
        <div className='mx-auto  w-4/5 h-8  box-border px-3 border-b border-solid border-sky-300'>
            <h2 className='font-main-font font-medium text-lg uppercase inline-block'>Groups</h2>
        </div>
        <div className='mx-auto  w-4/5 h-8  box-border px-3 border-b border-solid border-sky-300'>
            <h2 className='font-main-font font-medium text-lg uppercase inline-block'>Pages</h2>
        </div>
    </div>

    <div className="w-3/5 mt-4">
        <div className="w-full text-center h-12 border border-solid border-gray-500 ">
           
            {req? 
             <button onClick={()=>{setReq(true),setsent(false)}} className='h-full w-1/2 py-2 mx-auto bg-sky-800 font-main-font font-medium text-white' >Receive</button>
            :
            <button onClick={()=>{setReq(true),setsent(false)}} className='h-full w-1/2 py-2 mx-auto bg-sky-100 font-main-font font-medium' >Receive</button>
            }
            {sent? 
             <button onClick={()=>{setReq(false),setsent(true)}} className='h-full w-1/2 py-2 mx-auto bg-sky-800 font-main-font font-medium text-white' >Send</button>
            :
            <button onClick={()=>{setReq(false),setsent(true)}} className='h-full w-1/2 py-2 mx-auto bg-sky-100 font-main-font font-medium' >Send</button>
            }
        </div>
        <div className='h-[1px] w-full my-10 bg-sky-800' ></div>
        <div className="w-full h-96 border-b border-solid border-gray-300">
        {req && <Friendrequest/>}
        {sent && <Sendrequest />}
        </div>
        <div className="w-full h-96 border-b border-solid border-gray-300">
            <h3 className=' font-main-font font-semibold text-lg text-sky-400 text-center'>Find More People</h3>
        <Friends/>
        </div>
    </div>
    </div>
    </>
  )
}

export default Network