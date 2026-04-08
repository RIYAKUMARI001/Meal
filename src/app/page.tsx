
import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Menu } from "@/components/sections/Menu";
import { Ingredients } from "@/components/sections/Ingredients";
import { Recipe } from "@/components/sections/Recipe";
import { Nutrition } from "@/components/sections/Nutrition";
import { Reviews } from "@/components/sections/Reviews";
import { FAQ } from "@/components/sections/FAQ";
import { CTA } from "@/components/sections/CTA";
import { Footer } from "@/components/sections/Footer";
import { GoldDivider } from "@/components/ui/GoldDivider";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <GoldDivider />
      <About />
      <GoldDivider />
      <Menu />
      <GoldDivider />
      <Ingredients />
      <GoldDivider />
      <Recipe />
      <GoldDivider />
      <Nutrition />
      <GoldDivider />
      <Reviews />
      <GoldDivider />
      <FAQ />
      <GoldDivider />
      <CTA />
      <Footer />
    </main>
  );
}
