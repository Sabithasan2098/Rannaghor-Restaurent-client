import Image from "next/image";
import React from "react";

interface IMenuCategory {
  title: string;
  desc: string;
  img: unknown;
}

const MenuCategory: React.FC<IMenuCategory> = ({ title, desc, img }) => {
  return (
    <div className="relative">
      <Image
        src={img as string}
        alt="Menu Heading Image"
        // className="max-h-[900px] object-cover fixed"
      />
      <div className="absolute bg-black mx-auto top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-opacity-45 flex flex-col items-center justify-center text-white px-4 py-2 min-w-72  lg:min-w-[1350px] min-h-24 md:min-h-96">
        <h1 className="text-3xl md:text-7xl md:font-bold font-semibold uppercase">
          {title}
        </h1>
        <p className="text-sm md:text-lg pt-1 md:pt-4 lg:pt-6">{desc}</p>
      </div>
    </div>
  );
};

export default MenuCategory;
