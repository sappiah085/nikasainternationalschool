import Image from 'next/image';
import React from 'react'
import { team } from '../team';
type faceCardProps = typeof team[0]
export const FaceCard = ({n,i,r}:faceCardProps ) => {
  return (
    <div className="flex flex-col gap-3 text-white z-[5]">
      <div className="h-[100px] w-[100px] rounded-full relative  after:bg-gradient-to-tr after:from-[#FFED36] after:to-[#FDAB0B] after:absolute after:h-[106px] after:w-[106px] after:top-[50%] after:left-[50%] after:translate-x-[-50%] after:-translate-y-[50%]  after:p-4 after:-z-[2] after:rounded-full">
        {" "}
        <Image
          src={i}
          alt="parent"
          className="h-full z-[9] w-full object-cover rounded-full"
        />
      </div>
      <div>
        <h4 className="font-bold  small:text-[18px]">{n}</h4>
        <h6>{r}</h6>
      </div>
    </div>
  );
}
