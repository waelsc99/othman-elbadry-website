"use client";

import { useEffect, useState } from "react";
import {
  FaClock,
  FaCalendarAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function TopBar() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();

      setTime(
        now.toLocaleTimeString("ar-EG", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      );
    };

    updateTime();

    const timer = setInterval(updateTime, 1000);

    return () => clearInterval(timer);
  }, []);

  const date = new Date().toLocaleDateString("ar-EG", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] border-b border-yellow-500/20 bg-slate-950 text-white">
      <div className="mx-auto flex h-10 max-w-7xl items-center justify-between px-6 text-sm">

        <div className="flex items-center gap-2 text-yellow-400">
          <FaCalendarAlt />
          <span>{date}</span>
        </div>

        <div className="hidden items-center gap-2 md:flex text-slate-300">
          <FaMapMarkerAlt />
          <span>مدينة بدر - القاهرة</span>
        </div>

        <div className="flex items-center gap-2 text-yellow-400">
          <FaClock />
          <span>{time}</span>
        </div>

      </div>
    </div>
  );
}