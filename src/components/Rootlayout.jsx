import React from 'react'
import Registration from '../pages/Registration'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import Home from '../pages/Home'


const Rootlayout = () => {
  return (
    <>
    <div className='fixed w-full bg-white'><Navbar/></div>
    <div className='pt-[80px]'><Outlet/></div>
    </>
  )
}

export default Rootlayout