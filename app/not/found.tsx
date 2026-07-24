import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 px-6 text-white">
      <div className="text-center">
        <h1 className="text-8xl font-black text-yellow-400">404</h1>

        <h2 className="mt-6 text-3xl font-bold">
          الصفحة غير موجودة
        </h2>

        <p className="mt-4 text-slate-400">
          عذرًا، الصفحة التي تبحث عنها غير متوفرة.
        </p>

        <Link
          href="/"
          className="mt-8 inline-block rounded-xl bg-yellow-500 px-6 py-3 font-bold text-slate-900 transition hover:scale-105"
        >
          العودة إلى الصفحة الرئيسية
        </Link>
      </div>
    </main>
  );
}