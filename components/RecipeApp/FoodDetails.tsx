"use client";
import { GlobalContext } from "@/context/context";
import useBookmarkList from "@/hooks/useBookmarkList";
import  Image from "next/image";
import React, { useContext, useEffect, useState } from "react";

import { BsBookmarkHeart, BsBookmarkHeartFill, BsBookmarkStar, BsBookmarkStarFill } from "react-icons/bs";

const FoodDetails = ({ id }: { id: any }) => {
    const { handleAddToFavorite,
      favoritesList,
  } = useContext(GlobalContext);

  

  const [data, setData] = useState<any>([]);
  async function fetchData() {
    try {

      const res = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
      );
      const fetcheddata = await res.json();
      console.log(fetcheddata);
      if (fetcheddata.data.recipe) {
        setData(fetcheddata.data.recipe);
        console.log("Hi",fetcheddata.data.recipe);
      }
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchData();
    console.log("data::::::::::",{data});
  }, [id]);
  console.log(`list:======${favoritesList}`);
  console.log("final log==",{data});
  
  
  return (
    <div className="flex flex-col items-center justify-center">
        <div className="w-full md:w-[60%] h-[400px] lg:w-[40%] relative ">
        {favoritesList && favoritesList.length > 0 && favoritesList.findIndex(
          (item:any) => item.id === data.id
        ) !== -1
        ? (<BsBookmarkHeartFill  
          onClick={()=>handleAddToFavorite(data)}
    
    className="absolute h-10 w-10 transition-all duration-300 top-2 right-2 hover:scale-105 cursor-pointer" />)
        :         (<BsBookmarkHeart 
        onClick={()=>handleAddToFavorite(data)}
  
  className="absolute h-10 w-10 transition-all duration-300 top-2 right-2 hover:scale-105 cursor-pointer" />)}


        <p className="absolute bottom-0 text-center w-full px-10 font-bold max-md:p-3 md:p-5  tracking-tight bg-white bg-opacity-60  justify-center flex items-center">
        {data.title}       


      </p>
      <div className={`absolute top-0 left-0 p-2 m-3 rounded-2xl ${data.cooking_time<70&& "bg-green-400"} ${data.cooking_time>=70&&data.cooking_time<120&& "bg-orange-500"} ${data.cooking_time>=120&&"bg-red-600"} `}>
        {data.cooking_time}Minutes

      </div>
      <Image
        src={data && data.image_url}
        width={1000}
        height={1000}
        alt={data.title}
        className={`w-full h-full md:rounded-lg`}
      />
  
     
        </div>
        

        
    </div>
  );
};

export default FoodDetails;
