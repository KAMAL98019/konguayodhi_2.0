import Image from "next/image";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const Content3: React.FC = () => {
  return (
    <div className="flex justify-evenly w-full mt-[10%] h-auto p-4">
      <div className="block w-full my-auto max-w-4xl mx-auto">
        
        <h1 className="text-4xl text-[#FBD784] w-[50%]  font-semibold mt-4">
        Other Payment Details
        </h1>
      </div>
      <div className="w-[50%] text-[15px] mt-5">
        <p>Tax Exemption Certificate No.: AAJTS3811NF20241</p>
      </div>
    </div>
    
  );
};

export default Content3;
