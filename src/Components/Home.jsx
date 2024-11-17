import React from "react";

import Hero from "./Hero";
import TopPick from "./TopPick";
import Delivery from "./Delivery";
import OurFood from "./OurFood";
import AboutUs from "./AboutUs";
import SignIn from "./SignIn";


const Home = ({addCounter}) => {
  return (
    <div>
    <Hero />
    <TopPick addCounter={addCounter}/>
    <Delivery />
    <OurFood addCounter={addCounter}/>
    <SignIn />
    <AboutUs />
    </div>
  )
}

export default Home;