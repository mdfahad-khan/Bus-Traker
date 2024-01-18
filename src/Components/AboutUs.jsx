// AboutUsPage.jsx
import React from "react";
import aboutUsImage from "../assets/car1.jpg"; // Import your image file

const AboutUs = () => {
  return (
    <div className="max-w-[1350px]  mx-auto my-8 p-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-md shadow-lg text-white flex items-center">
      <div className="flex-shrink-0 w-1/2 overflow-hidden rounded-md">
        <img
          src={aboutUsImage}
          alt="About Us"
          className="w-full h-full object-cover transition-transform transform hover:scale-105"
        />
      </div>
      <div className="w-1/2 pl-8">
        <h1 className="text-4xl font-bold mb-6">About Us</h1>
        <p className="text-lg mb-4">
          Welcome to Bus Tracker, your ultimate destination for seamless and
          efficient bus ticket booking. Our mission is to redefine your travel
          experience, making it not just a journey, but a delightful adventure.
        </p>
        <p className="text-lg mb-4">
          At Bus Tracker, speed and efficiency are our guiding principles. Our
          user-friendly platform ensures that booking your tickets is a breeze,
          allowing you to focus on savoring every moment of your travel.
        </p>
        <p className="text-lg mb-4">
          We take pride in delivering exceptional customer satisfaction. Your
          comfort and convenience are our top priorities, and our dedicated team
          is here to assist you at every step of your journey.
        </p>
        <p className="text-lg mb-4">
          Ready to embark on the future of bus travel? Join us on Bus Tracker
          and experience a world where booking your ticket is as thrilling as
          the destination itself.
        </p>
        <p className="text-lg">
          Thank you for choosing Bus Tracker. We can't wait to be a part of your
          incredible travel stories!
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
