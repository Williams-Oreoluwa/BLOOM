import React from "react";

const Blog = () => {
  return (
    <div className="flex flex-col relative w-full font-poppins">
      <div className="max-w-[1650px] p-[1rem] md:p-[2rem] lg:p-[4rem] xl:p-[6rem] text-left flex flex-col gap-3 ">
        <div className="uppercase">
          <h2 className="text-[30px]">Blog</h2>
        </div>
        <div className="text-[17px]">
          Check out our news about the use of technology in the medical field.
        </div>
        <div className="flex items-center justify-center">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className=" hover:scale-[1.01] duration-100 cursor-pointer">
              <img className=""
                src="/hush-naidoo-jade-photography-yo01Z-9HQAw-unsplash.png"
                alt=""
              />  
          
             
            </div>
            <div className=" hover:scale-[1.01] duration-100 cursor-pointer">
              <img src="/Group 12.png" alt="" />
       
            
            </div>
            <div className=" hover:scale-[1.01] duration-100 cursor-pointer">
              <img  src="/Group 13.png" alt="" />
           
            
            </div>
          </div>
        </div>
        <div className="md:flex lg:flex items-center justify-center pt-4 cursor-pointer hidden">
          <button className='rounded-full  bg-gradient-to-r from-[#594EDC] to-[#A54DE4] p-2 px-4  text-white'>
            Visit Blog
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blog;
