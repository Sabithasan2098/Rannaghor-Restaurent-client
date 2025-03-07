"use client"; // Client Component

import { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";
import React from "react";

const DashboardNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="h-screen">
      {/* 🔹 DashboardNavbar Button (Hidden when menu is open) */}
      {!isOpen && (
        <button
          className="md:hidden fixed top-4 left-4 z-50 bg-orange-500 text-white p-2 rounded-full"
          onClick={() => setIsOpen(true)}
        >
          <FiMenu size={24} />
        </button>
      )}

      {/* 🔹 Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-orange-500 text-white transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 md:translate-x-0 md:relative md:w-64`}
      >
        {/* 🔹 Close Button (Only for small screens) */}
        <button
          className="md:hidden absolute top-4 right-4 text-white"
          onClick={() => setIsOpen(false)}
        >
          <FiX size={24} />
        </button>

        {/* 🔹 Navigation Links */}
        <nav className="p-6 space-y-4">
          <h2 className="text-lg font-bold uppercase">rannaghor restaurant</h2>
          <ul className="space-y-3">
            <li>
              <Link
                href="/dashboard/admin/home"
                className="block p-2 hover:bg-gray-700 rounded"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="block p-2 hover:bg-gray-700 rounded"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="block p-2 hover:bg-gray-700 rounded"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="block p-2 hover:bg-gray-700 rounded"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* 🔹 Overlay (for mobile view) */}
      {isOpen && (
        <div className="fixed  md:hidden" onClick={() => setIsOpen(false)} />
      )}
    </div>
  );
};

export default DashboardNavbar;
