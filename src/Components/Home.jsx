import React from "react";
import Typed from "react-typed";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import bus from "../assets/bus.png";

const slidesData = [
  {
    gradientFrom: "text-red-600",
    gradientTo: "#352929",
    buttonText: "Get Started",
    textColor: "text-red-600",
    buttonColor: "bg-black",
  },
  {
    gradientFrom: "#ebc7c7",
    gradientTo: "#352929",
    buttonText: "Get Started",
    textColor: "text-red-600",
    buttonColor: "bg-black",
  },
  {
    gradientFrom: "#ebc7c7",
    gradientTo: "#352929",
    buttonText: "Get Started",
    textColor: "text-blue-900",
    buttonColor: "bg-black",
  },
];

const Slide = ({
  gradientFrom,
  gradientTo,
  buttonText,
  textColor,
  buttonColor,
}) => (
  <div
    className={`bg-gradient-to-b from-${gradientFrom} to-${gradientTo} w-full py-[100px] text-center text-white flex`}>
    <div className="max-w-[1240px] mt-[100px] mx-auto">
      <div className="text-4xl duration-500 md:text-5xl mb-4">
        Empowering Bangladesh
      </div>
      <h1
        className={`text-5xl duration-500 md:text-[80px] font-bold mb-4 ${textColor}`}>
        to travel better!
      </h1>
      <h2 className="text-4xl duration-500 md:text-5xl font-bold">
        Travel{" "}
        <Typed
          className="pl-3"
          strings={["Best Area", "Safe", "And Enjoy"]}
          typeSpeed={100}
          backSpeed={50}
        />
      </h2>
      <button
        className={`mt-4 text-white rounded p-3 hover:bg-green-600 ${buttonColor}`}>
        {buttonText}
      </button>
    </div>
    <div>
      <img src={bus} alt="" className="w-[600px] h-[400px] pr-10 fadeIn" />
    </div>
  </div>
);

const Home = () => {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      pagination={{ clickable: true }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper">
      {slidesData.map((slide, index) => (
        <SwiperSlide key={index}>
          <Slide {...slide} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Home;
