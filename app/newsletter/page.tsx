import Button from "@/components/common/button/button";
import Newsletter from "@/components/landingPage/newsletter";
import Card from "@/components/landingPage/newsletter/card";
import { letters } from "@/components/landingPage/newsletter/data";
import Together from "@/components/landingPage/together";
import HeroNewsletter from "@/components/newsletter/hero";

export default function NewsletterPage() {
  return (
    <main className="flex flex-col w-full items-center gap-7">
      <HeroNewsletter/>
      <div className="w-full max-w-7xl flex flex-wrap justify-center items-center gap-7 my-7 mx-auto p-2 ">
        {letters.map((m, n) => (
          <Card {...m} key={n} />
        ))}
      </div>
      <Button color="b" text="Read More" />
      <Together />
    </main>
  );
}
