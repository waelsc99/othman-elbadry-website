"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 px-6 text-white">
      <div className="text-center">
        <h1 className="text-6xl font-black text-red-500">
          حدث خطأ
        </h1>

        <p className="mt-6 text-slate-400">
          {error.message}
        </p>

        <button
          onClick={reset}
          className="mt-8 rounded-xl bg-yellow-500 px-6 py-3 font-bold text-slate-900 transition hover:scale-105"
        >
          إعادة المحاولة
        </button>
      </div>
    </main>
  );
}