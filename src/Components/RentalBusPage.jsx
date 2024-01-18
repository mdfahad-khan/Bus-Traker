// RentalBusPage.jsx
import React from "react";
import { Link } from "react-router-dom"; // Uncomment this line

const RentalBusPage = () => {
  // Sample data for bus listings
  const busListings = [
    {
      id: 1,
      image: "url_to_bus_image_1.jpg", // Replace with actual image URL
      rent: "$100/day",
      detailsLink: "/rental/bus/1", // Replace with the actual path for bus details
    },
    {
      id: 2,
      image: "url_to_bus_image_2.jpg",
      rent: "$120/day",
      detailsLink: "/rental/bus/2",
    },
    // Add more bus listings as needed
  ];

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-3xl font-extrabold mb-4">Rental Bus Listings</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {busListings.map((bus) => (
          <div key={bus.id} className="bg-white p-4 rounded-md shadow-md">
            <img
              src={bus.image}
              alt={`Bus ${bus.id}`}
              className="w-full h-40 object-cover mb-4 rounded-md"
            />
            <p className="text-lg font-semibold mb-2">Rent: {bus.rent}</p>
            <div className="flex justify-between">
              <Link
                to={bus.detailsLink}
                className="bg-teal-500 text-white px-4 py-2 rounded-full hover:bg-teal-600 transition duration-300">
                Details
              </Link>
              <button className="bg-yellow-500 text-white px-4 py-2 rounded-full hover:bg-yellow-600 transition duration-300">
                Rent
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RentalBusPage;
