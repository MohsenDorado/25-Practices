"use client";
import Modal from "@/components/Modal";
import React, { useState } from "react";

const ModalPage = () => {
  const [showModal, setShowModal] = useState(false);
  console.log(showModal);

  return (
    <main className="flex items-center justify-center flex-col">
      <nav className="flex items-center justify-between w-full bg-white h-[80px] border-b">
        <div className=" w-full flex items-center justify-between m-8">
          <h1 className="font-bold max-md:hidden ">Shopify For Example</h1>
          {
            showModal?<Modal />:
          <button
            onClick={() => {
              setShowModal((prev) => !prev);
            }}
            className="border-2 border-black rounded-md hover:bg-sky-50 w-[50%] max-md:w-full text-xl h-[50px] max-lg:w-[75%] text-slate-400"
          >
            Search
          </button>
          }
        </div>
      </nav>
    </main>
  );
};

export default ModalPage;
