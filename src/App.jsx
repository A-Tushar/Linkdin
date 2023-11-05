import { useState } from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './App.css'

import Registration from './pages/Registration.jsx';
import Login from './pages/Login.jsx'
import { ToastContainer, toast } from 'react-toastify';
import Home from './pages/Home.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Registration/>,
  },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/home",
    element: <Home/>,
  },
]);

function App() {
  

  return (
   <>
    <RouterProvider router={router} />
    <ToastContainer />
   </>
  )
}

export default App
