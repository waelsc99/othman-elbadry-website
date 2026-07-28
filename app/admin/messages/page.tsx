"use client";

import MessagesTable from "@/components/admin/MessagesTable";

export default function MessagesPage() {
  return (
    <div className="space-y-6">

      <div>

        <h1 className="text-3xl font-black text-yellow-400">
          الرسائل
        </h1>

        <p className="mt-2 text-slate-400">
          جميع الرسائل الواردة من صفحة تواصل معنا.
        </p>

      </div>

      <MessagesTable />

    </div>
  );
}