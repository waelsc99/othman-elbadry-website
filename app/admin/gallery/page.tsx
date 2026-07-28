"use client";

export default function GalleryPage() {
  return (
    <div className="space-y-6">

      <div>
        <h1 className="text-3xl font-black text-yellow-400">
          إدارة المعرض
        </h1>

        <p className="mt-2 text-slate-400">
          إضافة وحذف وإدارة صور الموقع.
        </p>
      </div>

      <div className="rounded-2xl border border-yellow-500/20 bg-slate-900 p-8">

        <div className="flex items-center justify-between">

          <h2 className="text-xl font-bold text-white">
            صور المعرض
          </h2>

          <button className="rounded-xl bg-yellow-500 px-5 py-3 font-bold text-slate-900 hover:bg-yellow-400">
            + إضافة صورة
          </button>

        </div>

        <div className="mt-10 rounded-xl border-2 border-dashed border-slate-700 p-12 text-center text-slate-400">
          لا توجد صور حتى الآن
        </div>

      </div>

    </div>
  );
}