import HeroText from '@/components/common/heroText/heroText';
import ReadingText from '@/components/common/readingText/readingText';
import React from 'react'
import { FaceCard } from './faceCard';
import { team } from './team';

const Team = () => {
  return (
    <section className="p-6 py-24 bg-[#081D24] flex flex-col gap-8">
      <div className="text-white flex flex-col gap-9 max-w-6xl mx-auto w-full items-start">
        <span >
          <HeroText
            align="text-left"
            mainText="A Team of Educational "
            italic="Experts"
          />
        </span>

        <span className="max-w-md w-full block self-end">
          <ReadingText
            text="We take great pride in our exceptional team of educational experts. Our dedicated faculty members are at the heart of our commitment to providing a transformative learning experience for our students."
            color="text-white"
          />
        </span>
      </div>
      <div className='flex flex-wrap w-full justify-between gap-4 mx-auto max-w-4xl'>
        {team.map((obj,n)=><FaceCard {...obj} key={n}/>)}
      </div>
    </section>
  );
}

export default Team