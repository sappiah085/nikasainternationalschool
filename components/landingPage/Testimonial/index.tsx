import Image from "next/image";
import React from "react";
import parent from "@/public/images/man.jpeg";
const Testimonial = () => {
  return (
    <section className="flex flex-col w-full px-6 small:px-9 py-24  justify-center items-center gap-8">
      <p className="max-w-6xl small:leading-[60px] text-center text-[18px] small:text-[30px] italic font-displayFair">
        I am incredibly grateful for choosing Nikasa International School for my
        child. The nurturing environment and dedicated teachers have made a
        significant impact on my child{"'"}s academic and personal{" "}
        <span className="gradient-text">growth.</span>
      </p>
      <div className="flex flex-col items-center justify-center gap-1">
        <div className="h-[100px] w-[100px] rounded-full overflow-hidden">
          {" "}
          <Image
            src={parent}
            alt="parent"
            className="h-full w-full object-cover"
          />
        </div>
        <h4 className="font-bold  small:text-[18px]">Kwame Twumasi</h4>
        <h6 className="text-[#475467]">Parent</h6>
      </div>
    </section>
  );
};

export default Testimonial;
