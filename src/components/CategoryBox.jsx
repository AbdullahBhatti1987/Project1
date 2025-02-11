import React from "react";

function CategoryBox({ heading, image, onClick }) {
  return (
    <div
      className={
        "relative w-full h-56 gap-24 rounded-xl flex overflow-hidden flex-col justify-center items-center shadow-lg cursor-pointer transition-all duration-300 ease-in-out hover:shadow-sm grayscale-50 hover:grayscale-0 focus:grayscale-0 hover:-translate-y-1"
      }
      onClick={onClick}
    >
      <img src={image} className="w-full h-full bg-contain " alt="" />
      <h1 className="absolute lg:text-4xl md:text-2xl text-xl bg-white opacity-50 uppercase p-2 rounded-lg font-semibold">
        {heading}
      </h1>
    </div>
  );
}

export default CategoryBox;
