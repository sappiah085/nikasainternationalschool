import ReadingText from "@/components/common/readingText/readingText";
import React from "react";

export const Mission = () => {
  return (
    <section className="flex flex-col w-full p-6 py-5 justify-center items-center pb-24">
      <div className="relative">
        <h3 className="lg:text-[133.1px] text-[50px] text-[#081D240A] font-bold ">
          Our Mission
        </h3>
        <h4 className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] lg:text-[30px] font-bold text-[18px]">
          Who are we?
        </h4>
      </div>
      <div className="flex flex-col gap-7 max-w-5xl">
        <ReadingText text="Our mission is to empower young minds and inspire a lifelong love for learning. We are dedicated to providing a transformative educational experience that nurtures the intellectual, social, and emotional growth of our students." />
        <ReadingText
          text="Through a rigorous and inclusive curriculum, we strive to foster critical thinking, creativity, and problem-solving skills. We encourage curiosity, independent thought, and a growth mindset, preparing our students to adapt and thrive in a rapidly changing world.
          We are committed to creating a safe, supportive, and inclusive community where diversity is celebrated, and every individual is valued. We promote respect, empathy, and understanding, nurturing an environment that encourages collaboration, teamwork, and global citizenship."
        />
        <ReadingText text="Our passionate educators are committed to cultivating a love for learning by engaging students in dynamic and interactive teaching methods. We provide opportunities for students to explore their passions, develop their talents, and pursue excellence in academics, arts, athletics, and beyond." />
      </div>
    </section>
  );
};
