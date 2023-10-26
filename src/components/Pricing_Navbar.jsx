import React, { useState } from "react";
import { Link } from "react-router-dom";

const Pricing_Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div>
      <nav className="md:px-[5rem] lg:px-[5rem]  font-poppins w-full  navbar bg-gradient-to-r from-[#594EDC] to-[#A54DE4]">
        <div className="hidden  md:flex lg:flex xl:flex 2xl:flex py-6  items-end justify-center text-white ">
          <h1 className="text-[2rem]">BLOOM</h1>
          <ul className="cursor-pointer text-[.7rem] list-none sm:flex hidden justify-end items-center flex-1 gap-8 text-white">
      
            <li>
            <div className="flex gap-4">
              <button className="p-4 bg-white rounded-full">
                <h1 className="text-[1rem] bg-gradient-to-r from-[#594EDC] to-[#A54DE4]  inline-block text-transparent bg-clip-text">
                  <Link to="/login">Try for free</Link>
                </h1>
              </button>
              <button className="text-[1rem] p-4 bg-white rounded-full">
                <Link to="/">
                  <h1 className="bg-gradient-to-r from-[#594EDC] to-[#A54DE4]  inline-block text-transparent bg-clip-text">
                    Back Home
                  </h1>
                </Link>
              </button>
            </div>
            </li>
          </ul>
        </div>
        <div className="block md:hidden lg:hidden xl:hidden 2xl:hidden w-full p-5">
          <div className="bg-white rounded-xl">
            <div className="flex items-center justify-between p-2">
              <img src="/Group 2.png" alt="" />
              <div className="z-10">
                <span onClick={handleNav} className={nav ? "hidden" : "block"}>
                  <img src="/Vector 4.png" alt="" />
                </span>
                <span
                  onClick={handleNav}
                  className={nav ? "block z-10 fixed right-8" : "hidden"}
                >
                  <img src="/Vector 50.png" alt="" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div
        className={
          nav
            ? "bg-white fixed overflow-hidden top-0 left-0 w-full h-[100vh] md:hidden z-[2] lg:hidden xl:hidden 2xl:hidden"
            : "hidden"
        }
      >
        <div className="relative top-[55%] left-[6%] text-[32px]">
          <ul className="flex flex-col text-left font-bold font-poppins ">
            <li className="pt-6">
              <button className=" bg-gradient-to-r from-[#594EDC] to-[#A54DE4] text-white text-sm py-4 px-2 w-[200px] rounded-full">
              <h1 className="text-[1rem] text-white inline-block text-transparent bg-clip-text">
                  <Link to="/login">Try for free</Link>
                </h1>
              </button>
            </li>
            <li className="pt-6">
              <button className=" bg-gradient-to-r from-[#594EDC] to-[#A54DE4] text-white text-sm py-4 px-2 w-[200px] rounded-full">
                <Link to="/">
                  <h1 className="text-white">
                    Back Home
                  </h1>
                </Link>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Pricing_Navbar;
