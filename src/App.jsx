import React from "react";
import Header from "./Components/Header";
import Home from "./Components/Home";
import AboutUs from "./Components/AboutUs";
import OurFood from "./Components/OurFood";
import SignIn from "./Components/SignIn";
import Footer from "./Components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";




function App() {

  return (
    <div>
    <BrowserRouter>
    <Header />
    <Routes>
    
    <Route path="/" element={<Home />}/>
    <Route path="/aboutus" element={<AboutUs />}/>
    <Route path="/ourfood" element={<OurFood />}/>
    <Route path="/signin" element={<SignIn />}/>
    
    </Routes>
    <Footer />
    </BrowserRouter>
    </div>
  )
}

export default App
