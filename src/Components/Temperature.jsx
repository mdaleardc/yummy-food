import { React, useState } from "react"
import mobileFrame from "../Assets/mobile-frame.png"

const Temperature = () => {
  
  const [count, setCount] = useState(18);
  
  const [color, setColor] = useState("#80807D");
  
  const temPlus = () => {
     setCount(count + 1);
      if(count >= 18) {
        setColor("#ff0000");
      }
      
  }
  
  const temMinus = () => {
    if (count > 0) {
      setCount(count - 1);
    }
    
     if(count <= 19) {
       setColor("#80807D");
     };
  }
  
  
  return (
    <div className="bg-[#aaa] w-[90vw] h-[50%] flex flex-col justify-center content-center fixed top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]">
    <h1 className="text-[1rem] font-bold text-[#f00] text-center">Temperature</h1>
    
    <div className="relative w-[100%] h-[100px]">
    <div className="">
    <img className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[100%] h-[auto] z-[-5]' src={mobileFrame} alt="mobile frame"/>
    <div className="relative">
    <div className="border-[3px] border[#345883] rounded-[50%] mx-[auto] my[0] w-[130px] h-[130px] text-center" style={{background: color}}><h1 className="mt-[40%]" > {count} °C</h1></div>
    <div className='text-center'>
    <button type="button" className="bg-[#aa0] w-[50px] rounded text-3xl text-[red]" onClick={temPlus}>+</button>
    <button type="button" className="bg-[#0e8] w-[50px] rounded text-3xl text-[white]" onClick={temMinus}>-</button>
    </div>
    </div>
    </div>
    </div>
    </div>
    )
}


export default Temperature;