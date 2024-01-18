// TicketForm.jsx
import React, { useState } from "react";
import Select from "react-select";

const TicketForm = ({ onSubmit }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [fromLocation, setFromLocation] = useState(null);
  const [toLocation, setToLocation] = useState(null);

  const locationOptions = [
    { value: "location1", label: "Location 1" },
    { value: "location2", label: "Location 2" },
    // Add more locations as needed
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validation can be added here

    onSubmit({ title, description, fromLocation, toLocation });
    setTitle("");
    setDescription("");
    setFromLocation(null);
    setToLocation(null);
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-gray-800 text-white rounded-md shadow-lg">
      <h2 className="text-3xl font-extrabold mb-4">Submit a Ticket</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-300 text-sm font-semibold mb-2">
            Title:
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-3 border rounded-md focus:outline-none bg-gray-700 text-gray-200"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-300 text-sm font-semibold mb-2">
            From:
          </label>
          <Select
            value={fromLocation}
            onChange={(selectedOption) => setFromLocation(selectedOption)}
            options={locationOptions}
            className="w-full bg-gray-700 text-gray-200"
            placeholder="Select location"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-300 text-sm font-semibold mb-2">
            To:
          </label>
          <Select
            value={toLocation}
            onChange={(selectedOption) => setToLocation(selectedOption)}
            options={locationOptions}
            className="w-full bg-gray-700 text-gray-200"
            placeholder="Select location"
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-300 text-sm font-semibold mb-2">
            Description:
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-3 border rounded-md focus:outline-none bg-gray-700 text-gray-200"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-teal-500 text-white px-4 py-2 rounded-full hover:bg-teal-600 transition duration-300">
          Submit Ticket
        </button>
      </form>
    </div>
  );
};

export default TicketForm;
