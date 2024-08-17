"use client";
import React, { useState, useEffect } from "react";
import "./navbar.css";
import { CiPhone, CiMail } from "react-icons/ci";
import { PiWhatsappLogoThin } from "react-icons/pi";
import { FaArrowRightLong, FaInstagram } from "react-icons/fa6";
import { FaYoutube, FaFacebookF } from "react-icons/fa6";
import { LuMoveDown } from "react-icons/lu";

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
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Clear interval on component unmount
  }, [images.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideCurrentIndex((prevIndex) => (prevIndex + 1) % imagesslide.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Clear interval on component unmount
  }, [imagesslide.length]);

  const handleStatueNext = () => {
    setStatueCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handleStatuePrev = () => {
    setStatueCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleSlideNext = () => {
    setSlideCurrentIndex((prevIndex) => (prevIndex + 1) % imagesslide.length);
  };

  const handleSlidePrev = () => {
    setSlideCurrentIndex((prevIndex) =>
      prevIndex === 0 ? imagesslide.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full lg:w-[100%] h-auto">
      <img
        src="/banner.jpeg"
        alt="Banner Image"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 linear-gradient text-white p-10">
        <nav className="flex justify-between font-sans p-3">
          <ul className="flex text-[18px]">
            <li>
              <p className="font-bold">Logo</p>
            </li>
          </ul>

          <ul className="flex text-[16px] cursor-pointer">
            <li className="mr-[4rem] flex items-center space-x-2 font-semibold">
              <i className="text-lg">
                <PiWhatsappLogoThin />
              </i>
              <p className="leading-8">+91 9443347746</p>
            </li>
            <li className="mr-[4rem] flex items-center space-x-2 font-semibold">
              <i className="text-lg">
                <CiPhone />
              </i>
              <p className="leading-8">+91 9443347746</p>
            </li>
            <li className="flex items-center space-x-2 font-semibold">
              <i>
                <CiMail />
              </i>
              <p className="font-semibold">srivatsatrust2010@gmail.com</p>
            </li>
          </ul>
        </nav>
        <div className="flex justify-center items-center">
          <div className="block mt-[14rem] md:mt-[8rem] title font-['open-sans']">
            <div className="text-[#FFC178] flex items-center space-x-2">
              <div className="h-[1px] p-[1px] w-[35px] mt-[-3px] bg-[#FFC178] mr-4"></div>
              <p className="text-[9px] tracking-[8px]">KONGU AYODHI</p>
            </div>
            <h1 className="font-['Odibee-Sans'] font-extrabold text-7xl md:text-4xl mt-2">
              SriVatsa Charitable Trust
            </h1>
          </div>
        </div>
        <div className="block font-sans mt-[-52px]">
          <p className="text-[12px] font-semibold tracking-[2px] soc-title">
            follow us
          </p>
          <div className="block mt-3">
            <ul className="flex flex-col gap-2 cursor-pointer">
              <li>
                <FaInstagram />
              </li>
              <li>
                <FaYoutube />
              </li>
              <li>
                <FaFacebookF />
              </li>
            </ul>
          </div>
        </div>
        <div className="font-['Odibee-Sans'] cursor-pointer flex justify-center items-center mt-[2rem]">
          <p className="mr-1 font-semibold">SCROLL DOWN</p>
          <i>
            <LuMoveDown />
          </i>
        </div>
        <br /> <br />
        <br />
        <h1 className="font-['Odibee-Sans'] text-center font-extrabold text-[18px] md:text-[18px] mt-2">
          Our Kongu Ayodhi Statues
        </h1>
        <div className="bg-black bg-transparent mt-[20rem] shadow-lg h-auto flex items-center justify-center">
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
        <div className="flex justify-end bg-black ml-36 bg-transparent items-center mt-56">
          <div className="bg-black bg-transparent mt-20 shadow-lg h-auto flex items-center justify-center">
            <img src="/nutana.png" alt="" width={500} height={500} />
          </div>
          <div className="p-10 h-auto w-[54rem]">
            <div className="flex mt-36 h-auto">
              <div className="text-container ml-20 font-['open-sans'] flex flex-col justify-center items-center">
                <div className="text-[#FFC178] flex items-center space-x-2 mb-4">
                  <div className="h-[1px] p-[1px] w-[35px] bg-[#FFC178] mr-4"></div>
                  <p className="text-[13px] tracking-[8px]">
                    WELCOME TO KONGU AYODHI
                  </p>
                </div>
                <p className="text-justify text-[15px]">
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
                <div className="mt-4 self-start">
                  <p className="font-['Odibee-Sans'] text-[#FBD784] uppercase flex items-center cursor-pointer">
                    Read More <FaArrowRightLong className="ml-2" />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="slideshow-container">
          {imagesslide.map((image, index) => (
            <div
              key={index}
              className={`mySlides fade ${index === slideCurrentIndex ? "active" : ""}`}
              style={{ display: index === slideCurrentIndex ? "block" : "none" }}
            >
              <div className="numbertext">
                {index + 1} / {imagesslide.length}
              </div>
              <div className="relative w-full h-full">
                <img src={image.src} alt={image.alt} className="w-full h-auto object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>
                <div className="text-container absolute inset-0 flex flex-col justify-center items-center">
                  <p className="text-[#FBD784] text-lg mb-2">About Us</p>
                  <h1 className="text-white text-4xl font-bold uppercase ">SriVatsa Charitable Trust
                  </h1>
                </div>
              </div>
            </div>
          ))}
          <button type="button" className="prev" onClick={handleSlidePrev}>
            &#10094;
          </button>
          <button type="button" className="next" onClick={handleSlideNext}>
            &#10095;
          </button>
        </div>

        <div id="btnDot">
          {imagesslide.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === slideCurrentIndex ? "active" : ""}`}
              onClick={() => setSlideCurrentIndex(index)}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
