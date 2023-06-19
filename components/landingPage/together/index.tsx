import Button from '@/components/common/button/button';
import HeroText from '@/components/common/heroText/heroText'
import ReadingText from '@/components/common/readingText/readingText';
import Image from 'next/image';
import React from 'react'
import p from "@/public/images/children.jpeg"
const Together = () => {
  return (
    <section className="relative text-center p-6 text-white after:bg-black/70 after:absolute after:top-0 after:left-0 after:w-full after:h-full flex items-center justify-center w-full min-h-screen">
      <Image
        className="absolute  object-cover object-top -z-[1] top-0 left-0 w-full h-full"
        src={p}
        alt="people"
      />
      <div className="z-[2] flex flex-col gap-5 items-center justify-center">
        <HeroText mainText="Together, we shape " italic="futures." />
        <ReadingText text="Start your educational adventure with Nikasa International School." />
        <Button color="w" />
      </div>
    </section>
  );
}

export default Together