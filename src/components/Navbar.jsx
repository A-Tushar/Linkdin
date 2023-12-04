import logo from '../assets/Logo.png'
import Image from './Image'
import React, {useState, useEffect} from 'react'
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { getDatabase, ref,onValue, set,push,remove } from "firebase/database";
import { toast , ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { logeduser } from '../slices/activeSlice';
import { useSelector, useDispatch, } from 'react-redux';
import { Link , useNavigate } from 'react-router-dom'
import { FaNewspaper,FaUserFriends } from "react-icons/fa";
import { BiSolidChat } from "react-icons/bi";
import { IoNotifications } from "react-icons/io5";






const Navbar = () => {
  // const db = getDatabase();
  let dispatch = useDispatch()
  let userdata = useSelector((state)=>(state.active.value));
  const auth = getAuth();
  let [load,setload]= useState(false);
  let navigate = useNavigate();
  let data = useSelector (state=>(state.active.value));
  // let [user,setUser]=useState([]);
      
  useEffect(()=>{
    if(!data){
      navigate("/login")
    }
  },[])

  // useEffect(()=>{

  //   const userRef = ref(db, 'users');
  //   onValue(userRef, (snapshot) => {
  //   let arr=[]
  //   snapshot.forEach(item=>{
  //     if(data.uid = item.key){
  //       arr.push({...item.val(), userid:item.key});
  //     }
  //   })
  //   setUser(arr);
  //   });
  //   },[]);

  let handlelogout = ()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
      toast.success('LogOut Succesfull !', {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
        setTimeout(() => {
          localStorage.removeItem("user")
          dispatch(logeduser(null))
          navigate("/login")

        }, 1000);
    }).catch((error) => {
      toast.error(' Error !', {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    });
  };

  let handlehome=()=>{
    navigate("/home")
  };
  let handlepost =()=>{
    navigate("/feed")
    
  };
  let handlenetwork =()=>{
    navigate("/network")
    
  };

  return (
   <>
   <div className=" static w-100% h-20 border-solid flex justify-between items-center border-b border-b-slate-500">
    <div className="h-20 w-1/2 p-5 text-left box-border flex">
      <div onClick={handlehome} className='inline-block w-1/5' > 
      <Image classname={'cursor-pointer'} src={logo} alt={"logo"} />
      </div>

    <div className="w-4/5 flex justify-between">
      <div onClick={handlepost} className='cursor-pointer box-border w-1/5 flex flex-col items-center'>
      <FaNewspaper className='text-4xl text-sky-800 ' />
      <h3 className='text-center text-xs font-main-font font-bold uppercase tracking-wide text-[#181818]'>Feed</h3>
      </div>
      <div onClick={()=>{ navigate("/network")}} className='cursor-pointer box-border w-1/5 flex flex-col items-center'>
      <FaUserFriends className='text-4xl text-sky-800 ' />
      <h3 className='text-center text-xs font-main-font font-bold uppercase tracking-wide text-[#181818]'>Network</h3>
      </div>
      <div onClick={()=>{ navigate("/chat")}} className='cursor-pointer box-border w-1/5 flex flex-col items-center'>
      <BiSolidChat className='text-4xl text-sky-800 ' />
      <h3 className='text-center text-xs font-main-font font-bold uppercase tracking-wide text-[#181818]'>Chat</h3>
      </div>
      <div onClick={()=>{ navigate("/notifications")}} className='cursor-pointer box-border w-1/5 flex flex-col items-center'>
      <IoNotifications  className='text-4xl text-sky-800 ' />
      <h3 className='text-center text-xs font-bold font-main-font  uppercase tracking-wide text-[#181818]'>Notificatioins</h3>
      </div>
    </div>

    </div>

    <div className="w-1/5 h-20 py-5 text-end text-xl font-extrabold font-main-font text-black">
      <h2>{userdata.displayName}</h2>
    </div>
    <div className="w-1/5 h-20 p-5 flex justify-between">
      <Image src={userdata.photoURL}/>
      <button
       className='border-2 border-solid px-5 text-white bg-sky-800 rounded-xl text-center box-border hover:bg-sky-400 duration-300' 
       onClick={handlelogout}>Sing Out</button>
    </div>
   </div>
   </>
  )
}

export default Navbar