import React from "react";
import Services from "../components/Services";
import About from "../components/About";
import Steps from "../components/Steps";
import ReviewSection from "../components/Reviews";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import Wrapped from "../components/wrapped";



const Home: React.FC = () => {
  return (
    <main id='top'>
      <Wrapped />
      <Services />
      <About />
      <Steps />
      <ReviewSection />
      <CTA />
      <Footer />
      
    </main>
  );
};

export default Home;
