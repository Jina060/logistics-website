import React from "react";
import { motion } from "framer-motion";

const Steps: React.FC = () => {
  return (
    <section className="relative w-full bg-white py-20 overflow-hidden">
      {/* Curvy connecting dashed line */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 1440 2000"
      >
        <path
          d="M200 200 C600 400, 800 200, 1200 400 S1600 600, 1000 900 S400 1200, 900 1500"
          stroke="#1E40AF"
          strokeWidth="2"
          strokeDasharray="8 10"
          fill="none"
        />
      </svg>

      <div className="flex flex-col space-y-44 relative z-10 container mx-auto px-6 md:px-16">
        {/* Step 1 */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row items-center md:items-start md:space-x-16"
        >
          <div className="md:w-1/2 flex justify-center">
            <img
              src="/images/step1.png"
              alt="Book Delivery"
              className="w-[400px] md:w-[500px]"
            />
          </div>
          <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
            <div className="flex items-center justify-center md:justify-start space-x-4 mb-4">
              <span className="flex items-center justify-center w-10 h-10 rounded-full bg-indigo-950 text-white font-bold text-lg">
                1
              </span>
              <h2 className="text-3xl md:text-4xl font-semibold text-blue-700">
                Book Your Delivery
              </h2>
            </div>
            <p className="text-gray-500 text-lg">Enter Details Online</p>
          </div>
        </motion.div>

        {/* Step 2 */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row-reverse items-center md:items-start md:space-x-reverse md:space-x-16"
        >
          <div className="md:w-1/2 flex justify-center">
            <img
              src="/images/step2.png"
              alt="We Pick Up"
              className="w-[400px] md:w-[500px]"
            />
          </div>
          <div className="md:w-1/2 text-center md:text-right mt-8 md:mt-0">
            <div className="flex items-center justify-center md:justify-end space-x-4 mb-4">
              <span className="flex items-center justify-center w-10 h-10 rounded-full bg-indigo-950 text-white font-bold text-lg">
                2
              </span>
              <h2 className="text-3xl md:text-4xl font-semibold text-blue-700">
                We Pick Up
              </h2>
            </div>
            <p className="text-gray-500 text-lg">
              A Rapidlogix rider/driver comes to you
            </p>
          </div>
        </motion.div>

        {/* Step 3 */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row items-center md:items-start md:space-x-16"
        >
          <div className="md:w-1/2 flex justify-center">
            <img
              src="/images/step3.png"
              alt="Delivered Securely"
              className="w-[400px] md:w-[500px]"
            />
          </div>
          <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
            <div className="flex items-center justify-center md:justify-start space-x-4 mb-4">
              <span className="flex items-center justify-center w-10 h-10 rounded-full bg-indigo-950 text-white font-bold text-lg">
                3
              </span>
              <h2 className="text-3xl md:text-4xl font-semibold text-blue-700">
                Delivered Securely
              </h2>
            </div>
            <p className="text-gray-500 text-lg">On time, every time.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Steps;
