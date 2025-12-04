import React from "react";
import plane from "../assets/plane.png"
import logis from "../assets/logis.png"
  
const Herosection: React.FC = () => {
  return (
    <section className="bg-white lg:px-22 px-4 2xl:px-30 md:mb-18 mb-45">
      <div className="container mx-auto flex flex-col lg:flex-row items-center lg:justify-between justify-center">
        {/* Left side */}
        <div className="lg:flex-1 text-center md:text-left lg:mb-10 mt-10 mb-5 md:mb-0 lg:mt-14">
          <h1 className="text-[30px] md:text-5xl 2xl:text-6xl font-black text-[#0056D2] lg:tracking-tight lg:leading-15 2xl:mb-8 lg:mb-5 lg:mr-10 mb-4 leading-11 tracking-normal mx-3 lg:mx-0 2xl:mr-35 2xl:leading-20">
            Fast & Reliable Logistics for Business & Individuals
          </h1>
          <p className="text-gray-600 lg:text-xl text-[16px] mb-7 2xl:mb-10 mx-3 lg:mx-0 lg:leading-8 2xl:text-2xl 2xl:mr-25 2xl:leading-9">
            RapidLogix helps you move goods safely, and affordably anytime,
            anywhere.
          </p>
          <button className="bg-[#0056D2] text-white lg:px-8 px-4 py-3 rounded-full font-normal lg:text-sm 2xl:text-lg text-[14px] font-[poppins] hover:bg-blue-700 transition-all">
            Track Shipment
          </button>
        </div>

        {/* Right side */}
        <div className="relative h-80 2xl:flex-1">
          <img
            src={plane}
            alt="Airplane"
            className="md:w-[550px] w-170 2xl:w-230 object-contain lg:-translate-y-20 2xl:-translate-y-35 -left-1/2 lg:ml-4"
          />
          <img 
          src={logis}
          alt="logis"
          className="md:w-[500px] 2xl:w-150 mb-14 absolute lg:top-15 top-32 2xl:top-11 2xl:-ml-3 left-3/5 transform lg:-translate-x-1/2 -translate-x-60 w-150 h-auto lg:ml-1"
          />
        </div>

      </div>
    </section>
  );
};

export default Herosection;
