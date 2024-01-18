// App.jsx
import React from "react";
import AboutUs from "./Components/AboutUs";
import Card from "./Components/Card";
import ContactUsPage from "./Components/ContactUsPage";
import Expert from "./Components/Expert";
import Home from "./Components/Home";
import LoginPage from "./Components/LoginPage";
import Navbar from "./Components/Navbar.jsx";
import Newsletter from "./Components/Newsletter";

import SignupPage from "./Components/SignupPage";
import TermsAndConditionsPage from "./Components/TermsAndConditionsPage";
import TicketPage from "./Components/TicketPage";
import car1 from "./assets/car1.jpg";
import car2 from "./assets/car2.jpg";
import car3 from "./assets/car3.jpg";

const cardData = [
  {
    id: 1,
    imageUrl: car3,
    title: "Car rental",
    description: "Enjoy unbeatable prices with on-demand",
  },
  {
    id: 2,
    imageUrl: car2,
    title: "Another Service",
    description: "Description for another service",
  },
  {
    id: 3,
    imageUrl: car1,
    title: "Yet Another Service",
    description: "Description for yet another service",
  },
];

const App = () => {
  return (
    <>
      <div>
        <Navbar />
        <Home />
        <Expert />
        <Newsletter />
        <div className="py-[100px] px-8 bg-[#bdb9b9]">
          <div className="flex justify-center items-center ">
            <div className="ml-38 text-white max-w-2xl">
              <h2 className="text-5xl font-bold mb-4 font-montserrat ml-12">
                What We Do
              </h2>
              <p className="text-lg leading-7">
                At Bus Tracker, our mission is to provide unparalleled services,
                delivering a seamless and enjoyable experience for your commute.
                We go the extra mile to ensure your journey is comfortable,
                reliable, and stress-free.
              </p>
            </div>
          </div>
          <div className="md:grid grid-cols-3 max-w-[1240px] mx-auto gap-10 py-4">
            {cardData.map((card) => (
              <Card key={card.id} {...card} />
            ))}
          </div>
        </div>
        <AboutUs />
        <ContactUsPage />
        <LoginPage />
        <SignupPage />
        <TermsAndConditionsPage />
        <TicketPage />
        {/* <RentalBusPage /> */}
      </div>
    </>
  );
};

export default App;
