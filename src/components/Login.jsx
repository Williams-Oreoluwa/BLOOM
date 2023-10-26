import React from "react";
import Login_Navbar from "./Login_Navbar";
import Login_Body from "./Login_Body";

const Login = () => {
  return (
    <div>
      <div className="absolute font-poppins register top-0 left-0 w-full  h-screen ">
        <Login_Navbar />
        <Login_Body />
      </div>
    </div>
  );
};

export default Login;
