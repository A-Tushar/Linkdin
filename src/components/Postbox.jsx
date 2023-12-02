import React, { useState, useRef } from 'react'
import { CiImageOn } from "react-icons/ci";
import { getDatabase, ref,onValue, set,push, remove } from "firebase/database";
import { getStorage, ref as imgref,uploadBytes,getDownloadURL, } from "firebase/storage";
import { useSelector } from 'react-redux';

const Postbox = () => {
    const db = getDatabase();
    const storage = getStorage();
    let userinfo = useSelector((state)=>(state.active.value));
    let [requeslist,setRequestlist]=useState([]);
    let [postdata,setPostdata]=useState('')
    let [imgurl,setImgurl]=useState("");

    // const fileInputRef = useRef(null);
    // const handleButtonClick = () => {
    //     fileInputRef.current.click();
    //   };

    let handlepost=()=>{
        if(postdata.length!=0){

        set(push(ref(db, 'posts/')), {
            caption:postdata,
            ownerid:userinfo.uid,
            ownername:userinfo.displayName,
            imgurl:imgurl,
        });

        setPostdata('')
        }
        
    };

    let handpostinfo=(e)=>{
        setPostdata(e.target.value)
    }

    let handleimage =(e)=>{
        
        const storageRef = imgref(storage, e.target.files[0].name);
        uploadBytes(storageRef, e.target.files[0]).then((snapshot) => {
        // console.log('Uploaded a blob or file!');
        getDownloadURL(storageRef).then((downloadURL) => {
            console.log('File available at', downloadURL);
            setImgurl(downloadURL);
          });
          
        });
    }

  return (
   <>
   <div className="w-full  border border-sky-200 rounded-md">
    <div className='w-full h-12 p-10 font-main-font font-bold text-xl'>
        <h4>Create a Post </h4>
    </div>
    <div className='p-5 flex items-center gap-3 '>
        <input onChange={handpostinfo} value={postdata} name='caption' className='focus:outline-none border-none p-7 w-3/4' type="text" placeholder='What’s on your mind?' />

        <label>
        <CiImageOn  className='font-black text-5xl ' />
        <input onChange={handleimage} className='hidden' type="file" accept='image/*' />
        </label>
        <button onClick={handlepost}
       className='border-2 border-solid text-white bg-sky-800 rounded-xl text-center box-border hover:bg-sky-400 duration-300 px-5 py-2 '>Post</button>
    </div>
   </div>
   </>
  )
}

export default Postbox