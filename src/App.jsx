import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./components/Home";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Pricing from "./components/Pricing";
import Register from "./components/Register";
import Login from "./components/Login";

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
