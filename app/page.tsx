import { About } from "@/components/About";
import { Hero } from "@/components/Hero";
import Navbar from "@/components/Navbar";
import { Weapons } from "@/components/Weapons";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Weapons />
    </main>
  );
}
