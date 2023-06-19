import React from 'react'
import Image from 'next/image'
import ReadingText from '@/components/common/readingText/readingText';
const Card = ({m, p}:{m:string, p:any}) => {
  return (
    <article className="w-full min-h-[374px] max-w-[402px] relative overflow-hidden after:h-full after:w-full after:absolute after:top-0 after:left-0 after:bg-gradient-to-b after:from-transparent after:via-transparent after:to-black/90 p-3 flex flex-col justify-end">
      <Image
        src={p}
        className="absolute -z-[1] w-full max-w-[402px] left-0 top-0 h-full"
        alt="letter image"
      />
      <span className='z-[1]'>
        <ReadingText color='text-white' text={m} />
      </span>
    </article>
  );
}

export default Card