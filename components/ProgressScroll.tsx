"use client";

import { useEffect, useState } from "react";
import { ThreeDots } from "react-loader-spinner";

const ProgressScroll = () => {
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [allData, setAllData] = useState<any[]>([]);
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const FetchApi = async () => {
    try {
      setLoading(true);
      const res = await fetch("https://dummyjson.com/products?limit=100");
      const data = await res.json();
      if (data.products) {
        setAllData((prev) => [...prev, ...data.products]);
        console.log(data);
      }
    } catch (error) {
      setErrorMessage(String(error));
    } finally {
      setLoading(false);
    }
  };
  const handleScrollPercentage = () => {
    // console.log(
    //   document.body.scrollTop,
    //   document.documentElement.scrollTop,
    //   document.documentElement.scrollHeight,
    //   document.documentElement.clientHeight
    // );
    const scrolled =
      document.body.scrollTop || document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    setScrollPercentage(Math.floor((scrolled / height) * 100));
  };
  useEffect(() => {
    FetchApi();
  }, []);
  useEffect(() => {
    window.addEventListener("scroll", handleScrollPercentage);
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);
  console.log(scrollPercentage);
  //
  return (
    <div className="flex items-center justify-center flex-col">
      <div className="bg-white w-[100%] sticky top-0 h-[50px] flex items-center justify-between border-b">
          <p className="font-extrabold mx-4">Store</p>
          <input placeholder="Search" className="w-[30%] border rounded-xl py-1 px-5 mx-4"></input>

        <div
          style={{ width: `${scrollPercentage}%` }}
          className={`bg-red-800   h-[6px] bottom-0 absolute  z-50`}
        ></div>
      </div>
      <h1 className="text-7xl font-extrabold my-10 w-full flex items-center justify-center text-center">
        Scroll Now
      </h1>
      <div className="flex items-center justify-center flex-col">
        {loading && <ThreeDots />}
        <div className="flex flex-col items-center justify-center">
          {allData.map((i) => (
            <div key={i} className="">
              {i.title}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProgressScroll;
