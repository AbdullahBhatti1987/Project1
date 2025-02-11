import React, { useEffect, useState } from "react";
import data from "../content/data";
import RoundButton from "./RoundButton";

function Banner() {
  const [number, setNumber] = useState(1);

  const hanldePrevious = () => {
    setNumber(number < 1 ? data.banner.images.length : number - 1);

  };
  const hanldeNext = () => {
    setNumber(number >= data.banner.images.length ? 1 : number + 1);
  };

  useEffect(() => {
    setInterval(() => {
      hanldeNext();
    }, 5000);
  }, []);

  return (
    <div className="relative m-auto h-fit flex w-full justify-start items-center overflow-visible">
      <RoundButton text={"P"} className={"absolute ml-4 left-0"} onClick={hanldePrevious} />
      <img
        className={"w-full bg-contain transition-opacity ease-in-out lg:h-[500px] md:h[400px] h-[300px]"}
        src={data.banner.images[number - 1]}
        alt=""
      />
      <div
        className={
          "absolute z-30 left-12 flex flex-col flex-wrap lg:gap-6 md:gap-4 gap-2 p-6 rounded-lg justify-center items-center ms-6 lg:w-1/2 md:w-1/2 sm:w-1/2 w-2/3 bg-white opacity-85"
        }
      >
        <h3 className="text-red-800 text-start w-full font-bold lg:text-4xl md:text-2xl sm:text-lg">
          {data.banner.promotion}
        </h3>
        <h1 className="w-full lg:text-4xl md:text-2xl sm:text-lg">{data.banner.title}</h1>
        <p className={"lg:text-xl md:text-md text-xs"}>{data.banner.statement}</p>
      </div>

      <RoundButton
        text={"N"}
        className={"absolute mr-4 right-0"}
        onClick={hanldeNext}
      />
    </div>
  );
}

export default Banner;
