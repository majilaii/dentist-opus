import { Navigation } from "@/components/sections/Navigation";
import { Hero } from "@/components/sections/Hero";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { About } from "@/components/sections/About";
import { Team } from "@/components/sections/Team";
import { Services } from "@/components/sections/Services";
import { Experience } from "@/components/sections/Experience";
import { Transformation } from "@/components/sections/Transformation";
import { Testimonials } from "@/components/sections/Testimonials";
import { Financing } from "@/components/sections/Financing";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Navigation />
      <Hero />
      <TrustStrip />
      <About />
      <Team />
      <Services />
      <Experience />
      <Transformation />
      <Testimonials />
      <Financing />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
