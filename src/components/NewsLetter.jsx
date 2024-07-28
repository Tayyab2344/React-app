import React from "react";

const NewsLetter = () => {
  return (
    <div className="p-4 bg-[#2699fb]">
      <div className="max-w-[1240px] mx-auto md:flex justify-between align-center py-6">
        <div className="mt-2">
          <h1 className="text-white tex-2xl md:text-3xl font-bold">
            Want to learn latest IT Skills?
          </h1>
          <span className="text-white">
            sign up to our NewsLetter and stay upto date
          </span>
        </div>
        <div className="mt-2">
          <input
            type="email"
            placeholder="Email"
            className="text-slate-600 p-3 "
          />
          <button className="p-3 md:p-3 sm:mt-20 md:mt-0 bg-black text-white rounded text-sm sm:text-base md:text-lg">
            Getting Started
          </button>
          <br />
          <span className="text-white">
            we care about your data, Read our <br />{" "}
            <span className="text-black">
              <a href="">privacy policy</a>{" "}
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
