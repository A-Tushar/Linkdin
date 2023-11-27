import React, {useState, useEffect} from 'react'
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { toast , ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { logeduser } from '../slices/activeSlice';
import { useSelector, useDispatch, } from 'react-redux';
import { Link , useNavigate } from 'react-router-dom'
import Image from '../components/Image';
import cover from '../assets/cover.jpg'
import { CiEdit } from "react-icons/ci";
import { FaLocationArrow } from "react-icons/fa6";
import About from '../components/About';
import Profile from '../components/Profile';
import Friends from '../components/Friends';
import Edit from '../components/Edit';


const Home = () => {
  let userdata = useSelector((state)=>(state.active.value));
  let dispatch = useDispatch()
  const auth = getAuth();
  let [load,setload]= useState(false);
  let navigate = useNavigate();
  let data = useSelector (state=>(state.active.value));
  let [profile, setProfile]=useState(true)
  let [friend, setFriend]=useState(false)
  let [post, setPost]=useState(false)

      
  useEffect(()=>{
    if(!data){
      navigate("/login")
    }
    // console.log(userdata);
  },[]);

  let handleprofile =()=>{
    setProfile(true)
    setFriend(false)
    setPost(false)
  };
  let handlefriend =()=>{
    setFriend(true)
    setPost(false)
    setProfile(false)
  };
  let handlepost =()=>{
    setFriend(false)
    // setPost(true)
    setProfile(false)
    navigate("/feed")
    
  };

  return (
   <>
   <div className='w-4/5 h-96 bg-slate-300 mx-auto my-5'>
    <div className="w-full h-2/4 relative">
      <Image classname={"object-cover object-center w-full h-full"} src={cover} alt={"cover"} />
      <button onClick={()=>{navigate("/setting")}} className='py-3 px-2 bg-slate-200 rounded-lg font-main-font text-black absolute top-3 right-3 flex w-32 justify-between'> <CiEdit /> Edit Profile </button>
    </div>
    <div className="w-full h-2/4  relative">
      <Image classname={"h-44 w-44 rounded-full object-cover absolute top-[-20%] left-11"} src={userdata.photoURL} />
      <p className=' absolute top-0 right-40 font-serif font-normal text-xs flex'> <FaLocationArrow className='mr-2 text-red-500' />Location</p>
      <h1 className='font-main-font font-bold text-3xl text-black ml-64 mt-6 '>{userdata.displayName}
      </h1>
      <p className='ml-64 font-main-font font-normal text-base w-2/4 '>Freelance UX/UI designer, 80+ projects in web design, mobile apps  (iOS & android) and creative projects. Open to offers.</p>
      <button className='bg-sky-800 text-md text-white font-main-font font-semibold px-11 py-2 rounded-sm ml-64 my-3 uppercase hover:bg-sky-400 duration-300'> Contact INFO</button>
    </div>
   </div>
   <div className="flex justify-between bg-slate-600 w-4/5 h-10 mx-auto gap-1">
    {profile? 
    <button onClick={handleprofile} className=' w-1/3 py-2 px-12 bg-sky-800 font-main-font font-medium text-white'>PROFILE</button>
    :
    <button onClick={handleprofile} className=' w-1/3 py-2 px-12 bg-sky-100 font-main-font font-medium'>PROFILE</button>
    }

    {friend?
    <button onClick={handlefriend} className='w-1/3 py-2 px-12 text-white bg-sky-800 font-main-font font-medium'>Friends</button>
    :
    <button onClick={handlefriend} className='w-1/3 py-2 px-12 bg-sky-100 font-main-font font-medium'>Friends</button>
    }

    {post?
    <button onClick={handlepost} className='w-1/3 py-2 px-12 text-white bg-sky-800 font-main-font font-medium'>Posts</button>
    :
    <button onClick={handlepost} className='w-1/3 py-2 px-12 bg-sky-100 font-main-font font-medium'>Posts</button>
    }
   </div>
    {profile && <Profile/>}
    {friend && <Friends/>}
    {/* {post && <Friends/>} */}
   </>
  )
}

export default Home