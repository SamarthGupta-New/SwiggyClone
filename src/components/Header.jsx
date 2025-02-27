import React from "react";
import logo from "d:/React 25/Feb 25/swiggy/src/assets/logo.png";
import one from "d:/React 25/Feb 25/swiggy/src/assets/signin.ico";
import { IoChevronDownOutline } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";
import { useState, useRef } from "react";
import { IoIosSearch } from "react-icons/io";
import { BiSolidOffer } from "react-icons/bi";
import { IoHelpBuoyOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa6";
import { BiBowlHot } from "react-icons/bi";

const Header = () => {
  const showSideMenu = () => {
    settoggle(true);
    inputRef.current.focus();
  };
  const showsigIn = () => {
    setsignin(true);
  };

  const hideSideMenu = () => {
    settoggle(false);
  };

  const hidesignIn = () => {
    setsignin(false);
  };

  const inputRef = useRef(null);
  const [toggle, settoggle] = useState(false);
  const [signin, setsignin] = useState(false);
  const [signup, setsignup] = useState(false);
  return (
    <>
      <div
        onClick={hideSideMenu}
        className="black-overlay w-full  h-full fixed duration-500"
        style={{
          opacity: toggle || signin ? 1 : 0,
          visibility: toggle || signin ? "visible" : "hidden",
          zIndex: 9999,
        }}
      >
        {/* SideMenu */}
        <div
          onClick={(e) => e.stopPropagation()}
          className="h-full bg-white w-[550px]  absolute duration-300  "
          style={{
            left: toggle ? "0%" : "-100%",
          }}
        >
          <div className="ml-[160px] mt-10">
            <RxCross1 onClick={hideSideMenu} className="my-10 cursor-pointer" />
            <input
              ref={inputRef}
              placeholder="Search for area,street name.."
              className="focus:shadow-xl focus:outline-none border border-gray-200 p-3 w-[320px] "
              type="text"
            />
          </div>
        </div>

        {/* SideMenu */}
        {/* {sign in} */}
        <div
          onClick={(e) => e.stopPropagation()}
          className="h-full bg-white w-[550px]  absolute duration-500  "
          style={{
            right: signin ? "0%" : "-100%",
          }}
        >
          <div className="ml-[30px] ">
            <RxCross1 onClick={hidesignIn} className="my-10 cursor-pointer" />
            <div className="flex relative">
              <div>
                <h1 className="text-3xl my-2 font-semibold">
                  {signup ? "Sign Up" : "Login"}
                </h1>

                <p className="text-sm  font-semibold">
                  or
                  <span
                    onClick={() => {
                      setsignup(!signup);
                    }}
                    className="text-orange-600 ml-1 cursor-pointer"
                  >
                    {signup ? "login in to your account" : "create an account"}
                  </span>
                </p>

                <hr className="w-8 border-[1px] mt-4 mb-9" />
              </div>
              <img
                className="w-[105px] h-[100px] ml-[260px] absolute"
                src={one}
                alt=""
              />
            </div>

            {signup ? (
              <>
                <input
                  placeholder="Phone number"
                  className="  h-16 focus:outline-none border border-gray-200 p-3 w-[360px] "
                  type="text"
                />
                <input
                  placeholder="Name"
                  className="  h-16 focus:outline-none border border-gray-200 p-3 w-[360px] "
                  type="text"
                />
                <input
                  placeholder="Email"
                  className="  h-16 focus:outline-none border border-gray-200 p-3 w-[360px] "
                  type="email"
                />
              </>
            ) : (
              <input
                placeholder="Phone number"
                className="focus:shadow-xl  h-16 focus:outline-none border border-gray-200 p-3 w-[360px] "
                type="text"
              />
            )}
            {signup ? (
              <button className="bg-orange-600 hover:shadow-2xl mt-8 h-12 font-semibold text-white w-[360px]">
                CONTINUE
              </button>
            ) : (
              <button className="bg-orange-600 hover:shadow-2xl mt-8 h-12 font-semibold text-white w-[360px]">
                LOGIN
              </button>
            )}
            <p className="font-semibold text-xs w-[350px] text-gray-600">
              By clicking on Login, I accept the
              <span className="text-black">
                {} Terms & Conditions & Privacy Policy
              </span>
            </p>
          </div>
        </div>
        {/* sign in  */}
      </div>
      <header className="p-3 shadow-2xl">
        <div className="max-w-[1200px] mx-auto flex items-center">
          <div className=" w-[90px]  ">
            <img
              className="w-full transition-transform duration-300 ease-in-out hover:scale-110"
              src={logo}
              alt="swiggy logo"
            />
          </div>
          <div className="flex">
            <p className="">
              <span className="  font-bold border-b-[3px] border-black hover:text-orange-500">
                Other
              </span>
              Bhopal, Madhya Pradesh, India
              <IoChevronDownOutline
                onClick={showSideMenu}
                className="inline text-[0.9rem] cursor-pointer text-orange-500"
              />
            </p>
          </div>
          <nav className="list-none gap-8 ml-auto font-semibold flex items-center">
            <li className="flex items-center gap-2 hover:text-orange-500 ">
              <IoIosSearch className="w-6 h-6" />
              Search
            </li>
            <li className="flex items-center gap-2 hover:text-orange-500">
              <BiSolidOffer className="w-6 h-6" />
              Offers
              <sup className="text-orange-500">NEW</sup>
            </li>
            <li className="flex items-center gap-2 hover:text-orange-500">
              <IoHelpBuoyOutline className="w-6 h-6" />
              Help
            </li>
            <li
              onClick={showsigIn}
              className="flex items-center cursor-pointer gap-2 hover:text-orange-500 "
            >
              <FaRegUser className="w-5 h-5" /> Sign In
            </li>
            <li className="flex items-center gap-2 hover:text-orange-500">
              <BiBowlHot className="w-6 h-6" /> Cart
            </li>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
