import Button from "@/components/common/button/button";
import ReadingText from "@/components/common/readingText/readingText";
import React from "react";
import Card from "./card/card";
import { whys } from "./data";

const Whys = () => {
  return (
    <section className="bg-[#081D24] text-white flex flex-col justify-center items-center  gap-10 w-full p-6 py-24 small:p-20">
      <div className=" flex flex-col justify-center text-center">
        <h2
          className={`font-statosh font-medium text-[25px] max-w-screen-md  mx-auto leading-[33px] `}
        >
          Why your ward should be{" "}
          <span className="gradient-text italic font-displayFair">here.</span>{" "}
        </h2>
        <ReadingText text="Providing an exceptional educational experience for success" />
      </div>

      <div className="flex justify-between flex-wrap items-center gap-8 w-full">
        {whys.map((rest,id) => (
          <Card {...rest} key={id} />
        ))}
      </div>
      <Button color="w" />
    </section>
  );
};

export default Whys;
