import React from "react";
import { motion } from "framer-motion";
import step1 from "../assets/step1.jpg";
import step2 from "../assets/step2.png";
import step3 from "../assets/step3.png";

const steps = [
  {
    number: 1,
    title: "Book Your Delivery",
    description: "Enter Details Online",
    image: step1,
    reverse: false,
    imageStyle: "w-[400px] h-auto", // custom width for step 1
    spacing: "md:gap-14"
  },
  {
    number: 2,
    title: "We Pick Up",
    description: "A Rapidlogix rider/driver comes to you",
    image: step2,
    reverse: true,
    imageStyle: "w-[370px] h-auto md:mt-[-90px]", // make this one bigger & shift upward
    spacing: "md:gap-65"
    
  },
  {
    number: 3,
    title: "Delivered Securely",
    description: "On time, every time.",
    image: step3,
    reverse: false,
    imageStyle: "h-[410px] mt-[-80px]", // balanced width for step 3
    spacing: "md:gap-60"
  },
];


const Steps = () => {
  return (
    <section className="relative pt-16 overflow-hidden px-20" id="steps">
      {/* Heading */}
      <div className="text-center mb-7">
        <h2 className="text-3xl md:text-4xl font-black text-[#0056D2] font-[poppins]">
          Simple, Transparent, Reliable
        </h2>
      </div>

      
      {/* Curvy dashed connectors */}
      <section className="relative">
      <svg
        className="hidden md:block absolute left-[730px] -translate-x-1/2 w-[90%] pointer-events-none top-[-50px] z-20"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 1600 1000"
      >
        {/* Line from step 1 to 2 */}
        <path
          d="M30,600 C100,1000 700,300 800,1000"
          stroke="#0056D2"
          strokeWidth="2"
          strokeDasharray="15 15"
          markerEnd="url(#arrowhead)"
          markerStart="url(#arrowhead)"
        />
        <defs>
          <marker
            id="arrowhead"
            markerWidth="8"
            markerHeight="8"
            refX="4"
            refY="2"
            orient="auto"
          >
            <path d="M0,0 L0,4 L4,2 Z" fill="#0056D2" />
          </marker>
        </defs>
      </svg>

       <svg
        className="hidden md:block absolute left-[730px] -translate-x-1/2 w-[90%] pointer-events-none top-80 z-20"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 1600 1000"
      >
         {/* Line from step 2 to 3 */}
        <path
          d="M30,1000 C100,600 700,1300 800,600"
          stroke="#0056D2"
          strokeWidth="2"
          strokeDasharray="15 15"
          markerEnd="url(#arrowhead)"
          markerStart="url(#arrowhead)"
        />
        <defs>
          <marker
            id="arrowhead"
            markerWidth="8"
            markerHeight="8"
            refX="4"
            refY="2"
            orient="auto"
          >
            <path d="M0,0 L0,4 L4,2 Z" fill="#0056D2" />
          </marker>
        </defs>

      </svg>
</section>


      {/* Steps */}
      <div className="space-y-28 max-w-6xl mx-auto px-6 relative z-10">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className={`flex flex-col md:flex-row ${
              step.reverse ? "md:flex-row-reverse" : ""
            } items-center ${step.spacing} mb-20`}
          >
            {/* Text Section */}
            <div className="md:w-1/2 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start mb-2">
                <div className="bg-[#1B063E] text-white w-12 h-12 rounded-full flex items-center justify-center font-semibold text-lg mr-6 mb-5">
                  {step.number}
                </div>
                <h3 className="text-4xl font-medium text-[#0056D2] font-[poppins] mb-4">
                  {step.title}
                </h3>
              </div>
              <p className="text-gray-600 text-sm text-center pr-12">{step.description}</p>
            </div>

            {/* Image Section */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="md:w-1/2 flex justify-center"
            >
              <img
                src={step.image}
                alt={step.title}
                className={`object-contain ${step.imageStyle || "w-full max-w-md"}
                ${index === steps.length - 1 ? "object-fill" : "h-[400px]"}`}
              />
            </motion.div>
          </motion.div>
        ))}
      </div>

    </section>
  );
};

export default Steps;
