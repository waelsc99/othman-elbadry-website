export default function Loading() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950">
      <div className="flex flex-col items-center">
        <div className="h-16 w-16 animate-spin rounded-full border-4 border-yellow-500 border-t-transparent" />

        <h2 className="mt-6 text-2xl font-bold text-white">
          جاري تحميل الموقع...
        </h2>

        <p className="mt-2 text-slate-400">
          يرجى الانتظار
        </p>
      </div>
    </main>
  );
}