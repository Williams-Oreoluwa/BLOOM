import React from "react";
import Navbar from "./Navbar";
import Pricing_Navbar from "./Pricing_Navbar";
import Pricing_Hero from "./Pricing_Hero";
import Footer from "./Footer";
import Cost from "./Cost";

const Pricing = () => {
  return (
    <>
      <div className="absolute top-0 left-0  w-full flex flex-col ">
        <Pricing_Navbar />
    

        <Pricing_Hero />
        <Cost/>
        <Footer/>
      </div>
    </>
  );
};

export default Pricing;
