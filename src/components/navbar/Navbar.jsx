import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import linkIcon from "../../assets/linkIcon.svg";
import chevronDown from "../../assets/chevronDown.svg";

const Navbar = () => {
  return (
    <div className="flex flex-wrap sm:flex-nowrap justify-between px-[40px] py-[12px] shadow-md bg-white">
      <img
        src={logo}
        alt="Company logo"
        className="w-[228px] h-[61px] shrink-0"
      />
      <div className="w-full sm:w-fit flex items-center justify-between sm:justify-normal sm:gap-[20px] mt-5 sm:mt-0 text-[18px]">
        <NavLink to="/" className="flex items-center">
          <span>Menu</span>
          <span className="text-primary w-[20px] h-[20px]">
            <img src={chevronDown} />
          </span>
        </NavLink>
        <NavLink to="/">Contact us</NavLink>
        <NavLink
          to="/"
          className="flex items-center gap-[8px] border border-primary rounded-full py-[8px] px-[20px] text-primary"
        >
          <span>Share Link</span>
          <img src={linkIcon} />
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
