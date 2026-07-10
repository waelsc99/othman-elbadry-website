"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import companies from "@/data/companies";

export default function Companies() {
  return (
    <section id="companies" className="bg-slate-950 py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-5 text-center text-5xl font-black text-yellow-400"
        >
          مجموعة الشركات
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
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
              className="block"
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group overflow-hidden rounded-3xl border border-yellow-500/20 bg-slate-900 transition-all duration-500 hover:-translate-y-3 hover:border-yellow-400 hover:shadow-2xl hover:shadow-yellow-500/10"
              >
                <div className="relative h-52 w-full overflow-hidden">
                  <Image
                    src={company.cover}
                    alt={company.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                <div className="p-8">
                  <div className="mb-6 flex justify-center">
                    <Image
                      src={company.logo}
                      alt={company.name}
                      width={90}
                      height={90}
                      className="transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>

                  <h3 className="mb-4 text-center text-2xl font-bold text-white transition-colors duration-300 group-hover:text-yellow-400">
                    {company.name}
                  </h3>

                  <p className="mb-6 text-center leading-8 text-slate-400">
                    {company.description}
                  </p>

                  <div className="flex items-center justify-between border-t border-slate-700 pt-5 text-sm text-slate-500">
                    <span>تأسست</span>

                    <span className="font-bold text-yellow-400">
                      {company.established}
                    </span>
                  </div>

                  <div className="mt-6 flex items-center justify-center gap-2 font-bold text-yellow-400 transition-all duration-300 group-hover:gap-4">
                    <span>عرض التفاصيل</span>
                    <span className="transition-transform duration-300 group-hover:-translate-x-1">
                      ←
                    </span>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}