import React from "react";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const [Nav, setNav] = React.useState(false);
  return (
    // Mobile Nav bar
    <div className=" w-full  bg-gradient-to-r z-[1] from-[#594EDC] to-[#A54DE4]">
      {Nav ? <MobileMenu /> : ""}
      <div className="max-w-[1650px]  w-full p-4 ">
        <div className="max-w-[1650px] bg-white  p-4  rounded-2xl lg:hidden xl:hidden 2xl:hidden">
          <div className='grid grid-cols-2 place-items-center gap-[40vw] md:gap-[65vw]'>
            <div>
              <img
                size={30}
                className={`${!Nav ? 'flex flex-row items-start  max-h-[500px]' : 'hidden'}`}
                src="Group 2.png"
                alt=""
              />
            </div>

            <div>
              <img
                onClick={() => setNav(!Nav)}
                className={`${!Nav ? "block " : "hidden"}`}
                src="Vector 4.png"
                alt=""
              />
              <img
                onClick={() => setNav(!Nav)}
                className={`${!Nav ? "hidden  " : "z-[6] block fixed"}`}
                src="/Vector 50.png"
                alt=""
              />
            </div>
          </div>
        </div>

        {/* Mobile Nav Bar */}

        {/* Desktop screen */}

        <div className=" hidden relative w-full lg:block xl:block 2xl:block px-auto">
          <div className="flex gap-[25rem] max-w-[1650px] xl:gap-[30rem] item-center justify-center p-[1rem]">
            <div className="text-white text-3xl">
              <h1>Bloom</h1>
            </div>
            <div>
              <ul className="flex gap-[10%] items-center justify-center text-white text-sm font-poppins">
                <li className='hover:text-[#594EDC] hover:bg-white rounded-full cursor-pointer p-2'>About</li>
                <li className='hover:text-[#594EDC] hover:bg-white rounded-full cursor-pointer p-2'>Blog</li> 
                <li className='hover:text-[#594EDC] hover:bg-white rounded-full cursor-pointer p-2'>Contact</li>
                <li className='hover:text-[#594EDC] hover:bg-white rounded-full cursor-pointer p-2'>Pricing</li>
                <li>
                  <button className="bg-white  w-[120px] rounded-3xl p-1 px-4  text">
                    <h3 className="bg-gradient-to-r from-[#594EDC] to-[#A54DE4] inline-block text-transparent bg-clip-text ">
                      Try for free
                    </h3>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
