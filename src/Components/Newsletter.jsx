import React, { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic for handling the form submission, e.g., send the email to the server
    // For now, let's just set submitted to true
    setSubmitted(true);
  };

  return (
    <div className="w-full bg-gradient-to-r from-blue-500 to-blue-700 p-8">
      <div className="max-w-[1240px] mx-auto flex flex-col md:flex-row items-center justify-between py-8">
        <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
          <h1 className="font-bold text-4xl text-white mb-4">
            Welcome to Our Newsletter
          </h1>
          <p className="text-white">
            Stay up-to-date with the latest news and updates by subscribing to
            our newsletter.
          </p>
        </div>
        <div className="md:w-1/2">
          {!submitted ? (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col items-center md:flex-row">
              <input
                type="email"
                value={email}
                onChange={handleInputChange}
                className="p-3 rounded text-gray-700 mb-4 md:mb-0 md:mr-4 w-full md:w-auto"
                placeholder="Enter your email"
                required
              />
              <button
                type="submit"
                className="bg-yellow-500 text-gray-800 rounded p-3 w-full md:w-auto hover:bg-yellow-600 transition duration-300">
                Subscribe
              </button>
            </form>
          ) : (
            <p className="text-white">Thank you for subscribing!</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
