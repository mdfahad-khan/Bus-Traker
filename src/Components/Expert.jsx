import React from "react";
import { FaRocket } from "react-icons/fa";
import image from "../assets/coder.gif";

const Expert = () => {
  return (
    <div className="max-w-[1350px]   p-8 grid grid-cols-1 md:grid-cols-2 md:gap-8 bg-gradient-to-r from-blue-500 to-purple-500  shadow-xl overflow-hidden">
      <div className="text-center">
        <img
          src={image}
          alt="Coder"
          className="w-full max-w-sm mx-auto rounded-md filter brightness-90"
        />
      </div>
      <div className="flex flex-col justify-center items-start text-white">
        <h2 className="text-5xl font-extrabold mb-4 leading-tight">
          Booking Your Ticket Made Easy
        </h2>
        <p className="text-lg mb-6">
          Discover a hassle-free way to book your tickets with Bus Tracker. Our
          user-friendly platform ensures a seamless experience for your travel
          needs.
        </p>
        <div className="flex items-center mb-4">
          <FaRocket className="text-[#f39c12] text-3xl mr-2" />
          <span className="text-[#f39c12] font-semibold">
            Fast and Efficient Service
          </span>
        </div>
        <div className="flex items-center mb-4">
          <span className="text-[#e84393]">&#9733;</span>
          <span className="text-[#e84393] ml-2 font-semibold">
            Top-notch Customer Satisfaction
          </span>
        </div>
        <button className="bg-gradient-to-r from-[#3498db] to-[#2980b9] text-white rounded-full p-3 w-1/2 md:w-1/4 hover:bg-blue-600 transition duration-300">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Expert;
