import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import linkIcon from "../../assets/linkIcon.svg";
import chevronDown from "../../assets/chevronDown.svg";

const Navbar = () => {
  return (
    <div className="flex justify-between px-[40px] py-[12px] shadow-md">
      <img
        src={logo}
        alt="Company logo"
        className="w-[228px] h-[61px] shrink-0"
      />
      <div className="flex items-center gap-[20px] text-[18px]">
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
