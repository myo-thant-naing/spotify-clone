import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

export default function Sidebar() {
  const navigate = useNavigate();
  return (
    <div className="w-[25%] h-full p-2 gap-2 flex-col hidden lg:flex text-white">
      <div className="flex flex-col justify-around h-[15%]  rounded bg-[#121212]">
        <div
          className="flex gap-3 items-center pl-8 cursor-pointer"
          onClick={() => navigate("/")}
        >
          <img src={assets.home_icon} alt="" className="w-6" />
          <p className="font-bold">Home</p>
        </div>

        <div className="flex gap-3 items-center pl-8 cursor-pointer">
          <img src={assets.search_icon} alt="" className="w-6" />
          <p className="font-bold">Search</p>
        </div>
      </div>
      <div className="bg-[#121212] h-[85%] rounded">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center gap-3">
            <img src={assets.stack_icon} alt="" className="w-6" />
            <p className="font-semibold">Your Library</p>
          </div>
          <div className="flex items-center gap-3">
            <img src={assets.arrow_icon} alt="" className="w-5" />
            <img src={assets.plus_icon} alt="" className="w-5" />
          </div>
        </div>
        <div className="p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start pl-2 gap-1 justify-start">
          <h1>Create your first playlist</h1>
          <p className="font-light">It's easy, we'll help you</p>
          <button className="px-4 py-1.5 text-[15px] bg-white text-black rounded-full mt-4">
            Create playlist
          </button>
        </div>
        <div className="p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start pl-2 gap-1 justify-start mt-4">
          <h1>let's find someone podcasts to follow</h1>
          <p className="font-light">we'll keep you update on new episodes</p>
          <button className="px-4 py-1.5 text-[15px] bg-white text-black rounded-full mt-4">
            Browse podcasts
          </button>
        </div>
      </div>
    </div>
  );
}
