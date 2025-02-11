import React, { useEffect, useState } from "react";
import data from "../content/data";
import Button from "./Button";
import RoundButton from "./RoundButton";

function Header() {
  const [menu, setMenu] = useState(false);
  const screenWidth = window.screen.width;

  const handleMenu = () => {
    {menu ? setMenu(false) : setMenu(true)}
    console.log("menu=>", menu);
  };

  return (
    <div className="grid grid-cols-12 justify-between">
      <div className="grid md:col-span-4  md:grid-cols-4 col-span-11 grid-cols-11 gap-0 justify-between items-center">
        <img
          src={data.header.logo}
          className="grid md:col-span-1 md:grid-cols-1 col-span-2 grid-cols-2 lg:size-18 md:size-16 size-12"
        />
        <h1 className="grid col-span-3 grid-cols-3 text-start md:text-4xl sm:text-xl text-lg">{data.header.title}</h1>
      </div>
      <nav className="lg:grid md:grid hidden  lg:col-span-8 lg:grid-cols-8 md:col-span-8 md:grid-cols-8 col-span-12 grid-cols-12 gap-2 justify-between wrap items-center">
        {data.header.navbar.map((data, index) => (
          <Button key={index} text={data.name} className={"duration-300 ease-in-out"} onClick={() => console.log(data.slug)} />
        ))}
      </nav>
      <div className="md:hidden grid col-span-1 grid-cols-1 justify-between items-center border-none">
        <RoundButton className={"grid col-span-1 row-span-1 w-12 border-none"} text={"="} onClick={handleMenu} />
      </div>
      {menu && (
        <nav className={`md:hidden bg-white absolute z-50 gap-0.5 rounded-bl-lg rounded-br-lg top-12 justify-center items-center w-11/12 min-w-sm mx-auto p-4 max-h-[70%] overflow-y-scroll shadow-xl`}>
          {data.header.navbar.map((data, index) => (
            <Button
              key={index}
              text={data.name}
              className={"rounded-none my-0.5 text-md"}
              onClick={() => (console.log(data.slug), setMenu(false))}
            />
          ))}
        </nav>
      )}
    </div>
  );
}

export default Header;
