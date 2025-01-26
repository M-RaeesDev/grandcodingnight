"use client"
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faBars } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      {/* Navbar */}
      <header className="border-b bg-white shadow-md">
        <nav className="container mx-auto flex items-center justify-between px-4 py-3 md:py-4">
          {/* Left: Brand Name */}
          <div className="flex justify-left flex-1">
            <h1 className="text-sm sm:text-md md:text-2xl font-bold text-gray-800">Saylani Micro Finance</h1>
          </div>
          {/* Right: Icons */}
          <div className="flex items-center space-x-6">
           
            <Link href="/login" className="hidden md:block lg:block">
              <button className="text-gray-600 hover:text-gray-900 text-xl">
                <FontAwesomeIcon
                  icon={faUser}
                  className="text-gray-600 hover:text-gray-900 w-3.5 h-3.5"
                />
              </button>
            </Link>
            {/* Mobile Menu Toggle */}
            <button
              onClick={toggleMenu}
              className="text-gray-600 hover:text-gray-900 text-xl md:hidden"
            >
              <FontAwesomeIcon
                icon={faBars}
                className="text-gray-600 hover:text-gray-900 w-3.5 h-3.5"
              />
            </button>
          </div>
        </nav>
        {/* Mobile Links */}
        <div
          className={`${
            menuOpen ? "block" : "hidden"
          } bg-gray-100 md:hidden transition-all duration-300`}
        >
          <ul className="space-y-2 p-4">
            <li>
              <Link href="/all" className="block text-gray-700 hover:text-gray-900">
                All Loans
              </Link>
            </li>
            <li>
              <Link href="#" className="block text-gray-700 hover:text-gray-900">
                Loan Detail
              </Link>
            </li>
            <li>
              <Link href="#" className="block text-gray-700 hover:text-gray-900">
                Loan Process
              </Link>
            </li>
            <li>
              <Link href="/calculator" className="block text-gray-700 hover:text-gray-900">
               loan Calculator
              </Link>
            </li>
          </ul>
        </div>
      </header>
      {/* Links Section */}
      <div className="container mx-auto py-5">
        <div className="hidden md:flex justify-center space-x-6">
          <Link href="/all" className="text-gray-700 hover:text-gray-900">
            All Loans
          </Link>
          <Link href="#" className="text-gray-700 hover:text-gray-900">
            Loans detail
          </Link>
          <Link href="/calculator" className="text-gray-700 hover:text-gray-900 hover:text-underline">
            Loan Calculator
          </Link>
          <Link href="#" className="text-gray-700 hover:text-gray-900">
            About us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
