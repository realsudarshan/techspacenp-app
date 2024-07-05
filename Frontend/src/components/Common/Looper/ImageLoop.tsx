import React from "react";
import Marquee from "react-fast-marquee";

interface ImageLoopProp {
  prop: string;
}

export const ImageLoop: React.FC<ImageLoopProp> = ({ prop }) => {

  return (
    <div className="w-[400px]   h-[300px]">
          <img src={prop} className="w-full h-full rounded " alt="" />
      
    </div>
  );
};
