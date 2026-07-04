 "use client";

import { motion } from "framer-motion";

function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  return (
    <span className="text-5xl font-black text-yellow-400">
      {value}{suffix}
    </span>
  );
}

const stats = [
  { label: "سنوات الخبرة", value: 25, suffix: "+" },
  { label: "التكريمات", value: 66 },
  { label: "اللقاءات الرسمية", value: 50, suffix: "+" },
  { label: "المناصب القيادية", value: 8 },
];

export default function Stats() {
  return (
    <section className="bg-slate-900 py-24">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08 }}
            className="rounded-3xl border border-yellow-500/20 bg-slate-950 p-8 text-center shadow-xl transition hover:-translate-y-2 hover:border-yellow-400"
          >
            <Counter value={item.value} suffix={item.suffix} />
            <h3 className="mt-4 text-lg font-semibold text-slate-200">
              {item.label}
            </h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
