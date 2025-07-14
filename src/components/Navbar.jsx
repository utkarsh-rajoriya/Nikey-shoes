import React from "react";
import logo from "../assets/pngwing.com.png"

const Navbar = (props) => {
  return (
    <div className="z-50 w-full px-3 absolute top-0 flex justify-evenly items-center gap-[2rem]">
        <div>
        <img src={logo} className="w-25"></img>
        </div>

        <div className="max-sm:hidden flex justify-evenly items-center gap-[2rem] bebas-neue-regular">
            <p className="text-white text-lg tracking-wide">New Release</p>
            <p className="text-white text-lg tracking-wide">Women</p>
            <p className="text-white text-lg tracking-wide">Kids</p>
            <p className="text-white text-lg tracking-wide">Customize</p>
        </div>

        <div className="flex items-center gap-[1rem] lg:gap-[2rem] ">
            <i className="fa-regular fa-user text-white"></i>
            <i className="fa-solid fa-cart-shopping text-white"></i>
        </div>
    </div>
  );
};

export default Navbar;
