// SignupPage.jsx
import React, { useState } from "react";

const SignupPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    country: "",
    dateOfBirth: "",
    phoneNumber: "",
    agreeToTerms: false,
  });

  const [formErrors, setFormErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    country: "",
    dateOfBirth: "",
    phoneNumber: "",
    agreeToTerms: "",
  });

  const countries = ["", "USA", "Canada", "UK", "Australia", "Other"];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });

    setFormErrors({
      ...formErrors,
      [name]: "", // Clear any previous errors when the user starts typing
    });
  };

  const handlePasswordStrength = () => {
    // You can implement password strength logic here if needed
    // For example, check if the password contains a combination of letters, numbers, and special characters
    // Update formErrors.passwordStrength accordingly
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform form validation
    let isValid = true;
    const newFormErrors = { ...formErrors };

    if (formData.firstName.trim() === "") {
      newFormErrors.firstName = "First name is required";
      isValid = false;
    }

    if (formData.lastName.trim() === "") {
      newFormErrors.lastName = "Last name is required";
      isValid = false;
    }

    if (formData.email.trim() === "") {
      newFormErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newFormErrors.email = "Invalid email format";
      isValid = false;
    }

    if (formData.password.trim() === "") {
      newFormErrors.password = "Password is required";
      isValid = false;
    } else if (formData.password.length < 6) {
      newFormErrors.password = "Password must be at least 6 characters long";
      isValid = false;
    }

    if (formData.confirmPassword.trim() === "") {
      newFormErrors.confirmPassword = "Confirm password is required";
      isValid = false;
    } else if (formData.password !== formData.confirmPassword) {
      newFormErrors.confirmPassword = "Passwords do not match";
      isValid = false;
    }

    if (formData.country === "") {
      newFormErrors.country = "Please select your country";
      isValid = false;
    }

    if (formData.dateOfBirth.trim() === "") {
      newFormErrors.dateOfBirth = "Date of birth is required";
      isValid = false;
    }

    if (formData.phoneNumber.trim() === "") {
      newFormErrors.phoneNumber = "Phone number is required";
      isValid = false;
    }

    if (!formData.agreeToTerms) {
      newFormErrors.agreeToTerms = "You must agree to the terms and conditions";
      isValid = false;
    }

    if (!isValid) {
      setFormErrors(newFormErrors);
      return;
    }

    // Add your logic here to handle the signup, such as API call or authentication
    console.log("Signup submitted:", formData);
    // You can also redirect the user to another page upon successful signup
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-purple-400 to-blue-500">
      <div className="bg-white px-12 rounded shadow-md w-full max-w-lg h-[90vh]">
        <h2 className="text-3xl font-bold mb-3 text-center text-gray-800">
          Sign Up
        </h2>
        <form onSubmit={handleSubmit} className="space-y-1">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="firstName"
                className="block text-sm font-semibold text-gray-600">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full p-3 border rounded-md focus:outline-none"
                required
              />
              {formErrors.firstName && (
                <p className="text-red-500 text-xs mt-1">
                  {formErrors.firstName}
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor="lastName"
                className="block text-sm font-semibold text-gray-600">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full p-3 border rounded-md focus:outline-none"
                required
              />
              {formErrors.lastName && (
                <p className="text-red-500 text-xs mt-1">
                  {formErrors.lastName}
                </p>
              )}
            </div>
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border rounded-md focus:outline-none"
              required
            />
            {formErrors.email && (
              <p className="text-red-500 text-xs mt-1">{formErrors.email}</p>
            )}
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-semibold text-gray-600">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={(e) => {
                handleChange(e);
                handlePasswordStrength();
              }}
              className="w-full p-3 border rounded-md focus:outline-none"
              required
            />
            {formErrors.password && (
              <p className="text-red-500 text-xs mt-1">{formErrors.password}</p>
            )}
            {/* Display password strength indicator */}
            {/* Add your logic to display password strength here */}
          </div>
          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-semibold text-gray-600">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full p-3 border rounded-md focus:outline-none"
              required
            />
            {formErrors.confirmPassword && (
              <p className="text-red-500 text-xs mt-1">
                {formErrors.confirmPassword}
              </p>
            )}
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="country"
                className="block text-sm font-semibold text-gray-600">
                Country
              </label>
              <select
                id="country"
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="w-full p-3 border rounded-md focus:outline-none"
                required>
                {countries.map((country, index) => (
                  <option key={index} value={country}>
                    {country}
                  </option>
                ))}
              </select>
              {formErrors.country && (
                <p className="text-red-500 text-xs mt-1">
                  {formErrors.country}
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor="phoneNumber"
                className="block text-sm font-semibold text-gray-600">
                Phone Number
              </label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="w-full p-3 border rounded-md focus:outline-none"
                required
              />
              {formErrors.phoneNumber && (
                <p className="text-red-500 text-xs mt-1">
                  {formErrors.phoneNumber}
                </p>
              )}
            </div>
          </div>
          <div>
            <label
              htmlFor="dateOfBirth"
              className="block text-sm font-semibold text-gray-600">
              Date of Birth
            </label>
            <input
              type="date"
              id="dateOfBirth"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleChange}
              className="w-full p-3 border rounded-md focus:outline-none"
              required
            />
            {formErrors.dateOfBirth && (
              <p className="text-red-500 text-xs mt-1">
                {formErrors.dateOfBirth}
              </p>
            )}
          </div>
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="agreeToTerms"
              name="agreeToTerms"
              checked={formData.agreeToTerms}
              onChange={handleChange}
              className="text-blue-500"
            />
            <label htmlFor="agreeToTerms" className="text-sm text-gray-600">
              I agree to the{" "}
              <a href="/terms" className="text-blue-500">
                terms and conditions
              </a>
            </label>
          </div>
          {formErrors.agreeToTerms && (
            <p className="text-red-500 text-xs mt-1">
              {formErrors.agreeToTerms}
            </p>
          )}
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition duration-300 w-full mt-4">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
