import React from "react";
import Pricing_Navbar from "../components/Pricing_Navbar";
import Pricing_Hero from "../components/Pricing_Hero";
import Footer from "../components/Footer";
import Cost from "../components/Cost";

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
