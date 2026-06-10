import React from "react";

const Portfolio = () => {
  return (
    <div id="portfolioDiv">
      <div>
        <h1 className="lg:text-6xl text-5xl text-white font-semibold text-center m-10 lg:ml-24">
          My portfolio
        </h1>
        <div className="lg:text-xl text-lg text-gray-400 lg:w-300 flex justify-center lg:ml-20">
          <p className="lg:w-160 text-center">
            I take pride in paying attention to the smallest details and making
            sure that my work is pixel perfect. I am excited to bring my skills
            and experience to help businesses achieve their goals annd create a
            strong online presence.
          </p>
        </div>

        <div className="lg:m-15 m-5">
          <div>
            <div className="flex justify-center">
              <div>
                <img
                  src="../portfolio-1.png"
                  alt=""
                  className="lg:h-100 h-30 lg:w-90 w-25 m-1"
                />
              </div>
              <div>
                <img
                  src="../portfolio-2.png"
                  alt=""
                  className="lg:h-100 h-30 lg:w-90 w-25 m-1"
                />
              </div>
              <div>
                <img
                  src="../portfolio-3.png"
                  alt=""
                  className="lg:h-100 h-30 lg:w-90 w-25 m-1"
                />
              </div>
            </div>
            <div className="flex justify-center">
              <div>
                <img
                  src="../portfolio-4.png"
                  alt=""
                  className="lg:h-100 h-30 lg:w-90 w-25 m-1"
                />
              </div>
              <div>
                <img
                  src="../portfolio-5.png"
                  alt=""
                  className="lg:h-100 h-30 lg:w-90 w-25 m-1"
                />
              </div>
              <div>
                <img
                  src="../portfolio-6.png"
                  alt=""
                  className="lg:h-100 h-30 lg:w-90 w-25 m-1"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <button className="bg-white h-15 w-45 text-black border-2 font-semibold border-black rounded-full text-xl">
            <a href="homeDiv">See More</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
