import React from "react";

function Blog({title, message, image, className}) {
  return (
    <div className={`lg:w-2/3 w-3/4 mx-auto flex flex-col gap-4 ${className}`}>
      <div className="flex gap-4 flex-nowrap justify-center items-center">
        <img src={image} className="w-12 rounded-full" alt="blog-1" />
        <h2 className="font-bold text-2xl">{title}</h2>
      </div>
      <p className="text-center">{message}</p>
    </div>
  );
}

export default Blog;
