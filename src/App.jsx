import React from "react";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Delivery from "./Components/Delivery";
import Footer from "./Components/Footer";
import TopPick from "./Components/TopPick";
import OurFood from "./Components/OurFood";




function App() {

  return (
    <div className="header bg-[#1115]">
    <Header />
    <Hero />
    <TopPick />
    <OurFood />
    <Delivery />
    <Footer />
    </div>
  )
}

export default App
