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

        let handlefriendrequest =(item)=>{

          set(push(ref(db, 'friendrequest')), {
            whosendid : userdata.uid,
            whosendname : userdata.displayName,
            whoreceiveid: item.userid,
            whoreceivename:item.username
          });
        };

          useEffect(()=>{
    
          const userRef = ref(db, 'friendrequest');
          onValue(userRef, (snapshot) => {
          let arr=[]
          snapshot.forEach(item=>{
            arr.push(item.val().whoreceiveid+item.val().whosendid);      
          })

          setRequestlist(arr);

          });
          },[]);

          useEffect(()=>{

            const userRef = ref(db, 'friendlist');
            onValue(userRef, (snapshot) => {
            let arr=[]
            snapshot.forEach(item=>{
              arr.push(item.val().whoreceiveid+item.val().whosendid);
            })
            setFriendlist(arr);
            console.log("fnd",friendlist);
            
            });
            },[]);

  return (
    <>
    <div className='w-4/5 mx-auto h-40 mt-3 flex flex-wrap justify-center '>
     {users.map(item=>
        <div className='w-[45%]  p-4 flex  rounded-md my-4 mx-2 bg-[#F7F9FB] border border-solid border-gray-300' >
        <Image classname={"w-[100px] h-[100px] rounded-full object-cover inline-block"} src={item.profile_picture} />
        <div className='flex flex-col'>
        <h1 className="text-lg ml-4 mt-3 font-medium font-main-font text-black" >{item.username}</h1>
        <h5 className="text-sm ml-4 font-normal font-main-font text-black" >{item.username}</h5>
        </div>
        {requestlist.includes(item.userid+userdata.uid)||requestlist.includes(userdata.uid+item.userid)?
        
           <button className=' bg-sky-500 inline-block h-6 px-4 rounded-lg text-white my-auto ml-6'>
          Pending</button>
        :
        <>
        {friendlist.includes(item.userid+userdata.uid)||friendlist.includes(userdata.uid+item.userid)?

        <button className= 'bg-sky-500 inline-block h-6 px-4 rounded-lg text-white my-auto ml-6'>
        Friend</button>
          :
        <button onClick={()=>handlefriendrequest(item)} className= 'bg-sky-500 inline-block h-6 px-4 rounded-lg text-white my-auto ml-6'>
           Add Friend</button>
        }
        </>
        
        }
        </div>
     )}
    </div>
    </>
  )
}

export default Friends