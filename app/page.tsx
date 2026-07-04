import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import LoadingScreen from "@/components/ui/LoadingScreen";
import ScrollProgress from "@/components/ui/ScrollProgress";
import BackToTop from "@/components/ui/BackToTop";

import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import About from "@/components/sections/About";
import Positions from "@/components/sections/Positions";
import Honors from "@/components/sections/Honors";
import Companies from "@/components/Companies";
import Gallery from "@/components/sections/Gallery";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <LoadingScreen />

      <ScrollProgress />

      <Navbar />

      <main className="min-h-screen bg-slate-950 text-white">
        <Hero />
        <Stats />
        <About />
        <Positions />
        <Honors />
        <Companies />
        <Gallery />
        <Contact />
      </main>

      <Footer />

      <BackToTop />
    </>
  );
}