import React, { useState, useEffect } from "react";
import { BsArrowsAngleContract, BsArrowUpRight } from "react-icons/bs";

const Service = () => {
  return (
    <>
      <div className="  text-black w-full   text-left">
        <div className="flex flex-col  gap- py-[1rem] md:py-[3rem]  ">
          <h2 className="text-[32px] md:text-[62px] pl-[2rem] lg:p-[5rem] font-poppins  uppercase">
            What we offer
          </h2>

          <div className="bg-gradient-to-r text-center from-[#594EDC] to-[#A54DE4] font-poppins w-full">
            <div className="flex flex-col items-center justify-center text-left text-white md:hidden lg:hidden mx-auto">
              <div className=" relative p-4 border-b-[2px] border-b-white">
                <div className="">
                  <img src="/Group 27 (1).png" />
                </div>
                <p className="text-[24px]  pt-4">
                  Seemless Service to transform your business.
                </p>
                <div className="flex flex-row items-center gap-2 justify-center text-[10px] pb-1  text-white">
                    <a href="" className="text-[20px]">
                      Contact Us
                    </a>
                    <span className="text-[20px]">
                      <BsArrowUpRight />
                    </span>
                  </div>
              </div>
            </div>

            <div className="  hidden   md:grid md:grid-cols-2  place-items-center p-[5rem] md:text-white md:place-items-start md:justify-center">
              <div className="flex flex-col    items-center justify-center ">
                <p className="text-[30px] pt-[3rem]">
                  Seemless Service to <br /> transform your business.
                </p>
                <div>
                  <div className="flex flex-row items-center gap-2 justify-center text-[10px] pb-1 border-b-[2px] border-b-white text-white">
                    <a href="" className="text-[20px]">
                      Contact Us
                    </a>
                    <span className="text-[20px]">
                      <BsArrowUpRight />
                    </span>
                  </div>
                </div>
              </div>

              <div>
                <img src="/Group 27 (1).png" size={20} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
