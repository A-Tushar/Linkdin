import React, {useState, useEffect} from 'react'
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { getDatabase, ref, set,push,onValue } from "firebase/database";
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
import Profile from '../components/Profile'
import Edit from '../components/Edit';
import Friendlist from '../components/Friendlist';
import { Button, Modal } from 'flowbite-react';
import { Label, TextInput } from 'flowbite-react';


const Home = () => {
  const db = getDatabase();
  let userdata = useSelector((state)=>(state.active.value));
  let dispatch = useDispatch()
  const auth = getAuth();
  let [load,setload]= useState(false);
  let navigate = useNavigate();
  let data = useSelector (state=>(state.active.value));
  let [profile, setProfile]=useState(true)
  let [friend, setFriend]=useState(false)
  let [post, setPost]=useState(false)
  const [openModal, setOpenModal] = useState(false);
  const [openModaltwo, setOpenModaltwo] = useState(false);
  let [aboutdata,setaboutdata]=useState([]);

      
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

  useEffect(()=>{
    
    const userRef = ref(db, 'bioabout');
    onValue(userRef, (snapshot) => {
    let arr=[]
    snapshot.forEach(item=>{
      if(item.val().uid==userdata.uid){
        arr.push(item.val()); 
      }
    })
    setaboutdata(arr);
    console.log(arr,"bio");
    });
    },[]);
  
  let [about,setAbout]=useState({
    bio:"",
    adress:"",
    about:"",
  })
  let handledataup =(e)=>{
    setAbout({
      ...about,
      [e.target.name]:e.target.value
    })
  };
   
  let handlesave =()=>{
    set(push(ref(db, 'bioabout')), {
      bio:about.bio,
      adress:about.adress,
      about:about.about,
      uid:userdata.uid
    });
    setAbout({
    bio:"",
    adress:"",
    about:"",
    });
    setOpenModal(false)
  };

  return (
   <>
   <div className='w-4/5 h-96 bg-slate-300 mx-auto my-5'>
    <div className="w-full h-2/4 relative">
      <Image classname={"object-cover object-center w-full h-full"} src={cover} alt={"cover"} />
      <Button className=' absolute top-5 right-5' onClick={() => setOpenModal(true)}> <CiEdit/> Edit Profile</Button>
    </div>
    <div  className="w-full h-2/4  relative">
      <div className=' cursor-pointer' onClick={()=>setOpenModaltwo(true)}><Image  classname={"h-44 w-44 rounded-full object-cover absolute top-[-20%] left-11"} src={userdata.photoURL} /></div>
      <p className=' absolute top-0 right-40 font-serif font-normal text-xs flex'> <FaLocationArrow className='mr-2 text-red-500' />Location</p>
      <h1 className='font-main-font font-bold text-3xl text-black ml-64 mt-6 '>{userdata.displayName}
      </h1>
      {aboutdata.map(item=> 
      <div>
        <p className='ml-64 font-main-font font-normal text-base w-2/4 '>{item.bio}</p>
      </div>
        )}
      
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
    {friend && <Friendlist />}
    {/* {post && <Friends/>} */}

    
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>{userdata.displayName}</Modal.Header>
        <Modal.Body>
          <p className='capitalize'>Please edit or compleate your profile by Proding all data</p>
        <div className="flex max-w-md flex-col gap-4">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="small" value="Bio" />
            </div>
            <TextInput onChange={handledataup} name='bio' value={about.bio} id="small" type="text" sizing="md" />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="base" value="Adress" />
            </div>
            <TextInput onChange={handledataup} name='adress' value={about.adress} id="base" type="text" sizing="md" />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="large" value="About Yourself" />
            </div>
            <TextInput onChange={handledataup} name='about' value={about.about} id="large" type="text" sizing="md" />
          </div>
        </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handlesave}>Save</Button>
          <Button color="gray" onClick={() => setOpenModal(false)}>
            Cancle
          </Button>
        </Modal.Footer>
      </Modal>


      <Modal show={openModaltwo} onClose={() => setOpenModaltwo(false)}>
        <Modal.Header>{userdata.displayName}</Modal.Header>
        <Modal.Body>
           aaaa
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setOpenModaltwo(false)}>I accept</Button>
          <Button color="gray" onClick={() => setOpenModaltwo(false)}>
            Decline
          </Button>
        </Modal.Footer>
      </Modal>


   </>
  )
}

export default Home