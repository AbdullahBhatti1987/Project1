import React from "react";

function FooterList({ name, array }) {
  return (
    <div className="w-full flex-col">
      <h1 className="font-bold text-nowrap">{name}</h1>
      <ul className="flex flex-col gap-2 justify-start">
        {array.map((item, index) => (
          <li key={index} onClick={()=> console.log(item.slug)} className="cursor-pointer ">{item.listItem}</li>
        ))}
      </ul>
    </div>
  );
}

export default FooterList;
