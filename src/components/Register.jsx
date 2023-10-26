import React from "react";
import Register_Navbar from "./Register_Navbar";
import Register_body from "./Register_body";

const Register = () => {
  return (
    <div className="absolute font-poppins register top-0 left-0 w-full  h-screen ">
     <Register_Navbar/>
     <Register_body/>
    </div>
  );
};

export default Register;
