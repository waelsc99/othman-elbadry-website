import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "السيرة الذاتية | عثمان أحمد محمد عبدالله البدري",
  description:
    "السيرة الذاتية الرسمية للأستاذ عثمان أحمد محمد عبدالله البدري.",
};

export default function BiographyPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white flex items-center justify-center">
      <div className="text-center px-6">
        <h1 className="text-5xl font-black text-yellow-400 mb-6">
          السيرة الذاتية
        </h1>

        <p className="text-slate-300 text-xl">
          جاري إعداد الصفحة...
        </p>
      </div>
    </main>
  );
}