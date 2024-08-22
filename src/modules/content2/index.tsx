import Image from "next/image";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const Content2: React.FC = () => {
  return (
    <div className="flex max-small:block justify-evenly w-full mt-[10%] h-auto p-4">
      <div className="block w-full my-auto max-w-4xl mx-auto">
        
        <h1 className="text-4xl text-[#FBD784] w-[50%] max-small:w-[100%] max-small:text-[28px] max-small:text-center font-semibold mt-4">
        Scan To Donate For Kongu Ayodhi Temple.
        </h1>
      </div>
      <div className="mr-[14%] max-small:m-auto max-small:mt-5">
        <img src="/gpay.png" alt="" width={400} height={400} />
      </div>
    </div>
  );
};

export default Content2;
