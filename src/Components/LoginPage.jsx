// LoginPage.jsx
import React, { useState } from "react";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [formErrors, setFormErrors] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setFormErrors({
      ...formErrors,
      [e.target.name]: "", // Clear any previous errors when the user starts typing
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform form validation
    let isValid = true;
    const newFormErrors = { ...formErrors };

    if (formData.username.trim() === "") {
      newFormErrors.username = "Username is required";
      isValid = false;
    }

    if (formData.password.trim() === "") {
      newFormErrors.password = "Password is required";
      isValid = false;
    }

    if (!isValid) {
      setFormErrors(newFormErrors);
      return;
    }

    // Add your logic here to handle the login, such as authentication
    console.log("Login submitted:", formData);
    // You can also redirect the user to another page upon successful login
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-semibold text-gray-600 mb-1">
              Username:
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className={`w-full p-3 border rounded-md focus:outline-none ${
                formErrors.username ? "border-red-500" : "border-gray-300"
              }`}
              required
            />
            {formErrors.username && (
              <p className="text-red-500 text-sm mt-1">{formErrors.username}</p>
            )}
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-semibold text-gray-600 mb-1">
              Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className={`w-full p-3 border rounded-md focus:outline-none ${
                formErrors.password ? "border-red-500" : "border-gray-300"
              }`}
              required
            />
            {formErrors.password && (
              <p className="text-red-500 text-sm mt-1">{formErrors.password}</p>
            )}
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition duration-300"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
