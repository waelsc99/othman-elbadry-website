"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import profile from "@/data/profile";
import {
  FaBuilding,
  FaUsers,
  FaHandshake,
  FaAward,
} from "react-icons/fa";

const features = [
  {
    icon: FaBuilding,
    title: "إدارة الشركات",
    desc: "قيادة وإدارة مجموعة شركات الأمريكية في مجالات متعددة.",
  },
  {
    icon: FaUsers,
    title: "العمل المجتمعي",
    desc: "المشاركة في المبادرات المجتمعية والخدمية ودعم العمل العام.",
  },
  {
    icon: FaHandshake,
    title: "القيادة",
    desc: "خبرة طويلة في الإدارة والقيادة وصناعة القرار.",
  },
  {
    icon: FaAward,
    title: "الخبرة",
    desc: "سجل حافل بالإنجازات واللقاءات والتكريمات الرسمية.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-slate-950 py-28 text-white"
    >
      <div className="absolute inset-0">
        <div className="absolute top-20 right-0 h-72 w-72 rounded-full bg-yellow-500/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-blue-600/10 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        <div className="mb-20 text-center">
          <span className="text-yellow-400 tracking-[4px] uppercase">
            ABOUT
          </span>

          <h2 className="mt-4 text-5xl font-black">
            نبذة عن الأستاذ عثمان البدري
          </h2>

          <div className="mx-auto mt-6 h-1 w-28 rounded-full bg-yellow-500" />
        </div>

        <div className="grid items-center gap-16 lg:grid-cols-2">

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .8 }}
            className="flex justify-center"
          >
            <div className="relative overflow-hidden rounded-3xl border border-yellow-500/30 shadow-2xl">
              <Image
                src="/images/profile/profile.jpg"
                alt={profile.shortName}
                width={470}
                height={620}
                className="object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .8 }}
          >
            <h3 className="text-4xl font-bold text-yellow-400">
              {profile.shortName}
            </h3>

            <p className="mt-8 text-lg leading-9 text-slate-300">
              {profile.about}
            </p>

            <p className="mt-6 leading-9 text-slate-400">
              يشغل الأستاذ عثمان البدري عددًا من المناصب القيادية في القطاع
              الخاص والعمل المجتمعي، ويقود مجموعة شركات الأمريكية، إلى جانب
              مساهماته في دعم المبادرات الخدمية والتنموية، وامتلاكه خبرة طويلة
              في الإدارة والقيادة وبناء المؤسسات.
            </p>

            <div className="mt-12 grid gap-5 sm:grid-cols-2">
              {features.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={index}
                    className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition hover:border-yellow-500"
                  >
                    <Icon className="mb-4 text-3xl text-yellow-400" />

                    <h4 className="mb-2 text-xl font-bold">
                      {item.title}
                    </h4>

                    <p className="text-sm leading-7 text-slate-400">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}