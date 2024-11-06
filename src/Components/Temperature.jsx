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
    <div className="bg-[#1239] py-[50px]">
    <h1 className="text-[2rem] text-[#fffffe] font-bold flex flex-col justify-center items-center">Temperature</h1>
    <div>
    <div className="bg-[#1f359558] w-[100vw] h-[600px] relative z-0">
    <img className='mx-[auto] my-[40px] pt-[50px]' src={mobileFrame} alt="mobile frame"/>
    </div>
    <div className='absolute top-[35%] left-[31%] z-10 md:top-[15%] md:left-[42%]'>
    <div className="w-[160px] h-[160px] border-[3px] rounded-[50%] flex flex-col justify-center items-center font-black text-3xl text-[white]" style={{background: color}}> {count} °C</div>
    <div className='flex flex-row gap-[24px] mt-[30px] w-[100px] items-center justify-center my-[0] mx-[auto]'>
    <button type="button" className="bg-[#aa0] w-[50px] rounded text-3xl text-[red]" onClick={temPlus}>+</button>
    <button type="button" className="bg-[#0e8] w-[50px] rounded text-3xl text-[white]" onClick={temMinus}>-</button>
    </div>
    </div>
    </div>
    </div>
    )
}


export default Temperature;