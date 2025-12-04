import { motion } from "framer-motion";
import { useState } from "react";
import car from "../assets/car.png"

export default function TrackShipment() {
  const [trackingNumber, setTrackingNumber] = useState("");
  const [result, setResult] = useState<string | null>(null);

  const handleTrack = () => {
    if (!trackingNumber.trim()) {
      setResult("Please enter a tracking number.");
    } else {
      // Demo functionality
      setResult(`Tracking number ${trackingNumber} is currently in transit 🚚`);
    }
  };

  return (
    <div className="lg:min-h-screen h-full flex flex-col items-center justify-center px-6">

      {/* MAIN CONTENT */}
      <div className="md:mt-7 lg:mt-7 mt-10 w-full md:max-w-5xl text-center">
        {/* SLOT IMAGE HERE */}
        <motion.img 
          src={car}
          alt="Van" 
          className="mx-auto w-full h-65 md:h-auto object-cover"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        />

        <motion.h1 
          className="text-xl md:text-3xl font-medium md:mt-8 mt-8 font-[poppins] md:mr-33"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Track Your Shipment in Real Time
        </motion.h1>

        {/* INPUT & BUTTON */}
        <motion.div 
          className="md:mt-6 mt-6 flex flex-col md:flex-row items-center justify-center md:gap-4 gap-5"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <input 
            type="text" 
            placeholder="Enter your tracking number" 
            value={trackingNumber} 
            onChange={(e) => setTrackingNumber(e.target.value)}
            className="border rounded-full px-6 py-3 w-90 md:w-[530px] shadow-sm focus:ring-2 focus:ring-blue-500 outline-none font-[poppins]"
          />
          <button 
            onClick={handleTrack} 
            className="bg-[#0056D2] text-white rounded-full px-6 py-3 hover:bg-blue-700 transition md:text-lg font-[poppins]"
          >
            Track
          </button>
        </motion.div>

        {/* RESULT DISPLAY */}
        {result && (
          <motion.p 
            className="mt-6 text-lg font-medium text-gray-700"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            {result}
          </motion.p>
        )}
      </div>
    </div>
  );
}
