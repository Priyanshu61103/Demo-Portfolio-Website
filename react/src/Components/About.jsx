import React from "react";

const About = () => {
  return (
    <div id = "aboutDiv" className="text-white lg:m-50 m-10 mt-20 mb-20 lg:mt-0 lg:mb-0">
      <div className="flex justify-center">
        <h1 className="text-6xl lg:m-10 m-3 font-semibold ">What I do</h1>
      </div>

      <div className="lg:text-xl text-lg text-gray-400 lg:w-210 flex justify-center text-center lg:ml-12">
        <p className="lg:w-200">
          I am a skilled and passionate web designer with experience in creating
          visually apperaring and user-friendly websites. I have a strong
          understanding of design and a keen eye for detail. I am proficient in
          HTML, CSS, and JavaScript , as well as design software such as Adobe
          Photoshop and illustrator.
        </p>
      </div>
      <div>
        <div className="flex justify-center mt-10">
          <div className="h-40 w-200 flex items-center gap-5 p-10" style={{backgroundColor:"rgb(31, 30, 30)"}}>
            <img src="../ui-design.png" alt="" className="lg:h-15 lg:w-15 h-10 w-10" />
            <div>
              <h1 className="lg:text-2xl text-xl font-bold">UI/UX design</h1>
              <p className="lg:text-xl text-gray-300">This is a demo text, you can write your own content here.</p>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-10">
          <div className="h-40 lg:w-200 flex items-center gap-5 p-10" style={{backgroundColor:"rgb(31, 30, 30)"}}>
            <img src="../website-design.png" alt="" className="lg:h-15 lg:w-15 h-10 w-10" />
            <div>
              <h1 className="lg:text-2xl text-xl font-bold">Website design</h1>
              <p className="lg:text-xl text-gray-300">This demo text can be changed while making the production ready site.</p>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-10">
          <div className="h-40 w-200 flex items-center gap-5 p-10" style={{backgroundColor:"rgb(31, 30, 30)"}}>
            <img src="../app-design.png" alt="" className="lg:h-15 lg:w-15 h-10 w-10" />
            <div>
              <h1 className="lg:text-2xl text-xl font-bold">App design</h1>
              <p className="lg:text-xl text-gray-300">You can write text related to mobile app development</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
