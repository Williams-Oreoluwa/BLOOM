import React from "react";

const Photo = () => {
  return (
    <div className="mx-w-[1645px] font-poppins mx-auto absolute left-0 top-[230rem] sm:top-[210rem] md:top-[270%] lg:top-[385%]">
      <div className="relative">
        <img
          className=" h-[500px]  w-[1512px] sm:h-[700px]  xl:hidden md:hidden lg:hidden"
          src="/patty-brito-Y-3Dt0us7e0-unsplash mob.png"
          alt=""
        />
    <img
          className="hidden  w-[1512px]  lg:h-[450px] md:block lg:block xl:block"
          src="/patty-brito-Y-3Dt0us7e0-unsplash desk.png"
          alt=""
        />
        <div className="text-left absolute top-[7rem] left-3 lg:left-[4rem] text-white">
          <h2>
            What we have achieved <br /> in the past two years.
          </h2>
        </div>
        <div className="absolute top-[17rem] md:top-[20rem] lg:top-[20rem] left-5 lg:right-[5rem]">
          <div className="flex flex-col md:flex-row lg:flex-row gap-4 text-white">
            <div>
              <h1 className="text-[46px] font-bold">40k+</h1>
              <h4>Patients Reached</h4>
            </div>{" "}
            <div>
              <h1 className="text-[46px] font-bold">10+</h1>
              <h4>Busiess Reached</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Photo;
