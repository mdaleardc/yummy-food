import React from "react";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Delivery from "./Components/Delivery";
import Footer from "./Components/Footer";
import TopPick from "./Components/TopPick";




function App() {

  return (
    <div className="header">
    <Header />
    <Hero />
    <TopPick />
    <Delivery />
    <Footer />
    </div>
  )
}

export default App
