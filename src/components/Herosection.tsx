import React from "react";
import plane from "../assets/plane.png"
import Deliveryguy from "../assets/Deliveryguy.png"

const Herosection: React.FC = () => {
  return (
    <section className="bg-white px-22">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Left side */}
        <div className="flex-1 text-center md:text-left mb-10 md:mb-0 mt-22">
          <h1 className="text-3xl md:text-5xl font-black text-[#0056D2] tracking-tight leading-13 mb-6">
            Fast & Reliable <br /> Logistics for Business <br /> and Individuals
          </h1>
          <p className="text-gray-600 text-base mb-12 max-w-md mx-auto md:mx-0 leading-tight">
            RapidLogix helps you move goods safely,<br /> and affordably anytime,
            anywhere.
          </p>
          <button className="bg-[#0056D2] text-white px-8 py-5 rounded-full font-normal text-sm font-[poppins] hover:bg-blue-700 transition-all">
            Track Shipment
          </button>
        </div>

        {/* Right side */}
        <div className="relative h-80">
          <img
            src={plane}
            alt="Airplane"
            className="md:w-[550px] object-contain -translate-y-13 -left-1/2 ml-4"
          />
          <img 
          src={Deliveryguy}
          alt="Deliveryguy"
          className="md:w-[1500px] mb-14 absolute top-22 left-3/5 transform -translate-x-1/2 w-36 h-auto ml-6"
          />
        </div>

        <div className="bg-white blur-xl w-[350px] h-[230px] rounded-full absolute left-[810px] top-[545px]"></div>

      </div>
    </section>
  );
};

export default Herosection;
