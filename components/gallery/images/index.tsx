import React from "react";
import m from "@/public/images/1.jpeg";
import m6 from "@/public/images/6.jpeg";
import m2 from "@/public/images/2.jpeg";
import m3 from "@/public/images/3.jpeg";
import m4 from "@/public/images/4.jpeg";
import m5 from "@/public/images/5.jpeg";
import Image from "next/image";
const Images = () => {
  return (
    <div className="lg:grid flex flex-wrap  grid-cols-4 grid-rows-6 p-6 py-20 max-w-6xl mx-auto gap-4 w-full ">
      <Image
        src={m}
        alt="person"
        className="col-start-1 col-end-2 row-start-1 row-end-4 object-cover h-full w-full"
      />
      <Image src={m2} alt="person" className="col-start-2 col-end-4 w-full h-full object-cover object-top row-start-1 row-end-3" />
      <Image
        src={m3}
        alt="person"
        className="col-start-4 col-end-5 row-start-1 row-end-4 object-cover h-full w-full"
      />
      <Image
        src={m4}
        alt="person"
        className="col-start-1 col-end-2 row-start-4 row-end-7 object-cover h-full w-full"
      />
      <Image
        src={m5}
        alt="person"
        className="col-start-2 col-end-4 row-start-3 row-end-7 object-cover h-full w-full"
      />
      <Image
        src={m6}
        alt="person"
        className="col-start-4 col-end-5 row-start-4 row-end-7 object-cover h-full w-full"
      />
    </div>
  );
};

export default Images;
