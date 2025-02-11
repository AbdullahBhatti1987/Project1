import React, { useEffect, useRef, useState, useTransition } from "react";
import data from "../content/data";
import RoundButton from "./RoundButton";
import Blog from "./Blog";

function Blogs() {
  const [number, setNumber] = useState(0);

  const maxLength = data.blogs.length;


  const hanldePrevious = () => {

        setNumber(number < 1 ? data.blogs.length - 1 : number - 1);
  };
  const hanldeNext = () => {
    setNumber(number >= data.blogs.length - 1 ? 1 : number + 1);
  };


  useEffect(() => {
    setInterval(() => {
      hanldeNext();
    }, 5000);
  }, []);

  return (
    <div className="w-full mx-auto flex flex-col gap-6 py-6">
      <h1 className="lg:text-4xl">Blogs</h1>

      <div className="flex gap-4 justify-center items-center overflow-hidden">
        <RoundButton text={"P"} className={"absolute ml-4 left-0"} onClick={hanldePrevious} />
        <Blog  className={"translate-transform duration-1000 ease-in-out"} title={data.blogs[number].title} message={data.blogs[number].message} image={data.blogs[number].image}/>
        <RoundButton text={"N"} className={"absolute mr-4 right-0"} onClick={hanldeNext} />
      </div>
    </div>
  );
}

export default Blogs;
