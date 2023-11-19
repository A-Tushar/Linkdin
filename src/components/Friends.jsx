import React, { useEffect, useState } from 'react'
import Image from './Image'
import { getDatabase, ref,onValue, set,push,remove } from "firebase/database";
import { useSelector } from 'react-redux';

const Friends = () => {

    const db = getDatabase();
    let userdata = useSelector((state)=>(state.active.value));
    let [requestlist,setRequestlist]=useState([]);
    let [users,SetUsers]=useState([]);
    let [friendlist,setFriendlist]=useState([]);


    useEffect(()=>{

        const userRef = ref(db, 'users');
        onValue(userRef, (snapshot) => {
        let arr=[]
        snapshot.forEach(item=>{
          if(userdata.uid != item.key){
            arr.push({...item.val(), userid:item.key});
          }
          
        })
        SetUsers(arr);
        });
        },[Friends]);


  return (
    <>
    <div className='w-4/5 mx-auto h-40 mt-3'>
     {users.map(item=>
        <div className='w-1/2 h-32 p-4 flex items-center gap-5' >
        <Image classname={"w-[100px] h-[100px] rounded-full object-cover inline-block"} src={item.profile_picture} />
        <h1 className="text-xl font-extrabold font-main-font text-black" >{item.username}</h1>
        </div>   
     )}
    </div>
    </>
  )
}

export default Friends