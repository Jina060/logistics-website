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
    imgClass: "lg:w-[780px] lg:h-[360px] w-100 h-60 lg:p-0 pt-1 object-cover",
  },
  {
    title: "Freight & Cargo",
    description:
      "Seamless handling of bulk shipments, whether local or international, with secure transportation.",
    image: Container,
    reverse: true,
    imgClass: "lg:w-[800px] lg:h-[370px] lg:pl-7 w-100 h-63 object-cover pr-4 2xl:h-[420px]",
  },
  {
    title: "E-commerce Logistics",
    description:
      "Tailored delivery solutions for online businesses ensuring smooth order fulfillment and happy customers.",
    image: carrier,
    reverse: false,
    imgClass: "lg:w-[500px] lg:h-[390px] lg:pl-8 lg:pb-5 w-100 h-60 object-cover 2xl:h-[430px] 2xl:pl-25",
  },
  {
    title: "Tracking & Monitoring",
    description:
      "Get real-time updates on your shipments with GPS-enabled tracking and instant notifications.",
    image: Locationf,
    reverse: true,
    imgClass: "lg:w-[360px] lg:h-auto lg:ml-22 w-[500px] h-65 object-contain 2xl:h-[430px] 2xl:ml-30",
  },
];

const Services: React.FC = () => {
  return (
 
    <section className="py-11 lg:px-16 px-4 bg-white" id="services">
      {/* Section Heading */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-black font-[poppins] text-[#0056D2]">
          Our Services
        </h2>
        <p className="text-gray-600 mt-2 text-[16px] lg:text-sm">
          Reliable solution for individuals and businesses of all sizes
        </p>
      </div>

      {/* Service Items */}
      <div className="lg:space-y-4 space-y-7 lg:w-full lg:px-0 px-4">
        {services.map((service, index) => (
          <div
            key={index}
            className={`flex flex-col-reverse md:flex-row items-center justify-between ${
              service.reverse ? "md:flex-row-reverse flex-col-reverse" : ""
            }`}
          >
            {/* Text Section */}
            <div
              className={`md:w-[710px] h-[290px] 2xl:h-[430px] lg:h-[370px] relative flex flex-col justify-center shadow-sm ${
                service.reverse
                  ? "border lg:rounded-r-2xl lg:rounded-l-none rounded-bl-2xl rounded-br-2xl border-blue-200/55"
                  : "border lg:rounded-l-2xl lg:rounded-r-none rounded-bl-2xl rounded-br-2xl border-blue-200/55"
              }`}
            >
              

              {/* Title */}
              <h3 className="lg:text-3xl 2xl:text-4xl text-[25px] font-semibold font-[poppins] text-[#0056D2] 2xl:mb-8 mb-4 lg:text-left text-center 2xl:ml-20 lg:ml-23">
                {service.title}
              </h3>

              {/* Description + Button (left-aligned but centered vertically) */}
              <div className="flex flex-col justify-center px-5 md:px-23 2xl:px-20">
                <p className="text-[#5D5F63] lg:mb-18 mb-8 leading-7 font-[poppins] lg:text-left text-center 2xl:text-[20px] text-[15  px]">
                  {service.description}
                </p>
                <button className="text-[#0056D2] hover:text-black transition font-[poppins] font-medium text-center lg:text-end lg:text-sm 2xl:text-[17px]">
                  Contact Sales
                </button>
              </div>
            </div>

            {/* Image Section */}
            <div className={`md:w-[700px] lg:h-[370px] h-[260px] bg-blue-100 pt-1
            ${service.reverse ? "lg:rounded-tl-2xl lg:rounded-bl-2xl lg:rounded-tr-none rounded-tl-2xl rounded-tr-2xl" : "lg:rounded-br-2xl lg:rounded-tr-2xl lg:rounded-tl-none rounded-tl-2xl rounded-tr-2xl"}`}>
              <img
                src={service.image}
                alt={service.title}
                className={`${service.imgClass}
            }`}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
