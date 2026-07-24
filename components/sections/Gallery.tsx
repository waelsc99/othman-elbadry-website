"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const images = [
  { src: "/images/gallery/kuwait.jpg", title: "استقبال رئيس وزراء الكويت" },
  { src: "/images/gallery/arab-league.jpg", title: "إلقاء كلمة بالجامعة العربية" },
  { src: "/images/gallery/monshawy.jpg", title: "تكريم بمدينة بدر" },
  { src: "/images/gallery/mohsen.jpg", title: "تكريم معالي الوزير محسن النعماني" },
  { src: "/images/gallery/aboulgheit.jpg", title: "مع الدكتور أحمد أبو الغيط" },
  { src: "/images/gallery/essam-sharaf.jpg", title: "مع الدكتور عصام شرف" },
  { src: "/images/gallery/fathy-sorour.jpg", title: "مع الدكتور فتحي سرور" },
  { src: "/images/gallery/ahmed-altayeb.jpg", title: "مع فضيلة الإمام أحمد الطيب" },
  { src: "/images/gallery/qadry.jpg", title: "مع معالي الوزير قدري أبو حسين" },
];

export default function Gallery() {
  const [selected, setSelected] = useState<null | string>(null);

  return (
    <section id="gallery" className="bg-slate-950 py-28">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center mb-16">
          <span className="text-yellow-400 tracking-[4px] uppercase">
            Gallery
          </span>

          <h2 className="mt-4 text-5xl font-black text-white">
            أبرز اللقاءات والتكريمات
          </h2>

          <div className="mx-auto mt-6 h-1 w-28 bg-yellow-500 rounded-full" />
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {images.map((img, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              onClick={() => setSelected(img.src)}
              className="cursor-pointer overflow-hidden rounded-2xl border border-slate-800 bg-slate-900"
            >
              <Image
                src={img.src}
                alt={img.title}
                width={600}
                height={400}
                className="h-72 w-full object-cover"
              />

              <div className="p-4 text-center text-slate-300">
                {img.title}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selected && (
        <div
          onClick={() => setSelected(null)}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-6"
        >
          <button
            onClick={() => setSelected(null)}
            className="absolute right-6 top-6 text-3xl text-white"
          >
            ✕
          </button>

          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-h-[85vh] max-w-[90vw]"
          >
            <Image
              src={selected}
              alt="preview"
              width={1200}
              height={800}
              className="h-auto w-auto max-h-[85vh] max-w-[90vw] object-contain rounded-xl"
            />
          </div>
        </div>
      )}
    </section>
  );
}