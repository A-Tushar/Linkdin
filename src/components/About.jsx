import React, {useState, useEffect} from 'react'
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { getDatabase, ref, set,push,onValue } from "firebase/database";
import { logeduser } from '../slices/activeSlice';
import { useSelector, useDispatch, } from 'react-redux';

const About = () => {
  let [aboutdata,setaboutdata]=useState([]);
  const db = getDatabase();
  let userdata = useSelector((state)=>(state.active.value));


  useEffect(()=>{
    
    const userRef = ref(db, 'bioabout');
    onValue(userRef, (snapshot) => {
    let arr=[]
    snapshot.forEach(item=>{
      if(item.val().uid==userdata.uid){
        arr.push(item.val()); 
      }
    })
    setaboutdata(arr);
    console.log(arr,"bio");
    });
    },[]);


  return (

    <>
    <div className="mx-auto w-4/5 py-3">
        <div className="w-full p-8 border-2  border-blue-200 rounded-sm">
            <h1 className='font-main-font  text-2xl font-bold text-sky-800 pb-3 '>About</h1>
            {aboutdata.map(item=>
            <p className='w-11/12 font-main-font text-lg font-normal text-black'>{item.about}</p>
              )}
            <p className='text-sky-500 font-main-font font-light text-base cursor-pointer pt-2'>see more...</p>
        </div>
    </div>
    </>
  )
}

export default About