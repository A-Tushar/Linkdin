import React, {useState, useEffect} from 'react'
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { toast , ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { logeduser } from '../slices/activeSlice';
import { useSelector, useDispatch, } from 'react-redux';
import { Link , useNavigate } from 'react-router-dom'



const Home = () => {

  let dispatch = useDispatch()
  const auth = getAuth();
  let [load,setload]= useState(false);
  let navigate = useNavigate();
  let data = useSelector (state=>(state.active.value))

      
  useEffect(()=>{
    if(!data){
      navigate("/login")
    }
  },[])

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
  }

  return (
   <>
   
   <button className='border-2 border-dashed border-orange-600' onClick={handlelogout}>sing out</button>
   </>
  )
}

export default Home