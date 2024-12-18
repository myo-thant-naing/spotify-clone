import React, { useContext } from "react";
import { songsData } from "../assets/assets/";
import { assets } from "../assets/assets";
import { PlayerContext } from "../context/PlayerContext";

export default function Player() {
  const {
    seeBg,
    seeBar,
    playStatus,
    play,
    pause,
    track,
    time,
    previous,
    next,
    seekSong,
  } = useContext(PlayerContext);
  return (
    <div className="bg-black text-white  h-[13%] flex justify-between items-center px-4">
      <div className="hidden lg:flex item-center gap-4">
        <img className="w-12" src={track.image} alt="" />
        <div>
          <p>{track.name}</p>
          <p>{track.desc.slice(0, 12)}</p>
        </div>
      </div>
      <div className="flex flex-col item-center   gap-1 m-auto">
        <div className="flex gap-4 mx-auto">
          <img
            src={assets.shuffle_icon}
            alt=""
            className="w-4 cursor-pointer"
          />
          <img
            src={assets.prev_icon}
            alt=""
            className="w-4 cursor-pointer "
            onClick={previous}
          />
          {playStatus ? (
            <img
              src={assets.pause_icon}
              alt=""
              className="w-4 cursor-pointer"
              onClick={pause}
            />
          ) : (
            <img
              src={assets.play_icon}
              alt=""
              className="w-4 cursor-pointer"
              onClick={play}
            />
          )}

          <img
            src={assets.next_icon}
            alt=""
            className="w-4 cursor-pointer"
            onClick={next}
          />
          <img src={assets.loop_icon} alt="" className="w-4 cursor-pointer" />
        </div>
        <div className="flex gap-5 items-center">
          <p className="text-sm">
            {time.currentTime.minute}:{time.currentTime.second}
          </p>
          <div
            ref={seeBg}
            onClick={seekSong}
            className="w-[40vw] max-w-[500px]  h-1 bg-[#242424] rounded-full cursor-pointer"
          >
            <hr
              ref={seeBar}
              className="h-1 border-none  w-0  bg-gray-300 rounded-full"
            />
          </div>
          <p className="text-sm">
            {time.totalTime.minute}:{time.totalTime.second}
          </p>
        </div>
      </div>
      <div className="hidden lg:flex item-center gap-2 opacity-75">
        <img src={assets.plays_icon} alt="" className="w-4" />
        <img src={assets.mic_icon} className="w-4" alt="" />
        <img src={assets.queue_icon} className="w-4" alt="" />
        <img src={assets.speaker_icon} className="w-4" alt="" />
        <img src={assets.volume_icon} className="w-4" alt="" />
        <div className="w-20  bg-slate-50 h-1 rounded my-auto "></div>
        <img src={assets.mini_player_icon} className="w-4" alt="" />
        <img src={assets.clock_icon} className="w-4" alt="" />
      </div>
    </div>
  );
}
