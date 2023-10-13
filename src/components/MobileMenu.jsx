import React from "react";

const MobileMenu = () => {
    const [bar, setBar] = React.useState(true)

    if(!bar){
        return ''
    }
 
  return (
    <div className="bg-white fixed top-0 left-0 w-full h-[100vh]  z-[2] lg:hidden xl:hidden 2xl:hidden">
        
     
      <div className="relative top-[55%] left-[6%] text-[32px]">
        <ul className="flex flex-col g-3 text-left font-bold font-poppins ">
            <li className="text-black hover:text-[#594EDC]">
                About
            </li>
            <li  className="text-black hover:text-[#594EDC]">
                Blog
            </li>
            <li  className="text-black hover:text-[#594EDC]">
                Contact
            </li>
            <li  className="text-black hover:text-[#594EDC]">
                Pricing 
            </li>
            <li className="pt-6">  
                <button className=" bg-gradient-to-r from-[#594EDC] to-[#A54DE4] text-white text-sm py-4 px-2 w-[200px] rounded-full">
                    Try for free
                </button>
            </li>
        </ul>
      </div>
    </div>
  );
};

export default MobileMenu;
