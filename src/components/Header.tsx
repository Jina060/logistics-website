import { Link } from "react-router-dom";
import React, { useState } from "react";
import useScrollEffect from "../utils/useScrollEffect";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const scrolled = useScrollEffect(100);

  const primaryBlue = "#0056D2";
  const linkTextColor = "text-gray-800";

  const navItems = [
    { name: "Home", href: "/", type: "page-home" },
    { name: "Services", href: "/services", type: "page-services" },
    { name: "Track Shipment", href: "/track", type: "page" },
    { name: "Pricing", href: "/pricing", type: "page-pricing" },
    { name: "Contact", href: "/contact", type: "page-contact" },
  ];

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement> | {},
    href: string
  ) => {
    if (typeof e !== "string" && "preventDefault" in e) {
      e.preventDefault();
    }
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  const headerClasses = `
    w-full transition-all duration-300 ease-in-out
    ${
      scrolled
        ? "fixed top-0 z-50 shadow-md bg-white/55 backdrop-blur-lg"
        : "relative bg-white"
    }
  `;

  const goHome = () => {
    if (window.location.pathname === "/") {
      // already on landing page → scroll to top
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      // navigate to homepage
      window.location.href = "/";
    }
  };

  return (
    <header className={headerClasses}>
      <nav
        // Horizontal Padding Increased: px-4 (mobile), sm:px-8 (tablet), lg:px-12 (desktop)
        className="container mx-auto px-6 py-7 lg:px-12 lg:py-8 lg:mx-0 flex items-center h-22 shadow-sm justify-between lg:shadow-xs/0"
      >
        {/* 1. Logo */}
        <div
          className="text-2xl 2xl:text-3xl font-extrabold shrink-0 text-start"
          style={{ color: primaryBlue }}
        >
          RapidLogix
        </div>

        {/* 2. Desktop Navigation (Links are black by default) */}
        <ul className="font-[poppins] hidden md:flex space-x-10 text-sm font-medium lg:text-[16px]">
          {navItems.map((item) => (
            <li key={item.name}>
              {item.type === "page" ? (
                <Link
                  to={item.href}
                  className={`${linkTextColor} hover:text-blue-700 transition-colors`}
                >
                  {item.name}
                </Link>
              ) : item.type === "page-home" ? (
                <a
                  onClick={goHome}
                  className={`${linkTextColor} hover:text-blue-700 transition-colors cursor-pointer`}
                >
                  {item.name}
                </a>
              ) : item.type === "page-services" ? (
                <Link
                  to={item.href}
                  className={`${linkTextColor} hover:text-blue-700 transition-colors`}
                >
                  {item.name}
                </Link>
              ) : item.type === "page-pricing" ? (
                <Link
                  to={item.href}
                  className={`${linkTextColor} hover:text-blue-700 transition-colors`}
                >
                  {item.name}
                </Link>
              ) : item.type === "page-contact" ? (
                <Link
                  to={item.href}
                  className={`${linkTextColor} hover:text-blue-700 transition-colors`}
                >
                  {item.name}
                </Link>
              ) : (
                <a
                  href={item.href}
                  onClick={(e) => handleLinkClick(e, item.href)}
                  className={`${linkTextColor} hover:text-blue-700 transition-colors`}
                >
                  {item.name}
                </a>
              )}
            </li>
          ))}
        </ul>

        {/* 3. Desktop CTA & Mobile Hamburger Button Container */}
        <div className="flex items-center">
          {/* Desktop CTA Button */}
          <button
            className="hidden md:inline-block text-white px-8 py-3 text-sm 2xl:text-lg rounded-full font-normal hover:bg-blue-700 transition-all font-[poppins]"
            style={{ backgroundColor: primaryBlue }}
          >
            Get a Quote
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 z-1001"
            aria-controls="mobile-menu"
            aria-expanded={isOpen}
          >
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* --- Mobile Slide-In Menu --- */}

      {/* Backdrop Overlay */}
      <div
        className={`fixed inset-0 bg-black/55 z-1000 transition-opacity duration-300 lg:hidden ${
          isOpen ? "opacity-100 block" : "opacity-0 hidden"
        }`}
        onClick={() => setIsOpen(false)}
      >
        {/* Slide-In Menu Panel */}
        <div
          className={`fixed top-0 left-0 h-full w-64 bg-white shadow-xl p-6 z-1001 transform transition-transform duration-300 md:hidden ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex justify-between items-center mb-6">
            <div
              className="text-xl font-extrabold"
              style={{ color: primaryBlue }}
            >
              Menu
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 text-gray-700"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <nav className="flex flex-col space-y-3 bg-white">
            {navItems.map((item) =>
              item.type === "page" ? (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-lg font-medium ${linkTextColor} hover:text-blue-600 transition-colors py-2 border-b border-gray-100`}
                >
                  {item.name}
                </Link>
              ) : item.type === "page-services" ? (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-lg font-medium ${linkTextColor} hover:text-blue-600 transition-colors py-2 border-b border-gray-100`}
                >
                  {item.name}
                </Link>
              ) : item.type === "page-pricing" ? (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-lg font-medium ${linkTextColor} hover:text-blue-600 transition-colors py-2 border-b border-gray-100`}
                >
                  {item.name}
                </Link>
              ) : item.type === "page-contact" ? (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-lg font-medium ${linkTextColor} hover:text-blue-600 transition-colors py-2 border-b border-gray-100`}
                >
                  {item.name}
                </Link>
              ) : item.type === "page-home" ? (
                <a
                  key={item.name}
                  onClick={() => {
                    setIsOpen(false);
                    goHome();
                  }}
                  className={`text-lg font-medium ${linkTextColor} hover:text-blue-600 transition-colors py-2 border-b border-gray-100 cursor-pointer`}
                >
                  {item.name}
                </a>
              ) : (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleLinkClick(e, item.href)}
                  className={`text-lg font-medium ${linkTextColor} hover:text-blue-600 transition-colors py-2 border-b border-gray-100`}
                >
                  {item.name}
                </a>
              )
            )}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
