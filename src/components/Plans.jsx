import React from "react";
import single from '../assets/img/single.png';
import double from '../assets/img/double.png';
import triple from '../assets/img/triple.png';

const Plans = () => {
  return (
    <div className="py-12">
      <div className="max-w-[1240px] mx-6 md:grid grid-cols-3 gap-5">
        <div className="border border-black py-6 shadow-xl hover:scale-105 duration-[400ms] bg-gray-100 flex flex-col items-center sm:mb-6 md:mb-0">
          <img className="w-[30%] h-[50%]" src={single} alt="Web Development" />
          <h1 className="my-6 font-bold text-2xl md:text-3xl">Web Development</h1>
          <span className="font-bold text-2xl md:text-3xl">$149</span>
          <span className="font-bold text-base md:text-xl mb-3">Lorem ipsum dolor sit amet.</span>
          <span className="mb-3 text-center font-bold text-base md:text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, omnis?</span>
          <span className="font-bold text-base md:text-xl">Lorem ipsum dolor sit.</span>
        </div>

        <div className="border border-black py-6 shadow-xl hover:scale-105 duration-[400ms] bg-gray-100 flex flex-col items-center sm:mb-6 md:mb-0">
          <img className="w-[30%] h-[50%]" src={double} alt="Artificial Intelligence" />
          <h1 className="my-6 font-bold text-2xl md:text-3xl">Artificial Intelligence</h1>
          <span className="font-bold text-2xl md:text-3xl">$149</span>
          <span className="font-bold text-base md:text-xl mb-3">Lorem ipsum dolor sit amet.</span>
          <span className="mb-3 text-center font-bold text-base md:text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, omnis?</span>
          <span className="font-bold text-base md:text-xl">Lorem ipsum dolor sit.</span>
        </div>

        <div className="border border-black py-6 shadow-xl hover:scale-105 duration-[400ms] bg-gray-100 flex flex-col items-center sm:mb-6 md:mb-0">
          <img className="w-[30%] h-[50%]" src={triple} alt="App Development" />
          <h1 className="my-6 font-bold text-2xl md:text-3xl">App Development</h1>
          <span className="font-bold text-2xl md:text-3xl">$149</span>
          <span className="font-bold text-base md:text-xl mb-3">Lorem ipsum dolor sit amet.</span>
          <span className="mb-3 text-center font-bold text-base md:text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, omnis?</span>
          <span className="font-bold text-base md:text-xl">Lorem ipsum dolor sit.</span>
        </div>
      </div>
    </div>
  );
};

export default Plans;
