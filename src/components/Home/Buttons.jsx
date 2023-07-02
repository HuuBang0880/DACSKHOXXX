import React from "react";

export default function MainButtons({title,path}) {
  return (
    <button className="animate-fade-in-left-4 mt-6 h-12 w-32 rounded-full bg-primary text-white ring-4 ring-blue-400 drop-shadow-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-blue-400 duration-300">
      <a href={path}>{title}</a> 
    </button>
  );
}
