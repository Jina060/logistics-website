import { useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const pricingData = {
  monthly: [
    {
      title: "Air Freight",
      price: 150,
      description:
        "Fast, secure delivery for time-critical shipment with global reach.",
      features: [
        "1–3 business days",
        "Urgent, high-value cargo",
        "Global routes, 100+ countries",
        "Priority handling",
        "Reliable delivery",
      ],
      highlight: false,
    },
    {
      title: "Ocean Freight",
      price: 70,
      description: "Cost-efficient transport for large volume shipments.",
      features: [
        "20–30 business days",
        "Lowest, best for bulk",
        "Global ports, 90+ trade lanes",
        "Pallets up to full containers",
        "Large-volume shipments",
      ],
      highlight: true,
    },
    {
      title: "Enterprise",
      price: 100,
      description:
        "Reliable trucking solution for regional and domestic transport.",
      features: [
        "2–5 business days",
        "Regional & domestic distribution",
        "Cross-border routes",
        "Small to full truckloads",
        "Large-volume shipments",
      ],
      highlight: false,
    },
  ],

  yearly: [
    {
      title: "Air Freight",
      price: 150 * 12 * 0.75,
      description:
        "Fast, secure delivery for time-critical shipment with global reach.",
      features: [
        "1–3 business days",
        "Urgent, high-value cargo",
        "Global routes, 100+ countries",
        "Priority handling",
        "Reliable delivery",
      ],
      highlight: false,
    },
    {
      title: "Ocean Freight",
      price: 70 * 12 * 0.75,
      description: "Cost-efficient transport for large volume shipments.",
      features: [
        "20–30 business days",
        "Lowest, best for bulk",
        "Global ports, 90+ trade lanes",
        "Pallets up to full containers",
        "Large-volume shipments",
      ],
      highlight: true,
    },
    {
      title: "Enterprise",
      price: 100 * 12 * 0.75,
      description:
        "Reliable trucking solution for regional and domestic transport.",
      features: [
        "2–5 business days",
        "Regional & domestic distribution",
        "Cross-border routes",
        "Small to full truckloads",
        "Large-volume shipments",
      ],
      highlight: false,
    },
  ],
};

const PriceCards = () => {
  const [yearly, setYearly] = useState(false);

  const activePricing = yearly ? pricingData.yearly : pricingData.monthly;

  return (
    <section id="pricing" className="py-20 px-6 lg:px-20 mt-35 md:mt-0">
      <div className="text-center mb-14 font-[poppins]">
        <h2 className="md:text-4xl text-3xl font-bold mb-3 ">Pricing</h2>
        <p className="text-gray-600 md:max-w-2xl mx-auto">
          Move goods across the globe with speed and ease
        </p>

        {/* Toggle */}
        <div className="flex justify-center items-center gap-4 mt-6">
          <span className="text-sm font-medium text-gray-700">Pay Monthly</span>

          <button
            onClick={() => setYearly(!yearly)}
            className={`w-14 h-7 flex items-center rounded-full p-1 transition ${
              yearly ? "bg-[#0056D2]" : "bg-gray-300"
            }`}
          >
            <div
              className={`bg-white w-5 h-5 rounded-full shadow-md transform transition ${
                yearly ? "translate-x-7" : "translate-x-0"
              }`}
            ></div>
          </button>

          <span className="text-sm font-medium text-gray-700">Pay Yearly</span>
          <span className="text-[#0056D2] font-semibold text-sm">Save 25%</span>
        </div>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto font-[poppins]">
        {activePricing.map((plan, idx) => (
          <motion.div
            key={idx}
            // Entry animation
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.35,
              ease: "easeOut",
            }}
            // Hover animation
            whileHover={{
              scale: 1.05,
              y: -6,
              boxShadow: plan.highlight
                ? "0 14px 45px rgba(0, 0, 0, 0.28)"
                : "0 10px 32px rgba(0, 0, 0, 0.18)",
              transition: { duration: 0.2, ease: "easeOut" },
            }}
            className={`
              p-8 rounded-2xl border shadow-sm transition-all cursor-pointer 
              ${
                plan.highlight
                  ? "bg-[#0056D2] text-white border-blue-700"
                  : "bg-white border-gray-200"
              }
            `}
          >
            <h3 className="text-2xl md:text-3xl font-extrabold mb-4 mt-4">{plan.title}</h3>
            <p
              className={`text-sm md:text-[15px] mb-10 ${
                plan.highlight ? "text-white/80" : "text-gray-600"
              }`}
            >
              {plan.description}
            </p>

            <div className="text-5xl font-extrabold mb-8">
              ${plan.price.toFixed(0)}
              <span
                className={`text-base font-medium ${
                  plan.highlight ? "text-white/70" : "text-gray-600"
                }`}
              >
                {" "}
                / {yearly ? "Year" : "Month"}
              </span>
            </div>

            <button
              className={`
                w-full py-3 font-medium rounded-sm transition-all mb-6 
                ${
                  plan.highlight
                    ? "bg-white text-[#0056D2] hover:bg-gray-100"
                    : "bg-white text-[#0056D2] border-2 border-[#0056D2] hover:bg-blue-700"
                }
              `}
            >
              Get Started Now
            </button>

            <ul className="space-y-3 mb-8">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div
                    className={`
      w-6 h-6 rounded-full flex items-center justify-center
      ${plan.highlight ? "bg-white" : "bg-[#0056D2]/10"}
    `}
                  >
                    <Check
                      size={14}
                      className={`${
                        plan.highlight ? "text-[#0056D2]" : "text-[#0056D2]"
                      }`}
                    />
                  </div>

                  <span
                    className={`text-sm font-medium ${
                      plan.highlight ? "text-white/90" : "text-gray-700"
                    }`}
                  >
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default PriceCards;
