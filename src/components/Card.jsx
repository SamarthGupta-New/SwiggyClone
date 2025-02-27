import React from "react";
import { MdStars } from "react-icons/md";
import { useState } from "react";
const Card = (props) => {
  const [hover, setHover] = useState(false);
  return (
    <>
      <div
        style={{
          transform: `translateX(-${props.slide * 100}%) scale(${
            hover ? 0.95 : 1
          })`,
          transition: "transform 0.2s ease-in-out",
        }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        className="w-[273px] shrink-0 grow "
      >
        <div className="h-[182px] relative rounded-[15px] overflow-hidden">
          <img
            className="object-cover w-full h-full"
            src={props.image}
            alt=""
          />
          <div className="image-overlay text-lg  text-wrap font-bold p-2 flex items-end  text-white absolute w-full h-full top-0 ">
            {props.offer}
          </div>
        </div>
        <div className="px-2 font-bold text-lg ">{props.title}</div>
        <div className="px-2 flex items-center text-lg gap-1 ">
          <MdStars className=" " />
          {props.rating}•{" "}
          <span className="font-semibold">
            {props.minTime}-{props.maxTime}mins
          </span>
        </div>
        <div className="px-2 text-gray-600">{props.name}</div>
        <div className="px-2 text-gray-600">{props.place}</div>
      </div>
    </>
  );
};

export default Card;
