import Button from '@/components/common/button/button';
import ReadingText from '@/components/common/readingText/readingText'
import React from 'react'
import Card from './card';
import { letters } from './data';

const Newsletter = () => {
  return (
    <section className='px-6 py-24 flex flex-col gap-2 items-center justify-center w-full'>
      <h3 className="lg:text-[25px] font-bold">Latest Newsletter</h3>
      <ReadingText
        text="Stay up-to-date with the latest news and events at our school"
        color="text-[#474464] text-center"
      />
      <div className='w-full max-w-7xl flex flex-wrap justify-center items-center gap-7 my-7'>
        {letters.map((m,n)=><Card {...m} key={n}/>)}
      </div>
      <Button color="b" text="Read More" />
    </section>
  );
}

export default Newsletter