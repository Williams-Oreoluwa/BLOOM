import React from "react";
import MobileMenu from "./MobileMenu";

const Hero = () => {
  return (
    <div className="absolute top-0 left-0 text-left w-full h-[86vh] md:h-[70vh] lg:h-[110vh] bg-gradient-to-r from-[#594EDC] to-[#A54DE4] p-0">
      <div className="absolute top-[27%]  left-[11%] lg:top-[40%] grid grid-cols-2 ">
        <div className=" font-poppins text-white">
          <h2 className="flex flex-col gap-3 text-[30px] font-bold  md:text-[44px] lg:text-[62px]">
            Your Medical  Practice made easy.
          </h2>
          <p className="hidden md:block lg:block xl:block">
            In march 2021, we set out on a journey to transform <br />{" "}
            healthcare in Africa, one solution at a time.
          </p>
          <div className="absolute right-[10%] top-[70%] hidden  md:block lg:block xl:block animate-bounce">
            <img src="/Vector 1.png" alt="" className="w-[50px] h-[60px]" />
          </div>

          <div className=" w-full lg:hidden xl:hidden pt-2 text-sm font-poppins">
            <p>
              REMOTE-PAPERLESS-ADVANCED <br />
              FINANCIAL MANAGEMENT
            </p>
            <div className="pt-7">
              <button className="bg-white  w-[120px] rounded-3xl p-1 px-4 py-2">
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
