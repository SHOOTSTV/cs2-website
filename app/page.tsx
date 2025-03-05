import Navbar from "@/components/Navbar";
import { About } from "@/sections/About";
import { GameSeries } from "@/sections/GameSeries";
import { Hero } from "@/sections/Hero";
import { Weapons } from "@/sections/Weapons";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Weapons />
      <GameSeries />
    </main>
  );
}
