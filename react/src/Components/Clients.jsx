import React from "react";

const Clients = () => {
  return (
    <div id="clientsDiv">
      <div className="flex justify-center">
        <h1 className="text-white lg:text-6xl text-5xl m-15 mb-10 font-semibold lg:ml-24">My clients</h1>
      </div>
      <div className="text-xl text-gray-400 lg:w-300 flex justify-center text-center mb-5 lg:ml-20">
        <p className="lg:w-200">
          I have had the opportunity to work with a diverse group of companies.
          Some of the notables companies I haveworked with includes
        </p>
      </div>

      <div>
        <div className="lg:ml-60">
          <div className="flex flex-wrap">
            <div>
              <img src="../walmart.png" alt="" className="lg:h-30 h-20 lg:w-50 w-40 m-3 lg:mr-4"/>
            </div>
            <div>
              <img src="../adobe.png" alt="" className="lg:h-30 h-20 lg:w-50 w-40 m-3 lg:mr-4" />
            </div>
            <div>
              <img src="../microsoft.png" alt="" className="lg:h-30 h-20 lg:w-50 w-40 m-3 lg:mr-4"/>
            </div>
            <div>
              <img src="../facebook.png" alt="" className="lg:h-30 h-20 lg:w-50 w-40 m-3 lg:mr-4"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;
