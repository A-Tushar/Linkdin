import React from 'react'
import Image from './Image'
import bg from '../assets/cover.jpg'
const Posts = () => {
  return (
    <>
  <div className="w-11/12">
    <h1>hello </h1>
    <Image src={bg} classname={"w-40 h-40 object-cover"}/>
  </div>
    </>
  )
}

export default Posts