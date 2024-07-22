"use client";
import { useState } from "react";

const RandomColor = () => {
  const [typeOfColor, setTypeOfColor] = useState<"Hex" | "RGB">("Hex");
  const [color, setColor] = useState("#FFFFF");

  const randomColorUtility = (length: number) => {
    return Math.floor(Math.random() * length);
  };


  function handleRandomHexColor() {
    const hex = [
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
    ]
    let hexNumber = "#";
    for (let i = 0; i < 6; i++) {
      hexNumber += hex[randomColorUtility(hex.length)];
    }
    setColor(hexNumber);
  }
  const handleRandomRgbColor = () => {
    let r=randomColorUtility(256);
    let g=randomColorUtility(256);
    let b=randomColorUtility(256);

    setColor(`rgb(${r},${g},${b})`)


  };

  return (
    <div
      style={{
        background: color,
      }}
      className="h-[100vh] w-[100vw]"
    >
      <div className="flex items-center justify-center gap-x-16">
        <button
          onClick={() => {
            setTypeOfColor("Hex");
          }}
          className="border-0 hover:bg-sky-400 transition-all duration-500 font-bold  bg-sky-300 rounded-xl p-2 mt-2"
        >
          Set Hex Color
        </button>
        <button
          onClick={() => {
            setTypeOfColor("RGB");
          }}
          className="border-0 hover:bg-sky-400 transition-all duration-500 font-bold  bg-sky-300 rounded-xl p-2 mt-2"
        >
          Set RGB Color
        </button>
        <button
          onClick={
            typeOfColor === "Hex" ? handleRandomHexColor : handleRandomRgbColor}
          
          className="border-0 hover:bg-sky-400 transition-all duration-500 font-bold  bg-sky-300 rounded-xl p-2 mt-2"
        >
          Generate Color
        </button>
      </div>
      <div className="flex items-center justify-center text-6xl font-extrabold mt-[100px] ">
        {typeOfColor}
      </div>
      <div className="text-3xl flex items-center justify-center mt-[300px] font-bold">
        {color}


      </div>
    </div>
  );
};

export default RandomColor;
