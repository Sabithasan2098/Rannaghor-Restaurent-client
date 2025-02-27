import Image from "next/image";
import React from "react";

interface MenuProps {
  image: string;
  name: string;
  price: number;
  text: string;
}

const Menu: React.FC<MenuProps> = ({ image, name, price, text }) => {
  return (
    <div className="flex items-center gap-5">
      <Image
        src={image}
        alt="menu image"
        height={100}
        width={100}
        className="rounded-full rounded-tl-none hover:rounded-full object-cover md:h-20 h-14 md:w-20 w-14 hover:rounded-tr-none transition-all duration-300"
      />
      <div className="text-sm md:text-base">
        <div className="flex items-center justify-between">
          <h2>
            <span className="text-base md:text-xl">{name}</span>----------------
          </h2>
          <h4 className="text-yellow-500 ">${price}</h4>
        </div>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Menu;
