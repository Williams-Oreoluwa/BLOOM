import React from "react";
import { BsPlay, BsPlayFill } from "react-icons/bs";

const Reviews = () => {
  return (
    <>
      <div className="hidden lg:block  px-[2rem] font-poppins pt-[5rem]">
        <div className=" w=full  flex flex-col gap-4 ">
          <h2 className="text-left text-[25px] md:text-[35px] lg:text-[62px]  text-black">
            Customers Review
          </h2>
          <div className="grid lg:grid-cols-2 md:grid-cols-2 place-items-left  text-white text-left pl-[4rem] bg-gradient-to-r from-[#594EDC] to-[#A54DE4]">
            <div className="my-auto flex flex-col gap-5 ">
              <p className="text-[22px] ">
                Hear what some of our customers <br />
                have to say about our service and impact <br />
                it's impact on their business.
              </p>
              <div>
                <h5>CEO A&B PHARMA</h5>

                <h2 className="text-[1.5rem]">Obayemi Abimbola</h2>

                <h3>2023</h3>
              </div>
            </div>
            <div className="">
              <div className=" relative ">
                <img
                  src="/assets/askas-jeremy-7TI-3jUObYg-unsplash.png"
                  alt=""
                  className="w-full"
                />
                <div className="absolute top-[45%] left-[44%]">
                  <div className=" w-[5rem]  h-[5rem]  p-2 m-2 rounded-full text-white  bg-white bg-opacity-30 flex items-center justify-center cursor-pointer">
                    <h2 className="text-[2.5rem]">
                      <BsPlayFill />
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" left-0  lg:hidden w-full font-poppins ">
        <div className=" w=full flex flex-col gap-4 ">
          <h2 className="text-left text-[35px] md:text-[35px]   text-black pl-4">
            Customers Review
          </h2>
          <div className="grid  text-white text-left bg-gradient-to-r from-[#594EDC] to-[#A54DE4]">
            <div className="relative">
              <div>
                <img
                  src="/assets/askas-jeremy-7TI-3jUObYg-unsplash.png"
                  alt=""
                  className="w-full"
                />
              </div>
              <div className="w-[5rem] h-[5rem] mx-auto relative top-[-50%]  p-3 rounded-full text-white  bg-white bg-opacity-30 flex items-center justify-center cursor-pointer">
                <h2 className="text-[2.5rem]">
                  <BsPlayFill />
                </h2>
              </div>
            </div>
            <div className="my-auto flex flex-col  pt-[3rem] p-3 text-center">
              <p className="text-[18px] ">
                Hear what some of our customers <br />
                have to say about our service and impact <br />
                it's impact on their business.
              </p>
              <div>
                <h5>CEO A&B PHARMA</h5>

                <h2 className="text-[1.5rem]">Obayemi Abimbola</h2>

                <h3>2023</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reviews;
