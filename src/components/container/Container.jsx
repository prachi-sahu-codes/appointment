import React from "react";

const Container = ({ children }) => {
  return (
    <div className="relative boxHeight bg-gradient-to-r from-[#fbfbfc] to-[#eff4f3]">
      <div className="absolute w-[928px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-[12px]">
        {children}
      </div>
    </div>
  );
};

export default Container;
