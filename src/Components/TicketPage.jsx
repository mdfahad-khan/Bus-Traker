// TicketPage.jsx
import React, { useState } from "react";
import TicketDetails from "./TicketDetails";
import TicketForm from "./TicketForm";
import TicketList from "./TicketList";

const TicketPage = () => {
  const [tickets, setTickets] = useState([]);
  const [selectedTicket, setSelectedTicket] = useState(null);

  const submitTicket = (newTicket) => {
    // Add the new ticket to the list
    setTickets([...tickets, { ...newTicket, id: tickets.length + 1 }]);
  };

  const selectTicket = (ticket) => {
    setSelectedTicket(ticket);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-800 to-gray-900 text-gray-100">
      <div className="flex justify-center items-center pt-16">
        <TicketForm onSubmit={submitTicket} />
        <TicketList tickets={tickets} onSelect={selectTicket} />
        <TicketDetails ticket={selectedTicket} />
      </div>
    </div>
  );
};

export default TicketPage;
