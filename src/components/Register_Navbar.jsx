import React from "react";
import { Link } from "react-router-dom";

const Register_Navbar = () => {
  return (
    <div className="relative">
      <nav className=" font-poppins w-full  navbar p-4">
        <div className="flex md:flex lg:flex xl:flex 2xl:flex  items-center justify-between text-white ">
          <h1 className="hidden md:block lg:block xl:block 2xl:block text-[2rem]">
            BLOOM
          </h1>
          <img
            src="/Vector 19.png"
            className="md:hidden lg:hidden xl:hidden 2xl:hidden"
            alt=""
          />
          <div className="cursor-pointer text-[.7rem] list-none   text-white">
            <div className="flex gap-4">
              <button className="p-4 bg-white rounded-full">
                <h1 className="text-[1rem] bg-gradient-to-r from-[#594EDC] to-[#A54DE4]  inline-block text-transparent bg-clip-text">
                  <Link to="/login">Login</Link>
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
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Register_Navbar;
