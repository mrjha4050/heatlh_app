import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const isDesktop = windowWidth >= 1024;
  const isTablet = windowWidth >= 768 && windowWidth < 1024;
  const isPhone = windowWidth < 768;

  return (
    <>
      <div
        className={`bg-gradient-to-r from-[#AFC8AD] h-[500px] pt-[180px] ${
          isDesktop ? "lg:w-screen" : ""
        }`}
      >
        <p
          className={`whitespace-pre capitalize text-[#1B4242] ${
            isDesktop ? "lg:text-6xl lg:ml-[10%] font-bold" : "text-xl"
          } ${isTablet ? "sm:text-2xl sm:ml-[5%] sm:mr-[5%]" : ""} ${
            isPhone ? "text-5xl" : ""
          }`}
        >
          Find Peace and Happiness
        </p>
        <p
          className={`whitespace-pre capitalize text-[#092635] ${
            isDesktop ? "lg:ml-[10%] lg:text-xl" : "text-xs"
          } ${isTablet ? "sm:ml-[5%] sm:mr-[5%] sm:text-xs" : ""} ${
            isPhone ? "text-2xl" : ""
          } mt-4`}
        >
          Transform your life through professional counseling services at
          Harmony Heaven
        </p>
        <div className="flex justify-center mt-7 ">
          <GetStartedButton />
        </div>
      </div>

      <div
        className={`grid grid-cols-1 ${isTablet ? "sm:grid-cols-2" : ""} ${
          isDesktop ? "lg:grid-cols-3" : ""
        } mt-10 mx-4 gap-y-10 justify-evenly mb-4`}
      >
        <CardLink
          to="/Ovulation Calculator"
          imageSrc="./images/mensu.png"
          alt="img1"
        />
        <CardLink to="/BMI Calculator" imageSrc="./images/bmi.png" alt="img2" />
        <CardLink
          to="/Meal Suggestions"
          imageSrc="./images/meal.png"
          alt="img3"
        />
      </div>

      <footer className="relative bg-blueGray-200 pt-8 pb-6 mt-3 mx-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap text-center lg:text-left justify-center">
            <div className="w-full lg:w-6/12 px-4">
              <h4 className="text-3xl font-semibold text-blueGray-700">
                Let's keep in touch!
              </h4>
              <h5 className="text-lg mt-0 mb-2 text-blueGray-600">
                Find us on any of these platforms, we respond 1-2 business days.
              </h5>
              <SocialMediaButton iconClass="fab fa-twitter" />
              <SocialMediaButton iconClass="fab fa-facebook-square" />
              <SocialMediaButton iconClass="fab fa-dribbble" />
              <SocialMediaButton iconClass="fab fa-github" />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

const CardLink = ({ to, imageSrc, alt }) => (
  <div>
    <Link to={to}>
      <img
        src={imageSrc}
        className="w-full sm:w-60 border-2 border-black rounded-full mx-auto"
        alt={alt}
      />
    </Link>
  </div>
);

const SocialMediaButton = ({ iconClass }) => (
  <button
    className="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mx-2"
    type="button"
  >
    <i className={iconClass}></i>
  </button>
);

const GetStartedButton = () => (
  <Link to="Register"> 
    <button
      className="bg-[#092635] text-white font-bold py-3 px-10 rounded-full focus:outline-none focus:shadow-outline transition duration-300 hover:bg-[#1B4278]"
      type="button"
    >
      Get Started
    </button>
  </Link>
);



export default Home;
