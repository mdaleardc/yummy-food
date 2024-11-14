import React, { useState } from "react";
import { MdShoppingCart } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";


const Header = () => {
  
  const [screen, setScreen] = useState("");
  
  return (
    <div className="h-[2rem] flex justify-between content-center px-[5px] bg-gray-300 h-[2rem] shadow-md mt-[100px]">
    
    <div className="">
    <h1 className="font-semibold">Yummi<span className="text-[#FF0059] font-light">Food</span></h1>
    </div>
    
    <div className="font-semibold">
    <ul className="sm:flex gap-5 justify-items-center items-center hidden">
    <li>Home</li>
    <li>About</li>
    <li>Offers</li>
    <li>Sign In</li>
    </ul>
    </div>
    
    <div className="font-semibold flex gap-5 justify-items-center items-center">
    <div className="sm:hidden">
    <GiHamburgerMenu />
    </div>
    <h3 className=""><MdShoppingCart /></h3>
    </div>
    </div>
    )
}

export default Header;