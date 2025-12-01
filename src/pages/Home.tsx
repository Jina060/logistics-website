import React from "react";
import Header from "../components/Header";
import Herosection from "../components/Herosection";
import Services from "../components/Services";
import About from "../components/About";
import Steps from "../components/Steps";
import ReviewSection from "../components/Reviews";
import CTA from "../components/CTA";
import Footer from "../components/Footer";



const Home: React.FC = () => {
  return (
    <main id='top'>
      <Header />
      <Herosection />
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
