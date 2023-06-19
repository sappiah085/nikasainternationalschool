import Button from '@/components/common/button/button';
import HeroText from '@/components/common/heroText/heroText';
import ReadingText from '@/components/common/readingText/readingText';
import React from 'react'

const Hero = () => {
  return (
    <section className="max-w-5xl w-full mb-10 px-7 text-center mx-auto flex flex-col gap-9 min-h-[70vh] justify-center">
      <HeroText
       
        mainText="Unlocking excellence in"
        italic="education."
      />
      <ReadingText
        text=" Discover a world-class education that blends academic excellence with
      holistic development. Explore our innovative programs, dedicated faculty,
      and state-of-the-art facilities."
      />
      <Button color="b" />
    </section>
  );
}

export default Hero