"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { BsBookmarkHeartFill } from "react-icons/bs";

const RecipeApp = () => {
  const [query, setQuery] = useState('')
  const [result, setResult] = useState<any>([])
  async function handleSubmit(e:any) {
    e.preventDefault();
    try {
      const res=await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${query}`)
      const data=await res.json();
      console.log(data);
      
      setResult(data)

      
    } catch (error) {
      console.log(error);
      
      
    }
    
  }
  const router = useRouter();
  function routeHome() {
    router.push("/RecipeApp");
  }
  console.log(query);
  
  return (
    <main className="flex flex-col h-[200vh]">
      <nav className=" bg-white flex items-center justify-between mx-3 mt-7">
        <div
          onClick={routeHome}
          className="max-md:hidden max-lg:text-2xl font-extrabold text-4xl cursor-pointer"
        >
          Recipe <span className="text-sky-500">App</span>
        </div>
        <div className="w-[50%] max-md:w-full">

        <input
        onChange={(e)=>{setQuery(e.target.value)}}
          placeholder="Search for a food!"
          className="border rounded-xl h-12  p-2"
          />
          <button 
          disabled={query.trim()===null}
          onClick={(e)=>{handleSubmit(e)}}>
            Search

          </button>
          </div>

        <button className="flex items-center cursor-pointer border p-1 rounded-xl ml-1 hover:bg-slate-50 transition-all duration-200 max-md:hidden">
          <span className="ml-2 mr-[1px]">Bookmarks</span>
          <BsBookmarkHeartFill className="w-10 h-10" />
        </button>
      </nav>
        {
          result.data&&(
            <div className="grid  mt-10">
              {result.data.recipes.map((food:any)=>(

                <div className="grid-cols-1 shadow-md rounded-xl ">
                  <div className="flex justify-between items-center">
                    <div>
                      <Image src={food.image_url} alt="Food" width={40} height={40}/>
                  {food.publisher}

                    </div>
                    <div>

                    </div>
                    
                  </div>
                  
                </div>
              ))}

            </div>

          )
        }
        

    </main>
  );
};

export default RecipeApp;
