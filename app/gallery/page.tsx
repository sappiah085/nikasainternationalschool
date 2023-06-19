import HeroText from "@/components/common/heroText/heroText";
import Images from "@/components/gallery/images";
import Together from "@/components/landingPage/together";
import React from "react";

const Gallery = () => {
  return (
    <main className="w-full flex flex-col">
      <span className="w-full p-6 py-20">
        <HeroText
          w="max-w-6xl"
          mainText="A collection of today’s and yesterday’s "
          italic="memories."
        />
      </span>
      <Images/>
      <Together />
    </main>
  );
};

export default Gallery;
