import React from "react";
import FooterList from "./FooterList";
import data from "../content/data";

function Footer() {
  return (
    <div className="w-full">
      <div className="w-11/12 grid md:grid-cols-4 grid-cols-2 mx-auto md:flex-row flex-col md:gap-4 gap-8 py-6">
        {data.footer.categories.map((data, index) => (
          <FooterList key={index} name={data.listName} array={data.category} onClick={() => console.log(data.slug)} />
        ))}
      </div>
    </div>
  );
}

export default Footer;
