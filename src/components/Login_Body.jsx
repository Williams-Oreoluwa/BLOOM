import React from 'react'

const Login_Body = () => {
  return (
    <div className="relative py-[2rem]">
    <form className="max-w-[400px]  w-full m-auto  bg-white p-4 shadow-2xl rounded-lg flex flex-col ">
      <div className="flex flex-col items-center justify-center gap-3">
        <h2 className="text-2xl font-bold text-center py-4">
          Welcome to <span className="">BLOOM</span>
        </h2>
        <h3 className="text-[#BFBFD4]">Sign up for a free Demo</h3>
        <div className="flex gap-2 items-center justify-center  p-4 border-[2px] border-[#625F5F] rounded-full">
          <img src="/assets/flat-color-icons_google.png" alt="" />
          <h3>Sign Up with Google</h3>
        </div>
      </div>

      <div className="text-left pt-6">
     
        <div className="flex flex-col mb-4">
          <label>Email</label>
          <input className="border   relative rounded-md bg-[#F7F7F7] p-2" type="email" placeholder="Enter Email" />
        </div>
        <div className="flex flex-col mb-4">
          <label>Password</label>
          <input className="border   relative rounded-md bg-[#F7F7F7] p-2" type="password" placeholder="Enter Email" />
        </div>
        <h3  className="text-[#BFBFD4]">Forgot Password?</h3>
      </div>

      <button className="w-full py-3 mt-8 rounded-lg relative text-white bg-gradient-to-r from-[#594EDC] to-[#A54DE4]">
       Book Demo
      </button>
    </form>
  </div>
  )
}

export default Login_Body
