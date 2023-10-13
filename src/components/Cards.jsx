import React from "react";

const Cards = () => {
  return (
    <section className="w-full relative font-poppins ">
      <main className="max-w-[1650px] p-[1rem] md:p-[2rem] lg:p-[4rem] xl:p-[6rem] grid md:grid-cols-2 lg:grid-cols-3 gap-6 ">
        <div className="flex flex-col gap-6 hover:scale-[1.1] duration-100 cursor-pointer pb-[22px] items-center justify-center text-center shadow-2xl p-4">
          <img src="/pajamas_planning.png" alt="" />
          <h2 className="text-[26px] font-bold">
            Strategic Planning
          </h2>
          <p className="text-[14px] font-semibold">
            Transform your business with <br /> data driven decision making. Get <br /> real
            time insights on sales, growth, <br /> expenses and a lot more.
          </p>
        </div>
        <div className="flex flex-col hover:scale-[1.1] duration-100 cursor-pointer gap-3 pb-[22px] items-center justify-center text-center shadow-2xl p-4">
          <img src="/mdi_paper-text-outline.png" alt="" />
          <h2 className="text-[26px] font-bold">
            Remote and Paperless
          </h2>
          <p className="text-[14px] font-semibold">
            Run your bbusiness from anywhere <br /> you are in the world, get real time<br /> updates
            on what's happening and <br /> take your business Paperless.
          </p>
        </div>
        <div className="flex flex-col hover:scale-[1.1] duration-100 cursor-pointer gap-3 pb-[22px] items-center justify-center text-center shadow-2xl p-4">
          <img src="/mdi_finance.png" alt="" />
          <h2 className="text-[26px] font-bold">
            Manage finances
          </h2>
          <p className="text-[14px] font-semibold">
            Track all your HMO payments, <br /> vendor payments, imprest as, <br /> as well as other, income and
             <br /> expenditure accounts.
          </p>
        </div>
      </main>
    </section>
  );
};

export default Cards;
