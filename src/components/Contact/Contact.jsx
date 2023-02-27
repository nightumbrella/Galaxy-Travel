import React from 'react'
import Navbar from '../Home/Navbar'
import photo from "../../assets/training.jpg";


const Contact = () => {
  return (
    <div>
        <Navbar/>
        <div className=" fixed left-0 top-0 -z-30">
        <img src={photo} alt="photo" className="w-full h-full object-cover" />
      </div>
      <div className="flex items-center justify-center h-[100vh] flex-col">
      <h1 className="text-4xl">Contact</h1>
      <h1 className="text-2xl">Contact Galaxy-Travel</h1>
      </div>
    </div>
  )
}

export default Contact