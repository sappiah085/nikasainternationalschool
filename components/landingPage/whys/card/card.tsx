import ReadingText from '@/components/common/readingText/readingText';
import React from 'react'

const Card = ({heading, message, icon}:{heading:string, message:string, icon:JSX.Element}) => {
  return (
    <article className='max-w-[362px] flex flex-col gap-2 '>
      <div className="h-[50px] p-2 w-[50px] border-[#333333] flex items-center justify-center rounded-full border-[1.2px]">
       {icon}
      </div>
      <h3 className='text-[20px] font-bold'>{heading}</h3>
      <ReadingText text={message} />
    </article>
  );
}

export default Card