import React, { useEffect, useRef, useState } from "react";
import data from "../content/data";
import RoundButton from "./RoundButton";
import Blog from "./Blog";

function Blogs() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [ItemWidth, setItemWidth] = useState(500);

  const maxLength = (data.blogs.data.length - 2) * ItemWidth;
  const minLength = 0;

  const containerRef = useRef();

  let newScrollPosition = 0;
  const handleScroll = (scrollAmount) => {
    if (containerRef.current) {
      newScrollPosition = scrollPosition + scrollAmount;
      const boundedScrollPosition = newScrollPosition;
      console.log("boundedScrollPosition=>", boundedScrollPosition)
      setScrollPosition(boundedScrollPosition);
      containerRef.current.scrollTo({
        left: boundedScrollPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="w-full mx-auto flex flex-col gap-6 ">
      <h1 className="lg:text-4xl">{data.blogs.heading}</h1>
      <div className="w-full flex flex-nowrap items-center">
        <RoundButton
          text={"<"}
          className={"absolute ml-4 left-0 md:visible invisible"}
          onClick={() => {
            handleScroll(-ItemWidth);
          }}
          disabled={scrollPosition == minLength}
        />
        <div
          className="w-full h-full transition-all duration-200 ease-in-out scroll-smooth md:overflow-x-hidden overflow-x-scroll"
          ref={containerRef}
        >
          <div className="w-fit flex flex-nowrap gap-6">
            {data.blogs.data.map((item, index) => (
              <Blog
                key={index}
                title={item.title}
                message={item.message}
                image={item.image}
                className={"xl:w-[680px] lg:w-[470px] md:w-[340px] w-[370px]"}
              />
            ))}
          </div>
        </div>
        <RoundButton
          text={">"}
          className={"absolute mr-4 right-0 md:visible invisible"}
          onClick={() => {
            handleScroll(ItemWidth);
          }}
          disabled={scrollPosition == maxLength}
        />
      </div>
    </div>
  );
}

export default Blogs;
