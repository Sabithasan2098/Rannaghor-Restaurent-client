"use client";
import React from "react";
import { Parallax } from "react-parallax";
import SectionTitle from "../shered/sectionTitle/SectionTitle";
import Image from "next/image";
import featuredImage from "@/public/assets/home/featured.jpg";

const Featured = () => {
  return (
    <div className="mt-8 md:mt-16">
      <Parallax
        bgImage="/assets/home/featured.jpg"
        strength={100} // Adjust parallax depth
        className="relative flex items-center justify-center bg-cover"
      >
        {/* ✅ Responsive Height Fix */}
        <div className="min-h-[500px] md:min-h-[600px] max-w-7xl relative flex items-center justify-center">
          {/* ✅ Dark Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>

          {/* ✅ Content Container */}
          <div className="relative text-white text-center md:px-32 py-8 md:py-16">
            <SectionTitle heading="check it out" subheading="from our menu" />
            <div className="md:flex items-center  gap-10 pt-5">
              <Image
                src={featuredImage}
                alt="featured image"
                height={400}
                width={400}
              />
              <div className="flex items-center md:items-start flex-col ">
                <h2 className="text-2xl font-semibold ">
                  Why Choose Rannaghor?
                </h2>
                <p className="text-center md:text-start">
                  At Rannaghor, we pride ourselves on offering a diverse menu
                  featuring quality ingredients and exceptional service. From
                  fresh salads to indulgent desserts, each dish is crafted with
                  care, ensuring its bursting with flavor. Join us on a culinary
                  journey and discover why Rannaghor is your go-to destination
                  for delicious, satisfying meals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Parallax>
    </div>
  );
};

export default Featured;
