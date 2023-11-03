import { useState } from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './App.css'
import Registration from './pages/Registration.jsx';
import Login from './pages/Login.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Registration/>,
  },
  {
    path: "/login",
    element: <Login/>,
  },
]);

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
