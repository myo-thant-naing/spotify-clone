import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <>
      <div className="w-full flex justify-between items-center font-semibold">
        <div className="flex items-center gap-2">
          <img
            src={assets.arrow_left}
            alt=""
            className="w-8  bg-black rounded-2xl cursor-pointer p-2 hover:opacity-75"
            onClick={() => navigate(-1)}
          />
          <img
            src={assets.arrow_right}
            alt=""
            className="w-8  bg-black rounded-2xl cursor-pointer p-2 hover:opacity-75"
            onClick={() => navigate(+1)}
          />
        </div>
        <div className="flex items-center gap-4">
          <p
            className="bg-white text-black text-[15px] px-4 py-1 rounded-2xl hidden md:block cursor-pointer hover:scale-105"
            title="Upgate to premium"
          >
            Explore Premium
          </p>
          <p className=" text-white  text-[15px] px-3 py-1 rounded-2xl  cursor-pointer hover:scale-105">
            Install App
          </p>
          <div
            className="flex justify-center items-center bg-[#242424] w-12 h-12 rounded-full hover:scale-105 opacity-75 "
            title="Myo Thant Naing"
          >
            <p className="bg-orange-500 text-black w-7 h-7  rounded-full flex items-center justify-center">
              M
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-2 mt-4">
        <p className="bg-white text-black px-4 py-1 rounded-2xl cursor-pointer">
          All
        </p>
        <p className="bg-black  px-4 py-1 rounded-2xl cursor-pointer">Music</p>
        <p className="bg-black  px-4 py-1 rounded-2xl cursor-pointer">
          podcasts
        </p>
      </div>
    </>
  );
}
