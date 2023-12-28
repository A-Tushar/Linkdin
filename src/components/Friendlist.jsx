import React, { useEffect, useState } from 'react'
import Image from './Image'
import bg from '../assets/cover.jpg'
import { getDatabase, ref,onValue, set,push,remove } from "firebase/database";
import { useSelector } from 'react-redux';


const Friendlist = () => {

    const db = getDatabase();
    let userinfo = useSelector((state)=>(state.active.value));
    
    let [friendlist,setFriendlist]=useState([]);


    useEffect(()=>{

        const userRef = ref(db, 'friendlist');
        onValue(userRef, (snapshot) => {
        let arr=[]
        snapshot.forEach(item=>{
          if(userinfo.uid == item.val().whosendid || userinfo.uid == item.val().whoreceiveid){
            arr.push({...item.val(), fid:item.key});
          }
         
        })
        setFriendlist(arr);
        console.log("fnd",friendlist);
        
        });
        },[]);

        // let handleblock=(item)=>{
        //   set(push(ref(db, 'blocklist')), {
        //     ...item
        //   }).then(()=>{
        //     remove( ref(db, 'friendlist/'+item.fid))
        //   })
        // };
        let handleunfriend=(item)=>{
             remove( ref(db, 'friendlist/'+item.fid))
            
          };

  return (
    <>
    <div className='w-4/5 mx-auto h-40 mt-3 flex flex-wrap justify-center '>
     {friendlist.map(item=>
        <div className='w-[45%]  p-4 flex  rounded-md my-4 mx-2 bg-[#F7F9FB] border border-solid border-gray-300' >
        <Image classname={"w-[100px] h-[100px] rounded-full object-cover inline-block"} src={bg} />
        <div className='flex flex-col'>
        {item.whosendid == userinfo.uid ? 
        <>
       <h1 className="text-lg ml-4 mt-3 font-medium font-main-font text-black" >{item.whoreceivename}</h1>
        <h5 className="text-sm ml-4 font-normal font-main-font text-black" >{item.whoreceivename}</h5>
        </>
        :
        <> 
         <h1 className="text-lg ml-4 mt-3 font-medium font-main-font text-black" >{item.whosendname}</h1>
        <h5 className="text-sm ml-4 font-normal font-main-font text-black" >{item.whosendname}</h5>
        </>
        }
        </div>
        
        
        
        <button  className=' bg-red-500 inline-block h-6 px-4 rounded-lg text-white my-auto ml-6'> Block</button>
        <button onClick={()=>handleunfriend(item)}  className= 'bg-pink-500 inline-block h-6 px-4 rounded-lg text-white my-auto ml-6'>
           Unfriend</button>
        <button  className= 'bg-sky-500 inline-block h-6 px-4 rounded-lg text-white my-auto ml-6'>
           Massage</button>

        </div>


     )}
    </div>
    
    </>
  )
}

export default Friendlist