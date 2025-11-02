import React from "react";
import Header from "../components/Header";
import Herosection from "../components/Herosection";
import Services from "../components/Services";
import About from "../components/About";
import Reviews from "../components/Reviews";
import Steps from "../components/Steps";


const Home: React.FC = () => {
  return (
    <main className="">
      <Header />
      <Herosection />
      <Services />
      <About />
      <Steps />
      <Reviews />
    
    </main>
  );
};

export default Home;
