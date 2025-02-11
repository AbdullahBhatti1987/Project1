import React from "react";

function Blog({title, message, image, className}) {

  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <div className="flex gap-4 flex-nowrap justify-center items-center">
        <img src={image} className="w-12 rounded-full" alt="blog-1" />
        <h2 className="font-bold text-2xl">{title}</h2>
      </div>
      <p className=" text-lg lg:px-24 md:px-18 px-12 text-center">{message}</p>
    </div>
  );
}

export default Blog;
