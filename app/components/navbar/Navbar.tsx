import Link from "next/link";
import React from "react";
import { TiShoppingCart } from "react-icons/ti";

const Navbar: React.FC = () => {
  const nav = (
    <>
      <li className="uppercase ">
        <Link href="/">Home</Link>
      </li>
      <li className="uppercase ">
        <Link href="#">Contact Us</Link>
      </li>
      <li className="uppercase ">
        <Link href="#">Dashboard</Link>
      </li>
      <li className="uppercase ">
        <Link href="ourMenu">Our Menu</Link>
      </li>

      <li className="uppercase">
        <Link href="ourShop">Our Shop</Link>
      </li>
      <li className="uppercase">
        <Link href="#">
          Cart{" "}
          <TiShoppingCart className="text-xl bg-green-500 rounded-full p-[2px]" />
        </Link>
      </li>
    </>
  );

  return (
    <div className="navbar bg-black fixed z-10 bg-opacity-25 text-white px-4">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow gap-1 text-black"
          >
            {nav}
          </ul>
        </div>
        <Link href={"/"} className="btn btn-ghost text-xl uppercase">
          Rannaghor <br />
          Restaurant
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex lg:navbar-end">
        <ul className="menu menu-horizontal px-1">{nav}</ul>
        <div className="flex items-center ">
          <Link
            className="bg-[#ffa204] hover:bg-[#ffb53d] transition-all text-white px-4 py-2 rounded-md"
            href="#"
          >
            Sign Out
          </Link>
        </div>
      </div>
      <div className=" navbar-end  lg:hidden">
        <Link
          className="bg-[#ffa204] hover:bg-[#ffb53d] transition-all text-white px-4 py-2 rounded-md"
          href="#"
        >
          Sign Out
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
