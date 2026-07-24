"use client";

import { motion } from "framer-motion";

const positions = [
  {
    year: "2010",
    title: "مرشح مجلس الشورى",
    desc: "خاض انتخابات مجلس الشورى، وكانت بداية حضوره السياسي والمجتمعي على نطاق واسع.",
  },
  {
    year: "2015",
    title: "رئيس مجلس إدارة مجموعة شركات الأمريكية",
    desc: "تولى رئاسة مجلس إدارة مجموعة شركات الأمريكية التي تعمل في عدة قطاعات خدمية واستثمارية.",
  },
  {
    year: "2015",
    title: "رئيس مجلس إدارة الشركة الأمريكية للأمن والحراسة",
    desc: "قيادة الشركة وتقديم حلول متكاملة في مجالات الأمن والحراسة وتأمين المنشآت.",
  },
  {
    year: "2015",
    title: "رئيس مجلس إدارة الشركة الأمريكية لخدمات البيئة",
    desc: "الإشراف على مشروعات النظافة وإدارة المخلفات والخدمات البيئية داخل مصر.",
  },
  {
    year: "2026",
    title: "رئيس مجلس إدارة الشركة الأمريكية للمقاولات",
    desc: "قيادة قطاع المقاولات وتنفيذ المشروعات الإنشائية والتطوير العمراني وفق أعلى معايير الجودة.",
  },
  {
    year: "مستمر",
    title: "رئيس جمعية أبناء سوهاج بالقاهرة الجديدة",
    desc: "دعم الأنشطة الاجتماعية والخدمية وتعزيز الترابط بين أبناء محافظة سوهاج.",
  },
  {
    year: "مستمر",
    title: "رئيس جمعية مخلصون من أبناء الوطن للمساعدات",
    desc: "المساهمة في تقديم المساعدات الإنسانية ودعم المبادرات المجتمعية والخيرية.",
  },
  {
    year: "مستمر",
    title: "رئيس اتحاد الشاغلين بالحي المتميز",
    desc: "الإشراف على تطوير الخدمات وتنظيم شؤون اتحاد الشاغلين بمدينة بدر.",
  },
];

export default function Positions() {
  return (
    <section
      id="positions"
      className="bg-slate-900 py-28"
    >
      <div className="max-w-6xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="tracking-[4px] uppercase text-yellow-400">
            Timeline
          </span>

          <h2 className="mt-4 text-5xl font-black text-white">
            المناصب والعضويات
          </h2>

          <div className="mx-auto mt-6 h-1 w-28 rounded-full bg-yellow-500" />
        </motion.div>

        <div className="space-y-8">

          {positions.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="rounded-3xl border border-slate-800 bg-slate-950 p-8 transition duration-300 hover:border-yellow-500 hover:shadow-2xl hover:shadow-yellow-500/10"
            >
              <span className="inline-block rounded-full bg-yellow-500 px-4 py-2 font-bold text-slate-900">
                {item.year}
              </span>

              <h3 className="mt-5 text-2xl font-bold text-white">
                {item.title}
              </h3>

              <p className="mt-4 leading-8 text-slate-400">
                {item.desc}
              </p>
            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}