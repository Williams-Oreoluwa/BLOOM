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
import Partners from "./Partners";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      <div className="absolute top-0 left-0  w-full flex flex-col  ">
        <Navbar />

        <Hero />
        <Description />

        <Service />
        <Cards />
        <Photo />
        <Reviews />
        <Blog />
        <Team />
        <Partners/>
        <Footer/>

   
      </div>
    </>
  );
};

export default Home;
