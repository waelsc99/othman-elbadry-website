"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { FaFacebookF, FaWhatsapp, FaBars, FaTimes } from "react-icons/fa";
import profile from "@/data/profile";

const links = [
  { name: "الرئيسية", href: "#" },
  { name: "نبذة", href: "#about" },
  { name: "المناصب", href: "#positions" },
  { name: "الشركات", href: "#companies" },
  { name: "المعرض", href: "#gallery" },
  { name: "تواصل", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-slate-950/90 backdrop-blur-xl border-b border-yellow-500/20 shadow-xl"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto h-20 px-6 flex items-center justify-between">

          <div className="text-right">
            <h1 className="text-2xl font-bold text-yellow-400">
              {profile.shortName}
            </h1>

            <p className="text-xs text-slate-400">
              Official Website
            </p>
          </div>

          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium">
            {links.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="hover:text-yellow-400 transition"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`https://wa.me/${profile.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-green-600 hover:bg-green-500 transition"
            >
              <FaWhatsapp />
            </a>

            <a
              href={profile.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-600 hover:bg-blue-500 transition"
            >
              <FaFacebookF />
            </a>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-3xl text-yellow-400"
          >
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-40 bg-slate-950/95 backdrop-blur-xl transition-all duration-300 lg:hidden ${
          open
            ? "opacity-100 visible"
            : "opacity-0 invisible"
        }`}
      >
        <div className="flex h-full flex-col items-center justify-center gap-8">

          {links.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setOpen(false)}
              className="text-2xl font-bold text-white hover:text-yellow-400 transition"
            >
              {item.name}
            </Link>
          ))}

          <div className="mt-8 flex gap-5">
            <a
              href={`https://wa.me/${profile.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-12 w-12 items-center justify-center rounded-full bg-green-600"
            >
              <FaWhatsapp />
            </a>

            <a
              href={profile.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600"
            >
              <FaFacebookF />
            </a>
          </div>

        </div>
      </div>
    </>
  );
}