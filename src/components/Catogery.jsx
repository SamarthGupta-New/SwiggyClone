import React, { useState, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { imageData } from "./data";

const Catogory = () => {
  //   const [categories, setCategories] = useState([]);
  const [slide, setSlide] = useState(0);

  //   const fetchcategory = async () => {
  //     const response = await fetch(url);
  //     const data = await response.json();
  //     setCategories(data);
  //   };
  const toggleplus = () => {
    if (slide >= 0 && slide < imageData.length - 8) setSlide(slide + 1);
  };

  const toggleminus = () => {
    if (slide > 0) setSlide(slide - 1);
  };

  return (
    <div className="max-w-[1200px] mx-auto ">
      <div className="flex my-3  items-center justify-between">
        <div className="font-semibold text-xl">What's on your Mind?</div>
        <div className="flex gap-3">
          <div
            onClick={toggleminus}
            className="cursor-pointer flex justify-center items-center w-[30px] h-[30px] rounded-full bg-gray-300"
          >
            <FaArrowLeft />
          </div>
          <div
            className="cursor-pointer flex justify-center items-center w-[30px] h-[30px] rounded-full bg-gray-300"
            onClick={toggleplus}
          >
            <FaArrowRight />
          </div>
        </div>
      </div>
      <div className="flex overflow-hidden z-1">
        {imageData.map((item) => (
          <div
            style={{
              transform: `translateX(-${slide}00%)`,
            }}
            className="flex w-[150px] shrink-0 duration-500 "
            key={item.id}
          >
            <img src={item.image} alt={`Image ${item.id}`} />
          </div>
        ))}
      </div>
      <hr className="my-6 text-gray-200 border-[1px]" />
    </div>
  );
};

export default Catogory;
