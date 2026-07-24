 "use client";

import { motion } from "framer-motion";
import Image from "next/image";
import profile from "@/data/profile";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-slate-950 text-white flex items-center">
      <div className="absolute inset-0">
        <div className="absolute -top-32 right-0 h-[520px] w-[520px] rounded-full bg-yellow-500/10 blur-3xl"/>
        <div className="absolute -bottom-24 left-0 h-[420px] w-[420px] rounded-full bg-blue-600/10 blur-3xl"/>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,.04),transparent_60%)]"/>
      </div>

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-16 px-6 py-24 lg:grid-cols-2">
        <motion.div
          initial={{opacity:0,x:60}}
          animate={{opacity:1,x:0}}
          transition={{duration:.8}}
          className="order-2 lg:order-1"
        >
          <span className="inline-flex rounded-full border border-yellow-500/30 bg-yellow-500/10 px-4 py-2 text-sm font-semibold tracking-[.25em] uppercase text-yellow-400">
            Official Website
          </span>

          <h1 className="mt-6 text-5xl font-black leading-tight lg:text-7xl">
            {profile.shortName}
          </h1>

          <p className="mt-8 max-w-2xl text-xl leading-10 text-slate-300">
            {profile.title}
          </p>

          <div className="mt-12 flex flex-wrap gap-5">
            <a href="#about" className="rounded-2xl bg-yellow-500 px-8 py-4 font-bold text-slate-900 transition hover:scale-105">
              استكشف المسيرة
            </a>
            <a href="#contact" className="rounded-2xl border border-yellow-500 px-8 py-4 font-bold text-yellow-400 transition hover:bg-yellow-500 hover:text-slate-900">
              تواصل معنا
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{opacity:0,x:-60}}
          animate={{opacity:1,x:0}}
          transition={{duration:.8}}
          className="order-1 flex justify-center lg:order-2"
        >
          <div className="relative h-[520px] w-[390px] overflow-hidden rounded-[32px] border-4 border-yellow-500 shadow-2xl shadow-yellow-500/20">
            <Image
              src="/images/profile/profile.jpg"
              alt={profile.shortName}
              fill
              priority
              className="object-cover transition duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 via-transparent to-transparent"/>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
