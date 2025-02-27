"use client";
import React from "react";
import { Parallax } from "react-parallax";
// import chefHand from "@/public/assets/home/chef-service.jpg";
// import Image from "next/image";

const ChefService = () => {
  return (
    <Parallax
      bgImage="/assets/home/chef-service.jpg"
      strength={100} // Adjust parallax depth
      className="h-[400px] flex items-center justify-center md:mb-16 mb-8"
    >
      <div className="bg-white max-w-4xl mx-auto py-6 md:py-16 px-2 md:px-8">
        <h1 className="text-center text-xl md:text-3xl">
          Customer Care at Bistro Boss
        </h1>
        <p className="text-center mt-5">
          Every dish at Bistro Boss is crafted with care. From salads to
          desserts, we prioritize your satisfaction. Experience exceptional
          service with every order. Your happiness fuels our passion. Join us
          for a delightful culinary journey today!
        </p>
      </div>
    </Parallax>
  );
};

export default ChefService;
