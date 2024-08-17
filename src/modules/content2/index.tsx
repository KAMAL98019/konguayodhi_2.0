import Image from "next/image";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const Content2: React.FC = () => {
  return (
    <div className="flex justify-evenly w-full mt-[10%] h-auto p-4">
      <div className="block w-full my-auto max-w-4xl mx-auto">
        
        <h1 className="text-4xl text-[#FBD784] w-[50%]  font-semibold mt-4">
        Scan To Donate For Kongu Ayodhi Temple.
        </h1>
      </div>
      <div className="mr-[14%]">
        <img src="/gpay.png" alt="" />
      </div>
    </div>
  );
};

export default Content2;
