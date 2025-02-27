import Image from "next/image";
import React from "react";

interface IMenuCard {
  name: string;
  text: string;
  image: string;
  price: number;
}

const MenuCard: React.FC<IMenuCard> = ({ name, text, image, price }) => {
  return (
    <div className="max-w-80 mx-auto relative flex flex-col items-center bg-[#f3f3f3] pb-4">
      <Image src={image} alt="food card image" height={400} width={400} />
      <p className="absolute bg-black text-white px-3 py-1 top-2 right-2">
        {price}
      </p>
      <h3 className="text-center text-xl py-3">{name}</h3>
      <p className="text-center px-4 pb-3">{text}</p>
      <button className="uppercase px-5 py-2 rounded-md border-0 border-b-4 border-[#BB8506] text-[#BB8506] hover:border-0 hover:bg-black transition-all duration-300">
        Add to Card
      </button>
    </div>
  );
};

export default MenuCard;
