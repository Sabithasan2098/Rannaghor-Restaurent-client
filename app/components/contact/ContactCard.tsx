import React from "react";
import { MdPhoneInTalk } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { IoTimeSharp } from "react-icons/io5";

const ContactCard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-5 lg:gap-8 max-w-4xl mx-auto place-items-center">
      <div className="w-72 ">
        <div className="bg-[#d1a054] text-white py-4 text-2xl flex  justify-center">
          <MdPhoneInTalk />
        </div>
        <div className="border-2 border-t-0">
          <div className="bg-[#f0f0f0] mx-5 mb-5 flex flex-col items-center justify-center h-28 ">
            <h3 className="uppercase text-lg font-semibold">phone</h3>
            <p>+880 1922359575</p>
          </div>
        </div>
      </div>
      <div className="w-72 ">
        <div className="bg-[#d1a054] text-white py-4 text-xl flex  justify-center">
          <FaLocationDot />
        </div>
        <div className="border-2 border-t-0">
          <div className="bg-[#f0f0f0] mx-5 mb-5 flex flex-col items-center justify-center h-28 ">
            <h3 className="uppercase text-lg font-semibold">address</h3>
            <p>Nalta, Kaligong, Satkhira</p>
          </div>
        </div>
      </div>
      <div className="w-72 ">
        <div className="bg-[#d1a054] text-white py-4 text-xl flex  justify-center">
          <IoTimeSharp />
        </div>
        <div className="border-2 border-t-0">
          <div className="bg-[#f0f0f0] mx-5 mb-5 flex flex-col items-center justify-center h-28 ">
            <h3 className="uppercase text-lg font-semibold">working hours</h3>
            <p>Mon - Fri: 08:00 - 22:00</p>
            <p>Sat - Sun: 10:00 - 23:00</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
