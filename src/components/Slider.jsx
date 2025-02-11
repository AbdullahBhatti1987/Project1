import React, { useRef, useState } from "react";
import data from "../content/data";
import SliderBox from "./SliderBox";
import RoundButton from "./RoundButton";

function Slider() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [ItemWidth, setItemWidth] = useState(250);

  const maxLength = (data.slider.data.length - 2) * ItemWidth;
  const minLength = 0;

  const containerRef = useRef();

  let newScrollPosition = 0;
  const handleScroll = (scrollAmount) => {
    if (containerRef.current) {
      newScrollPosition = scrollPosition + scrollAmount;
      const boundedScrollPosition = newScrollPosition;
      setScrollPosition(boundedScrollPosition);
      containerRef.current.scrollTo({
        left: boundedScrollPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="w-full mx-auto flex flex-col gap-6 ">
      <h1 className="lg:text-4xl">{data.slider.heading}</h1>
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
          <div className="w-fit flex flex-nowrap gap-4">
            {data.slider.data.map((item, index) => (
              <SliderBox
                key={index}
                image={item.image}
                name={item.name}
                category={item.category}
                price={item.price}
                screen={ItemWidth}
                onClick={() => console.log(item.slug)}
                className={"transition-all ease-in-out duration-100"}
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

export default Slider;
