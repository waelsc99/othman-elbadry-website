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
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasStarted) {
          setHasStarted(true);
          let startTime: number;
          let animationFrame: number;

          const updateCount = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * end));

            if (progress < 1) {
              animationFrame = requestAnimationFrame(updateCount);
            }
          };

          animationFrame = requestAnimationFrame(updateCount);

          return () => cancelAnimationFrame(animationFrame);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [end, duration, hasStarted]);

  return (
    <div
      ref={ref}
      className={`text-center p-6 bg-yellow-500/10 rounded-2xl border border-yellow-500/20 hover:border-yellow-500 transition ${className}`}
    >
      <h3 className="text-4xl md:text-5xl font-bold text-yellow-400">
        {prefix}
        {count.toLocaleString()}
        {suffix}
      </h3>
      <p className="mt-2 text-sm text-slate-400">{label}</p>
    </div>
  );
}