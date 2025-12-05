import { motion } from 'framer-motion';

export default function ContactForm() {
  return (
    <div className="w-full flex flex-col items-center font-[poppins]">
      {/* Header Section */}
      <div className="w-full h-90 bg-linear-to-r from-[#0056D2] to-[#002C6C] text-white py-16 text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-3"
        >
          Contact Us
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-sm md:text-base"
        >
          Move goods across the globe with speed and ease
        </motion.p>
      </div>

      {/* Info Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-8 md:px-20 -mt-10 mb-16 w-full md:max-w-7xl">
        {[
          {
            title: "Head Office",
            content: (
              <div className="text-center space-y-6 text-gray-700">
                <p><strong>Address</strong><br />123, holloway allen</p>
                <p><strong>Phone</strong><br />+254 08948494</p>
                <p><strong>Email</strong><br />info@rapidlogix.com</p>
              </div>
            )
          },
          {
            title: "Business Hours",
            content: (
              <div className="text-center space-y-7 text-gray-700">
                <p>Monday - Friday<br /><strong>Open 24hours</strong></p>
                <p>Saturday<br /><strong>8:00 - 12:00</strong></p>
                <p>Sunday & Public Holiday<br /><strong>10:00 - 3:00</strong></p>
              </div>
            )
          },
          {
            title: "Regional Offices",
            content: (
              <div className="text-center space-y-6 text-gray-700">
                <p>South Pour, Uganda<br />• Nostop Logistics, Uganda</p>
                <p>Turkey, Sweetland<br />Business Line</p>
                <p>USA<br />Cape town</p>
              </div>
            )
          }
        ].map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            className="bg-white border border-blue-300 rounded-lg shadow-sm p-10"
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">{item.title}</h3>
            {item.content}
          </motion.div>
        ))}
      </div>

      {/* Form Header */}
      <div className="text-center mb-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-2xl md:text-3xl font-bold mb-6 text-[#0056D2]"
        >
          Send Us a Message
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-gray-600"
        >
          We will respond immediately
        </motion.p>
      </div>

      {/* Contact Form */}
      <motion.form
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="w-full max-w-3xl px-6 md:px-0 space-y-8 mb-16 text-sm"
        onSubmit={(e) => {
          e.preventDefault();
          alert("Message submitted! (Demo Mode)");
        }}
      >
        <div>
          <label className="block text-gray-700 mb-2 font-semibold">Name</label>
          <input
            type="text"
            className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="John Wick"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-2 font-semibold">Email</label>
          <input
            type="email"
            className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="John Wick"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-2 font-semibold">Subject</label>
          <input
            type="text"
            className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="John Wick"
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-2 font-semibold">Message</label>
          <textarea
            className="w-full border rounded-md px-3 py-2 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter message"
          ></textarea>
        </div>

        <button
          type="submit"
          className="mx-auto block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full transition-all duration-300"
        >
          Send Message
        </button>
      </motion.form>
    </div>
  );
}
