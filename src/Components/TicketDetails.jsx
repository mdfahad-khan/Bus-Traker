// TicketDetails.jsx
import React, { useState } from "react";
import PaymentModal from "./PaymentModal"; // Update the path accordingly

const TicketDetails = ({ ticket, onBuyTicket }) => {
  const [showBuySection, setShowBuySection] = useState(false);
  const [isTicketAvailable, setIsTicketAvailable] = useState(true);
  const [showPayment, setShowPayment] = useState(false);

  // Function to check ticket availability (replace this with your actual implementation)
  const checkTicketAvailability = async (ticket) => {
    // Simulating an asynchronous operation (e.g., API call)
    return new Promise((resolve) => {
      setTimeout(() => {
        // Example: Return true if the ticket is available, false otherwise
        resolve(true);
      }, 1000); // Simulating a delay of 1 second
    });
  };

  const handleBuyClick = () => {
    console.log("Buy button clicked");
    onBuyTicket(ticket);
    setShowPayment(true);
  };

  const handleCheckAvailability = async () => {
    try {
      // Replace this with your actual implementation to check ticket availability
      const isAvailable = await checkTicketAvailability(ticket);
      setIsTicketAvailable(isAvailable);
      setShowBuySection(isAvailable);
    } catch (error) {
      console.error("Error checking ticket availability:", error);
      // Handle the error as needed
    }
  };

  const closePaymentModal = () => {
    setShowPayment(false);
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-gray-900 rounded-md shadow-lg text-white">
      <h2 className="text-3xl font-extrabold mb-4">Ticket Details</h2>
      {ticket ? (
        <>
          <div className="mb-4">
            <h3 className="text-xl font-semibold mb-2">{ticket.title}</h3>
            <p className="text-gray-300">{ticket.description}</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-2">Location</h4>
            <div className="flex items-center space-x-2">
              <span className="text-teal-300">&#x1F4CD;</span>
              <p className="text-gray-300">
                {ticket.fromLocation.label} to {ticket.toLocation.label}
              </p>
            </div>
          </div>
          {isTicketAvailable ? (
            showBuySection ? (
              <div className="mt-4">
                <button
                  onClick={handleBuyClick}
                  className="bg-teal-500 text-white px-4 py-2 rounded-full hover:bg-teal-600 transition duration-300">
                  Buy Ticket
                </button>
              </div>
            ) : (
              <div className="mt-4">
                <button
                  onClick={handleCheckAvailability}
                  className="bg-teal-500 text-white px-4 py-2 rounded-full hover:bg-teal-600 transition duration-300">
                  Check Availability
                </button>
              </div>
            )
          ) : (
            <p className="text-red-500 mt-4">
              Ticket not available for selected locations.
            </p>
          )}
        </>
      ) : (
        <p className="text-gray-300">Select a ticket to view details.</p>
      )}

      {/* Payment Modal */}
      {showPayment && <PaymentModal onClose={closePaymentModal} />}
    </div>
  );
};

export default TicketDetails;
