"use client";
import { GlobalContext } from "@/context/context";
import React, { useContext } from "react";
import FoodCard from "./FoodCard";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { TbFaceIdError } from "react-icons/tb";
import Car from "@/public/car.jpg"

const Bookmarks = () => {
    const router=useRouter();
  const { favoritesList } = useContext(GlobalContext);
  return(

      <div className="flex flex-col ">
        <nav className="w-full  h-[100px] flex items-center justify-center lg:px-[100px] flex-col ">
          
       

        <div className="max-lg:hidden font-extrabold text-4xl w-full left-0 pt-7 cursor-pointer"
        onClick={()=>router.push('/RecipeApp')}
        >
            Recipe<span className="text-sky-500">App</span>



            </div>
            <div
          className="  font-extrabold text-4xl "
        >
          Book<span className="text-sky-500">marks</span>
        </div>
        </nav>
        {favoritesList.length>0?(
                <FoodCard result={favoritesList} error={null} isLoading={false} />




        ):(
            <div className="  w-full bg-white flex flex-col items-center justify-center mt-10">
            <Image src={Car} alt="Angry Car" className="w-[80%] h-[250px] lg:h-[400px] lg:w-[50%]" />
          <div className="flex items-center p-2 bg-white justify-start border px-3 rounded-md w-[80%] lg:w-[50%] flex-col">
            <div className="flex items-center justify-start w-full">

            <TbFaceIdError className="w-10 h-10 text-orange-500 m-2" />
              
            
            <p className="font-extrabold">No bookmarks found</p>
            </div>
          <p className="text-sm w-full justify-start mt-5">
          We understand your peeky attitude, but until you finally add your first favorite food, this cat wont find anything here! !
              
          </p>
          <div className="flex items-center justify-start w-full pt-[50px]">
          <BsFillInfoCircleFill className="w-5 h-5 mr-1 text-blue-500" />

            Go add some favorites!
          </div>
          </div>
        </div>



        )}
  </div>
)
};

export default Bookmarks;
