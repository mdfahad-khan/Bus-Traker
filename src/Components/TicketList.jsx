// TicketList.jsx
import React from "react";

const TicketList = ({ tickets, onSelect }) => {
  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-gray-800 rounded-md shadow-lg text-white">
      <h2 className="text-3xl font-extrabold mb-4">Ticket List</h2>
      <ul>
        {tickets.map((ticket) => (
          <li
            key={ticket.id}
            onClick={() => onSelect(ticket)}
            className="cursor-pointer mb-4 p-4 border border-gray-700 rounded-md hover:shadow-md transition duration-300">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-lg font-semibold">{ticket.title}</h3>
                <p className="text-sm text-gray-300">{ticket.status}</p>
              </div>
              <span className="text-teal-300">&#9654;</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TicketList;
