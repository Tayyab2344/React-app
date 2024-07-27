import React from "react";
import { ReactTyped } from "react-typed";

const Banner = () => {
  return (
    <div className="bg-[#2699fb] py-20 w-full">
      <div className="max-w-[1240px] my-12 mx-auto text-center px-4">
        <h2 className="text-xl md:text-3xl font-bold md:py-6">Learn with us</h2>
        <h1 className="text-white font-bold text-3xl md:text-7xl md:py-6">
          Grow with us
        </h1>
        <h2 className="text-white font-bold text-2xl md:text-5xl md:py-6">
          Learn{" "}
          <ReactTyped
            strings={["HTML", "CSS", "JavaScript", "React"]}
            typeSpeed={40}
            backSpeed={50}
            loop
          ></ReactTyped>
        </h2>
        <button className="p-2 md:p-3 sm:mt-20 md:mt-0 bg-black text-white rounded text-sm sm:text-base md:text-lg">
          Getting Started
        </button>
      </div>
    </div>
  );
};

export default Banner;
