"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FaFacebookF,
  FaWhatsapp,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import profile from "@/data/profile";

const links = [
  { name: "الرئيسية", href: "/" },
  { name: "من نحن", href: "/about" },
  { name: "الشركات", href: "/companies" },
  { name: "التكريمات", href: "/honors" },
  { name: "المعرض", href: "/gallery" },
  { name: "تواصل معنا", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  return (
    <>
      <header
        className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-yellow-500/20 bg-slate-950/95 backdrop-blur-xl shadow-xl"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

          <Link href="/" className="text-right">
            <h1 className="text-2xl font-black text-yellow-400">
              {profile.shortName}
            </h1>

            <p className="text-xs text-slate-400">
              Official Website
            </p>
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            {links.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`transition ${
                  pathname === item.href
                    ? "font-bold text-yellow-400"
                    : "text-white hover:text-yellow-400"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href={`https://wa.me/${profile.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-green-600 transition hover:scale-110"
            >
              <FaWhatsapp />
            </a>

            <a
              href={profile.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-600 transition hover:scale-110"
            >
              <FaFacebookF />
            </a>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="text-3xl text-yellow-400 lg:hidden"
            aria-label="القائمة"
          >
            {open ? <FaTimes /> : <FaBars />}
          </button>

        </div>
      </header>

      <div
        className={`fixed inset-0 z-40 bg-slate-950/95 backdrop-blur-xl transition-all duration-300 lg:hidden ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <div className="flex h-full flex-col items-center justify-center gap-8">

          {links.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setOpen(false)}
              className={`text-2xl font-bold transition ${
                pathname === item.href
                  ? "text-yellow-400"
                  : "text-white"
              }`}
            >
              {item.name}
            </Link>
          ))}

          <div className="mt-10 flex gap-4">

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