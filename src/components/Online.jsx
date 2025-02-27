import React from "react";
import { imageData2 } from "./data";
import Card from "./Card2";

const Online = () => {
  return (
    <div>
      <div className="">
        <div className="max-w-[1200px] mx-auto ">
          <div className="flex my-3  items-center justify-between">
            <div className="font-semibold text-xl">
              Restaurant with online food delivery in Bhopal
            </div>
          </div>
          <div className=" gap-1 grid-cols-2 md:grid-cols-3 grid lg:grid-cols-4 lg:gap-2">
            {imageData2.map((d, i) => {
              return <Card {...d} key={i} />;
            })}
          </div>
          <hr className="my-6 text-gray-200 border-[1px]" />
        </div>
      </div>
    </div>
  );
};

export default Online;
