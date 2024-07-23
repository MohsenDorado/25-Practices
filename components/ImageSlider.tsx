"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import { GoDotFill } from "react-icons/go";

const ImageSlider = ({ url, limit }: { url: string; limit: string }) => {
  const [images, setImages] = useState<any[]>([]);
  const [currentSlided, setCurrentSlided] = useState(0);
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (url !== null) {
      fetchImages(url);
    }
  }, []);

  async function fetchImages(url: string) {
   
    try {
      setLoading(true);
      const res = await fetch(url);
      const data = await res.json();
      if (data !== null || undefined) {
        setImages(data);
        setLoading(false);
      }
    } catch (error: any) {
      setLoading(false);
      setErrorMessage(error.message);
    }
  }

  if (loading) {
    return <div>Data Loading...</div>;
  }
  if (errorMessage) {
    return <div>{errorMessage}</div>;
  }
  console.log(images);
  const handlePrevious = () => {
    setCurrentSlided(
      currentSlided === 0 ? images.length - 1 : currentSlided - 1
    );
  };
  const handleNext = () => {
    setCurrentSlided(
      currentSlided === images.length - 1 ? 0 : currentSlided + 1
    );
  };
  return (
    <div className="flex items-center justify-center select-none">

    <div className="container">
      <BsArrowLeftCircleFill
        onClick={handlePrevious}
        className="arrow arrow-left"
      />
      {images && images.length
        ? images.map((imageItem, index) => (
            <img
              key={imageItem.id}
              alt={imageItem.download_url}
              src={imageItem.download_url}
              className={
                currentSlided === index
                  ? "current-image"
                  : "current-image hide-current-image"
              }
            />
          ))
        : null}
      <BsArrowRightCircleFill
        onClick={handleNext}
        className="arrow arrow-right"
      />
      <span className="circle-indicators">
        {images && images.length
          ? images.map((_,index) => (
              <GoDotFill
                key={index}
                color={currentSlided===index?"#ffffff":"#b7b5bf"}
                className="cursor-pointer size-10"
                // className={`${currentSlided===index?"":""}`}
                // className={
                //   currentSlided === index
                //     ? "current-indicator"
                //     : "current-indicator inactive-indicator"
                // }
                onClick={() => setCurrentSlided(index)}
              ></GoDotFill>
            ))
          : null}
      </span>
    </div>
    </div>

  );
  
};

export default ImageSlider;
