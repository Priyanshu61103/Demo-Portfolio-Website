import React from "react";

const Hero = () => {
  return (
    <div id = "heroDiv" className="text-white lg:h-200 flex content-center justify-around lg:ml-10 ml-5 \">
      <div className="content-center z-25">
        <h5 className="lg:text-5xl text-3xl lg:m-2 m-1 font-light">Hello,</h5>
        <div className="flex">
          <h1 className="lg:text-7xl text-4xl lg:m-2 m-1 font-semibold">I'm </h1>
          <h1 className="lg:text-7xl text-4xl lg:m-2 m-1 font-semibold text-yellow-300">Smith</h1>
        </div>
        <h1 className="lg:text-7xl text-4xl lg:m-2 m-1 font-semibold">Website Designer</h1>
        <p className="lg:text-2xl text-xl m-3 font-light lg:w-170 w-80 text-gray-300">
          I am a skilled and passionate web designer with experience in creating
          visually appealing and user-friendly websites.
        </p>
        <button className="bg-white h-15 w-45 mt-6 text-black lg:border-2 font-semibold lg:border-black rounded-full flex justify-center items-center text-xl gap-2"><a href="#contactDiv"><i className="fa-solid fa-bag-shopping"></i>Hire Me</a></button>
      </div>

      <img src="../image.png" alt="" className="h-200 relative lg:right-0 right-70 z-20"/>
    </div>
  );
};

export default Hero;
