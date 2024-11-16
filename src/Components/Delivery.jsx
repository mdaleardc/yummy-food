import React from "react"


const Delivery = () => {
  
  
  
  return (
    <>
    <div className="bg-[#555] w-full py-[1rem] my-[3rem]">
    <h3 className='text-[#ff0] font-bold text-center text-3xl py-[0.5rem]'>Quick Delivery App</h3>
    
    <div className='grid grid-cols-1 md:grid-cols-2 w-[95%] sm:w-[80%] mx-auto my-5'>
    <img src="https://github.com/mdaleardc/materials/raw/ed4f880c8bfd09c35f9e9df40be1151ce2a86f7e/Whats-the-Difference-Between-UX-Design-vs.-UI-Design_%403x-1-scaled.jpg" alt="app png" className="rounded w-full mx-auto my-0 objext-cover" />
    <div className='w-[90%] mx-auto my-0 text-white font-bold flex flex-col justify-center'>
    <p className="text-xl text-[#04ff07]">Get the App</p>
    <h3 className="text-3xl">Limitless Convenience on Demand</h3>
    </div>
    </div>
    <button className='text-white bg-black text-xl rounded block mx-auto my-0 p-[0.4rem] hover:text-[#f24] hover:bg-white'>Get Started</button>
    </div>
    </>
    )
}

export default Delivery;