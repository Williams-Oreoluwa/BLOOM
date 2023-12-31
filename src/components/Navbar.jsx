import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <>
      <nav className="md:px-[5rem] lg:px-[5rem] font-poppins w-full  navbar bg-gradient-to-r from-[#594EDC] to-[#A54DE4]">
        <div className="hidden   md:flex lg:flex xl:flex 2xl:flex py-6  items-center justify-center text-white ">
          <h1 className="text-[2rem]">BLOOM</h1>
          <ul className="cursor-pointer text-md list-none sm:flex hidden justify-end items-center flex-1 gap-8 text-white">
            <li className="hover:bg-white hover:text-[#594EDC] hover:rounded-[50px] hover:p-4">About</li>
            <li className="hover:bg-white hover:text-[#594EDC] hover:rounded-[50px] hover:p-4">Blog</li>
            <li className="hover:bg-white hover:text-[#594EDC] hover:rounded-[50px] hover:p-4">Conact</li>
            <li className="hover:bg-white hover:text-[#594EDC] hover:rounded-[50px] hover:p-4">
              <Link to="/pricing">Pricing</Link>
            </li>

            <li>
              <button className="p-4 bg-white rounded-full">
                <h1 className="bg-gradient-to-r from-[#594EDC] to-[#A54DE4]  inline-block text-transparent bg-clip-text">
                <Link to="/login">Try for free</Link>
                </h1>
              </button>
            </li>
           
          </ul>
        </div>
        <div className="block md:hidden lg:hidden xl:hidden 2xl:hidden w-full p-5">
          <div className="bg-white rounded-xl">
            <div className="flex items-center justify-between p-2">
              <img src="assets/Group 2.png" alt="" />
              <div className="z-10">
                <span onClick={handleNav} className={nav ? "hidden" : "block"}>
                  <img src="/assets/Vector 4.png" alt="" />
                </span>
                <span
                  onClick={handleNav}
                  className={nav ? "block z-10 fixed right-8" : "hidden"}
                >
                  <img src="/assets/Vector 50.png" alt="" />
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
            <li className="text-black hover:text-[#594EDC]">About</li>
            <li className="text-black hover:text-[#594EDC]">Blog</li>
            <li className="text-black hover:text-[#594EDC]">Contact</li>
            <li className="text-black hover:text-[#594EDC]">
              <Link to="/pricing">Pricing</Link>
            </li>
            <li className="pt-6">
              <button className=" bg-gradient-to-r from-[#594EDC] to-[#A54DE4] text-white text-sm py-4 px-2 w-[200px] rounded-full">
              <Link to="/login">Try for free</Link>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );

  // return (
  //   <div className="flex justify-between items-center  text-white bg-gradient-to-r from-[#594EDC] to-[#A54DE4] ">
  //     <h1 className="w-full text-3xl font-bold text-[#00df9a]">REACT.</h1>
  //     <ul className="hidden md:flex">
  //       <li className="p-4">Home</li>
  //       <li className="p-4">Company</li>
  //       <li className="p-4">Resources</li>
  //       <li className="p-4">About</li>
  //       <li className="p-4">
  //         {" "}
  //         <button className="p-4 bg-white rounded-2xl w-[10rem]">
  //           <h1 className="bg-gradient-to-r from-[#594EDC] to-[#A54DE4]  inline-block text-transparent bg-clip-text">
  //             Try for free
  //           </h1>
  //         </button>
  //       </li>
  //     </ul>
  //     <div onClick={handleNav} className="block md:hidden">
  //       {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
  //     </div>
  //     <ul
  //       className={
  //         nav
  //           ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
  //           : "ease-in-out duration-500 fixed left-[-100%]"
  //       }
  //     >
  //       <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">REACT.</h1>
  //       <li className="p-4 border-b border-gray-600">Home</li>
  //       <li className="p-4 border-b border-gray-600">Company</li>
  //       <li className="p-4 border-b border-gray-600">Resources</li>
  //       <li className="p-4 border-b border-gray-600">About</li>
  //       <li className="p-4">Contact</li>
  //     </ul>
  //   </div>
  // );
};

export default Navbar;
