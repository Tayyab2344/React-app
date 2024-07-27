import React from "react";
import laptop from "../assets/img/laptop.jpg";

const Experts = () => {
  return (
    <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 my-10 grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="w-full flex justify-center">
        <img src={laptop} alt="Laptop" className="w-full h-auto object-cover" />
      </div>
      <div className="flex flex-col justify-center">
        <h1 className="text-[#00df9a] font-bold text-2xl sm:text-3xl lg:text-4xl my-2">
          Learn with Experts
        </h1>

        <p className="text-base sm:text-lg lg:text-xl my-2 text-justify">
          Learning with experts combines deep knowledge and practical insights,
          allowing learners to ask questions and get personalized feedback. This
          interactive approach enhances understanding and motivation, making
          education more impactful and relevant.
        </p>
        <button className="w-full sm:w-[50%] md:w-[30%] p-2 sm:p-3 bg-black text-white rounded text-sm sm:text-base md:text-lg mt-4 sm:mt-8">
          Getting Started
        </button>
      </div>
    </div>
  );
};

export default Experts;
