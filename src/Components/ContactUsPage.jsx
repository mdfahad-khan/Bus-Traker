// ContactUsPage.jsx
import React, { useState } from "react";
// Replace with the actual path to your image

const ContactUsPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic here to handle the form submission, such as sending an email or saving to a database
    console.log("Form submitted:", formData);
    // You can also reset the form fields if needed
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="container mx-auto my-8 p-8 bg-white rounded-md shadow-lg">
      <h1 className="text-4xl font-bold mb-6 text-gray-800">Contact Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <p className="text-lg mb-4 text-gray-700">
            Have questions or need assistance? Feel free to reach out to us
            using the contact form or the information below:
          </p>
          <p className="text-lg text-gray-700">
            <strong>Email:</strong> info@bustracker.com
          </p>
          <p className="text-lg text-gray-700">
            <strong>Phone:</strong> (123) 456-7890
          </p>
          <p className="text-lg text-gray-700">
            <strong>Address:</strong> 123 Bus Lane, Cityville, State
          </p>
          <div className="mt-4">
            <p className="text-lg mb-2 text-gray-700">
              Connect with us on social media:
            </p>
            <div className="flex">
              <a
                href="#"
                className="text-blue-500 hover:text-blue-700 mr-4"
                target="_blank"
                rel="noopener noreferrer">
                Facebook
              </a>
              <a
                href="#"
                className="text-blue-500 hover:text-blue-700"
                target="_blank"
                rel="noopener noreferrer">
                Twitter
              </a>
            </div>
          </div>
        </div>
        <div>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-lg font-semibold mb-2 text-gray-800">
                Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-lg font-semibold mb-2 text-gray-800">
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-lg font-semibold mb-2 text-gray-800">
                Message:
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 resize-none"
                rows="4"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition duration-300">
              Submit
            </button>
          </form>
        </div>
      </div>
      <div className="mt-8">
        <iframe
          title="Google Maps"
          width="100%"
          height="300"
          frameBorder="0"
          style={{ border: 0 }}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.678901234567!2d0!3d0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMDDCsDQ2JzEzLjYiTiAwMcKwMzUnMTguNSJF!5e0!3m2!1sen!2sus!4v1629317699719!5m2!1sen!2sus"
          allowFullScreen
        />
      </div>
    </div>
  );
};

export default ContactUsPage;
