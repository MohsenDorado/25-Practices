import Image from "next/image";
import React from "react";
import Loading from "@/public/Loading.webp";
import { RiSignalWifiErrorLine } from "react-icons/ri";
import { BsFillInfoCircleFill } from "react-icons/bs";
import Car from "@/public/car.jpg"
import { TbFaceIdError } from "react-icons/tb";
import Link from "next/link";

const FoodCard = ({
  result,
  error,
  isLoading,
}: {
  result: any;
  error: string | null;
  isLoading: boolean;
}) => {
  return (
    <div className=" items-center justify-center md:px-[100px] lg:px-[150px] max-md:flex ">
      {isLoading && (
        <div className="grid  mt-10 w-full">
          <div className="grid-cols-1 shadow-md rounded-xl ">
            <div className="flex justify-between items-center">
              <div>
                <Image src={Loading} alt="Food" width={40} height={40} />
                <p>Publisher</p>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      )}
      {/* {error === "Failed to fetch" && (
        <div className="text-black font-bold max-md:w-[60%] rounded-md bg-white flex flex-col border items-center justify-center mt-10">
          <div className="flex items-center p-2">
            <p>Check your network connection and try again!</p>
            <RiSignalWifiErrorLine className="w-10 h-10 text-red-500 m-2" />
          </div>
        </div>
      )} */}
      {error!==null&& (
        
        <div className="  w-full bg-white flex flex-col items-center justify-center mt-10">
            <Image src={Car} alt="Angry Car" className="w-[80%] h-[250px] lg:h-[400px] lg:w-[50%]" />
          <div className="flex items-center p-2 bg-white justify-start border px-3 rounded-md w-[80%] lg:w-[50%] flex-col">
            <div className="flex items-center justify-start w-full">
              {error=== "No item Found!" &&

            <TbFaceIdError className="w-10 h-10 text-orange-500 m-2" />
              }
               {error=== "Failed to fetch" &&

<RiSignalWifiErrorLine className="w-10 h-10 text-red-500 m-2" />
  }

            <p className="font-extrabold">{error=== "No item Found!" &&"Food not found"}{error==="Failed to fetch"&&"Connection failed"}</p>
            </div>
          <p className="text-sm w-full justify-start mt-5">
          {error=== "Failed to fetch" &&
          "You should not use an ip blocked by our API or any weak ip changers! Or maybe just check your connectivity again!"
          }        
          {error=== "No item Found!" &&
          "You must search an ingredient or even an specific kind of food or drink"}    
          </p>
          <div className="flex items-center justify-start w-full pt-[50px]">
          <BsFillInfoCircleFill className="w-5 h-5 max-sm:w-8 max-sm:h-8 mr-1 max-sm:-translate-y-3 text-blue-500" />

            Suggested fix: {error=== "No item Found!" &&"Change the search input!"}{error=== "Failed to fetch" &&"Use a strong ip changer if your ip in blocked"}
          </div>
          </div>
        </div>
        
       
      )}
      {result?.data?.recipes.length>0 && (
        <div className="grid-cols-2 grid lg:grid-cols-3 xl:grid-cols-4 mt-10 w-full px-2 max-md:flex flex-col">
          {result.data.recipes.map((food: any) => (
            <Link href="/" key={food.id} className="  h-[350px] max-md:h-[200px] border  hover:shadow-xl transition-all duration-300 ">
              <div className="flex flex-col max-md:flex-row justify-between items-center">
                <div className="w-full p-6">
                  <Image
                    src={food.image_url}
                    alt="Food"
                    width={300}
                    height={300}
                  className="w-full max-md:w-[120px] max-md:h-[120px] h-[200px]  rounded-3xl"
                  />
                </div>
                <div className="w-full md:flex md:flex-col md:px-5">
                  <p className="font-bold ">


                  {food.title}
                  </p>
                  <p className="font-light text-sm">
                {food.publisher}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default FoodCard;
