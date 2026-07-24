"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import companies from "@/data/companies";

export default function Companies() {
  return (
    <section
      id="companies"
      className="relative overflow-hidden bg-slate-950 py-24 text-white"
    >
      <div className="mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-5 text-center text-5xl font-black text-yellow-400"
        >
          مجموعة الشركات
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto mb-16 max-w-3xl text-center leading-8 text-slate-400"
        >
          تضم مجموعة الشركات الأمريكية عددًا من الشركات المتخصصة في
          المقاولات والأمن والحراسة وخدمات البيئة، وتسعى جميعها إلى تقديم
          خدمات احترافية وفق أعلى معايير الجودة.
        </motion.p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {companies.map((company, index) => (
            <Link
              key={company.slug}
              href={`/companies/${company.slug}`}
              aria-label={`عرض تفاصيل ${company.name}`}
              className="block"
            >
              <motion.article
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                }}
                className="group overflow-hidden rounded-3xl border border-yellow-500/20 bg-slate-900 transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] hover:border-yellow-400 hover:shadow-2xl hover:shadow-yellow-500/10"
              >
                <div className="relative h-56 w-full overflow-hidden">
                  <Image
                    src={company.cover}
                    alt={company.name}
                    fill
                    priority={index === 0}
                    sizes="(max-width:768px) 100vw,
                           (max-width:1200px) 50vw,
                           33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/30 to-transparent" />
                </div>

                <div className="relative p-8">
                  <div className="mb-6 flex justify-center">
                    <Image
                      src={company.logo}
                      alt={`${company.name} Logo`}
                      width={90}
                      height={90}
                      loading="lazy"
                      className="transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>

                  <h3 className="mb-4 text-center text-2xl font-bold transition-colors duration-300 group-hover:text-yellow-400">
                    {company.name}
                  </h3>

                  <p className="min-h-[90px] text-center leading-8 text-slate-400">
                    {company.description}
                  </p>

                  <div className="mt-8 flex items-center justify-between border-t border-slate-700 pt-5">
                    <span className="text-sm text-slate-500">
                      سنة التأسيس
                    </span>

                    <span className="font-bold text-yellow-400">
                      {company.established}
                    </span>
                  </div>

                  <div className="mt-7 flex items-center justify-center gap-2 font-bold text-yellow-400 transition-all duration-300 group-hover:gap-4">
                    <span>عرض التفاصيل</span>

                    <span className="transition-transform duration-300 group-hover:-translate-x-1">
                      ←
                    </span>
                  </div>
                </div>
              </motion.article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}