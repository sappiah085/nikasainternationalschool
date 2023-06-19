import React from "react";

const ReadingText = ({color, text}:{color?:string, text:string}) => {
  return (
    <p className={`small:text-[20px] font-normal leading-[33px] text-[16px] ${color} `}>
     {text}
    </p>
  );
};

export default ReadingText;
