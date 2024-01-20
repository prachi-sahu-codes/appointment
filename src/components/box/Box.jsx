import React from "react";

const Box = ({ children, style }) => {
  return (
    <div
      className={`flex border border-[#C7C9D9] h-[48px] leading-[21px] rounded-[10px] px-[12px] py-[8px] text-[14px] ${style}`}
    >
      {children}
    </div>
  );
};

export default Box;
