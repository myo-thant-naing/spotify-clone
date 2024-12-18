import React from "react";
import Navbar from "./Navbar";
import AlbumItem from "./AlbumItem";
import { albumsData } from "../assets/assets";
import { songsData } from "../assets/assets";
import SongItem from "./SongItem";

export default function DisplayHome() {
  return (
    <>
      <Navbar />
      <div className="mb-4">
        <h1 className="my-5 text-2xl font-bold ">Featured Charts</h1>
        <div className="flex overflow-auto">
          {albumsData.map((item, index) => (
            <AlbumItem
              key={index}
              id={item.id}
              name={item.name}
              image={item.image}
              desc={item.desc}
            />
          ))}
        </div>
      </div>
      <div className="mb-4">
        <h1 className="my-5 text-2xl font-bold ">Today's biggest hits</h1>
        <div className="flex overflow-auto">
          {songsData.map((item, index) => (
            <SongItem
              key={index}
              id={item.id}
              name={item.name}
              image={item.image}
              desc={item.desc}
            />
          ))}
        </div>
      </div>
    </>
  );
}
