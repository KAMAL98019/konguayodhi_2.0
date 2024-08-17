import Image from "next/image";
import React from "react";
import { CiMail } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

const Content4: React.FC = () => {
  return (
    <div className="flex justify-evenly w-[90%] mt-[1%] h-auto p-4">
      <div className="block w-full my-auto max-w-4xl mx-auto">
      <h4 className="text-lg text-[#FFF] w-[50%]  font-semibold mt-4">
          State Bank Of India
        </h4>
        <h4 className="text-lg text-[#FFF] w-[50%]  font-semibold mt-4">
          A/C NO: 41102555770
        </h4>
        <h4 className="text-lg text-[#FFF] w-[50%]  font-semibold mt-4">
          IFSC Code: SBIN0003358
        </h4>
        <h4 className="text-lg text-[#FFF] w-[50%]  font-semibold mt-4">
        MICR CODE NO: 638002004
        </h4>
      </div>
      <div className="w-[85%] text-[15px] mt-5 block">
        <p className="font-bold w-[100%] text-[12px]  text-center"><span className="text-red-600">*</span> Please share your name,whatsapp number,email, postal address with pincode (and 
            PAN if you need 80G receipt) along with transaction details on </p>
            <div className="flex justify-between items-center mt-4">
                <div className="flex space-x-1">
                <CiMail className="mt-1 text-[13px]"/>
                <p className="text-[12px] underline">
                srivatsatrust2010@gmail.com</p>
                </div>
                
                <div className="flex space-x-1">
                <FaPhoneAlt className="mt-1 text-[11px]"/>
                <p className="text-[12px] underline">
                +91 94433 47746.</p>
                </div>
            </div>
      </div>
    </div>
  );
};

export default Content4;
