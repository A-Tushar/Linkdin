import React from 'react'
import Registration from '../pages/Registration'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import Home from '../pages/Home'


const Rootlayout = () => {
  return (
    <>
    <Navbar/>
    <Outlet/>
    </>
  )
}

export default Rootlayout