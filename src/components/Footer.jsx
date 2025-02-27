import React from "react";
import playstore from "../assets/play_store.avif";
import appstore from "../assets/app_store.avif";
import swiggyfull from "../assets/full.png";
import { FaAngleDown } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
const Footer = () => {
  return (
    <div className=" bg-gray-200">
      <div className="max-w-[1200px] mx-auto h-[145px] lg:flex    ">
        <div className="font-[700] h-[52px] items-center flex mt-12 ml-18 mx-5 text-[22px]">
          For better experience,download the Swiggy app now
        </div>
        <div className="lg:m-2 justify-center lg:mt-12 gap-6 flex">
          <img className="w-[197] h-[64px]" src={playstore} alt="playstore" />
          <img className="w-[197] h-[64px]" src={appstore} alt="appstore" />
        </div>
      </div>
      <div className="max-w-[1200px] mx-auto h-auto">
        <div className="main flex flex-wrap lg:justify-evenly">
          <div className="logo-div">
            <img className="w-[159px] h-[48px]" src={swiggyfull} alt="swiggy" />
            <p>© 2025 Swiggy Limited</p>
          </div>
          <div className="company">
            <h1 className="text-lg font-[600]">Company</h1>
            <ul className="text-[16px] gap-1 text-gray-500 font-semibold">
              <li className="my-3">About Us</li>
              <li className="my-3">Swiggy Corporate</li>
              <li className="my-3">Careers</li>
              <li className="my-3">Team</li>
              <li className="my-3">Swiggy One</li>
              <li className="my-3">Swiggy Instamart</li>
              <li className="my-3">Swiggy Dineout</li>
              <li className="my-3">Swiggy Genie</li>
            </ul>
          </div>
          <div className="Contact us + Legal">
            <h1 className="text-lg font-[600]">Contact us</h1>
            <ul className="text-[16px] gap-1 text-gray-500 font-semibold">
              <li className="my-3">Help & Support</li>
              <li className="my-3">Partner with us</li>
              <li className="my-3">Ride with us</li>
            </ul>
            <div className="Legal mt-15 ">
              <h1 className="text-lg font-[600]">Legal</h1>
              <ul className="text-[16px]  text-gray-500 font-semibold">
                <li className="my-3">Tears & Condtions</li>
                <li className="my-3">Cookie Policy</li>
                <li className="my-3">Privacy Policy</li>
                <li className="my-3">Investor Relations</li>
              </ul>
            </div>
          </div>
          <div className="company">
            <h1 className="text-lg font-[600]">Available in:</h1>
            <ul className="text-[16px] gap-1 text-gray-500 font-semibold">
              <li className="my-3">Banglore</li>
              <li className="my-3">Indore</li>
              <li className="my-3">Jabalpur</li>
              <li className="my-3">Hyderabad</li>
              <li className="my-3">Delhi</li>
              <li className="my-3">Mumbai</li>
              <li className="my-3">Pune</li>
              <li className="flex gap-1 border text-[13px] rounded-lg p-1 border-gray-500 items-center">
                678 cities <FaAngleDown />
              </li>
            </ul>
          </div>
          <div className="company">
            <div>
              <h1 className="text-lg font-[600]">Life at Swiggy</h1>
              <ul className="text-[16px] gap-1 text-gray-500 font-semibold">
                <li className="my-3">Explore with Swiggy</li>
                <li className="my-3">Swiggy News</li>
                <li className="my-3">Snackables</li>
              </ul>
            </div>
            <div className="mt-15">
              <h1 className="text-lg font-[600]">Social Links</h1>
              <div className="flex mt-2 gap-3">
                <FaLinkedin />
                <FaInstagram />
                <FaFacebookF />
                <FaPinterest />
                <FaTwitter />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
