import React, { useRef, useState } from "react";

const Navbar = () => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const portfolioRef = useRef(null);
  const clientsRef = useRef(null);
  const contactRef = useRef(null);
  const colorRef = useRef(null);
  const menuRef = useRef(null);
  const [hidden, sethidden] = useState("hidden");

  const changeColor = (ref1, ref2, ref3, ref4, ref5, field) => {
    if (ref2.current.style.color === "yellow") colorRef.current = ref2.current;
    if (ref3.current.style.color === "yellow") colorRef.current = ref3.current;
    if (ref4.current.style.color === "yellow") colorRef.current = ref4.current;
    if (ref5.current.style.color === "yellow") colorRef.current = ref5.current;
    if (ref1.current.style.color !== "yellow") {
      if (field === "home") ref1.current.href = "#";
      if (field === "about") ref1.current.href = "#aboutDiv";
      if (field === "portfolio") ref1.current.href = "#portfolioDiv";
      if (field === "clients") ref1.current.href = "#clientsDiv";
      if (field === "contacts") ref1.current.href = "#contactDiv";
      ref1.current.style.color = "yellow";
      ref1.current.style.textDecoration = "underline";
      ref1.current.style.textUnderlineOffset = "10px";
      ref1.current.style.textDecorationThickness = "3px";
      const parent = ref1.current.parentElement;
      if(window.innerWidth < 600)
      parent.style.boxShadow = "0px 10px 10px yellow";
      colorRef.current.style.color = "white";
      colorRef.current.style.textDecoration = "none";
      colorRef.current.style.textUnderlineOffset = "0px";
      colorRef.current.style.textDecorationThickness = "0px";
      const parent2 = colorRef.current.parentElement;
      if(window.innerWidth < 600)
      parent2.style.boxShadow = "0px 0px 0px black";
    } else {
      ref1.current.href = "#";
      ref1.current.style.color = "white";
      ref1.current.style.textDecoration = "none";
      ref1.current.style.textUnderlineOffset = "0px";
      ref1.current.style.textDecorationThickness = "0px";
      const parent = ref1.current.parentElement;
      console.log(parent.style.backgroundColor);
      if(window.innerWidth < 600)
      parent.style.boxShadow = "0px 0px 0px black";
    }
    colorRef.current = null;
  };

  const unHideMenu = () => {
    if (hidden == "hidden") {
      menuRef.current.style.display = "flex";
      menuRef.current.style.justifyContent = "space-around";
      menuRef.current.style.alignItems = "center";
      sethidden("unhidden");
    } else {
      menuRef.current.style.display = "none";
      sethidden("hidden");
    }

    console.log(hidden);
  };

  return (
    <div>
      <div className="bg-black fixed top-0 left-0 right-0 z-30">
        <div className="lg:w-full w-100 h-10 lg:h-8 text-white flex justify-center lg:justify-evenly">
          <div className=" bg-black lg:h-20 lg:w-60 lg:ml-5">
            <a href="homeDiv">
              <img
                src="../logo.png"
                alt="#"
                className="lg:h-20 lg:w-20 lg:m-0 m-2 h-18 w-20 ml-10"
              />
            </a>
          </div>
          <div>
            <div className="h-12 w-60 flex justify-end items-center m-5 mr-20 lg:hidden">
              <img
                className="h-10 w-10"
                src="../menu.png"
                alt=""
                onClick={unHideMenu}
              />
            </div>

            <div
              ref={menuRef}
              style={{}}
              className="lg:h-20 lg:w-200 h-90 w-80 lg:rounded-none rounded-xl lg:block hidden bg-gray-900 lg:bg-black font-sans font-semibold text-xl"
            >
              <div className="lg:flex lg:justify-center lg:items-center">
                <div className="h-15 lg:w-20 w-75 flex justify-center items-center  rounded-2xl m-2 bg-black">
                  <a
                    href="#"
                    ref={homeRef}
                    onClick={() =>
                      changeColor(
                        homeRef,
                        aboutRef,
                        portfolioRef,
                        clientsRef,
                        contactRef,
                        "home"
                      )
                    }
                  >
                    Home
                  </a>
                </div>

                <div className="h-15 lg:w-20 w-75 flex justify-center items-center rounded-2xl m-2 bg-black">
                  <a
                    href="#aboutDiv"
                    ref={aboutRef}
                    onClick={() =>
                      changeColor(
                        aboutRef,
                        homeRef,
                        portfolioRef,
                        clientsRef,
                        contactRef,
                        "about"
                      )
                    }
                  >
                    About
                  </a>
                </div>
                <div className="h-15 lg:w-20 w-75 flex justify-center items-center  rounded-2xl m-2 bg-black ">
                  <a
                    href="#portfolioDiv"
                    ref={portfolioRef}
                    onClick={() =>
                      changeColor(
                        portfolioRef,
                        homeRef,
                        aboutRef,
                        clientsRef,
                        contactRef,
                        "portfolio"
                      )
                    }
                  >
                    Portfolio
                  </a>
                </div>
                <div className="h-15 lg:w-20 w-75 flex justify-center items-center rounded-2xl m-2 bg-black">
                  <a
                    href="#clientsDiv"
                    ref={clientsRef}
                    onClick={() =>
                      changeColor(
                        clientsRef,
                        homeRef,
                        aboutRef,
                        portfolioRef,
                        contactRef,
                        "clients"
                      )
                    }
                  >
                    Clients
                  </a>
                </div>

                <div className="h-15 w-75 flex justify-center items-center rounded-2xl m-2 bg-black lg:hidden">
                  <a
                    href="#contactDiv"
                    ref={contactRef}
                    onClick={() =>
                      changeColor(
                        contactRef,
                        clientsRef,
                        homeRef,
                        aboutRef,
                        portfolioRef,
                        "contacts"
                      )
                    }
                  >
                    Contact Me
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-black h-20 w-70 hidden md:block">
            <button className="bg-white h-15 w-50 text-black border-2 border-black rounded-full m-3 ml-0 ">
              <a href="#contactDiv">
                <i className="fa-regular fa-message m-2 h-5 w-8"></i>Contact Me
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
