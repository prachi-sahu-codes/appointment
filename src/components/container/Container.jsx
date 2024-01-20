import React from "react";
import leftDesign from "../../assets/leftDesign.png";
import rightDesign from "../../assets/rightDesign.png";

const Container = ({ children }) => {
  return (
    <div className="relative boxHeight">
      <div className="absolute z-10 w-[928px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-[12px]">
        {children}
      </div>
      <img
        src={leftDesign}
        alt="left design"
        className="absolute w-[290px] h-[200px] bottom-5 left-0"
      />
      <img
        src={rightDesign}
        alt="left design"
        className="absolute w-[240px] h-[180px] bottom-[6rem] right-0"
      />
    </div>
  );
};

export default Container;
