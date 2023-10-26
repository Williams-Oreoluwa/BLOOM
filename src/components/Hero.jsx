import React from "react";

const Hero = () => {
  return (
    <div className=" min-h-screen md:min-h-screen lg:min-h-screen xl:min-h-screen 2xl:min-h-screen  text-white font-poppins relative top-[-1rem] max-h-screen text-left bg-gradient-to-r from-[#594EDC] to-[#A54DE4] pb-[3rem]  ">
      <section className="absolute bottom-8 flex max-w-[1600px]    my-auto flex-col p-4 py-[5rem] md:pt-[6rem] md:px-[5rem]">
        <h1 className="flex items-center justify-start text-[3rem] md:text-[4rem] lg:text-[4rem] xl:text-[6rem] 2xl:text-[6rem] font-semibold">
          Your Medical <br /> Practice Made <br />Easy
        </h1>
        <div className="flex items-center justify-between ">
          <div>
            In March 2021, we set out on a  to transform {" "} <br />
            healthcare in Africa, one solution at a time
          </div>
          <div className="hidden animate-bounce lg:block xl:hidden 2xl:hidden">
            <img src="/Vector 1.png" alt="" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
