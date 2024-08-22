"use client";
import React, { useState, useEffect } from "react";
import "./navbar.css";
import { CiPhone, CiMail } from "react-icons/ci";
import { PiWhatsappLogoThin } from "react-icons/pi";
import { FaArrowRightLong, FaInstagram } from "react-icons/fa6";
import { FaYoutube, FaFacebookF } from "react-icons/fa6";
import { LuMoveDown } from "react-icons/lu";
import Content1 from "../content1";

const Navbar: React.FC = () => {
  const [statueCurrentIndex, setStatueCurrentIndex] = useState(0);
  const [slideCurrentIndex, setSlideCurrentIndex] = useState(0);

  const images = [
    {
      src: "/anjaneya.png",
      alt: "Anjaneya",
      text: "Nutana Sri Trinetra Panchamuga Anjaneyar",
    },
    {
      src: "/balramar.jpg",
      alt: "Balramar",
      text: "Kongu Ayodhi Bala Ramar",
    },
  ];

  const imagesslide = [
    { src: "/slide1.jpg", alt: "Slide 1", text: "Caption One" },
    { src: "/slide1.jpg", alt: "Slide 2", text: "Caption Two" },
    { src: "/slide1.jpg", alt: "Slide 3", text: "Caption Three" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setStatueCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideCurrentIndex((prevIndex) => (prevIndex + 1) % imagesslide.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [imagesslide.length]);

  const handleSlideNext = () => {
    setSlideCurrentIndex((prevIndex) => (prevIndex + 1) % imagesslide.length);
  };

  const handleSlidePrev = () => {
    setSlideCurrentIndex(
      (prevIndex) => (prevIndex - 1 + imagesslide.length) % imagesslide.length
    );
  };

  return (
    <>
    <div className="nav-banner">
      {/* Navbar */}
      <nav className="flex justify-between font-sans p-3 max-small:block">
        <ul className="flex max-small:justify-center text-[18px]">
          <li>
            <img src="/logo.png" alt="Logo" width={110} height={110} />
          </li>
        </ul>
        <ul className="flex text-[16px] cursor-pointer max-small:block">
          <li className="mr-[4rem] flex items-center max-small:justify-center space-x-2 font-semibold">
            <PiWhatsappLogoThin className="text-lg" />
            <p className="leading-8">+91 9443347746</p>
          </li>
          <li className="mr-[4rem] flex items-center space-x-2 font-semibold max-small:justify-center">
            <CiPhone className="text-lg" />
            <p className="leading-8">+91 9443347746</p>
          </li>
          <li className="flex items-center space-x-2 font-semibold max-small:text-center max-small:justify-center">
            <CiMail />
            <p className="font-semibold">srivatsatrust2010@gmail.com</p>
          </li>
        </ul>
      </nav>

      {/* Banner Title */}
      <div className="flex justify-center items-center">
        <div className="block mt-[4rem] md:mt-[8rem] title font-['open-sans'] text-center">
          <div className="text-[#FFC178] flex items-center justify-center space-x-2">
            <div className="h-[1px] p-[1px] w-[35px] mt-[-3px] bg-[#FFC178]"></div>
            <p className="text-[9px] tracking-[8px]">KONGU AYODHI</p>
          </div>
          <h1 className="banner-title font-obideesans font-extrabold text-[49px] mt-2 max-small:text-[20px]">
            SriVatsa Charitable Trust
          </h1>
        </div>
      </div>

      {/* Social Links */}
      <div className="block font-sans mt-[-36px] ml-[10px] max-small:text-center">
        <p className="text-[12px] font-semibold tracking-[2px] soc-title">
          follow us
        </p>
        <div className="block mt-3">
          <ul className="flex flex-col gap-2 cursor-pointer">
            <li><FaInstagram /></li>
            <li><FaYoutube /></li>
            <li><FaFacebookF /></li>
          </ul>
        </div>
      </div>

      {/* Scroll Down Button */}
      <div className="font-['Odibee-Sans'] max-small:mt-[-30px] cursor-pointer flex justify-center items-center">
        <button className="flex items-center p-[12px] justify-center rounded hover:bg-black font-semibold border-[1px]">
          SCROLL DOWN
          <LuMoveDown className="ml-2" />
        </button>
      </div>

      {/* Our Kongu Ayodhi Statues */}
      <h1 className="font-['Odibee-Sans'] text-center font-extrabold text-xl mt-12 max-small:text-[18px]">
        Our Kongu Ayodhi Statues
      </h1>
      <div className="bg-transparent mt-[2rem] flex items-center justify-center">
        <div className="carousel">
          {images.map((image, index) => (
            <div
              key={index}
              className={`carousel__item ${index === statueCurrentIndex
                  ? "carousel__item--main"
                  : index === (statueCurrentIndex + 1) % images.length
                    ? "carousel__item--right"
                    : ""
                }`}
            >
              <img src={image.src} alt={image.alt} />
              <div className="carousel__text">
                <p>{image.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex max-small:block mt-[16%] max-small:mt-[25%] justify-end ml-36 max-small:ml-0 max-small:bg-transparent items-center ">
        <div className=" max-small:bg-transparent  max-small:mt-3 shadow-lg h-auto flex items-center justify-center">
          <img src="/nutana.png" alt="" className="w-full max-small:w-auto" />
        </div>
        <div className="h-auto w-full ">
          <div className="flex flex-col md:flex-row mt-3 h-auto">
            <div className="text-container font-['open-sans'] flex flex-col justify-center items-center">
              <div className="text-[#FFC178] flex items-center space-x-2 mb-4">
                <div className="h-[1px] p-[1px] w-[35px] bg-[#FFC178] mr-4"></div>
                <p className="text-[13px] tracking-[8px]">
                  WELCOME TO KONGU AYODHI
                </p>
              </div>
              <p className="text-justify text-[15px] p-3">
                SRIVATSA Charitable Trust: Transforming Lives of
                Underprivileged Children In a world where many children lack
                basic necessities, SRIVATSA Charitable Trust stands as a
                beacon of hope. Since 2010, the trust has been dedicated to
                transforming lives by providing essential support in
                education, nutrition, and healthcare. Their mission is simple
                yet powerful: to ensure every child has the opportunity to
                lead a healthy, educated, and fulfilling life.
                <br />
                Our Vision SRIVATSA Charitable Trust envisions a world where
                every child, regardless of background, can access the
                essentials for a fulfilling life.
              </p>
              <div className="mt-2 pl-4 self-start max-small:self-center">
                <p className="font-['Odibee-Sans']  text-[#FBD784] uppercase flex items-center cursor-pointer">
                  Read More <FaArrowRightLong className="ml-2" />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slideshow Container */}
      <div className="slideshow-container relative max-small:mt-[25%]">
        {imagesslide.map((image, index) => (
          <div
            key={index}
            className={`mySlides fade ${index === slideCurrentIndex ? "active" : ""
              }`}
            style={{
              display: index === slideCurrentIndex ? "block" : "none",
            }}
          >
            <div className="numbertext">
              {index + 1} / {imagesslide.length}
            </div>
            <div className="relative w-full h-full">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>
              <div className="text-container absolute inset-0 flex flex-col justify-center items-center">
                <div className="flex">
                  <div className="h-[1px] p-[1px] w-[35px] mt-3 bg-[#FFC178]"></div>
                  <p className="text-[#FBD784] text-lg mb-2">About Us</p>
                  <div className="h-[1px] p-[1px] w-[35px] mt-3 bg-[#FFC178]"></div>
                </div>
                <h1 className="text-white text-4xl font-bold uppercase max-small:text-2xl">
                  SriVatsa Charitable Trust
                </h1>
                <p className="text-center w-[50rem]   text-[12px] max-small:text-[12px] max-small:h-[20rem] max-small:overflow-auto max-small:text-justify max-small:w-[20rem] max-small:px-4">
                  The trust has been dedicated to transforming lives by
                  providing essential support in education, nutrition, and
                  healthcare. Their mission is simple yet powerful: to ensure
                  every child has the opportunity to lead a healthy, educated,
                  and fulfilling life. Our Vision SRIVATSA Charitable Trust
                  envisions a world where every child, regardless of
                  background, can access the essentials for a fulfilling life.
                  By focusing on education, nutrition, and healthcare, the
                  trust aims to break the cycle of poverty and create a
                  brighter future for underprivileged children.
                </p>
                <div className="mt-4">
                  <p className="font-['Odibee-Sans'] text-[#FBD784] uppercase flex items-center cursor-pointer">
                    Read More <FaArrowRightLong className="ml-2" />
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
        <button
          type="button"
          className="prev absolute top-[50%] left-0 transform -translate-y-[50%] text-white bg-black/50 p-2 cursor-pointer z-10"
          onClick={handleSlidePrev}
        >
          &#10094;
        </button>
        <button
          type="button"
          className="next absolute top-[50%] right-0 transform -translate-y-[50%] text-white bg-black/50 p-2 cursor-pointer z-10"
          onClick={handleSlideNext}
        >
          &#10095;
        </button>
      </div>

      {/* Dots Navigation */}
      {/* <div id="btnDot" className="text-center mt-4">
        {imagesslide.map((_, index) => (
          <span
            key={index}
            className={`dot inline-block w-3 h-3 mx-1 bg-gray-400 rounded-full cursor-pointer ${index === slideCurrentIndex ? "bg-gray-800" : ""
              }`}
            onClick={() => setSlideCurrentIndex(index)}
          ></span>
        ))}
      </div> */}
    </div>
    </>
  );
};

export default Navbar;
