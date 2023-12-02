import React, {useState, useEffect} from 'react'
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useSelector, useDispatch, } from 'react-redux';
import { Link , useNavigate } from 'react-router-dom'
import Image from '../components/Image';
import cover from '../assets/cover.jpg'
import { CiEdit } from "react-icons/ci";
import { FaLocationArrow } from "react-icons/fa6";

const Edit = () => {
  let navigate = useNavigate();
  let data = useSelector (state=>(state.active.value));
  let userdata = useSelector((state)=>(state.active.value));
  let dispatch = useDispatch()
  const auth = getAuth();
  let [userabout,setUserabout]=useState({
    bio:"",
    location:"",
    about:"",
  })


let handleinfo=(e)=>{
  setUserabout({
    ...userabout,
    [e.target.name]:e.target.value

  })

}



  return (
    <>
    <div className='w-4/5  bg-slate-300 mx-auto my-5'>
    <div className="w-full h-[200px] relative">
      <Image classname={"object-cover object-center w-full h-full"} src={cover} alt={"cover"} />
      <button onClick={()=>{navigate("/setting")}} className='py-3 px-2 bg-slate-200 rounded-lg font-main-font text-black absolute top-3 right-3 flex w-32 justify-between'> <CiEdit /> Edit Profile </button>
    </div>
    <div className="w-full relative">
      <Image classname={"h-44 w-44 rounded-full object-cover absolute top-[-20%] left-11"} src={userdata.photoURL} />
      <h1 className=' mb-2 font-main-font font-bold text-3xl text-black ml-64 mt-6 '>{userdata.displayName}
      </h1>
      <input onChange={handleinfo} name='bio' placeholder='write your Bio ' className='rounded p-2 ml-64 font-main-font font-normal text-base w-2/4 ' type="text" />
      <input onChange={handleinfo} name='location' placeholder='Adress' className=' my-2 rounded p-2 ml-64 font-main-font font-normal text-base w-2/4 ' type="text" />
      <input onChange={handleinfo} name='about' placeholder='About You' className='rounded p-2 ml-64 font-main-font font-normal text-base w-2/4 ' type="text" />
     
      <button className='bg-sky-800 text-md text-white font-main-font font-semibold px-11 py-2 rounded-sm ml-64 my-3 uppercase hover:bg-sky-400 duration-300'>Save</button>
    </div>
   </div>
    </>
  )
}

export default Edit