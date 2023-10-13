import React from "react";
import Navbar from "./Navbar";
import Description from "./Description";
import Reviews from "./Reviews";
import Hero from './Hero'
import Blog from './Blog'
import Team from './Team'
import Service from './Service'
import Cards from './Cards'
import Photo from "./Photo";


const Home = () => {
  return (
    <div className="absolute top-0 left-0 flex flex-col item-center justify-center min-h-screen">
      <Navbar />
      <Hero/>
      <Description/>
      <Service/>
      <Cards/>
      <Photo/>
      <Blog/>
      <Team/>
    
    
    </div>
  );
};

export default Home;
