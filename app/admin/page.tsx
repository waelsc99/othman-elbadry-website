// app/admin/page.tsx
'use client';

import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '@/lib/firebase';

export default function AdminPage() {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push('/signin');
    }
  }, [user, loading, router]);

  const handleSignOut = async () => {
    await signOut(auth);
    router.push('/signin');
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-950">
        <div className="text-yellow-400 text-xl">جاري التحميل...</div>
      </div>
    );
  }

  if (!user) return null;

  return (
    <div className="min-h-screen bg-slate-950 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-yellow-400">لوحة التحكم</h1>
          <button
            onClick={handleSignOut}
            className="px-4 py-2 bg-red-500/20 text-red-400 rounded-xl hover:bg-red-500/30 transition"
          >
            تسجيل خروج
          </button>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="p-6 bg-slate-900 rounded-2xl border border-yellow-500/20">
            <h3 className="text-lg font-bold text-white">مرحباً</h3>
            <p className="text-slate-400">{user?.email}</p>
          </div>

          <div className="p-6 bg-slate-900 rounded-2xl border border-yellow-500/20">
            <h3 className="text-lg font-bold text-white">📊 إحصائيات</h3>
            <p className="text-slate-400">هنا هتظهر إحصائيات الموقع</p>
          </div>

          <div className="p-6 bg-slate-900 rounded-2xl border border-yellow-500/20">
            <h3 className="text-lg font-bold text-white">⚙️ الإعدادات</h3>
            <p className="text-slate-400">هنا هتضبط إعدادات الموقع</p>
          </div>
        </div>
      </div>
    </div>
  );
}