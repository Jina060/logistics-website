import React from "react";

type InfoCardProps = {
  title: string;
  body: string;
  className?: string;
};

const InfoCard: React.FC<InfoCardProps> = ({ title, body, className = "" }) => {
  return (
    <div
      className={
        "bg-[#f0fbfb] rounded-lg py-6 lg:px-8 px-8 2xl:px-12 2xl:pt-12" +
        className 
      }
    >
      <h4 className="lg:text-xl text-2xl 2xl:text-2xl font-semibold text-[#0070E0] font-[poppins] mb-6">{title}</h4>
      <p className="text-[#5D5F63] leading-7 tracking-wide lg:text-sm text-[16px] font-[poppins] 2xl:text-[15px] mb-6 lg:w-65 2xl:w-70">{body}</p>
    </div>
  );
};

const About: React.FC = () => {
  return (
    <section className="lg:py-4 py-2 lg:mx-22 mx-8 mb-10 bg-white" id="about">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 mb-12">
          {/* Left headline */}
          <div>
            <p className="text-[15px] font-semibold tracking-[5px] text-[#0056D2] mb-4">ABOUT US</p>
            <h2 className="lg:text-[37px] 2xl:text-[47px] text-3xl font-bold font-[poppins] text-[#0056D2] leading-tight lg:mr-17 2xl:mr-7">
              Why Our Deals Are Best In The Market
            </h2>
          </div>

          {/* Right paragraph */}
          <div className="pt-6 md:pt-12">
            <p className="text-[#5D5F63] leading-relaxed text-[15px] 2xl:text-[20px] md:text-[18px] font-[poppins] max-w-xl">
              At Rapidlogix, we’re more than a delivery service, we are your logistics
              partner, ensuring every package arrives on time with full transparency and
              security.
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-3">
          <InfoCard
            title="Our Mission"
            body="To simplify logistics by providing fast, secure, and affordable delivery solutions for individuals and businesses worldwide."
          />
          <InfoCard
            title="Our Vision"
            body="To be the most reliable logistics brand that people and businesses trust to move what matters most anytime, anywhere."
        
          />
          <InfoCard
            title="Our Core Value"
            body="Swift, secure, and reliable — customers enjoy real-time tracking and safe handling of shipments."
          />
        </div>
      </div>
    </section>
  );
};

export default About;
