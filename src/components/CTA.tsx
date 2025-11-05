// src/components/SecondaryCtaSection.tsx

import React from 'react';

// IMPORTANT: Import your SINGLE combined image here
// Replace this path with the actual location of your single image file 
// (e.g., if you named it 'cta-combined-image.png' and put it in 'src/assets/images/')
import Delivery2 from '../assets/Delivery2.png'; 

const CTA: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50 mx-16">
      <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
        {/* Main CTA Container - Light Blue Background and Relative Positioning */}
        <div 
          className="bg-[#3778D733]/80 p-8 md:p-12 lg:py-16 flex justify-between 
                     items-center relative overflow-hidden h-120"
          // Adding an ID for potential footer/nav links
          id="cta-section" 
        >
          {/* --- A. Combined Visual/Image Placement (Absolute) --- */}
          {/* This image will be hidden on smaller screens and appear on large screens */}
          <div className="absolute inset-0">
            <img 
              src={Delivery2}
              alt="Delivery person with package, globe and plane for global logistics"
              className="relative bottom-0 left-0 w-50 h-auto object-contain z-10"
              style={{ 
                width: '45%', // Example: make it take 60% of the container width
                height: 'auto', // Maintain aspect ratio
                left: '5%',
                top: '5%' // Shift slightly to the left // Shift slightly down
              }}
            />
          </div>

          {/* --- B. Content and Text (Relative/Flex) --- */}
          {/* This ensures the content is correctly positioned over the background image */}
          <div className="w-full lg:w-1/2 ml-0 lg:ml-auto z-30 relative text-center lg:text-left px-7">
            
            {/* CTA Headline */}
            <h2 className="text-3xl font-[poppins] md:text-[42px] text-wrap text-center font-black text-[#0056D2] leading-tight mb-4">
              Ready to Ship Smarter?
            </h2>
            
            {/* Supporting Text */}
            <p className="text-xs md:text-[16px] text-[#5D5F63] mb-12 max-w-md mx-auto text-wrap lg:mx-0 pl-18">
              We are Ready to help you deliver that<br /> product as soon as possible
            </p>

            {/* CTA Button */}
            <a 
              href="/contact" // Replace with your actual contact page link
              className="inline-block px-7 ml-33 py-4 bg-[#0056D2] text-white font-normal text-sm font-[poppins] 
                         rounded-full shadow-lg hover:bg-blue-400 transition duration-300 
                         ease-in-out transform hover:scale-105"
            >
              Contact Sales
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;