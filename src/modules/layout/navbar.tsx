"use client";
import React, { useState, useEffect } from "react";
import "./navbar.css";
import { CiPhone, CiMail } from "react-icons/ci";
import { PiWhatsappLogoThin } from "react-icons/pi";
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube, FaFacebookF } from "react-icons/fa6";
import { LuMoveDown } from "react-icons/lu";

const Navbar: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    { src: "/anjaneya.png", alt: "Anjaneya" },
    { src: "/balramar.jpg", alt: "Balramar" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Clear interval on component unmount
  }, [images.length]);

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
        <div className="font-['Odibee-Sans'] cursor-pointer flex justify-center items-center mt-[4rem]">
          <p className="mr-1 font-semibold">SCROLL DOWN</p>
          <i>
            <LuMoveDown />
          </i>
        </div>
        <div className="mt-[7rem] flex  p-5 ml-[60px] mr-[60px]">
          <div className="block">
            <div className="font-['Odibee-Sans'] mb-[2rem] cursor-pointer flex justify-center items-center mt-[4rem]">
              <p className="mr-1 font-semibold">Kongu Ayodhi Temple Statue</p>
            </div>
            <div className="relative w-full h-[300px]">
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image.src}
                  alt={image.alt}
                  className={`absolute w-full h-full object-cover transition-opacity duration-1000 ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
                />
              ))}
            </div>
          </div>
          <div className="text-container font-['open-sans'] flex flex-col justify-center items-center">
            <div className="text-[#FFC178] flex  items-center space-x-2 mb-4">
              <div className="h-[1px] p-[1px] w-[35px] bg-[#FFC178] mr-4"></div>
              <p className="text-[12px] tracking-[8px]">WELCOME TO KONGU AYODHI</p>
            </div>
            <p className="text-justify text-[12px]">
              SRIVATSA Charitable Trust: Transforming Lives of Underprivileged Children
              In a world where many children lack basic necessities, SRIVATSA Charitable Trust stands as a beacon of hope. Since 2010, the trust has been dedicated to transforming lives by providing essential support in education, nutrition, and healthcare. Their mission is simple yet powerful: to ensure every child has the opportunity to lead a healthy, educated, and fulfilling life.
              <br />
              Our Vision SRIVATSA Charitable Trust envisions a world where every child, regardless of background, can access the essentials for a fulfilling life.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
