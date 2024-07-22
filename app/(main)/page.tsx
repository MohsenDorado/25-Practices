"use client"
import Accordian from "@/components/Accordian";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [typeOfColor, setTypeOfColor] = useState<"hex" | "rgb">("hex");
  const [color, setColor] = useState("#000000");

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
      console.log(hexNumber);
    }
    console.log("Hi");
    setColor(hexNumber);
  }
  return (
    <main>
      <button
      onClick={()=>handleRandomHexColor}
      >
        button

      </button>
      <Link href="/Accordian">
        Accordian
      </Link>
    </main>
  );
}
