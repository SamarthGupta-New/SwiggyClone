import React from "react";
import { bestRestaurants } from "./data";
import { cuisinesNearMe } from "./data";

const TopFooter = () => {
  return (
    <div className="max-w-[1200px] mx-auto ">
      <div className="flex my-3 mx-5 items-center justify-between">
        <div className="font-bold mt-4 text-2xl">
          Best Places to Eat Across Cities
        </div>
      </div>
      <div className="grid gap-3 m-5 grid-cols-2 lg:grid-cols-4">
        {bestRestaurants.map((idx) => {
          return (
            <span
              key={idx.id}
              className="h-auto font-semibold mb-5 w-auto  cursor-pointer  justify-center flex items-center rounded-xl p-4 border border-gray-200"
            >
              {idx.text}
            </span>
          );
        })}
      </div>
      <div className="flex my-3 mx-5 items-center justify-between">
        <div className="font-bold mt-4 text-2xl">Best Cuisines Near Me</div>
      </div>
      <div className="grid gap-3 m-5 grid-cols-2 lg:grid-cols-4">
        {cuisinesNearMe.map((idx) => {
          return (
            <p
              key={idx.id}
              className="h-auto text-wrap font-semibold mb-5 cursor-pointer w-auto justify-center flex items-center rounded-xl p-4 border border-gray-200"
            >
              {idx.text}
            </p>
          );
        })}
      </div>
      <hr className="my-6 text-black border-[1px]  mb-0" />
    </div>
  );
};

export default TopFooter;
