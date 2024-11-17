import React, { useState } from "react";
import Header from "./Components/Header";
import Home from "./Components/Home";
import AboutUs from "./Components/AboutUs";
import OurFood from "./Components/OurFood";
import SignIn from "./Components/SignIn";
import Footer from "./Components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  
  const [count, setCount] = useState(0);
  
  const handleClick = () => {
    setCount(count + 1);
  }
  
  return (
    <div>
    <BrowserRouter>
    <Header counter={count}/>
    <Routes>
    
    <Route path="/" element={<Home addCounter={handleClick}/>}/>
    <Route path="/ourfood" element={<OurFood addCounter={handleClick}/>}/>
    <Route path="/signin" element={<SignIn />}/>
    <Route path="/aboutus" element={<AboutUs />}/>
    
    </Routes>
    <Footer />
    </BrowserRouter>
    </div>
  )
}

export default App
