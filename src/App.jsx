import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MobileMenu from "./components/MobileMenu";
import Description from "./components/Description";
import Service from "./components/Service";
import Cards from "./components/Cards";
import Photo from "./components/Photo";
import Reviews from "./components/Reviews";
import Blog from "./components/Blog";

function App() {


  return (
    <>
      <Navbar/>
      <Hero/>
      <Description/>
      <Service/>
      <Cards/>
      <Photo/>
      <Reviews/>
      <Blog/>
    </>
  );
}

export default App;
