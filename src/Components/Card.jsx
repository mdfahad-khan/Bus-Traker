// Card.jsx
import React from "react";

const cardStyle = {
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  height: "400px",
  borderRadius: "20px",
  transition: "transform 0.5s ease",
  background: "white",
  overflow: "hidden",
};

const Card = ({ imageUrl, title, description }) => {
  return (
    <div className="group overflow-hidden bg-white shadow-lg rounded-md transition-transform transform hover:scale-105 duration-500 border border-gray-200">
      <div className="relative h-48 overflow-hidden">
        <img
          src={imageUrl}
          alt=""
          className="w-full h-full object-cover rounded-t-md transform transition-transform group-hover:scale-110"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="text-2xl font-semibold text-white">{title}</h2>
        </div>
      </div>
      <div className="p-4">
        <p className="text-gray-700">{description}</p>
        <div className="flex justify-between items-center mt-4">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition duration-300">
            Read More
          </button>
          <div className="flex items-center">
            <span className="text-yellow-400 mr-2">&#9733;</span>
            <span className="text-gray-700">4.8</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
