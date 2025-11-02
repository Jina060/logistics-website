import React from "react";
import car from "../assets/car.png";
import Container from "../assets/Container.png";
import carrier from "../assets/carrier.png";
import Locationf from "../assets/Locationf.png";

const services = [
  {
    title: "Courier Delivery",
    description:
      "Fast and reliable same-day and next delivery for documents, parcels, and personal packages.",
    image: car,
    reverse: false,
    imgClass: "w-[800px] h-[400px] p-0",
  },
  {
    title: "Freight & Cargo",
    description:
      "Seamless handling of bulk shipments, whether local or international, with secure transportation.",
    image: Container,
    reverse: true,
    imgClass: "w-[380px] h-auto",
  },
  {
    title: "E-commerce Logistics",
    description:
      "Tailored delivery solutions for online businesses ensuring smooth order fulfillment and happy customers.",
    image: carrier,
    reverse: false,
    imgClass: "w-[400px] h-auto",
  },
  {
    title: "Tracking & Monitoring",
    description:
      "Get real-time updates on your shipments with GPS-enabled tracking and instant notifications.",
    image: Locationf,
    reverse: true,
    imgClass: "w-[360px] h-auto",
  },
];

const Services: React.FC = () => {
  return (
 
    <section className="py-16 bg-white" id="services">
      {/* Section Heading */}
      <div className="text-center mt-24 mb-16">
        <h2 className="text-3xl md:text-4xl font-black font-[poppins]">
          Our <span className="text-[#0056D2]">Services</span>
        </h2>
        <p className="text-gray-600 mt-2 text-sm">
          Reliable solution for individuals and businesses of all sizes
        </p>
      </div>

      {/* Service Items */}
      <div className="space-y-4 max-w-6xl mx-auto px-6">
        {services.map((service, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center justify-between ${
              service.reverse ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Text Section */}
            <div
              className={`md:w-[680px] h-[370px] relative flex flex-col justify-center ${
                service.reverse
                  ? "border-t border-blue-100 border-r pr-8"
                  : "border-t border-blue-100"
              }`}
            >
              {/* create small gap for right border */}
              {service.reverse && (
                <div className="absolute right-0 top-0 w-0.5 h-6 bg-white"></div>
              )}

              {/* Title */}
              <h3 className="text-3xl font-semibold font-[poppins] text-[#0056D2] mb-4 text-center pr-7">
                {service.title}
              </h3>

              {/* Description + Button (left-aligned but centered vertically) */}
              <div className="flex flex-col items-start justify-center px-6 md:px-28">
                <p className="text-[#5D5F63] mb-18 leading-tight text-left">
                  {service.description}
                </p>
                <button className="bg-[#0056D2] text-white px-6 py-4 rounded-full hover:bg-blue-700 transition font-[poppins] text-sm">
                  Contact Sales
                </button>
              </div>
            </div>

            {/* Image Section */}
            <div className="md:w-[700px] h-[370px] bg-blue-100 rounded-br-2xl rounded-tr-2xl pr-10 pt-1">
              <img
                src={service.image}
                alt={service.title}
                className={`${service.imgClass} object-cover`}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
