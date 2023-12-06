import React, { useEffect, useState } from 'react'
import Image from './Image'
import bg from '../assets/cover.jpg'
import { getDatabase, ref,onValue, set,push,remove } from "firebase/database";
import { useSelector } from 'react-redux';
import { Dropdown } from 'flowbite-react';
import { BsThreeDots } from "react-icons/bs";


const Posts = () => {

  const db = getDatabase();
  let userdata = useSelector((state)=>(state.active.value));
  let [posts,setPosts]=useState([]);
 

  useEffect(()=>{
    
    const userRef = ref(db, 'posts');
    onValue(userRef, (snapshot) => {
    let arr=[]
    snapshot.forEach(item=>{
      arr.push({...item.val(),pid:item.key});      
    })

    setPosts(arr);
    console.log("postid",posts);

    });
    },[]);
    let handledeletepost =(item)=>{
      remove( ref(db, 'posts/'+item.pid))
    };


  return (
    <>
    {posts.map(item=>
      
      <div className="w-11/12 m-6 border border-gray-400 rounded-xl p-5 ">
        <div className="flex items-center relative">
          <Image classname={'w-14 h-14 object-cover rounded-full mr-4'} src={bg}/>
          <h2 className="text-xl font-extrabold font-main-font text-black">{item.ownername}</h2>
          {item.ownerid === userdata.uid && (
              <div className=' absolute top-3 right-3 text-lg font-bold'>
          <Dropdown label="" dismissOnClick={false} renderTrigger={() => <span><BsThreeDots className=' font-extrabold text-xl' /></span>}>
            <Dropdown.Item  >Edit</Dropdown.Item>
            <Dropdown.Item onClick={()=>handledeletepost(item)}>Delete</Dropdown.Item>
          </Dropdown>
          </div>
          )}
          
        </div>
        <h1 className='font-main-font text-base font-normal capitalize px-20 my-5 '>{item.caption}</h1>
        
        {item.imgurl && <Image src={item.imgurl} classname={"mx-auto w-max-[300px] h-max-[300px] object-contain-"}/>}

      </div>

      )}

     
    </>
  )
}

export default Posts