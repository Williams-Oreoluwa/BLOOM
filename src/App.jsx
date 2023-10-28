import  React,{ useState } from "react";

import "./App.css";
import Home from "./Pages/Home";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Pricing from "./Pages/Pricing";
import Register from "./Pages/Register";
import Login from "./Pages/Login";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/register" element={<Register/>} />
          <Route path='/login' element={<Login/>}/>

          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
