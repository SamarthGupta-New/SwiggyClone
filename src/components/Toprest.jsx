import React from "react";
import { useState, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { imageData2 } from "./data";
import Card from "./Card";

const Toprest = () => {
  const [slide, setSlide] = useState(0);

  const toggleplus = () => {
    if (slide >= 0 && slide < imageData2.length - 8) setSlide(slide + 1);
  };

  const toggleminus = () => {
    if (slide > 0) setSlide(slide - 1);
  };

  return (
    <div style={{ zIndex: 9998 }}>
      <div className="max-w-[1200px] mx-auto ">
        <div className="flex my-3  items-center justify-between">
          <div className="font-semibold text-xl">
            Top Restaurant Chains in Bhopal
          </div>
          <div className="flex gap-3">
            <div
              onClick={toggleminus}
              className="cursor-pointer flex justify-center items-center w-[30px] h-[30px] rounded-full bg-gray-300"
            >
              <FaArrowLeft />
            </div>
            <div
              onClick={toggleplus}
              className="cursor-pointer flex justify-center items-center w-[30px] h-[30px] rounded-full bg-gray-300"
            >
              <FaArrowRight />
            </div>
          </div>
        </div>
        <div className=" gap-5 flex  items-wrap overflow-hidden my-8">
          {imageData2.map((d, i) => {
            return <Card slide={slide} {...d} key={i} />;
          })}
        </div>
        <hr className="my-6 text-gray-200 border-[1px]" />
      </div>
    </div>
  );
};

export default Toprest;
