import { useState } from 'react'
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

import './App.css'

import Registration from './pages/Registration.jsx';
import Login from './pages/Login.jsx'
import { ToastContainer, toast } from 'react-toastify';
import Home from './pages/Home.jsx';
import Rootlayout from './components/Rootlayout.jsx';
import Feed from './pages/Feed.jsx';



const router = createBrowserRouter(
  createRoutesFromElements(
   <Route>
      <Route
      path="/"
      element={<Registration />}
      />
      <Route
      path="/login"
      element={<Login />}
      />
      <Route
      path="/"
      element={<Rootlayout />}
      > 
          <Route
            path="/home"
            element={<Home />}
          />
          <Route
            path="/feed"
            element={<Feed />}
          />
      </Route>
   </Route>
  )
);

function App() {
  

  return (
   <>
    <RouterProvider router={router} />
    <ToastContainer />
   </>
  )
}

export default App
