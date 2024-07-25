"use client"
import useLocalStorage from '@/hooks/useLocalStorage'
import React, { useState } from 'react'


const DarkSwitch = () => {
  const [theme, setTheme] = useLocalStorage("theme","dark");
  const handleToggleTheme=()=>{
    setTheme(theme==="light"?"dark":"light")
    console.log(theme);
    

  }

  return (
    <div className={`h-[100vh] transition-all duration-200  flex items-center justify-center ${theme==='dark'?"bg-[#0f172a]":"bg-slate-50"}`}>
      <button onClick={handleToggleTheme} className={`border py-2 px-10 rounded-3xl transition-all duration-200 ${theme==="dark"?"border-white text-white hover:bg-indigo-950":"border-purple-500 hover:bg-fuchsia-50"}`}>Switch</button>


    </div>
  )
}

export default DarkSwitch