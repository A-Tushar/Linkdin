import React,{useState,useRef, useEffect} from 'react'
import Image from './Image'
import p from '../assets/cover.jpg'
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { getDatabase, ref, set,push,onValue } from "firebase/database";
import { Button, Modal } from 'flowbite-react';
import { Label, TextInput,FileInput } from 'flowbite-react';
import { logeduser } from '../slices/activeSlice';
import { useSelector, useDispatch, } from 'react-redux';
import { Link , useNavigate } from 'react-router-dom';


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
  });
  
  let handledataup =(e)=>{
    setProject({
      ...project,
      [e.target.name]:e.target.value
    })
  };
   
  let handlesave =(e)=>{
    set(push(ref(db, 'project')), {
      pname:project.pname,
      pdetails:project.pdetails,
      pimg:project.pimg,
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
            <TextInput onChange={handledataup} name='pname' value={project.pname} id="small" type="text" sizing="md" />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="base" value="Description" />
            </div>
            <TextInput onChange={handledataup} name='pdetails' value={project.pdetails} id="base" type="text" sizing="md" />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="large" value="Images" />
            </div>


            <div className="flex w-full items-center justify-center">
      <Label
        htmlFor="dropzone-file"
        className="dark:hover:bg-bray-800 flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600"
      >
        <div className="flex flex-col items-center justify-center pb-6 pt-5">
          <svg
            className="mb-4 h-8 w-8 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 16"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLineJoin="round"
              strokeWidth="2"
              d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
            />
          </svg>
          <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
            <span className="font-semibold">Click to upload</span> or drag and drop
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
        </div>
        <FileInput onChange={handledataup} name='pimg' id="dropzone-file" className="hidden" />
      </Label>
    </div>


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