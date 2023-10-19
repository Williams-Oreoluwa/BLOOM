import React from "react";

const Hero = () => {
  return (
    <div className="text-white font-poppins relative top-[-1rem] text-left bg-gradient-to-r from-[#594EDC] to-[#A54DE4] pb-[3rem] ">
      <section className="flex flex-col p-4 md:pt-[6rem] md:px-[5rem]">
        <h1 className="flex items-center justify-start text-[4rem] font-semibold">
          Your Medical <br /> Practice Made <br />Easy
        </h1>
        <div className="flex items-center justify-between ">
          <div>
            In March 2021, we set out on a  to transform <br />{" "}
            healthcare in Africa, one solution at a time
          </div>
          <div className="hidden animate-bounce lg:block xl:block 2xl:block">
            <img src="/Vector 1.png" alt="" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
