import React from "react";

const Blog = () => {
  return (
    <div className="mx-w-[1654px] absolute lg:relative lg:top-[320vh] top-[266rem] md:top-[306rem] left-[0] font-poppins px-4">
      <div className="text-left flex flex-col gap-3">
        <div className="uppercase">
          <h2 className="text-[30px]">Blog</h2>
        </div>
        <div className="text-[17px]">
          Check out our news about the use of technology in the medical field.
        </div>
        <div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 cursor-pointer">
            <div className="relative hover:scale-[1.01] duration-100">
              <img className="5"
                src="/hush-naidoo-jade-photography-yo01Z-9HQAw-unsplash.png"
                alt=""
              />
                   <h3 className="absolute top-[19rem] text-[11px] left-4 text-left text-white font-light">
                {" "}
                Check out our latest news and <br />
                articles about the use of technology <br /> in the medical
                field.{" "}
              </h3>
           

          
            </div>
            <div className="relative  hover:scale-[1.01] duration-100">
              <img src="/Group 12.png" alt="" />
              <h3 className="absolute top-[19rem] text-[11px] left-4 text-left text-white font-light">
                {" "}
                Check out our latest news and <br />
                articles about the use of technology <br /> in the medical
                field.{" "}
              </h3>
            </div>
            <div className="relative  hover:scale-[1.01] duration-100">
              <img  src="/Group 13.png" alt="" />
              <h3 className="absolute top-[19rem] text-[11px] left-4 text-left text-white font-light">
                {" "}
                Check out our latest news and <br />
                articles about the use of technology <br /> in the medical
                field.{" "}
              </h3>
            </div>
          </div>
        </div>
        <div>
          <button></button>
        </div>
      </div>
    </div>
  );
};

export default Blog;
