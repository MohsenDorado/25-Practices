"use client"
import { useRouter } from 'next/navigation'
import React from 'react'
import { BsBookmarkHeartFill } from 'react-icons/bs';

const RecipeApp = () => {
  const router=useRouter();
  function routeHome(){
    router.push('/RecipeApp')

  }
  return (
    <main className='flex flex-col h-[200vh]'>
      <nav className=' bg-white flex items-center justify-between mx-3 mt-7'>
        <div onClick={routeHome} className='max-md:hidden max-lg:text-2xl font-extrabold text-4xl cursor-pointer'>Recipe <span className='text-sky-500'>App</span></div>
        <input placeholder='Search for a food!' className='border rounded-xl h-12 w-[50%] max-md:w-full p-2'/>

        <button className='flex items-center cursor-pointer border p-1 rounded-xl ml-1 hover:bg-slate-50 transition-all duration-200 max-md:hidden'><span className='ml-2 mr-[1px]'>Booksmarks</span><BsBookmarkHeartFill className='w-10 h-10'/>
        </button>

      </nav>

      
    </main>
  )
}

export default RecipeApp