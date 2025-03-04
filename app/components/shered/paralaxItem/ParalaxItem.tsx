"use client";
import React from "react";
import { Parallax } from "react-parallax";

interface IParallaxItem {
  img: string;
  title: string;
  desc: string;
}

const ParallaxItem: React.FC<IParallaxItem> = ({ img, title, desc }) => {
  return (
    <div className="mt-8 md:mt-16">
      <Parallax
        bgImage={img}
        strength={100} // Adjust parallax depth
        className="relative flex items-center justify-center "
      >
        {/* ✅ Responsive Height Fix */}
        <div className="min-h-[500px] md:min-h-[600px] max-w-7xl relative flex items-center justify-center">
          {/* ✅ Content Container */}
          <div className=" text-white text-center md:px-32 py-8 md:py-16 bg-black bg-opacity-55">
            <div className="flex items-center flex-col ">
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold uppercase pb-3 md:pb-5 lg:pb-8">
                {title}
              </h2>
              <p className="text-center ">{desc}</p>
            </div>
          </div>
        </div>
      </Parallax>
    </div>
  );
};

export default ParallaxItem;
