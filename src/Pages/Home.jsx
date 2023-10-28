import React from "react";
import Navbar from '../components/Navbar';
import Description from "../components/Description";
import Reviews from "../components/Reviews";
import Hero from "../components/Hero";
import Blog from "../components/Blog";
import Team from "../components/Team";
import Service from "../components/Service";
import Cards from "../components/Cards";
import Photo from "../components/Photo";
import Partners from "../components/Partners";
import Footer from "../components/Footer";

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
