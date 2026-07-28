"use client";

import { LogOut } from "lucide-react";
import { signOut } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();

  async function logout() {
    await signOut(auth);
    router.push("/signin");
  }

  return (
    <header className="flex items-center justify-between border-b border-yellow-500/20 bg-slate-900 px-8 py-5">

      <div>
        <h1 className="text-3xl font-black text-yellow-400">
          لوحة التحكم
        </h1>

        <p className="mt-1 text-slate-400">
          الموقع الرسمي للأستاذ عثمان أحمد البدري
        </p>
      </div>

      <button
        onClick={logout}
        className="flex items-center gap-2 rounded-xl bg-red-600 px-5 py-3 font-bold text-white transition hover:bg-red-700"
      >
        <LogOut size={18} />
        تسجيل خروج
      </button>

    </header>
  );
}