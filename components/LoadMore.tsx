"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { IoRefresh } from "react-icons/io5";
import { ThreeDots } from "react-loader-spinner";

const LoadMore = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState<any[]>([]);
  const [count, setCount] = useState(0);
  const [disableButton, setDisableButton] = useState(false)

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const res = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          count === 0 ? 0 : count * 20
        }`
      );
      const result = await res.json();
      console.log(result);
      if (result && result.products && result.products.length > 0) {
        setProducts((prev) => [...prev, ...result.products]);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchProducts();
  }, [count]);
  useEffect(() => {
    if (products&&products.length>60) {
        setDisableButton(true)

        
    }
  
  }, [products])
  

  return (
    <main>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {products.map((product, index) => (
          <div
            key={index}
            className="shadow-xl flex items-center justify-center flex-col bg-slate-200 m-4"
          >
            <Image
              alt={product.title}
              width={100}
              height={100}
              src={product.images[0]}
              className="fill-current max-w-[100px] max-h-[100px] cursor-pointer select-none"
            />
            <div className="font-bold mx-2">{product.title}</div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center mt-3 flex-col">
        {
            disableButton&&
            <p className="font-bold flex items-center justify-center">You have reached data limit!</p>
        }
        {!loading && (
            <button disabled={disableButton}>

          <IoRefresh
            onClick={() => setCount(count + 1)}
            size={50}
            color={`${disableButton?"#c5c8cd":"#588e12"}`}
            className="disabled:opacity-0 cursor-pointer hover:rotate-45 transition-all duration-300"
            />
            </button>
        )}

        {loading ? <ThreeDots /> : ""}
      </div>
    </main>
  );
};

export default LoadMore;
