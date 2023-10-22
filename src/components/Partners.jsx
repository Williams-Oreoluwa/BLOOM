import React from "react";

const Partners = () => {
  return (
    <div className="flex flex-col gap-2 items-center justify-center">
      <div className="font-poppins flex flex-col gap-2">
        <h1 className="uppercase text-[35px] font-bold">our partners</h1>
        <p>
            Take a look at our strategic partners who we work with round the clock <br /> to provide satisfactory services.
        </p>
        <div className="flex items-center justify-center">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 place-items-center place-content-evenly">
          <img src="/image 1.png" alt="" />
          <img src="/image 2.png" alt="" />
          <img src="/image 3.png" alt="" />
          <img src="/image 4.png" alt="" />
        </div>

        </div>
     
      </div>
    </div>
  );
};

export default Partners;
