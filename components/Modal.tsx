"use client"
import React from 'react'

const Modal = () => {
  return (
    <div className='max-md:w-full w-[50%] flex flex-col items-center justify-center  '>

    <input
   placeholder='Search'
   className=" placeholder:text-center border-2 border-black rounded-md hover:bg-sky-50 w-full max-md:w-full text-xl h-[50px] max-lg:w-[75%] text-slate-400">
       
    </input>
    <div className=' p-5 bg-blue-50 absolute text-center flex items-center justify-center w-[48%] max-md:w-full translate-y-[60px]'>
      Hi
      

    </div>
      </div>
  )
}

export default Modal