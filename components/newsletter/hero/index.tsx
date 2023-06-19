import HeroText from "@/components/common/heroText/heroText";
import ReadingText from "@/components/common/readingText/readingText";
import Image from "next/image";
import React from "react";
import n from "@/public/images/newsletter.svg"
const HeroNewsletter = () => {
  return (
    <section className="flex w-full justify-between  items-center  max-w-7xl mx-auto p-6 py-24">
      <div className="max-w-3xl w-full flex flex-col items-start gap-4">
        <HeroText
          align="text-left"
          mainText="An all in one place for every "
          italic="information."
        />
        <div className="after:absolute relative after:top-0 after:left-0 after:h-full after:w-[2px] after:bg-[#FFE12E] pl-5">
          <ReadingText
            color="text-[#081D24]"
            text="Welcome to our newsletter section, your all-in-one destination for comprehensive and up-to-date information. We understand the importance of keeping our valued stakeholders informed about the latest developments, exciting events, and noteworthy achievements within our vibrant educational community."
          />
        </div>
      </div>
      <Image
        className="max-w-xs w-full hidden lg:block"
        src={n}
        alt="newsletter illustration"
      />
    </section>
  );
};

export default HeroNewsletter;
