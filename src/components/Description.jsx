import React from "react";

const Description = () => {
  return (  
    <div className=" max-w-[1640px] w-full h-[90vh] relative left-0 top-[75vh] md:top-[63vh] lg:top-[92vh] pt-20">
      <div className="flex flex-col md:grid md:grid-cols-2 gap-[10%] items-center justify-center">
        <div className="flex flex-col gap-y-6 items-start text-left">
          <h2 className="text-transform: uppercase text-[60px] font-poppins font-bold">
            The <span className=" bg-gradient-to-r from-[#594EDC] to-[#A54DE4] inline-block text-transparent bg-clip-text"> Bloom</span> <br />
            way
          </h2>
          <p className="sm:font-[20px] font-poppins text-[#1A1A1A]">
            Access all important documents in one place,Run <br /> Rn your
            business from anywhere in the world, Manage <br />
            All income and expenditure in one place, Connect <br />
            with the broader medical community.
          </p>
          <button className=" bg-gradient-to-r from-[#594EDC] to-[#A54DE4]  text-white text-sm py-4 px-2 w-[200px] rounded-full">
            Try for free
          </button>
        </div>
        <div>
          <img
            className=" w-[20rem] h-[400px] lg:w-[745px] lg:h-[350px] pt-4"
            src="/7d7e37650ba8a26d890460dfa5b412a9 1.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Description;
