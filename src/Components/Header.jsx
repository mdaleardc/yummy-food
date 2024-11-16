import React, { useState } from "react";
import { MdShoppingCart } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const [sideNav, setSideNav] = useState(false);

  const handleChange = () => {
    setSideNav(!sideNav);
  };

  return (
    <div className="fixed top-0 left-0 w-full h-[2.3rem] flex justify-between items-center px-[5px] bg-gray-300 shadow-md z-[1000]">
      <div>
        <h1 className="font-semibold">Yummi<span className="text-[#FF0059] font-light">Food</span></h1>
      </div>
      
      <div>
        <ul className="sm:flex gap-5 hidden">
          
        <NavLink to="/">
          <li className="cursor-pointer hover:text-[#FF4800]">Home</li>
        </NavLink>
         <NavLink to="/aboutus">
          <li className="cursor-pointer hover:text-[#FF4800]">About Us</li>
         </NavLink>
         <NavLink to="/ourfood">
          <li className="cursor-pointer hover:text-[#FF4800]">Our Food</li>
         </NavLink>
         <NavLink to="/signin">
          <li className="cursor-pointer hover:text-[#FF4800]">Sign In</li>
         </NavLink>
           
        </ul>
      </div>

      {sideNav && (
        <div className="font-semibold bg-[#39A0aa] text-white fixed top-0 right-0 w-[150px] h-[100vh] flex justify-center items-center z-[999]">
          <RxCross1 onClick={handleChange} size={30} className="absolute top-2 left-3 cursor-pointer hover:text-[#ff0340] font-bold" />
          <ul className="flex gap-6 flex-col">
             
        <NavLink to="/">
          <li className="cursor-pointer hover:text-[#FF4800]"  onClick={handleChange}>Home</li>
        </NavLink>
         <NavLink to="/toppick">
          <li className="cursor-pointer hover:text-[#FF4800]"  onClick={handleChange}>About Us</li>
         </NavLink>
         <NavLink to="/ourfood">
          <li className="cursor-pointer hover:text-[#FF4800]"  onClick={handleChange}>Our Food</li>
         </NavLink>
         <NavLink to="/delivery">
          <li className="cursor-pointer hover:text-[#FF4800]"  onClick={handleChange}>Sign In</li>
         </NavLink>
         
          </ul>
        </div>
      )}

      <div className="font-semibold flex gap-5 items-center">
        <div className="sm:hidden cursor-pointer">
          <GiHamburgerMenu size={30} className="hover:text-[orange]" onClick={handleChange} />
        </div>
        <h3 className="cursor-pointer">
          <MdShoppingCart size={30} className="hover:text-[orange]" />
        </h3>
      </div>
    </div>
  );
};

export default Header;

