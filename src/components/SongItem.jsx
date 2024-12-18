import React from "react";
import { useContext } from "react";
import { PlayerContext } from "../context/PlayerContext";

export default function SongItem({ id, name, image, desc }) {
  const { playWithId } = useContext(PlayerContext);
  return (
    <div
      onClick={() => playWithId(id)}
      className="min-w-[180px] p-2 px-3 cursor-pointer rounded hover:bg-[#ffffff26]"
    >
      <img src={image} alt="" className="rounded" />
      <p className="font-bold mb-1 mt-2">{name}</p>
      <p className="text-slate-200  text-sm">{desc}</p>
    </div>
  );
}
