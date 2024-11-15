import React, { useState } from "react";
import { LiaAngleLeftSolid, LiaAngleRightSolid } from "react-icons/lia";

import recipe1 from "../Assets/recipe1.jpg"
import recipe2 from "../Assets/recipe2.jpg"
import recipe3 from "../Assets/recipe3.jpg"
import recipe4 from "../Assets/recipe4.jpg"
import recipe5 from "../Assets/recipe5.jpg"
import recipe6 from "../Assets/recipe6.jpg"


const Hero = () => {
  
  const recipeData = [
    {
      src:recipe1
    },
    {
      src:recipe2
    },
    {
      src:recipe3
    },
    {
      src:recipe4
    },
    {
      src:recipe5
    },
    {
      src:recipe6
    },
    ];
  
  const [recipe, setRecipe] = useState(0);
   
   const handlePlus = () => {
     setRecipe(recipe === recipeData.length - 1 ? 0 : recipe + 1);
   }
  
   const handleMinus = () => {
     setRecipe(recipe === 0 ? recipeData.length - 1 : recipe - 1);
   }
  
  return (
    <>
    <div className='relative'>
    <img src={recipeData[recipe].src} alt="" className="w-[100%] sm:h-[80vh] cover" />
    
    <button className='absolute z-99 top-[40%] left-0 text-[#f05] cursor-pointer' onClick={handleMinus}><LiaAngleLeftSolid size={30}/></button>
    <button className='absolute z-99 top-[40%] right-0 text-[#f05] cursor-pointer' onClick={handlePlus}><LiaAngleRightSolid size={30}/></button>
    </div>
    </>
    )
}

 export default Hero;