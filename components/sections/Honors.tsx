"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const honors = [
  {
    image: "/images/honors/kuwait.jpg",
    title: "استقبال رئيس وزراء الكويت",
  },
  {
    image: "/images/honors/arab-league.jpg",
    title: "مشاركة بالجامعة العربية",
  },
  {
    image: "/images/honors/monshawy.jpg",
    title: "تكريم بمدينة بدر",
  },
  {
    image: "/images/honors/mohsen.jpg",
    title: "تكريم معالي الوزير محسن النعماني",
  },
  {
    image: "/images/honors/aboulgheit.jpg",
    title: "لقاء مع أمين جامعة الدول العربية",
  },
  {
    image: "/images/honors/essam-sharaf.jpg",
    title: "استقبال الدكتور عصام شرف",
  },
  {
    image: "/images/honors/fathy-sorour.jpg",
    title: "لقاء مع الدكتور فتحي سرور",
  },
  {
    image: "/images/honors/ahmed-altayeb.jpg",
    title: "لقاء مع فضيلة الإمام الأكبر الدكتور أحمد الطيب",
  },
  {
    image: "/images/honors/qadry.jpg",
    title: "تكريم معالي الوزير قدري أبو حسين",
  },
];

export default function Honors() {
  return (
    <section
      id="honors"
      className="relative overflow-hidden bg-slate-950 py-24 text-white"
    >
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-yellow-500/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-blue-600/10 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="tracking-[4px] uppercase text-yellow-400">
            Honors
          </span>

          <h2 className="mt-4 text-5xl font-black">
            التكريمات واللقاءات الرسمية
          </h2>

          <p className="mx-auto mt-6 max-w-3xl leading-8 text-slate-400">
            محطات بارزة من اللقاءات الرسمية والتكريمات والمشاركات الوطنية التي
            تعكس مسيرة الأستاذ عثمان أحمد محمد عبدالله البدري في العمل العام
            والمجتمعي.
          </p>

          <div className="mx-auto mt-6 h-1 w-28 rounded-full bg-yellow-500" />
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {honors.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="group overflow-hidden rounded-3xl border border-yellow-500/20 bg-slate-900 transition-all duration-500 hover:-translate-y-2 hover:border-yellow-400 hover:shadow-2xl hover:shadow-yellow-500/10"
            >
              <div className="relative h-80 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/10 to-transparent opacity-80" />
              </div>

              <div className="p-6">
                <h3 className="text-center text-xl font-bold leading-8 text-white transition-colors duration-300 group-hover:text-yellow-400">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/gallery"
            className="inline-flex rounded-full border border-yellow-400 px-8 py-4 font-bold text-yellow-400 transition hover:bg-yellow-400 hover:text-slate-950"
          >
            عرض جميع الصور
          </Link>
        </div>
      </div>
    </section>
  );
}