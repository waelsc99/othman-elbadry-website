"use client";

import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const total =
        document.documentElement.scrollHeight - window.innerHeight;

      const current = window.scrollY;

      setProgress((current / total) * 100);
    };

    update();

    window.addEventListener("scroll", update);

    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <div
      className="fixed left-0 top-0 z-[100] h-1 bg-yellow-500 transition-all duration-150"
      style={{ width: `${progress}%` }}
    />
  );
}