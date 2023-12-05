import React,{useState,useEffect} from 'react';
import { getDatabase, ref,onValue, set,push, remove } from "firebase/database";
import { useSelector } from 'react-redux';

const Sendrequest = () => {
    const db = getDatabase();
    let userinfo = useSelector((state)=>(state.active.value));
    let [requeslist,setRequestlist]=useState([]);
  
    useEffect(()=>{
      
      const userRef = ref(db, 'friendrequest');
      onValue(userRef, (snapshot) => {
      let arr=[]
      snapshot.forEach(item=>{
        if(item.val().whosendid == userinfo.uid){
          arr.push({...item.val(), frid:item.key});
        }
        // console.log(item.val());
        // console.log("loinuser",userinfo);
        // console.log(arr);
        
      })
      setRequestlist(arr);
      });
      },[]);
  
      let handlereject =(item)=>{
          remove( ref(db, 'friendrequest/'+item.frid))
        };
  
    return (
      <>
      <div className='w-4/5 mx-auto h-40 mt-3 flex flex-wrap justify-center'>
      {requeslist.map(item=>
          <div className='w-[45%] h-32 p-4 flex  rounded-md my-4 mx-2 bg-[#F7F9FB] border border-solid border-gray-300' >
          {/* <Image classname={"w-[100px] h-[100px] rounded-full object-cover inline-block"} src={item.profile_picture} /> */}
          <div className='flex flex-col'>
          <h1 className="text-lg ml-4 mt-3 font-medium font-main-font text-black" >{item.whoreceivename}</h1>
          <h5 className="text-sm ml-4 font-normal font-main-font text-black" >{item.whoreceivename}</h5>
          </div>
          <button onClick={()=>handlereject(item)} className=' bg-pink-500 inline-block h-6 px-4 rounded-lg text-white my-auto ml-6'>
            Cancle</button> 
          
          <button className= 'bg-sky-500 inline-block h-6 px-4 rounded-lg text-white my-auto ml-6'>
             Pending </button>
       
          </div>
       )}
      </div>
      </>
    )
}

export default Sendrequest