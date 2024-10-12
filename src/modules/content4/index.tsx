import React from "react";
import { CiMail } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";

const Content4: React.FC = () => {
  return (
    <div className="flex max-small:block font-['open-sans'] justify-evenly w-[90%] mt-[1%] h-auto p-4 mx-auto">
      <div className="block w-full max-w-4xl  text-start max-small:text-center max-small:m-auto max-small:w-[100%]">
        <h4 className="text-lg max-small:text-[18px] text-[#FFF]  font-semibold mt-4">
          SriVatsa Charitable Trust
        </h4>
        <h4 className="text-lg max-small:text-[18px] text-[#FFF]  font-semibold mt-4">
          State Bank Of India
        </h4>
        <h4 className="text-lg max-small:text-[18px] text-[#FFF] font-semibold mt-4">
          A/C NO: 41102555770
        </h4>
        <h4 className="text-lg max-small:text-[18px] text-[#FFF] font-semibold mt-4">
          IFSC Code: SBIN0003358
        </h4>
        <h4 className="text-lg max-small:text-[18px] text-[#FFF] font-semibold mt-4">
          MICR CODE NO: 638002004
        </h4>
      </div>
      <div className="w-full max-small:mt-5 mt-8 max-small:w-full  max-small:m-auto">
        <p className="font-bold text-[14px] max-small:text-[14px] max-small:text-center text-center">
          <span className="text-red-600">*</span> To get the receipt of donation made through NEFT, RTGS, IMPS PayTm, UPI as mentioned above,<br /> please share your legal name,whatsapp number,email, postal address with pincode (and PAN if you need 80G receipt) along with transaction details on <a href="" style={{ color: "blue" }}>srivatsatrust2010@gmail.com</a> or <br /> whatsapp Number: <a href="" style={{ color: "blue" }}>94433 47746.</a> </p>
        <div className="flex flex-col items-center mt-4 space-y-3">
          <div className="flex items-center space-x-2">
            <CiMail className="text-[14px]" />
            <p className="text-[15px] max-small:text-[14px] underline">
              srivatsatrust2010@gmail.com
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <FaPhoneAlt className="text-[12px]" />
            <p className="text-[15px] max-small:text-[14px] underline">
              +91 94433 47746.
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <p className="font-bold text-[14px] max-small:text-[14px] max-small:text-center text-center">
            218,Easwaranstreet, GandhijiRoad, (opp) Fireservice Station  erode.1,L372D, KOOTTAPALLI,            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content4;
