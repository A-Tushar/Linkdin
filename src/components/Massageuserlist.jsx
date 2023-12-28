import React, { useEffect, useState } from 'react'
import { getDatabase, ref,onValue, set,push,remove } from "firebase/database";
import { useSelector } from 'react-redux';
import Image from './Image'
import bg from '../assets/cover.jpg'



const Massageuserlist = () => {
  const db = getDatabase();
  let userinfo = useSelector((state)=>(state.active.value));
  let [msglist,setMsglist]=useState([]);

  useEffect(()=>{

    const userRef = ref(db, 'friendlist');
    onValue(userRef, (snapshot) => {
    let arr=[]
    snapshot.forEach(item=>{
      if(userinfo.uid == item.val().whosendid || userinfo.uid == item.val().whoreceiveid){
        arr.push({...item.val(), fid:item.key});
      }
     
    })
    setMsglist(arr);
    
    });
    },[]);

  return (
    <div className='w-96 h-full mx-auto overflow-y-scroll'>
 {msglist.map(item=>
    <div className="w-full my-3 py-2 border-b border-gray-300 h-auto flex gap-x-2">
      
                <Image classname={'w-14 h-14 rounded-full object-cover'} src={bg}/>
                <div>
                {item.whosendid == userinfo.uid ? 
                    <h4 className='font-main-font font-bold text-lg text-blue-900 '>{item.whoreceivename}</h4>
                    :
                    <h4 className='font-main-font font-bold text-lg text-blue-900 '>{item.whosendname}</h4>
                }

                </div>
            </div>
 )}
    </div>
  )
}

export default Massageuserlist