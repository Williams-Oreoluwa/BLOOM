import React from "react";

const Cards = () => {
  return (
    <section className="w-full font-poppins xl:flex item-center justify-center p-[1rem]  ">
      <main className="lg:p-1 md:p-[2rem]  text-[6rem] grid md:grid-cols-2 lg:grid-cols-3 gap-[6rem]  place-items-center">
        <div className="flex flex-col w-full hover:scale-[1.1] duration-100 cursor-pointer pb-[22px] items-center justify-center shadow-2xl p-4 ">
          <img src="/pajamas_planning.png" alt=""/>
          <h2 className="text-[26px]  font-bold">
            Strategic Planning
          </h2>
          <p className="text-[14px]  font-semibold">
            Transform your business with data driven decision making. Get real
            time insights on sales, growth,  expenses and a lot more.
          </p>
        </div>
        <div className="flex flex-col w-full hover:scale-[1.1] duration-100 cursor-pointer gap-3 pb-[22px] items-center justify-center  shadow-2xl p-4 ">
          <img src="/mdi_paper-text-outline.png" alt="" />
          <h2 className="text-[26px]  font-bold">
            Remote & Paperless
          </h2>
          <p className="text-[14px]  font-semibold">
            Run your bbusiness from anywhere you are in the world, get real time updates
            on what's happening and take your business Paperless.
          </p>
        </div>
        <div className="flex flex-col w-full  hover:scale-[1.1] duration-100 cursor-pointer gap-3 pb-[22px] items-center justify-center  shadow-2xl p-4 ">
          <img src="/mdi_finance.png" alt="" />
          <h2 className="text-[26px]  font-bold">
            Manage finances
          </h2>
          <p className="text-[14px]  font-semibold">
            Track all your HMO payments, vendor payments, imprest as, as well as other, income and
             expenditure accounts.
          </p>
        </div>
      </main>
    </section>
  );
};

export default Cards;