import CardJoin from '@/components/landingPage/join/card';
import React from 'react'
import { linkAdmission } from './links';

const JoinAdmission = () => {
  return (
    <section className="lg:bg-[#FAFAFA] font-displayFair font-extrabold lg:text-[40px] text-[30px] px-6 py-24">
      <div className=" flex flex-wrap items-center justify-center lg:justify-between gap-5  max-w-6xl mx-auto  w-full">
        <p className="max-w-sm text-center lg:text-left">
          Become a part of us today.
        </p>
        <div className="flex flex-1 flex-wrap justify-center gap-5  items-center">
          {linkAdmission.map((rest, n) => (
            <CardJoin {...rest} key={n} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default JoinAdmission