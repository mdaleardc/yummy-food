import React from "react";
import Data from "../Data/Data";

const OurFood = ({addCounter}) => {
  
  
  
  return (
    <div className='w-full  my-[4rem]'>
    <h1 className='text-4xl bg-white text-[#f25] font-bold text-center mb-[1rem] sticky top-[3rem] left-0'>Our Foods</h1>
    <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-[15px]'>
    {
      Data.map(meal => {
        return (
        <div className='card border-[3px] bg-white rounded-[7px]' key={meal.id}>
        <div className='mx-auto my-0 text-center'>
        <img src={meal.img} alt={meal.title} className='w-full h-[250px] object-cover rounded'/>
        </div>
        <div className='mx-auto my-[6px] text-center'>
        <h3 className='font-bold'>{meal.title}</h3>
        <h4 className='font-bold'>&#x09F3;{meal.price}</h4>
         <button className='text-white bg-black text-xl rounded p-[0.4rem] hover:text-[#0f0] hover:bg-white' onClick={addCounter}>Order Now</button>
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