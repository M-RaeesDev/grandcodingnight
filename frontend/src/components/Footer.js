import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <div>
        <>
  {/* Footer Section */}
  <footer className="bg-[#2A254B] text-white py-10">
    <div className="container mx-auto px-6 md:px-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Column 1: Menu */}
        <div className="space-y-4">
          <h3 className="text-sm font-semibold">Category</h3>
          <ul className="space-y-2 text-gray-400">
            <li>
              <a href="#" className="text-sm hover:text-blue-500">
                Wedding loan
              </a>
            </li>
            <li>
              <a href="#" className="text-sm hover:text-blue-500">
                business loan
              </a>
            </li>
            <li>
              <a href="#" className="text-sm hover:text-blue-500">
                education loan
              </a>
            </li>
            <li>
              <a href="#" className="text-sm hover:text-blue-500">
                All loan
              </a>
            </li>
            <li>
              <a href="/calculator" className="text-sm hover:text-blue-500">
                loan calculator
              </a>
            </li>
          </ul>
        </div>
        {/* Column 2: Categories */}
        <div className="space-y-4">
          <h3 className="text-sm font-semibold"> Sub Categories</h3>
          <ul className="space-y-2 text-gray-400">
            <li>
              <a href="#" className="text-sm hover:text-blue-500">
                Jahez
              </a>
            </li>
            <li>
              <a href="#" className="text-sm hover:text-blue-500">
                Home Structure
              </a>
            </li>
            <li>
              <a href="#" className="text-sm hover:text-blue-500">
                university Fees
              </a>
            </li>
            <li>
              <a href="#" className="text-sm hover:text-blue-500">
                Valima
              </a>
            </li>
            <li>
              <a href="#" className="text-sm hover:text-blue-500">
                Shop rent
              </a>
            </li>
          </ul>
        </div>
        {/* Column 3: Our Company */}
        <div className="space-y-4">
          <h3 className="text-sm font-semibold">Our Company</h3>
          <ul className="space-y-2 text-gray-400">
            <li>
              <a href="#" className=" text-sm hover:text-blue-500">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="text-sm hover:text-blue-500">
                Career
              </a>
            </li>
            <li>
              <a href="#" className="text-sm hover:text-blue-500">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" className="text-sm hover:text-blue-500">
                Privacy
              </a>
            </li>
            <li>
              <a href="#" className="text-sm hover:text-blue-500">
                loan Policy
              </a>
            </li>
          </ul>
        </div>
        {/* Column 4: Email Signup */}
        <div className="space-y-4">
          <h3 className="text-sm font-semibold">Sign Up</h3>
          <p className="text-sm text-gray-400">
            Subscribe to our newsletter for the latest updates
          </p>
          <div className="flex flex-col md:flex-row">
            <input
              type="email"
              placeholder="Email"
              className="w-full h-8 md:w-20 px-2 py-2 text-white text-[12px] border border-gray-300 bg-[#FFFFFF26] focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4 md:mb-0"
            />
            <button className="w-full h-8 md:w-20 px-2 py-2 bg-white text-[#2A254B] text-[10px]  hover:bg-[#FFFFFF26] hover:text-white transition duration-300 ">
              Sign Up
            </button>
          </div>
        </div>
      </div>
      {/* Divider Line */}
      <div className="border-t border-gray-700 my-8" />
      {/* Social Media Icons & Copyright */}
      <div className="flex justify-between items-center">
        {/* Left: All Rights Reserved */}
        <div className="text-gray-400 text-sm">
          <p>© 2024 SMF. All Rights Reserved.</p>
        </div>
        {/* Right: Social Media Icons */}
        <div className="space-x-2">
          <a href="#" className="text-gray-400 hover:text-blue-500">
          <FontAwesomeIcon icon={faFacebook} className="text-gray-600 hover:text-blue-600 w-2 h-2 sm:w-3 sm:h-3 md:w-5 md:h-5 lg:w-5 lg:h-5 xl:w-5 xl:h-5 2xl:w-5 2xl:h-5" />
          </a>
          <a href="#" className="text-gray-400 hover:text-blue-500">
          <FontAwesomeIcon icon={faTwitter} className="text-gray-600 hover:text-blue-400 w-2 h-2 sm:w-3 sm:h-3 md:w-5 md:h-5 lg:w-5 lg:h-5 xl:w-5 xl:h-5 2xl:w-5 2xl:h-5" />
          </a>
          <a href="#" className="text-gray-400 hover:text-blue-500">
          <FontAwesomeIcon icon={faInstagram} className="text-gray-600 hover:text-pink-500 w-2 h-2 sm:w-3 sm:h-3 md:w-5 md:h-5 lg:w-5 lg:h-5 xl:w-5 xl:h-5 2xl:w-5 2xl:h-5" />
          </a>
          <a href="#" className="text-gray-400 hover:text-blue-500">
          <FontAwesomeIcon icon={faLinkedin} className="text-gray-600 hover:text-blue-700 w-2 h-2 sm:w-3 sm:h-3 md:w-5 md:h-5 lg:w-5 lg:h-5 xl:w-5 xl:h-5 2xl:w-5 2xl:h-5" />
          </a>
        </div>
      </div>
    </div>
  </footer>
</>

    </div>
  )
}

export default Footer
