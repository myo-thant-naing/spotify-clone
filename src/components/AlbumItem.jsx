import React from "react";
import { useNavigate } from "react-router-dom";

export default function AlbumItem({ id, name, image, desc }) {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/album/${id}`)}
      className="min-w-[180px] p-2 px-3 cursor-pointer rounded hover:bg-[#ffffff26]"
    >
      <img src={image} alt="" className="rounded" />
      <p className="font-bold mb-1 mt-2">{name}</p>
      <p className="text-slate-200  text-sm">{desc}</p>
    </div>
  );
}
