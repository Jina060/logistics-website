import React from "react";
import plane from "../assets/plane.png"
import logis from "../assets/logis.png"
  
const Herosection: React.FC = () => {
  return (
    <section className="md:mb-18 mb-45">
      <div className="flex flex-col lg:flex-row items-center lg:justify-between justify-center lg:px-16 px-4 mx-auto">
        {/* Left side */}
        <div className="lg:flex-1 text-center md:text-left lg:mb-10 mt-10 mb-5 md:mb-0 lg:mt-10 font-[poppins]">
          <h1 className="text-[30px] md:text-[55px] font-black text-[#0056D2] lg:tracking-tight lg:leading-19 lg:mb-5 lg:mr-30 mb-4 leading-11 tracking-normal mx-3 lg:mx-0">
            Fast & Reliable Logistics for Business & Individuals
          </h1>
          <p className="text-gray-600 lg:text-[18px] text-[16px] mb-7 mx-3 md:mb-8 md:mr-16 md:ml-0 md:leading-7">
            RapidLogix helps you move goods safely, and affordably anytime,
            anywhere.
          </p>
          <button className="bg-[#0056D2] text-white md:px-7 md:py-4 px-4 py-3 rounded-full font-normal md:text-[16px] text-[14px] font-[poppins] hover:bg-blue-700 transition-all">
            Track Shipment
          </button>
        </div>

        {/* Right side */}
        <div className="relative h-80 w-full lg:flex-1 lg:pt-2">
          <img
            src={plane}
            alt="Airplane"
            className="md:w-[600px] w-170 object-contain lg:-translate-y-29 -left-1/2 ml-2"
          />
          <img 
          src={logis}
          alt="logis"
          className="md:w-[520px] mb-14 absolute lg:top-11 top-32 2xl:-ml-3 left-3/5 transform lg:-translate-x-1/2 -translate-x-60 w-150 h-auto"
          />
        </div>

      </div>
    </section>
  );
};

export default Herosection;
