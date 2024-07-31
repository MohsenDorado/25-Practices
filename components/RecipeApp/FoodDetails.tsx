"use client";
import  Image from "next/image";
import React, { useEffect, useState } from "react";
import { BsBookmarkStar } from "react-icons/bs";

const FoodDetails = ({ id }: { id: any }) => {
  const [data, setData] = useState<any>([]);
  async function fetchData() {
    try {
      console.log(`https://forkify-api.herokuapp.com/api/v2/recipes/${id}`);

      const res = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
      );
      const fetcheddata = await res.json();
      console.log(fetcheddata);
      if (fetcheddata.data.recipe) {
        setData(fetcheddata.data.recipe);
        console.log(fetcheddata.data.recipe);
      }
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchData();
    console.log(`data::::::::::${data}`);
  }, [id]);

  return (
    <div className="flex flex-col items-center justify-center">
        <div className="w-full md:w-[60%] h-[400px] lg:w-[40%] relative ">
        <BsBookmarkStar className="absolute h-10 w-10 transition-all duration-300 top-2 right-2 hover:scale-105 cursor-pointer" />

        <p className="absolute bottom-0 text-center w-full px-10 font-bold max-md:p-3 md:p-5  tracking-tight bg-white bg-opacity-60  justify-center flex items-center">
        {data.title}       


      </p>
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
