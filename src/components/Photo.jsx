import React from "react";

const Photo = () => {
  return (
    <div className="image w-full md:block lg:block font-poppins  ">
      <div className="p-5 flex flex-col gap-2 text-center  item-center justify-between "> 
 
        <div className="text-left  text-white">
          <h2>
            What we have achieved <br /> in the past two years.
          </h2>
        </div>
        <div className="relative top-[15rem] md:top-[10rem]  lg:top-[10rem] xl:top-[10rem] left-[-7rem]">
          <div className="flex  flex-col md:flex-row lg:flex-row gap-4 text-white">
            <div className="">
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
