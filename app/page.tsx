import Image from "next/image";
import lady from "@/public/images/ladyOnphone.jpeg";
import Whys from "@/components/landingPage/whys";
import Hero from "@/components/landingPage/hero";
import Testimonial from "@/components/landingPage/Testimonial";
import Numbers from "@/components/landingPage/numbers";
import Newsletter from "@/components/landingPage/newsletter";
import Join from "@/components/landingPage/join";
import Together from "@/components/landingPage/together";
export default function Home() {
 
  return (
    <main className=" flex flex-col ">
      <Hero/>
      <Image
        src={lady}
        className="w-full max-h-[797px] object-cover"
        alt="lady on phone"
      />
      <Whys />
      <Testimonial/>
      <Numbers/>
      <Newsletter/>
      <Join/>
      <Together/>
    </main>
  );
}
