import React from "react";
import Header from "../components/Header";
import Herosection from "../components/Herosection";
import Services from "../components/Services";
import About from "../components/About";
import Reviews from "../components/Reviews";
import Steps from "../components/Steps";
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
      <Reviews />
      <CTA />
      <Footer />
    </main>
  );
};

export default Home;
