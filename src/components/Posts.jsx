import React, { useEffect, useState } from 'react'
import Image from './Image'
import bg from '../assets/cover.jpg'
import { getDatabase, ref,onValue, set,push,remove } from "firebase/database";
import { useSelector } from 'react-redux';


const Posts = () => {

  const db = getDatabase();
  let userdata = useSelector((state)=>(state.active.value));
  let [posts,setPosts]=useState([]);
 

  useEffect(()=>{
    
    const userRef = ref(db, 'posts');
    onValue(userRef, (snapshot) => {
    let arr=[]
    snapshot.forEach(item=>{
      arr.push(item.val());      
    })

    setPosts(arr);

    });
    },[]);


  return (
    <>
    {posts.map(item=>
      
      <div className="w-11/12 m-6 border border-gray-400 rounded-xl p-5 ">
        <div className="flex items-center">
          <Image classname={'w-14 h-14 object-cover rounded-full mr-4'} src={bg}/>
          <h2 className="text-xl font-extrabold font-main-font text-black">{item.ownername}</h2>
        </div>
        <h1 className='font-main-font text-base font-normal capitalize px-20 my-5 '>{item.caption}</h1>
        
        {item.imgurl && <Image src={item.imgurl} classname={"mx-auto w-[300px] h-[300px] object-cover"}/>}

      </div>

      )}

     
    </>
  )
}

export default Posts