import Hero from "@/components/sections/Hero";
import Pillars from "@/components/sections/Pillars";
import WhoWeHelp from "@/components/sections/WhoWeHelp";
import PhotographyStudio from "@/components/sections/PhotographyStudio";
import CreatorNetwork from "@/components/sections/CreatorNetwork";
import FinalCTA from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <Hero />
      <Pillars />
      <WhoWeHelp />
      <PhotographyStudio />
      <CreatorNetwork />
      <FinalCTA />
    </main>
  );
}
