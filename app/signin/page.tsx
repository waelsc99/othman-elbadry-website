// app/signin/page.tsx
"use client";

import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { useRouter } from "next/navigation";

export default function SignIn() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    setLoading(true);
    setError("");

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      console.log("تم تسجيل الدخول بنجاح");
      console.log(userCredential.user);

      router.push("/admin");
    } catch (err: any) {
      console.error("Firebase Error:", err);
      console.error("Error Code:", err.code);
      console.error("Error Message:", err.message);

      setError(
        `خطأ Firebase:
${err.code}

${err.message}`
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 p-4">
      <div className="w-full max-w-md">

        <h1 className="text-3xl font-bold text-yellow-400 text-center mb-2">
          تسجيل الدخول
        </h1>

        <p className="text-slate-400 text-center mb-8">
          لوحة تحكم الموقع الرسمي
        </p>

        <form
          onSubmit={handleSubmit}
          className="bg-slate-900 p-8 rounded-2xl border border-yellow-500/20"
        >

          {error && (
            <div className="mb-4 rounded-xl border border-red-500/40 bg-red-500/10 p-3 text-red-400 whitespace-pre-wrap text-sm">
              {error}
            </div>
          )}

          <div className="mb-4">
            <label className="mb-2 block text-slate-400">
              البريد الإلكتروني
            </label>

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="example@gmail.com"
              required
              className="w-full rounded-xl border border-slate-700 bg-slate-800 p-3 text-white outline-none focus:border-yellow-400"
            />
          </div>

          <div className="mb-6">
            <label className="mb-2 block text-slate-400">
              كلمة المرور
            </label>

            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="********"
              required
              className="w-full rounded-xl border border-slate-700 bg-slate-800 p-3 text-white outline-none focus:border-yellow-400"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-yellow-500 py-3 font-bold text-slate-900 transition hover:bg-yellow-400 disabled:opacity-60"
          >
            {loading ? "جارٍ تسجيل الدخول..." : "تسجيل الدخول"}
          </button>

        </form>

      </div>
    </div>
  );
}