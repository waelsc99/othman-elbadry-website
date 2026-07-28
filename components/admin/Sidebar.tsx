"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Mail,
  Image,
  Building2,
  Award,
  User,
  Settings,
} from "lucide-react";

const menu = [
  { name: "الرئيسية", href: "/admin", icon: LayoutDashboard },
  { name: "الرسائل", href: "/admin/messages", icon: Mail },
  { name: "المعرض", href: "/admin/gallery", icon: Image },
  { name: "الشركات", href: "/admin/companies", icon: Building2 },
  { name: "التكريمات", href: "/admin/honors", icon: Award },
  { name: "السيرة الذاتية", href: "/admin/profile", icon: User },
  { name: "الإعدادات", href: "/admin/settings", icon: Settings },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-72 bg-slate-900 border-l border-yellow-500/20 min-h-screen">
      <div className="p-6 border-b border-yellow-500/20">
        <h2 className="text-2xl font-black text-yellow-400">
          لوحة التحكم
        </h2>

        <p className="text-slate-400 text-sm mt-2">
          موقع عثمان البدري
        </p>
      </div>

      <nav className="p-4 space-y-2">
        {menu.map((item) => {
          const Icon = item.icon;

          const active = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 rounded-xl px-4 py-3 transition ${
                active
                  ? "bg-yellow-500 text-black font-bold"
                  : "text-slate-300 hover:bg-slate-800"
              }`}
            >
              <Icon size={20} />
              {item.name}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}