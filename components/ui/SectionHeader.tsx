"use client";

import { motion } from "framer-motion";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  center?: boolean;
}

export default function SectionHeader({
  title,
  subtitle,
  center = true,
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={center ? "text-center mb-16" : "mb-16"}
    >
      <span className="inline-block mb-3 rounded-full border border-yellow-500/30 bg-yellow-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-yellow-400">
        Official Website
      </span>

      <h2 className="text-4xl md:text-5xl font-extrabold text-white">
        {title}
      </h2>

      {subtitle && (
        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
          {subtitle}
        </p>
      )}

      <div className="mx-auto mt-8 h-1 w-24 rounded-full bg-gradient-to-r from-transparent via-yellow-400 to-transparent" />
    </motion.div>
  );
}