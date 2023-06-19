import Image from "next/image";
import React from "react";
import ReadingText from "@/components/common/readingText/readingText";
import { BsArrowRightShort } from "react-icons/bs";
const CardJoin = ({p, t, url}:{p:any, t:string, url:string}) => {
  return (
    <div className="lg:max-w-[194.81px] rounded-3xl text-center lg:min-h-[278.51px] w-full lg:bg-white bg-[#FAFAFA] flex lg:flex-col  items-center justify-between p-5 py-7">
      <Image
        className="lg:w-[66.32px] w-[34px] h-[34px] lg:h-[66.32px]"
        src={p}
        alt="people"
      />
      <div className="flex justify-between w-[70%] lg:w-full lg:flex-col gap-2 items-center ">
        <ReadingText text={t} />
        <a
          href={url}
          className="border-black p-2 rounded-full border-[1px] text-lg"
        >
          <BsArrowRightShort />
        </a>
      </div>
    </div>
  );
};

export default CardJoin;
