import Hero from "@/components/Hero";
import About from "@/components/About";
import Contact from "@/components/Contact";
import HiddenEasterEgg from "@/components/EasterEgg";

export default function Home() {
  return (
    <div>
      <main className="container mx-auto px-4">
        <Hero />
        <About />
        <Contact />
        <HiddenEasterEgg />
      </main>
    </div>
  );
}
