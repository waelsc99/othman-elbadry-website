"use client";

import { useEffect, useState } from "react";
import {
  collection,
  onSnapshot,
  query,
  orderBy,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { db } from "@/lib/firebase";

interface Message {
  id: string;
  name: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
}

export default function MessagesTable() {
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    const q = query(
      collection(db, "messages"),
      orderBy("createdAt", "desc")
    );

    const unsubscribe = onSnapshot(
      q,
      (snapshot) => {
        console.log("✅ Firestore Connected");
        console.log("عدد الرسائل:", snapshot.size);

        const data = snapshot.docs.map((d) => ({
          id: d.id,
          ...(d.data() as Omit<Message, "id">),
        }));

        console.log("الرسائل:", data);

        setMessages(data);
      },
      (error) => {
        console.error("❌ Firestore Error:", error);
      }
    );

    return () => unsubscribe();
  }, []);

  async function remove(id: string) {
    const ok = confirm("هل تريد حذف الرسالة؟");

    if (!ok) return;

    try {
      await deleteDoc(doc(db, "messages", id));

      console.log("تم حذف الرسالة");
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className="rounded-2xl border border-yellow-500/20 bg-slate-900 p-6">

      <div className="flex items-center justify-between mb-6">

        <h2 className="text-2xl font-bold text-yellow-400">
          رسائل الموقع
        </h2>

        <div className="rounded-xl bg-yellow-500 px-4 py-2 font-bold text-black">
          {messages.length} رسالة
        </div>

      </div>

      {messages.length === 0 ? (
        <div className="rounded-xl bg-slate-800 p-10 text-center text-slate-400">
          لا توجد رسائل حالياً
        </div>
      ) : (
        <div className="space-y-5">

          {messages.map((msg) => (

            <div
              key={msg.id}
              className="rounded-xl border border-slate-700 bg-slate-800 p-5"
            >

              <div className="grid gap-3 md:grid-cols-2">

                <p>
                  <b>الاسم:</b> {msg.name}
                </p>

                <p>
                  <b>الهاتف:</b> {msg.phone}
                </p>

                <p>
                  <b>البريد:</b> {msg.email}
                </p>

                <p>
                  <b>العنوان:</b> {msg.subject}
                </p>

              </div>

              <div className="mt-4">

                <b>الرسالة:</b>

                <p className="mt-2 whitespace-pre-wrap text-slate-300">
                  {msg.message}
                </p>

              </div>

              <button
                onClick={() => remove(msg.id)}
                className="mt-5 rounded-lg bg-red-600 px-4 py-2 hover:bg-red-700"
              >
                حذف الرسالة
              </button>

            </div>

          ))}

        </div>
      )}

    </div>
  );
}