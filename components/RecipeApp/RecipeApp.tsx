"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { BsBookmarkHeartFill } from "react-icons/bs";
import FoodCard from "./FoodCard";

const RecipeApp = () => {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [result, setResult] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string|null>(null)
  async function handleSubmit(e: any) {
    e.preventDefault();
    try {
      
      setResult([])
      setError(null)
    setIsLoading(true)

      const res = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${query}`
      );
      const data = await res.json();
      console.log(data);
      console.log(data.data.recipes.length);


      setResult(data);
      if (data.data.recipes.length<=0) {
        setError("No item Found!")
        
      }
      
    } catch (error:any) {
      console.log(error);
      setError(error.message)
    }finally{
        setIsLoading(false)
    }

  }
  function routeHome() {
    router.push("/RecipeApp");
  }
  console.log(query);
  

  return (
    <main className="flex flex-col h-[200vh]">
      <nav className=" bg-white flex items-center justify-between mx-3 mt-7">
        <div
          onClick={routeHome}
          className="max-lg:hidden max-lg:text-2xl font-extrabold text-4xl cursor-pointer"
        >
          Recipe <span className="text-sky-500">App</span>
        </div>

        <form className="w-[50%] max-lg:w-full flex" action={handleSubmit}>
          <input
            onChange={(e) => {
              setQuery(e.target.value);
            }}
            placeholder="Search for a food!"
            className="border rounded-xl h-12  p-2 w-full"
          />
          <button
            className="border hover:bg-sky-100 rounded-2xl p-1 transition-all duration-300 px-6 lg:px-10 ml-2"
            disabled={query.trim() === null}
            onClick={(e) => {
              handleSubmit(e);
            }}
          >
            Search
          </button>
        </form>

        <button className="flex items-center cursor-pointer border p-1 rounded-xl ml-1 hover:bg-slate-50 transition-all duration-200 max-lg:hidden">
          <span className="ml-2 mr-[1px]">Bookmarks</span>
          <BsBookmarkHeartFill className="w-10 h-10" />
        </button>
      </nav>
      {/* //!Data */}
      <FoodCard result={result} error={error} isLoading={isLoading}/>
    
    </main>
  );
};

export default RecipeApp;
