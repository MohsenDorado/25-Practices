"use client"
import React from 'react'
// import Loading from "../public/Loading.webp"
const Loading = () => {
  return (
    <>
<img
                className="w-20 h-20 rounded-full opacity-10"
                src='https://fakeimg.pl/200x200'
                alt="LoadingAvatar"
              />
              <div className=" my-4 text-2xl font-extrabold tracking-widest opacity-10 w-40 bg-slate-700 h-6">
                

              </div>
            <div className="flex items-center justify-between flex-row w-full text-2xl opacity-10">
              <div className="w-[50%] text-center">

Followings...              </div>

            <div className="w-[50%] text-center">
Followers...              </div>
            </div> 
            </>
 )
}

export default Loading