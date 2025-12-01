// src/components/SecondaryCtaSection.tsx

import React from 'react';
import Delivery2 from '../assets/Delivery2.png'; 

const CTA: React.FC = () => {
  return (
    <section className="py-14 md:py-24 bg-gray-50 lg:mx-16 mx-4 lg:flex-row flex-col">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        {/* Main CTA Container - Light Blue Background and Relative Positioning */}
        <div 
          className="bg-[#3778D733]/80 lg:rounded-4xl rounded-3xl p-8 md:p-12 lg:py-16 flex justify-between 
                     items-center relative overflow-hidden lg:h-120 h-140"
          // Adding an ID for potential footer/nav links
          id="cta-section" 
        >
          {/* --- A. Combined Visual/Image Placement (Absolute) --- */}
          {/* This image will be hidden on smaller screens and appear on large screens */}
         

          {/* --- B. Content and Text (Relative/Flex) --- */}
          {/* This ensures the content is correctly positioned over the background image */}
          <div className="w-full lg:w-1/2 ml-0 lg:ml-auto z-30 relative text-center lg:text-left px-7 lg:mb-0 mb-68">
            
            {/* CTA Headline */}
            <h2 className="text-3xl font-[poppins] md:text-[42px] text-wrap lg:text-start lg:ml-17 text-center font-black text-[#0056D2] leading-tight mb-4">
              Ready to Ship Smarter
            </h2>
            
            {/* Supporting Text */}
            <p className="text-[13px] md:text-[16px] text-[#5D5F63] lg:mb-12 mb-7 lg:max-w-md lg:text-wrap lg:mx-0 lg:pl-18">
              We are Ready to help you deliver that<br /> product as soon as possible
            </p>

            {/* CTA Button */}
            <a 
              href="/contact" // Replace with your actual contact page link
              className="inline-block px-4 lg:px-7 lg:ml-18 lg:py-4 py-3 bg-[#0056D2] text-white font-normal lg:text-sm text-[12px] font-[poppins] 
                         rounded-full shadow-lg hover:bg-blue-400 transition duration-300 
                         ease-in-out transform hover:scale-105"
            >
              Contact Sales
            </a>
          </div>

           <div className="absolute inset-0">
            <img 
              src={Delivery2}
              alt="Delivery person with package, globe and plane for global logistics"
              className="lg:relative absolute lg:bottom-0 lg:left-15 lg:w-120 w-75 left-5 -bottom-25 h-auto object-contain z-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;