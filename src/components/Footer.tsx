

export default function Footer() {
  return (
    <footer className="bg-[#0056D2] text-white py-12 px-4 md:px-20 lg:h-105 font-[poppins]">
      <div className="max-w-8xl mx-6 grid grid-cols-1 md:grid-cols-3">
        {/* Logo and Mission */}
        <div className="">
          <h1 className="lg:text-4xl text-3xl mb-4 lg:mb-0 text-white font-bold">RapidLogix</h1>
        </div>

        {/* Quick Links */}
        <div className="lg:ml-20">
          <h3 className="font-semibold text-[20px] lg:text-sm mb-2">Pages</h3>
          <ul className="lg:space-y-3 space-y-2 text-sm mb-5">
            <li><a href="#about" className="hover:underline">Home</a></li>
            <li><a href="#services" className="hover:underline">Services</a></li>
            <li><a href="#Track Shipment" className="hover:underline">Track Shipment</a></li>
            <li><a href="#Pricing" className="hover:underline">Pricing</a></li>
            <li><a href="#FAQs" className="hover:underline">FAQs</a></li>
            <li><a href="#contactUs" className="hover:underline">Contact us</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold text-[20px] lg:text-sm mb-2">Contact</h3>
          <ul className="text-sm space-y-2 lg:space-y-3 mb-5">
            <li>+7 (708) 802 88 88</li>
            <li>+7 (708) 803 88 88</li>
            <li>+7 (708) 51 51 518</li>
            <li>+7 (700) 51 51 518</li>
            <li>+7 (708) 802 88 88</li>
            <li>3,Lekki Hallway </li>
          </ul>
        </div>

       
      </div>

      {/* Bottom */}
      <div className="text-left text-[#D9DBE1] text-[11px] border-b border-white px-4 lg:px-0 pb-4 lg:mt-20 mt-10">
         Copyright © RapidLogixs 2025. All rights reserved.
      </div>
    </footer>
  );
}
