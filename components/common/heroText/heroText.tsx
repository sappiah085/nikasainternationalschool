import React from 'react'

const HeroText = ({
  mainText,
  italic,
  align = "text-center",
  w = "max-w-screen-md",
}: {
  mainText: string;
  italic: string;
  align?: string;
  w?:string
}) => {
  return (
    <h1
      className={`font-statosh font-semibold text-[40px] small:text-[75px]   mx-auto leading-[53px] small:leading-[93px] ${align} ${w}`}
    >
      {mainText}{" "}
      <span className="gradient-text italic font-displayFair">{italic}</span>{" "}
    </h1>
  );
};

export default HeroText