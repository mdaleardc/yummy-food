import React, { useState } from "react";
import { MdShoppingCart } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";


const Header = () => {
  const [sideNave, setSideNav] = useState(false);
  
  const handleChange = () => {
    setSideNav(!sideNave);
  }
  
  return (
    <div className="h-[2.3rem] flex justify-between items-center px-[5px] bg-gray-300 h-[2rem] shadow-md relative">
    <div className="">
    <h1 className="font-semibold">Yummi<span className="text-[#FF0059] font-light">Food</span></h1>
    </div>
    
    <div className="">
    <ul className="sm:flex gap-5 hidden">
    <li className="cursor-pointer hover:text-[#FF4800]">Home</li>
    <li className="cursor-pointer hover:text-[#FF4800]">About</li>
    <li className="cursor-pointer hover:text-[#FF4800]">Offers</li>
    <li className="cursor-pointer hover:text-[#FF4800]">Sign In</li>
    </ul>
    </div>
    
    {
      sideNave ? <div className="font-semibold bg-[#39A0FF] text-white absolute top-0 right-0 w-[150px] h-[100vh] flex justify-center items-center">
    <RxCross1 onClick={handleChange} size={25} className="absolute top-2 left-3 cursor-pointer"/>
    <ul className="flex gap-6 flex-col">
    <li className="cursor-pointer hover:text-[#FF4800]" onClick={handleChange}>Home</li>
    <li className="cursor-pointer hover:text-[#FF4800]" onClick={handleChange}>About</li>
    <li className="cursor-pointer hover:text-[#FF4800]" onClick={handleChange}>Offers</li>
    <li className="cursor-pointer hover:text-[#FF4800]" onClick={handleChange}>Sign In</li>
    </ul>
    </div> : ""
    }
    
    <div className="font-semibold flex gap-5 justify-items-center items-center">
    <div className="sm:hidden cursor-pointer">
    <GiHamburgerMenu size={30} onClick={handleChange}/>
    </div>
    <h3 className="cursor-pointer"><MdShoppingCart size={30}/></h3>
    </div>
    </div>
    )
}

export default Header;


