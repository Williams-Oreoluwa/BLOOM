import React from "react";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const [Nav, setNav] = React.useState(false);
  return (
    // Mobile Nav bar
    <div>
      {Nav ? <MobileMenu /> : ""}
      <div className="relative max-w-[1640px] mx-auto justify-center items-center z-[2]">
        <div className="bg-white p-3 rounded-2xl  lg:hidden xl:hidden 2xl:hidden">
          <div className='grid grid-cols-2 gap-[45vw]  md:gap-[75vw] items-center justify-center'>
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
                className={`${!Nav ? "hidden  z-[6]" : "block fixed"}`}
                src="/Vector 50.png"
                alt=""
              />
            </div>
          </div>
        </div>

        {/* Mobile Nav Bar */}

        {/* Desktop screen */}

        <div className="left-[10rem]  hidden lg:block xl:block 2xl:block p-4">
          <div className="flex gap-[25rem] xl:gap-[30rem] items-center justify-center">
            <div className="text-white text-3xl">
              <h1>Bloom</h1>
            </div>
            <div>
              <ul className="flex gap-[3rem] items-center justify-center text-white text-sm font-poppins">
                <li>About</li>
                <li>Blog</li>
                <li>Contact</li>
                <li>Pricing</li>
                <li>
                  <button className="bg-white  w-[120px] rounded-3xl p-1 px-4 py-2">
                    <h3 className="bg-gradient-to-r from-[#594EDC] to-[#A54DE4] inline-block text-transparent bg-clip-text">
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
