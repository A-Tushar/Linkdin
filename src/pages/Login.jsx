import React, {useState} from 'react'
import { Link , useNavigate } from 'react-router-dom'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { toast , ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ColorRing } from 'react-loader-spinner';

const Login = () => {

  const auth = getAuth();

  let [fromdata,setFromdata] =useState({
    email:"",
    password:"",
  });
  let [passworderror,setPassworderror]=useState("");
  let [emailerror,setEmailerror]=useState("");
  let [load,setload]= useState(false);
  let navigate = useNavigate();

  let handlechange =(e)=>{
    setFromdata({
      ...fromdata,
      [e.target.name]:e.target.value
    })
    setEmailerror("")
    setPassworderror("")
  }

  let handlelogin =()=>{
    if(!fromdata.email){
      setEmailerror("email Requierd")
    }
    if(!fromdata.password){
      setPassworderror("Password Requierd")
    }

    if(fromdata.email && fromdata.password){
      let pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

      if(!pattern.test(fromdata.email)){
        setEmailerror("Need a Valid Email")
      }

      setload(true)
      signInWithEmailAndPassword(auth, fromdata.email, fromdata.password).then((user)=>{
        console.log('');
        if(!user.user.emailVerified){
          toast.error('Please Verify Your Email !', {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
        }else{
          toast.success('Login Succesfull !', {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
          setTimeout(() => {
            navigate("/home");
            // dispatch(logeduser(user.user))
            // localStorage.setItem("user", JSON.stringify(user.user))
          }, 1000);
        }
        
        // setTimeout(() => {
        //   navigate("/home");
        //   // dispatch(logeduser(user.user))
        //   // localStorage.setItem("user", JSON.stringify(user.user))
        // }, 1000);

        setFromdata({
          email:"",
          password:""
        })
        setload(false)
        // toast.success('Registration Succesfull !', {
        //   position: "bottom-center",
        //   autoClose: 5000,
        //   hideProgressBar: false,
        //   closeOnClick: true,
        //   pauseOnHover: true,
        //   draggable: true,
        //   progress: undefined,
        //   theme: "light",
        //   });

      }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        if(error){
          toast.error('Account Not Found', {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
        }

        if(errorCode.includes("wrong-password")){
         setPassworderror("wrong-password")
          setload(false)
        }
        if(errorCode.includes("email")){
          setEmailerror("Email Already Used !")
          setload(false)
        }
        if(errorCode.includes("user-not-found")){
          setEmailerror("No Account Created !")
          toast.error('Account Not Found ! Creat an Account First.', {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
          setload(false)
        }
        if(errorCode.includes("disabled")){
          toast.error('this account has been temporarily disabled due to many failed login attempts', {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
          setload(false)
        }
        console.log(errorCode,errorMessage);
       setload(false)
      });
    }

  };

  return (
    <>
    <svg className='mx-auto mt-[140px]' xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 0 46 46" fill="none">
<path fill-rule="evenodd" clip-rule="evenodd" d="M2.5262 2.5262C0 5.05241 0 9.11827 0 17.25V28.75C0 36.8817 0 40.9476 2.5262 43.4738C5.05241 46 9.11827 46 17.25 46H28.75C36.8817 46 40.9476 46 43.4738 43.4738C46 40.9476 46 36.8817 46 28.75V17.25C46 9.11827 46 5.05241 43.4738 2.5262C40.9476 0 36.8817 0 28.75 0H17.25C9.11827 0 5.05241 0 2.5262 2.5262ZM11.4811 14.4099C9.58715 14.4099 8.05 12.8571 8.05 10.9425C8.05 9.02789 9.58715 7.475 11.4811 7.475C13.3751 7.475 14.9123 9.02789 14.9123 10.9425C14.9123 12.8571 13.3771 14.4099 11.4811 14.4099ZM8.54016 38.525V16.9024H14.4221V38.525H8.54016ZM32.068 38.525H37.95V25.2389C37.95 14.9132 26.9644 15.2886 24.2254 20.3719V16.9024H18.3434V38.525H24.2254V27.5093C24.2254 21.3901 32.068 20.8889 32.068 27.5093V38.525Z" fill="url(#paint0_linear_3017_641)"/>
<defs>
<linearGradient id="paint0_linear_3017_641" x1="23" y1="0" x2="23" y2="46" gradientUnits="userSpaceOnUse">
<stop stop-color="#0077B5"/>
<stop offset="1" stop-color="#0E6795"/>
</linearGradient>
</defs>
    </svg>
    <h1 className="text-4xl font-normal font-main-font text-primary-color text-center mt-10 ">
    Login</h1>
    <p className='text-xl font-normal font-main-font text-primary-color text-center mt-3'>
      Login and you can enjoy it</p>
        <input onChange={handlechange} name='email'
        value={fromdata.email}
        type="email"
        placeholder='Your Email adress'
        className="block mx-auto my-10 h-20 w-1/4 rounded-md border-0 py-1.5 pl-7 pr-20 font-normal text-xl font-main-font text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600  placeholder:font-normal placeholder:text-xl"
        />
        {emailerror && <p className='p-2 text-center mx-auto rounded-lg bg-red-400 font-main-font text-rose-50 text-2xl w-1/4 ' >
          {emailerror}
        </p> }
        <input onChange={handlechange} name='password'
        value={fromdata.password}
        type="password"
        placeholder='Password'
        className="block mx-auto my-10 h-20 w-1/4 rounded-md border-0 py-1.5 pl-7 pr-20 font-normal text-xl font-main-font text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600  placeholder:font-normal placeholder:text-xl"
        />
        {passworderror && <p className='p-2 text-center mx-auto rounded-lg bg-red-400 font-main-font text-rose-50 text-2xl w-1/4 ' >
          {passworderror}
        </p> }

    {load ?
            <button className='flex justify-center  mx-auto mt-10 h-20 w-1/4 rounded-md border-0 py-1.5 font-bold text-2xl font-main-font text-white bg-sky-800 '>
              <ColorRing
              visible={true}
              height="60"
              width="60"
              ariaLabel="blocks-loading"
              wrapperStyle={{}}
              wrapperClass="blocks-wrapper"
              colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
            />
            </button>
            :
            <button onClick={handlelogin} className='block text-center mx-auto mt-10 h-20 w-1/4 rounded-md border-0 py-1.5 font-bold text-2xl font-main-font text-white bg-sky-800 '>Sing In</button>
            }

        <p className='text-center  text-lg font-normal font-main-font text-primary-color '>Create an Account ? 
        <Link to={'/'}><span className='text-orange-600 text-base font-extrabold cursor-pointer '>Sing Up</span></Link>
        </p>
       
    </>
  )
}

export default Login