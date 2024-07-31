"use client"
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { BsBookmarkHeartFill } from 'react-icons/bs';
import FoodCard from './FoodCard';

const Foodsearch = ({query}:{query:string|string[]}) => {
    const [result, setResult] = useState<any>([]);

    const [isLoading, setIsLoading] = useState(false)
  
    const [error, setError] = useState<string|null>(null)
  
    const [searchedQuery, setSearchedQuery] = useState<string|string[]>(query)
    const router = useRouter();

    function routeHome() {
        router.push("/RecipeApp");
      }
      const [searchedAgain, setSearchedAgain] = useState('')
    const [gotQuery, setGotQuery] = useState("");
    // async function handleSubmit(e: any) {
        

    //     e.preventDefault();
       
    //     router.push(`/RecipeApp/foods/search/${gotQuery}`)
    
    
    //   }
    
    async function handleSubmit(e: any) {
        e.preventDefault();
        
        if (gotQuery.trim().length>1) {
            
            router.push(`/RecipeApp/foods/search/${gotQuery}`)
        }

        // e.preventDefault();
       
    
      }
      async function handleQuery() {
         try {
          
        setIsLoading(true)
       
    
          const res = await fetch(
            `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchedQuery}`
          );
          const data = await res.json();
          console.log(data.data.recipes);
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
     useEffect(() => {
        handleQuery();
       
     }, [])
     console.log(result);

     
     
  return (
    <div className='flex flex-col h-[200vh]'>
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
                setGotQuery(e.target.value);
            }}
            placeholder="Search for a food!"
            className="border rounded-xl h-12  p-2 w-full"
          />
          <button
            className="border hover:bg-sky-100 rounded-2xl p-1 transition-all duration-300 px-6 lg:px-10 ml-2 "
            disabled={gotQuery.trim() === ""}
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
      <FoodCard result={result} error={error} isLoading={isLoading}/>

        
        food is {searchedQuery||gotQuery}
    </div>
  )
}

export default Foodsearch