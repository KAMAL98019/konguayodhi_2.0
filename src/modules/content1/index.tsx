import Image from "next/image";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const Content1: React.FC = () => {
  return (
    <div className="flex justify-between w-full h-auto p-4">
      <div className="block w-full my-auto max-w-4xl mx-auto">
        <div className="flex flex-row items-center space-x-4 p-2">
          <div className="flex items-center">
            <div className="h-[2px] w-[35px] bg-[#FFC178] mr-4"></div>
            <p className="text-xs font-bold text-[#FBD784]">BUILDING PROJECT</p>
          </div>
        </div>
        <h1 className="text-2xl font-semibold mt-4">
          Kongu Ayodhi Temple <br />
          Building
        </h1>
        <p className="mt-3 w-[22rem] text-[12px]">
          We are excited to announce the construction of the Kongu Ayodhi
          temple, a new sanctuary for spiritual growth, community gathering, and
          cultural preservation. This temple will be more than just a place of
          worship; it will be a cornerstone of our community, fostering a deeper
          connection to our spiritual heritage and traditions.
        </p>
        <div className="mt-4 self-center">
          <p className="font-['Odibee-Sans'] text-[#FBD784] uppercase flex items-center cursor-pointer">
            Read More <FaArrowRightLong className="ml-2" />
          </p>
        </div>
      </div>
      <div>
        <img src="/image1.jpeg" alt="" />
      </div>
    </div>
  );
};

export default Content1;
