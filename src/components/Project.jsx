import React,{useState,useRef, useEffect} from 'react'
import Image from './Image'
import p from '../assets/cover.jpg'
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { getDatabase, ref, set,push,onValue } from "firebase/database";
import { Button, Modal } from 'flowbite-react';
import { Label, TextInput } from 'flowbite-react';
import { logeduser } from '../slices/activeSlice';
import { useSelector, useDispatch, } from 'react-redux';
import { Link , useNavigate } from 'react-router-dom'

const Project = () => {
  const db = getDatabase();
  let userdata = useSelector((state)=>(state.active.value));
  let dispatch = useDispatch()
  const auth = getAuth();
  const [openModal, setOpenModal] = useState(false);
  let [aboutdata,setaboutdata]=useState([]);

  useEffect(()=>{
    
    const userRef = ref(db, 'project');
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
  
  let [project,setProject]=useState({
    pname:"",
      pdetails:"",
      pimg:'',
  })
  let handledataup =(e)=>{
    setAbout({
      ...about,
      [e.target.name]:e.target.value
    })
  };
   
  let handlesave =()=>{
    set(push(ref(db, 'project')), {
      pname:"",
      pdetails:"",
      pimg:'',
      uid:userdata.uid
    });
    setProject({
      pname:"",
      pdetails:"",
      pimg:'',
    });
    setOpenModal(false)
  };

  return (
    <>
    <div className="w-4/5 mx-auto py-3">
        <div className=" relative w-full p-8 border-2  border-blue-200 rounded-sm">
        <Button className=' absolute top-3 right-3' onClick={() => setOpenModal(true)}>Add Projects</Button>
        <h1 className='font-main-font  text-xl font-bold text-black pb-3 '>Projects</h1>
        <div className="h-[355px] w-full flex gap-2 flex-wrap box-border overflow-y-scroll ">
            <Image classname={"h-4/5 w-[30%] object-cover "} src={p}/>
            <Image classname={"h-4/5 w-[30%] object-cover "} src={p}/>
            <Image classname={"h-4/5 w-[30%] object-cover "} src={p}/>
        </div>
        </div>
    </div>


    <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>{userdata.displayName}</Modal.Header>
        <Modal.Body>
          <p className='capitalize'>Upload Yours Projects Details</p>
        <div className="flex max-w-md flex-col gap-4">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="small" value="Project Name" />
            </div>
            <TextInput onChange={handledataup} name='bio' value={project.pname} id="small" type="text" sizing="md" />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="base" value="Description" />
            </div>
            <TextInput onChange={handledataup} name='adress' value={project.pdetails} id="base" type="text" sizing="md" />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="large" value="Images" />
            </div>
            <TextInput onChange={handledataup} name='about' value={project.pimg} id="large" type="files" sizing="md" />
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
    </>
  )
}

export default Project