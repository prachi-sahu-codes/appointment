import React from "react";
import leftDesign from "../../assets/leftDesign.png";
import rightDesign from "../../assets/rightDesign.png";

const Container = ({ children }) => {
  return (
    <div className="relative boxHeight">
      <div className="relative m-5 my-10 lg:m-0 lg:absolute z-10 lg:w-[928px] lg:top-1/2 lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:-translate-y-1/2 rounded-[12px]">
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
