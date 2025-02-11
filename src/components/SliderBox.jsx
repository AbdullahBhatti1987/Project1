import React from "react";

function SliderBox({ image, name, category, price, onClick }) {
  return (
    <div onClick={onClick} className="lg:w-[250px] md:w-[150px] w-[100px] transition-all duration-200 ease-in-out hover:grayscale-100 hover:scale-95">
      <img src={image} className={"rounded-xl bg-contain"} alt={image} />
      <h1 className="lg:text-lg md:text-md text-xs">{name}</h1>
      <h2 className="lg:text-md text-sm font-semibold text-gray-400">{category}</h2>
      <h1 className="lg:text-lg md:text-md text-sm font-bold text-red-600">${price}</h1>
    </div>
  );s
}

export default SliderBox;
