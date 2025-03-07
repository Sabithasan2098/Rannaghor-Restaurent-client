"use client";
import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
import useCurrentPath from "@/app/hook/useCurrentPath";

const Footer = () => {
  const pathName = useCurrentPath();
  const isDashboard = pathName.startsWith("/dashboard");
  if (isDashboard) {
    return null;
  }
  return (
    <div className="h-96 md:h-72 text-white bg-[#111828] ">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10 md:gap-0 items-center justify-center h-full pt-8 md:pt-0">
        <div className="flex-1 text-center space-y-2">
          <h2 className="text-2xl font-semibold pb-2">CONTACT US</h2>
          <p>123 ABS Street, Uni 21, Bangladesh</p>
          <p>+88 123456789</p>
          <p>Mon - Fri: 08:00 - 22:00</p>
          <p>Sat - Sun: 10:00 - 23:00</p>
        </div>
        <div className="flex-1 text-center space-y-2">
          <h2 className="text-2xl font-semibold pb-2">Follow US</h2>
          <p>Join us on social media</p>
          <div className="flex items-center justify-center gap-3 text-2xl">
            <FaFacebookF />
            <BsInstagram />
            <FaTwitter />
          </div>
        </div>
      </div>
      <p className="bg-black text-white h-14 flex flex-col items-center justify-center  ">
        Copyright © CulinaryCloud. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
