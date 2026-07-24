import type { Metadata } from "next";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import About from "@/components/sections/About";
import Positions from "@/components/sections/Positions";
import Honors from "@/components/sections/Honors";
import Gallery from "@/components/sections/Gallery";
import Contact from "@/components/sections/Contact";

import Companies from "@/components/Companies";

export const metadata: Metadata = {
  title: "الرئيسية",
  description:
    "الموقع الرسمي للأستاذ عثمان أحمد محمد عبدالله البدري، رجل أعمال مصري ورئيس مجلس إدارة مجموعة شركات الأمريكية.",
};

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main className="bg-slate-950 text-white">
        <Hero />

        <Stats />

        <About />

        <Positions />

        <Companies />

        <Honors />

        <Gallery />

        <Contact />
      </main>

      <Footer />
    </>
  );
}