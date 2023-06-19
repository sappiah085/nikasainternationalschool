import HeroText from '@/components/common/heroText/heroText'
import ReadingText from '@/components/common/readingText/readingText';
import React from 'react'

const HeroAdmission = () => {
  return (
    <section className='w-full flex flex-col gap-5 items-center justify-center p-6 py-24'>
      <HeroText mainText="Apply to become a " italic="champion" />
      <span className='text-center max-w-4xl w-full'>
        <ReadingText text="We are thrilled to invite you to embark on an enriching educational journey with us. Applying for admission is now easier than ever, as we offer three convenient approaches to initiate your application process. " />
      </span>
    </section>
  );
}

export default HeroAdmission