import React from "react";


const Header: React.FC = () => {
  return (
    <header className="px-14 w-full bg-white mt-1">
      <nav className="container mx-auto px-8 py-5 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-extrabold text-[#0056D2]">
          RapidLogix
        </div>

        {/* Navigation Links */}
        <ul className="font-[poppins] hidden md:flex space-x-10 text-gray-800 text-sm font-normal">
          <li>
            <a href="#" className="hover:text-[#0056D2] transition-colors">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-[#0056D2] transition-colors">
              Services
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-[#0056D2] transition-colors">
              Track Shipment
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-[#0056D2] transition-colors">
              Pricing
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-[#0056D2] transition-colors">
              Contact
            </a>
          </li>
        </ul>

        {/* CTA Button */}
        <button className="hidden md:inline-block bg-[#0056D2] text-white px-8 py-3 text-sm rounded-full font-normal hover:bg-blue-700 transition-all font-[poppins]">
          Get a Quote
        </button>

     
      </nav>
    </header>
  );
};

export default Header;
