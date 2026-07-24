"use client";

import { useEffect, useRef, useState } from "react";

interface CounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  label: string;
  className?: string;
}

export default function Counter({
  end,
  duration = 2000,
  suffix = "",
  prefix = "",
  label,
  className = "",
}: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    let frame = 0;
    let start = 0;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        const animate = (time: number) => {
          if (!start) start = time;

          const progress = Math.min((time - start) / duration, 1);
          setCount(Math.floor(progress * end));

          if (progress < 1) {
            frame = requestAnimationFrame(animate);
          }
        };

        frame = requestAnimationFrame(animate);
        observer.disconnect();
      },
      { threshold: 0.2 }
    );

    observer.observe(ref.current);

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
    };
  }, [end, duration]);

  return (
    <div
      ref={ref}
      className={`text-center p-6 bg-yellow-500/10 rounded-2xl border border-yellow-500/20 hover:border-yellow-500 transition ${className}`}
    >
      <h3
        suppressHydrationWarning
        className="text-4xl md:text-5xl font-bold text-yellow-400"
      >
        {prefix}
        {count.toLocaleString()}
        {suffix}
      </h3>

      <p className="mt-2 text-sm text-slate-400">{label}</p>
    </div>
  );
}