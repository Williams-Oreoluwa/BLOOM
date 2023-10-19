import React, { useState, useEffect } from "react";
import { BsArrowsAngleContract } from "react-icons/bs";

const Service = () => {
  return (
    <>
      <div className="  text-black w-full   text-left  ">
        <div className="flex flex-col  gap-2 py-[1rem] md:py-[3rem]  ">
          <h2 className="text-[32px] md:text-[62px] pl-2 lg:pl-[8rem] font-poppins  uppercase">
            What we offer
          </h2>

          <div className="bg-gradient-to-r  from-[#594EDC] to-[#A54DE4] font-poppins w-full lg:h-[50%] py-7">
            <div className="flex flex-col items-center justify-center text-center text-white md:hidden lg:hidden mx-auto">
              <div className=" relative ">
                <div className="">
                  <img src="/Group 27 (1).png" />
                </div>
                <p className="text-[24px]  pt-4">
                  Seemless Service to transform your business.
                </p>
                <div className="flex flex-row gap-2 items-center justify-center">
                  <a href="" className="pt-[4] border-b-2 border-white ">
                  Contact Us
                  </a>
                </div>
              </div>
            </div>

            <div className=" relative hidden   md:grid md:grid-cols-2 pr-[5rem] pt-7 md:text-white md:place-items-center md:justify-center">
              <div className="flex flex-col items-left justify-center  ">
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
