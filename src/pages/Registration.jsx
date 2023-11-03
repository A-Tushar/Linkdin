import React from 'react'
import Image from '../components/Image'
import logo from '../assets/logo.png'

const Registration = () => {
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
    Get started with easily register</h1>
    <p className='text-xl font-normal font-main-font text-primary-color text-center mt-3'>
      Free register and you can enjoy it</p>

        <input
        type="text"
        placeholder='Your Full Name'
        className="block mx-auto my-10 h-20 w-1/4 rounded-md border-0 py-1.5 pl-7 pr-20 font-normal text-xl font-main-font text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600  placeholder:font-normal placeholder:text-xl"
        />
        <input
        type="email"
        placeholder='Your Email adress'
        className="block mx-auto my-10 h-20 w-1/4 rounded-md border-0 py-1.5 pl-7 pr-20 font-normal text-xl font-main-font text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600  placeholder:font-normal placeholder:text-xl"
        />
        <input
        type="password"
        placeholder='Password'
        className="block mx-auto my-10 h-20 w-1/4 rounded-md border-0 py-1.5 pl-7 pr-20 font-normal text-xl font-main-font text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600  placeholder:font-normal placeholder:text-xl"
        />

        <button className='block text-center mx-auto mt-10 h-20 w-1/4 rounded-md border-0 py-1.5 font-bold text-2xl font-main-font text-white bg-sky-800 '>Sing Up</button>
        <p className='text-center  text-lg font-normal font-main-font text-primary-color '>Already Have And Account ? <span className='text-orange-600 text-base font-extrabold cursor-pointer '>Sing In</span></p>
        <p className='text-center  text-lg font-normal font-main-font text-primary-color '>Already Have And Account ? <span className='text-orange-600 text-base font-extrabold cursor-pointer '>Sing In</span></p>
       
    </>
  )
}

export default Registration