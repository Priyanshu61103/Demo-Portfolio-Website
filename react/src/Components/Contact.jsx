import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    alert("Email Sent");
    e.target.reset();

    emailjs
      .sendForm(`${import.meta.env.VITE_EMAIL_JS_SERVICE}`, `${import.meta.env.VITE_EMAIL_JS_TEMPLATE}`, form.current, {
        publicKey: `${import.meta.env.VITE_EMAIL_JS_PUBLIC_KEY}`,
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <div id="contactDiv">
      <div className="flex justify-center">
        <h1 className="text-white lg:text-6xl text-5xl m-15 mb-10 font-semibold lg:ml-24">
          Contact Me
        </h1>
      </div>

      <div className="text-lg lg:text-xl text-gray-400 lg:w-310 flex justify-center text-center mb-5 lg:ml-20">
        <p className="w-200">
          Please fill out the form below to discuss any work opportunities.
        </p>
      </div>

      <form className="m-10" ref={form} onSubmit={sendEmail}>
        <div className="flex justify-center">
          <div
            className="lg:w-200 w-70 h-10 text-gray-300 text-xl m-2"
            style={{ backgroundColor: "rgb(31, 30, 30)" }}
          >
            <input
              type="text"
              placeholder="Your Name"
              className="lg:w-200 w-70 p-2"
              name="user_name"
            />
          </div>
        </div>
        <div className="flex justify-center">
          <div
            className="lg:w-200 w-70 h-10 text-gray-300 text-xl m-2"
            style={{ backgroundColor: "rgb(31, 30, 30)" }}
          >
            <input
              type="email"
              placeholder="Your Email"
              className="lg:w-200 w-70 p-2"
              name="user_email"
            />
          </div>
        </div>
        <div className="flex justify-center">
          <div className="text-xl m-2">
            <textarea name="message" className="h-50 lg:w-200 w-70 text-gray-300 p-2" placeholder="Your Message" style={{ backgroundColor: "rgb(31, 30, 30)" }}/>
          </div>
        </div>

        <div className="flex justify-center">
          <button className="bg-white h-15 font-semibold w-50 text-black border-2 border-black rounded-lg text-xl">
            Submit
          </button>
        </div>
      </form>

      <div className="flex justify-center gap-5 m-10">
        <a href="https://www.facebook.com/">
          <img className="h-15 w-15" src="../facebook-icon.png" alt="" />
        </a>
        <a href="https://twitter.com/">
          <img className="h-15 w-15" src="../twitter.png" alt="" />
        </a>
        <a href="https://www.youtube.com/">
          <img className="h-15 w-15" src="../youtube.png" alt="" />
        </a>
        <a href="https://in.linkedin.com/">
          <img
            className="h-17 w-17 relative bottom-1.5 right-2 "
            src="../linkedin.webp"
            alt=""
          />
        </a>
      </div>

      <div
        style={{ backgroundColor: "rgb(31, 30, 30)" }}
        className="text-gray-300 h-10 flex justify-center items-center"
      >
        <p>Copyright © 2023 Smith Williams. All right received.</p>
      </div>
    </div>
  );
};

export default Contact;
