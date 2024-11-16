import React from "react";
import Data from "../Data/Data";

const OurFood = () => {
  
  
  
  return (
    <div className='w-full'>
    <h1 className='text-4xl text-[#fe3] font-bold text-center my-[1rem]'>Our Foods</h1>
    <div className='grid grid-cols-1 sm:grid-cols-3 gap-[15px]'>
    {
      Data.map(meal => {
        return (
        <div className='card border-[3px] rounded-[7px]'>
        <div className='mx-auto my-0 text-center'>
        <img src={meal.img} alt={meal.title} className='w-full h-[300px] object-cover rounded'/>
        </div>
        <div className='mx-auto my-[3px] text-center'>
        <h3>{meal.title}</h3>
        <h4>Price {meal.price}&#x09F3;</h4>
         <button className='text-white bg-black text-xl rounded p-[0.4rem] hover:text-[#0f0] hover:bg-white'>Order Now</button>
        </div>
        </div>
        )
      })
    }
    </div>
    </div>
    )
}

export default OurFood;