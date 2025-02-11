import React from "react";

function SliderBox({ className, image, name, category, oldPrice, price, onClick }) {
  return (
    <div onClick={onClick} className={className}>
      <div className="overflow-hidden w-full rounded-xl">
        <img
          src={image}
          className={"rounded-xl bg-contain transition-all duration-500 ease-in-out hover:scale-125"}
          alt={image}
        />
      </div>
      <h1 className="lg:text-lg md:text-md text-xs truncate">{name}</h1>

      <h2 className="lg:text-md text-sm font-semibold text-gray-400">{category}</h2>
      <div className="flex flex-nowrap gap-2">
        <h1 className="lg:text-lg md:text-md text-sm  text-gray-500 line-through">Rs.{oldPrice}</h1>
        <h1 className="lg:text-lg md:text-md text-sm font-semibold text-red-500">Rs.{price}</h1>
      </div>
    </div>
  );
  s;
}

export default SliderBox;
