import React, { useEffect, useState } from 'react'
import { getDatabase, ref,onValue, set,push,remove } from "firebase/database";
import { useSelector, useDispatch, } from 'react-redux';
import { Button, TextInput } from 'flowbite-react';
import { BsEmojiGrin } from "react-icons/bs";


const Message = () => {
        const db = getDatabase();
        let userdata = useSelector((state)=>(state.active.value));
        let activechat = useSelector((state)=>(state.activechat.value));
        let dispatch = useDispatch();
        let [msg,setMsg]= useState("")
        let [massage,setMassage]=useState([]);

        let handlemsg =(e)=>{
               setMsg(e.target.value);
        //
        };

        let handlesendmsg=()=>{

                if(msg != ""){

                set(push(ref(db, 'msg')), {

                whosendid       :userdata.uid,
                whosendname     :userdata.displayName,
                whoreceivename  :activechat.activechatname,
                whoreceiveid    :activechat.activechatid,
                massage         :msg,
                });

                }
                setMsg("")
        };
        
        useEffect(()=>{

                const userRef = ref(db, 'msg');
                onValue(userRef, (snapshot) => {
                let arr=[]
                snapshot.forEach(item=>{
                if(
                        userdata.uid == item.val().whosendid &&
                        activechat.activechatid == item.val().whoreceiveid || 
                        activechat.activechatid == item.val().whosendid &&
                        userdata.uid == item.val().whoreceiveid 
                
                        )
                  {
                    arr.push({...item.val(), msgid:item.key});
                  }
                 
                })
                setMassage(arr);
                
                });
                },[activechat]);


  return (
    <>
    <div className="h-[90%] border-b border-gray-300">
        <div className="w-full  flex py-10 border-b border-gray-600">
        <p className='font-main-font font-bold text-base pl-10 pr-5'>Chat With  {activechat.activechatname} </p>
        <p className='font-main-font font-medium text-base'>Active 0 min ago</p>
        </div>

       <div className="mt-5 flex flex-col">
        {massage.map(item=>
        
        item.whosendid == userdata.uid?
        <div className="flex justify-end">
        <p className='my-[1px] inline-block mx-5  py-1 px-2 bg-sky-200 rounded-sm font-main-font font-medium text-base '>{item.massage}</p>
        </div>
        :
        <div className="">
        <p className='my-[1px] inline-block mx-5  py-1 px-2 bg-sky-200 rounded-sm font-main-font font-medium text-base '>{item.massage}</p>
        </div>    
        
        
            
          
        )}
            
         
        
       </div>
        
    </div>


    <div className="mx-[5%] flex gap-x-2 py-2 items-center">
        <TextInput onChange={handlemsg} value={msg} className=' w-4/5' type="text" />
        <BsEmojiGrin className='font-bold text-2xl text-sky-900' />
        <Button onClick={handlesendmsg} >Send</Button>
    </div>
    </>
  )
}

export default Message