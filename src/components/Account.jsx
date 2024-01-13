import React ,{useEffect} from 'react'
import { useSelector, useDispatch, } from 'react-redux';
import Image from '../components/Image';
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { Link , useNavigate } from 'react-router-dom'
import cover from '../assets/cover.jpg'


const Account = () => {
    let userdata = useSelector((state)=>(state.active.value));
    let data = useSelector (state=>(state.active.value));
    let navigate = useNavigate();

          
  useEffect(()=>{
    if(!data){
      navigate("/login")
    }
    console.log(userdata);
    },[])

  return (
    <>
    {/* feed rightside profileinfo */}
    <div className="w-[290px] h-[280px] mx-auto ">
        <div className="w-full h-2/5">
            <Image classname={'w-full h-full object-cover'} src={cover}/>
        </div>
        <div className="w-full h-3/5 relative box-border text-center">
            <div className="h-[100px] w-[100px] bg-white rounded-full absolute top-[-44px] right-[98px] overflow-hidden ">
                <Image classname={'w-[90px] h-[90px] rounded-full object-cover mx-auto my-[5px]'} src={userdata.photoURL}/>
            </div>
            <h1 className='font-main-font font-bold text-lg pt-16 text-black'>{userdata.displayName}</h1>
            <p className='font-main-font font-normal text-base pt-1 '>Freelance UX/UI designer, 80+ projects in web design, mobile apps  (iOS & android) and creative projects. Open to offers.</p>
        </div>
    </div>
    </>
  )
}

export default Account