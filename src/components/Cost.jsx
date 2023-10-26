import React from "react";
import { BsCheck, BsX } from "react-icons/bs";

const Cost = () => {
  return (
    <div className="relative font-poppins  pt-[5rem] ">
      <div className="text-left md:p-[3rem] p-4 flex flex-col gap-3 ">
        <h1 className="uppercase  text-5xl font-extrabold">Our packages</h1>
        <p>
          Explore our packages and choose which one is best for your business.
        </p>
        <div className="grid lg:grid-cols-3  xl:grid-cols-3  2xl:grid-cols-3 gap-6 pt-6 md:grid-cols-2 grid-cols-1">
          <div className="text- flex hover:scale-[1.01] cursor-pointer flex-col gap-3 shadow-2xl p-5">
            <h3 className="uppercase font-extrabold">free</h3>
            <p className="text-[.8rem]">
              Welcome products that gives you all you <br /> need to get
              started.
            </p>
            <h4>Pay Now</h4>
            <h1 className="text-4xl font-extrabold bg-gradient-to-r from-[#594EDC] to-[#A54DE4]  inline-block text-transparent bg-clip-text">
              &#8358; 0K/year
            </h1>

            <button className="border-[2px] border-[#594EDC]  rounded-md text-sm p-2">
              Buy Now
            </button>

            <h3>Plan Includes:</h3>
            <div className="text-left text-[.8rem]">
              <div className="flex gap-3  text-left">
                <span className="text-[#594EDC] text-lg">
                  <BsCheck />
                </span>
                <p>Manage Patients Records (1k Patents)</p>
              </div>
              <div className="flex gap-3  text-left">
                <span className="text-red-500 text-lg">
                  <BsX />
                </span>
                <s>Invetory Management</s>
              </div>
              <div className="flex gap-3 ">
                <span className="text-red-500 text-lg">
                  <BsX />
                </span>
                <s>Record Purchases Transactions</s>
              </div>
              <div className="flex gap-3 ">
                <span className="text-red-500 text-lg">
                  <BsX />
                </span>
                <s>Record Expenses</s>
              </div>
              <div className="flex gap-3 ">
                <span className="text-red-500 text-lg">
                  <BsX />
                </span>
                <s>Manage Suppliers</s>
              </div>
              <div className="flex gap-3 ">
                <span className="text-red-500 text-lg">
                  <BsX />
                </span>
                <s>Generate HMO monthly bills</s>
              </div>
              <div className="flex gap-3 ">
                <span className="text-red-500 text-lg">
                  <BsX />
                </span>
                <s>Record and Track HMO bills</s>
              </div>
              <div className="flex gap-3 ">
                <span className="text-red-500 text-lg">
                  <BsX />
                </span>
                <s>Access report of business performance</s>
              </div>
              <div className="flex gap-3 ">
                <span className="text-red-500 text-lg">
                  <BsX />
                </span>
                <s>Customization</s>
              </div>
            </div>
          </div>
          <div className=" hover:scale-[1.01] cursor-pointer  flex flex-col gap-3 shadow-2xl  p-5">
            <h3 className="uppercase font-extrabold">FREE</h3>
            <p className="text-[.8rem]">
              Welcome products that gives you all you <br /> need to get
              started.
            </p>
            <h4>Pay Now</h4>
            <h1 className="text-4xl font-extrabold bg-gradient-to-r from-[#594EDC] to-[#A54DE4]  inline-block text-transparent bg-clip-text">
              &#8358; 100K/year
            </h1>

            <button className="border-[2px] border-[#594EDC]   rounded-md text-sm p-2">
              Buy Now
            </button>

            <h3>Plan Includes:</h3>
            <div className="text-[.8rem] ">
              <div className="flex gap-3 ">
                <span className="text-[#594EDC] text-lg">
                  <BsCheck />
                </span>
                <p>Manage Patients Records (3k Patents)</p>
              </div>
              <div className="flex gap-3 ">
                <span className="text-[#594EDC] text-lg">
                  <BsCheck />
                </span>
                <p>Invetory Management</p>
              </div>
              <div className="flex gap-3 ">
                <span className="text-[#594EDC] text-lg">
                  <BsCheck />
                </span>
                <p>Record Purchases Transactions</p>
              </div>
              <div className="flex gap-3 ">
                <span className="text-red-500 text-lg">
                  <BsX />
                </span>

                <s>Record Expenses</s>
              </div>
              <div className="flex gap-3 ">
                <span className="text-red-500 text-lg">
                  <BsX />
                </span>
                <s>Manage Suppliers</s>
              </div>
              <div className="flex gap-3 ">
                <span className="text-[#594EDC] text-lg">
                  <BsCheck />
                </span>
                <p>Generate HMO monthly bills</p>
              </div>
              <div className="flex gap-3 ">
                <span className="text-red-500 text-lg">
                  <BsX />
                </span>

                <s>Record and Track HMO bills</s>
              </div>
              <div className="flex gap-3 ">
                <span className="text-[#594EDC] text-lg">
                  <BsCheck />
                </span>
                <p>Access report of business performance</p>
              </div>
              <div className="flex gap-3 ">
                <span className="text-red-500 text-lg">
                  <BsX />
                </span>
                <s>Customization</s>
              </div>
            </div>
          </div>
          <div className="hover:scale-[1.01] cursor-pointer flex flex-col gap-3 shadow-2xl  p-5">
            <h3 className="uppercase font-extrabold">FREE</h3>
            <p className="text-[.8rem]">
              Welcome products that gives you <br /> all you need to get
              started.
            </p>
            <h4>Pay Now</h4>
            <h1 className="text-4xl font-extrabold bg-gradient-to-r from-[#594EDC] to-[#A54DE4]  inline-block text-transparent bg-clip-text">
              &#8358; 170K/year
            </h1>

            <button className="w-full border-[2px] border-[#594EDC] rounded-md text-sm p-2">
              Buy Now
            </button>

            <h3>Plan Includes:</h3>
            <div className="text-[.8rem] text-left">
              <div className="flex gap-3 ">
                <span className="text-[#594EDC] text-lg">
                  <BsCheck />
                </span>
                <p>Manage Patients Records (Unlimited)</p>
              </div>
              <div className="flex gap-3 ">
                <span className="text-[#594EDC] text-lg">
                  <BsCheck />
                </span>

                <p>Invetory Management</p>
              </div>
              <div className="flex gap-3 ">
                <span className="text-[#594EDC] text-lg">
                  <BsCheck />
                </span>
                <p>Record Purchases Transactions</p>
              </div>
              <div className="flex gap-3 ">
                <span className="text-[#594EDC] text-lg">
                  <BsCheck />
                </span>
                <p>Record Expenses</p>
              </div>
              <div className="flex gap-3 ">
                <span className="text-[#594EDC] text-lg">
                  <BsCheck />
                </span>
                <p>Manage Suppliers</p>
              </div>
              <div className="flex gap-3 ">
                <span className="text-[#594EDC] text-lg">
                  <BsCheck />
                </span>
                <p>Generate HMO monthly bills</p>
              </div>
              <div className="flex gap-3 ">
                <span className="text-[#594EDC] text-lg">
                  <BsCheck />
                </span>
                <p>Record and Track HMO bills</p>
              </div>
              <div className="flex gap-3 ">
                <span className="text-[#594EDC] text-lg">
                  <BsCheck />
                </span>
                <p>Access report of business performance</p>
              </div>
              <div className="flex gap-3 ">
                <span className="text-[#594EDC] text-lg">
                  <BsCheck />
                </span>
                <p>Customization</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cost;
