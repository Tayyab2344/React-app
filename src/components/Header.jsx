import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const [toggle, settoggle] = useState(false);
  return (
    <div className="bg-[#2699fb] p-4">
      <nav className="py-[12px] flex justify-between items-center max-w[1240px] mx-auto">
        <h1 className="lg:text-3xl md:text2xl font-bold text-white">RTA</h1>
        {toggle ? (
          <AiOutlineClose
            onClick={() => settoggle(!toggle)}
            className="text-white text-2xl md:hidden block "
          ></AiOutlineClose>
        ) : (
          <AiOutlineMenu
            onClick={() => settoggle(!toggle)}
            className="text-white text-2xl md:hidden block"
          ></AiOutlineMenu>
        )}

        <ul className="hidden md:flex text-white gap-8">
          <li>
            <a href="" className="hover:text-yellow-500">
              Home
            </a>
          </li>
          <li>
            <a href="" className="hover:text-yellow-500">
              Home
            </a>
          </li>
          <li>
            <a href="" className="hover:text-yellow-500">
              Home
            </a>
          </li>
          <li>
            <a href="" className="hover:text-yellow-500">
              Home
            </a>
          </li>
          <li>
            <a href="" className="hover:text-yellow-500">
              Home
            </a>
          </li>
        </ul>

        <ul
          className={` transition-all duration-300 md:hidden w-full h-screen text-white fixed bg-black top-[80px] ${
            toggle ? "left-0" : "left-[-100%]"
          } `}
        >
          <li className="p-3 hover:bg-gray-700">
            <a href="" className="hover:text-yellow-500">
              Home
            </a>
          </li>
          <li className="p-3 hover:bg-gray-700">
            <a href="" className="hover:text-yellow-500">
              Home
            </a>
          </li>
          <li className="p-3 hover:bg-gray-700">
            <a href="" className="hover:text-yellow-500">
              Home
            </a>
          </li>
          <li className="p-3 hover:bg-gray-700">
            <a href="" className="hover:text-yellow-500">
              Home
            </a>
          </li>
          <li className="p-3 hover:bg-gray-700">
            <a href="" className="hover:text-yellow-500">
              Home
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
