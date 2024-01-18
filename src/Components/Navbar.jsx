import React, { useState } from "react";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const menuItems = [
    { id: 1, text: "Home", link: "/" },
    { id: 2, text: "About Us", link: "/about" },
    { id: 3, text: "Career", link: "/career" },
    { id: 4, text: "Blog", link: "/blog" },
    { id: 5, text: "Contact Us", link: "/contact" },
    { id: 6, text: "Login", link: "/login" },
  ];

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-3xl font-bold">Fahad</div>
        <div className="md:hidden">
          <button onClick={handleToggle} className="text-white">
            {toggle ? "Close" : "Menu"}
          </button>
        </div>
        <ul className={`md:flex md:space-x-4 ${toggle ? "block" : "hidden"}`}>
          {menuItems.map((item) => (
            <li key={item.id} className="hover:text-yellow-300">
              <a href={item.link}>{item.text}</a>
            </li>
          ))}
        </ul>
        <div className="md:flex gap-4">
          <button className="text-white hover:text-yellow-300 transition duration-300 ease-in-out transform hover:scale-105">
            Rental bus
          </button>
          <button className="text-white hover:text-yellow-300 transition duration-300 ease-in-out transform hover:scale-105">
            Ticket
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
