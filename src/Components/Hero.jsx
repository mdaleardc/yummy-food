import React, { useState, useEffect } from "react";
import { LiaAngleLeftSolid, LiaAngleRightSolid } from "react-icons/lia";

import recipe1 from "../Assets/recipe1.jpg";
import recipe2 from "../Assets/recipe2.jpg";
import recipe3 from "../Assets/recipe3.jpg";
import recipe4 from "../Assets/recipe4.jpg";
import recipe5 from "../Assets/recipe5.jpg";
import recipe6 from "../Assets/recipe6.jpg";

const Hero = () => {
  const recipeData = [
    { src: recipe1 },
    { src: recipe2 },
    { src: recipe3 },
    { src: recipe4 },
    { src: recipe5 },
    { src: recipe6 },
  ];

  const [recipe, setRecipe] = useState(0);

  const handlePlus = () => {
    setRecipe(recipe === recipeData.length - 1 ? 0 : recipe + 1);
  };

  const handleMinus = () => {
    setRecipe(recipe === 0 ? recipeData.length - 1 : recipe - 1);
  };
  
  useEffect(()=> {
  const slidTimer = setInterval(()=>{
    handlePlus();
  }, 2000);
  
  return ()=>clearInterval(slidTimer);
  
  }, [recipe]);
  
  

  return (
    <div className="relative w-full h-[40vh] sm:h-[80vh] mt-[2.3rem]">
      <img src={recipeData[recipe].src} alt="" className="w-full h-full object-cover absolute top-0 left-0 z-[1]" loading="lazy"/>
      
      <div  className="absolute z-[2] bg-[#00000080] w-full h-[100%]">
      <h1 className='text-center text-[#ffff] mt-[30%] text-2xl font-semibold'>Welcome! Dive into a World of Deliciousness at YummiFood!</h1>
      </div>
      <button className="absolute z-[3] top-[40%] left-[0.5rem] text-[#f05] cursor-pointer" onClick={handleMinus}>
        <LiaAngleLeftSolid size={30} />
      </button>
      
      <button className="absolute z-[3] top-[40%] right-[0.5rem] text-[#f05] cursor-pointer" onClick={handlePlus}>
        <LiaAngleRightSolid size={30} />
      </button>
    </div>
  );
};

export default Hero;