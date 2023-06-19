import HeroAboutUs from "@/components/AboutUs/Hero";
import Team from "@/components/AboutUs/Team";
import { Mission } from "@/components/AboutUs/mission";
import Together from "@/components/landingPage/together";

export default function AboutUs() {
  return (
    <main className="w-full flex flex-col">
      <HeroAboutUs />
      <Mission/>
      <Team/>
      <Together/>
    </main>
  );
}
