"use client";

import { useState } from "react";
import {
  FaPhoneAlt,
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";
import profile from "@/data/profile";

const items = [
  {
    icon: FaPhoneAlt,
    title: "الهاتف",
    value: profile.phone,
    href: `tel:${profile.phone}`,
    color: "text-yellow-400",
  },
  {
    icon: FaWhatsapp,
    title: "واتساب",
    value: "راسلنا الآن",
    href: `https://wa.me/${profile.whatsapp}`,
    color: "text-green-500",
  },
  {
    icon: FaEnvelope,
    title: "البريد الإلكتروني",
    value: profile.email,
    href: `mailto:${profile.email}`,
    color: "text-red-500",
  },
  {
    icon: FaMapMarkerAlt,
    title: "العنوان",
    value: profile.address,
    color: "text-blue-400",
  },
  {
    icon: FaFacebookF,
    title: "فيسبوك",
    value: "الصفحة الرسمية",
    href: profile.facebook,
    color: "text-blue-600",
  },
];

export default function Contact() {
  const [loading, setLoading] = useState(false);

  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

 async function handleSubmit(e: React.FormEvent) {
  e.preventDefault();

  setLoading(true);
  setSuccess("");
  setError("");

  if (
    !form.name.trim() ||
    !form.phone.trim() ||
    !form.email.trim() ||
    !form.subject.trim() ||
    !form.message.trim()
  ) {
    setError("يرجى ملء جميع الحقول.");
    setLoading(false);
    return;
  }

  try {
    console.log("بدء إرسال الرسالة...");

    const docRef = await addDoc(collection(db, "messages"), {
      name: form.name,
      phone: form.phone,
      email: form.email,
      subject: form.subject,
      message: form.message,
      createdAt: serverTimestamp(),
    });

    console.log("تم الحفظ بنجاح، رقم المستند:", docRef.id);

    setSuccess("تم إرسال رسالتك بنجاح، وسوف يتم التواصل معك في أقرب وقت.");

    setForm({
      name: "",
      phone: "",
      email: "",
      subject: "",
      message: "",
    });
  } catch (err: any) {
    console.error("Firebase Error:", err);
    console.error("Error Code:", err?.code);
    console.error("Error Message:", err?.message);

    setError(
      err?.message || "حدث خطأ أثناء إرسال الرسالة، يرجى المحاولة مرة أخرى."
    );
  } finally {
    setLoading(false);
  }
}

  return (
    <section id="contact" className="bg-slate-900 py-24 text-white">
      <div className="max-w-7xl mx-auto px-6">

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-5 text-center text-5xl font-black text-yellow-400"
        >
          تواصل معنا
        </motion.h2>

        <p className="mb-16 text-center text-slate-400">
          يمكنك التواصل معنا عبر الوسائل التالية أو إرسال رسالة مباشرة.
        </p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">

          {items.map((item, i) => {
            const Card = item.href ? "a" : "div";

            return (
              <Card
                key={i}
                {...(item.href
                  ? {
                      href: item.href,
                      target: item.href.startsWith("http")
                        ? "_blank"
                        : undefined,
                      rel: "noopener noreferrer",
                    }
                  : {})}
                className="rounded-3xl border border-yellow-500/20 bg-slate-950 p-8 text-center transition hover:-translate-y-2 hover:border-yellow-400"
              >
                <item.icon
                  className={`mx-auto mb-5 text-4xl ${item.color}`}
                />

                <h3 className="mb-2 text-xl font-bold">
                  {item.title}
                </h3>

                <p className="break-words text-slate-300">
                  {item.value}
                </p>
              </Card>
            );
          })}
        </div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mt-20 max-w-4xl rounded-3xl border border-yellow-500/20 bg-slate-950 p-8"
        >
          <h3 className="mb-8 text-center text-3xl font-bold text-yellow-400">
            أرسل رسالتك
          </h3>

          <div className="grid gap-6 md:grid-cols-2">

            <input
              name="name"
              placeholder="الاسم بالكامل"
              value={form.name}
              onChange={handleChange}
              className="rounded-xl bg-slate-800 p-4 outline-none focus:ring-2 focus:ring-yellow-400"
            />

            <input
              name="phone"
              placeholder="رقم الهاتف"
              value={form.phone}
              onChange={handleChange}
              className="rounded-xl bg-slate-800 p-4 outline-none focus:ring-2 focus:ring-yellow-400"
            />

            <input
              name="email"
              type="email"
              placeholder="البريد الإلكتروني"
              value={form.email}
              onChange={handleChange}
              className="rounded-xl bg-slate-800 p-4 outline-none focus:ring-2 focus:ring-yellow-400"
            />

            <input
              name="subject"
              placeholder="عنوان الرسالة"
              value={form.subject}
              onChange={handleChange}
              className="rounded-xl bg-slate-800 p-4 outline-none focus:ring-2 focus:ring-yellow-400"
            />

          </div>

          <textarea
            name="message"
            rows={6}
            placeholder="اكتب رسالتك..."
            value={form.message}
            onChange={handleChange}
            className="mt-6 w-full rounded-xl bg-slate-800 p-4 outline-none focus:ring-2 focus:ring-yellow-400"
          />

          {success && (
            <div className="mt-6 rounded-xl bg-green-600/20 p-4 text-green-400">
              {success}
            </div>
          )}

          {error && (
            <div className="mt-6 rounded-xl bg-red-600/20 p-4 text-red-400">
              {error}
            </div>
          )}

          <button
            disabled={loading}
            className="mt-8 w-full rounded-xl bg-yellow-400 py-4 font-bold text-slate-900 transition hover:bg-yellow-300 disabled:opacity-60"
          >
            {loading ? "جارٍ الإرسال..." : "إرسال الرسالة"}
          </button>
        </motion.form>

      </div>
    </section>
  );
}