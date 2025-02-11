import React from "react";

function FooterList({ name, array, onClick }) {
  return (
    <div className="md:w-1/4 w-1/2 flex-col">
      <h1 className="font-bold text-nowrap">{name}</h1>
      <ul className="flex flex-col gap-2 justify-start">
        {array.map((data, index) => (
          <li key={index} onClick={onClick} className="cursor-pointer">{data.listItem}</li>
        ))}
      </ul>
    </div>
  );
}

export default FooterList;
