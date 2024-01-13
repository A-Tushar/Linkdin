import React, { useState } from 'react'
import Friendrequest from '../components/Friendrequest';
import Friends from '../components/Friends';
import Sendrequest from '../components/Sendrequest';
import { Sidebar } from 'flowbite-react';
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const Network = () => {
    let [req,setReq]=useState(true);
    let [sent,setsent]=useState(false);
   
  return (
    <>
    <div className='w-full flex'>
    <div className='w-1/5'>
       
    <Sidebar aria-label="Default sidebar example">
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Link to={"/feed"}>
             <Sidebar.Item  icon={HiChartPie}>
            Newsfeed 
          </Sidebar.Item>
          </Link>
         
          <Sidebar.Item  onClick={()=>{setReq(true),setsent(false)}} icon={HiViewBoards} label="Pro" labelColor="dark">
            Requests
          </Sidebar.Item>
          <Link to={"/chat"}>
          <Sidebar.Item  icon={HiInbox} label="3">
            Inbox
          </Sidebar.Item>
          </Link>
          <Link to={"/home"}>
          <Sidebar.Item  icon={HiUser}>
            Users
          </Sidebar.Item>
          </Link>
          
          
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>

    </div>

    <div className="w-3/5 mt-4">
        <div className="w-full text-center h-12 border border-solid border-gray-500 ">
           
            {req? 
             <button onClick={()=>{setReq(true),setsent(false)}} className='h-full w-1/2 py-2 mx-auto bg-sky-800 font-main-font font-medium text-white' >Receive Requests</button>
            :
            <button onClick={()=>{setReq(true),setsent(false)}} className='h-full w-1/2 py-2 mx-auto bg-sky-100 font-main-font font-medium' >Receive Requests</button>
            }
            {sent? 
             <button onClick={()=>{setReq(false),setsent(true)}} className='h-full w-1/2 py-2 mx-auto bg-sky-800 font-main-font font-medium text-white' >Send Requests</button>
            :
            <button onClick={()=>{setReq(false),setsent(true)}} className='h-full w-1/2 py-2 mx-auto bg-sky-100 font-main-font font-medium' >Send Requests</button>
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