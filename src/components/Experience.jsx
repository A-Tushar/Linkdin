import React,{useState,useRef, useEffect} from 'react'
import Image from './Image'
import logo from '../assets/ex.png'
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { getDatabase, ref,onValue, set,push, remove } from "firebase/database";
import { getStorage, ref as imgref,uploadBytes,getDownloadURL, } from "firebase/storage";
import { Button, Modal } from 'flowbite-react';
import { Label, TextInput,FileInput } from 'flowbite-react';
import { logeduser } from '../slices/activeSlice';
import { useSelector, useDispatch, } from 'react-redux';
import { Link , useNavigate } from 'react-router-dom';

const Experience = () => {
  const db = getDatabase();
  const storage = getStorage();
  let userdata = useSelector((state)=>(state.active.value));
  let dispatch = useDispatch()
  const auth = getAuth();
  const [openModal, setOpenModal] = useState(false);
  let [aboutdata,setaboutdata]=useState([]);
  const [image, setImage] = useState(null);
  let [imgurl,setImgurl]=useState("");

  let [exdata,setExdata]=useState({
    position:"",
    companyname:"",
    time:"",
    details:"",
  });

  let handledataup =(e)=>{
    setExdata({
      ...exdata,
      [e.target.name]:e.target.value
    })
  };

  let handlesave =(e)=>{
    set(push(ref(db, 'experience')), {
      position:exdata.position,
      companyname:exdata.companyname,
      time:exdata.time,
      details:exdata.details,
      logo:imgurl,
      uid:userdata.uid
    });
    setExdata({
      position:"",
      companyname:"",
      time:"",
      details:"",
    });
    setOpenModal(false)
    setImage('')
  };

  let handleimage =(e)=>{
        
    const storageRef = imgref(storage, e.target.files[0].name);
    uploadBytes(storageRef, e.target.files[0]).then((snapshot) => {
    // console.log('Uploaded a blob or file!');
    getDownloadURL(storageRef).then((downloadURL) => {
        console.log('File available at', downloadURL);
        setImgurl(downloadURL);
        setImage(downloadURL)
      });
      
    });
  };

      let [edata,setEdata]=useState([])
      useEffect(()=>{
          
        const userRef = ref(db, 'experience');
        onValue(userRef, (snapshot) => {
        let arr=[]
        snapshot.forEach(item=>{
          if(item.val().uid==userdata.uid){
            arr.push(item.val()); 
          }
              
        })

        setEdata(arr);

        });
        },[]);


  return (

  <>
  <div className="w-4/5 h-96 border-2  border-blue-200 rounded-sm overflow-y-scroll mx-auto m-3">
        <div className=" relative w-full p-8 ">
        <Button className=' absolute top-3 right-3' onClick={() => setOpenModal(true)}>Add Experience</Button>
        <h1 className='font-main-font  text-xl font-bold text-black pb-3 '>Exprience</h1>
        {edata.map(item=>

          <div className=" w-full h-1/4 py-4 flex">
            <Image classname={"w-14 h-14 object-contain"} src={item.logo}/>
            <div className=" px-5">
            <h2 className='font-main-font font-bold text-lg text-black mb-2'>{item.position}</h2>
            <h3 className='font-main-font font-medium text-sm '>{item.companyname}</h3>
            <p className='font-main-font font-medium text-sm mb-2'>{item.time}</p>
            <p className='font-main-font font-medium text-sm '>{item.details}</p>
            </div>
        </div>

          )}
        

        </div>
    </div>

    <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>{userdata.displayName}</Modal.Header>
        <Modal.Body>
          <p className='capitalize'>Share Your Experience</p>
        <div className="flex max-w-md flex-col gap-4">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="small" value="Your position" />
            </div>
            <TextInput onChange={handledataup} name='position' value={exdata.position} id="small" type="text" sizing="md" />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="base" value="Company Name" />
            </div>
            <TextInput onChange={handledataup} name='companyname' value={exdata.companyname} id="base" type="text" sizing="md" />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="base" value="Description" />
            </div>
            <TextInput onChange={handledataup} name='details' value={exdata.details} id="base" type="text" sizing="md" />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="base" value="Duretion" />
            </div>
            <TextInput onChange={handledataup} name='time' value={exdata.time} id="base" type="text" sizing="md" />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="large" value="Images" />
            </div>
    {image?
    
    <img alt='' src={image}/>
      :
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
        <FileInput onChange={handleimage}  id="dropzone-file" className="hidden" />
      </Label>
    </div>    }
    
          </div>
        </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handlesave}>Save</Button>
          <Button color="gray" onClick={() => setOpenModal(false)+setImage('')}>
            Cancle
          </Button>
        </Modal.Footer>
      </Modal>
  </>
  )
}

export default Experience