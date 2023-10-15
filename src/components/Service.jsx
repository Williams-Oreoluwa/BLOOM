import React, { useState, useEffect } from "react";
import { BsArrowsAngleContract } from "react-icons/bs";

const Service = () => {
  return (
    <>
      <div className=" relative mx-auto  text-black w-full  items-left text-left xl:flex xl:items-center xl:justify-start ">
        <div className="flex flex-col  max-w-[1640px]  gap-2 py-[1rem] md:py-[3rem]  ">
          <h2 className="text-[62px] font-poppins xl:px-[5rem] uppercase">
            What we offer
          </h2>

          <div className=" bg-gradient-to-r from-[#594EDC] to-[#A54DE4] font-poppins w-full h-[60vh] md:h-[30vh] lg:h-[55vh] p-2">
            <div className="flex flex-col items-center justify-center text-center text-white md:hidden lg:hidden">
              <div className=" m-10">
                <div className="">
                  <img src="/Group 27 (1).png" />
                </div>
                <p className="text-[24px]  pt-4">
                  Seemless Service to transform your business.
                </p>
                <div className="flex flex-row gap-2 items-center justify-center">
                  <a href="" className="pt-[4] border-b-2 border-white">
                  Contact Us
                  </a>
                </div>
              </div>
            </div>

            <div className="hidden   md:grid md:grid-cols-2 md:place-center md:text-white md:place-items-center md:justify-center p-6">
              <div className="flex flex-col items-left justify-center relative ">
                <p className="p-[.7rem] text-[30px]">
                  Seemless Service to <br /> transform your business.
                </p>
                <a href="">
                  <img src="/Screenshot 2023-10-08 075507.png" alt="" />
                </a>
              </div>

              <div >
                <img  src="/Group 27 (1).png" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
