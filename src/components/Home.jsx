import React from "react";
import Navbar from "./Navbar";
import Description from "./Description";
import Reviews from "./Reviews";
import Hero from "./Hero";
import Blog from "./Blog";
import Team from "./Team";
import Service from "./Service";
import Cards from "./Cards";
import Photo from "./Photo";

const Home = () => {
  return (
    <>
      <div className="absolute top-0 left-0  w-full flex flex-col ">
        <Navbar />

        <Hero />
        <Description />

        <Service />
        <Cards />
        <Photo />
        <Reviews />
        <Blog />
        <Team />

        <div className="sm:px-16  flex justify-center items-start">
          <div className=" w-full">
            {/* <Stats />
          <Business />
          <Billing />
          <CardDeal />
          <Testimonials />
          <Clients />
          <CTA />
          <Footer /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
