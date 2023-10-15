import React from "react";
import MobileMenu from "./MobileMenu";

const Hero = () => {
  return (
    <div className="relative flex  items-center justify-start  min-h-screen  text-left w-full bg-gradient-to-r from-[#594EDC] to-[#A54DE4]">
      <div className="max-w-[1650px] grid grid-cols-1 gap-[7rem] items-left p-[5rem]">
        <div className=" font-poppins text-white ">
          <div>
            <div>
              <h2 className="flex flex-col  text-[41px] font-bold  md:text-[44px] lg:text-[62px] uppercase">
                Your Medical <br /> Practice made <br /> easy.
              </h2>
              <br />
              <div className="flex flex-row gap-[14vw]">
                <div>
                  <p className="hidden md:block lg:block xl:block text-[25px] ">
                    In march 2021, we set out on a journey to transform <br />{" "}
                    healthcare in Africa, one solution at a time.
                  </p>
                </div>

                <div className=" hidden  md:block lg:block xl:block animate-bounce">
                  <img
                    src="/Vector 1.png"
                    alt=""
                    className="w-[50px] h-[60px]"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className=" w-full lg:hidden xl:hidden pt-2 font-poppins">
            <br />
            <p className="text-[25px] pb-1">
              REMOTE-PAPERLESS-ADVANCED <br />
              FINANCIAL MANAGEMENT
            </p>
            <br />
            <div className="pt-2">
              <button className="bg-white  w-[120px] rounded-3xl p-1 px-4 pb-2">
                <h3 className="bg-gradient-to-r from-[#594EDC] to-[#A54DE4] inline-block text-transparent bg-clip-text">
                  Try for free
                </h3>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
