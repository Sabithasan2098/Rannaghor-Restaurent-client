import React from "react";

interface ButtonProps {
  name: string;
}

const Button: React.FC<ButtonProps> = ({ name }) => {
  return (
    <button className="uppercase px-5 py-2 rounded-md border-0 border-b-4 border-black hover:bg-gray-200 hover:text-blue-600 hover:border-[#ffa204] transition-all duration-300">
      {name}
    </button>
  );
};

export default Button;
