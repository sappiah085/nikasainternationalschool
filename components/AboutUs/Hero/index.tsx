import Button from "@/components/common/button/button";
import HeroText from "@/components/common/heroText/heroText";
import ReadingText from "@/components/common/readingText/readingText";
import React from "react";
import t from "@/public/images/teacher.jpeg";
import m from "@/public/images/man-white.jpeg";
import g from "@/public/images/guys.jpeg";
import w from "@/public/images/woman.jpeg";
import Image from "next/image";
const HeroAboutUs = () => {
  return (
    <section className="flex w-full flex-wrap gap-5 items-center justify-between max-w-6xl mx-auto p-6 py-24">
      <div className="max-w-3xl w-full flex flex-col items-start gap-4">
        <HeroText
          align="text-left"
          mainText="Empowering Minds, Inspiring "
          italic="futures."
        />
        <ReadingText text="We are committed to providing a nurturing environment where students can thrive and reach their full potential. With a rich history of excellence in education, we strive to create an inclusive community that fosters academic growth, personal development, and a love for learning." />
        <span>
          {" "}
          <Button color="b" />
        </span>
      </div>
      <div className="lg:grid grid-cols-2 gap-3 max-w-md flex ">
        <Image
          src={t}
          alt="illustration"
          className="lg:h-[191.77px] lg:w-[101.77px] h-[50.77px] w-[50.77px] object-cover rounded-full"
        />
        <Image
          src={g}
          className="lg:h-[101.77px] lg:w-[101.77px] h-[50.77px] w-[50.77px] object-cover rounded-full"
          alt="illustration"
        />
        <Image
          src={w}
          className="lg:h-[101.77px] lg:w-[101.77px] h-[50.77px] w-[50.77px] object-cover rounded-full"
          alt="illustration"
        />
        <Image
          src={m}
          alt="illustration"
          className="lg:h-[191.77px] lg:w-[101.77px] h-[50.77px] w-[50.77px] object-cover rounded-full lg:-mt-20"
        />
      </div>
    </section>
  );
};

export default HeroAboutUs;
