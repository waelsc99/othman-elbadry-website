"use client";

import {
  FaFacebookF,
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import profile from "@/data/profile";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-yellow-500/20 bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-3">
          <div>
            <h2 className="text-3xl font-black text-yellow-400">
              {profile.shortName}
            </h2>

            <p className="mt-5 leading-8 text-slate-400">
              الموقع الرسمي للأستاذ عثمان أحمد محمد عبدالله البدري،
              ويستعرض المسيرة المهنية والمناصب واللقاءات الرسمية
              وأبرز أنشطة مجموعة شركات الأمريكية.
            </p>
          </div>

          <div>
            <h3 className="mb-6 text-2xl font-bold text-yellow-400">
              روابط سريعة
            </h3>

            <div className="flex flex-col gap-3 text-slate-300">
              <a href="#">الرئيسية</a>
              <a href="#about">نبذة</a>
              <a href="#companies">الشركات</a>
              <a href="#gallery">معرض الصور</a>
              <a href="#contact">تواصل معنا</a>
            </div>
          </div>

          <div>
            <h3 className="mb-6 text-2xl font-bold text-yellow-400">
              معلومات التواصل
            </h3>

            <div className="space-y-4 text-slate-300">
              <a
                href={`tel:${profile.phone}`}
                className="flex items-center gap-3 transition hover:text-yellow-400"
              >
                <FaPhoneAlt />
                {profile.phone}
              </a>

              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-3 transition hover:text-yellow-400"
              >
                <FaEnvelope />
                {profile.email}
              </a>

              <a
                href={`https://wa.me/${profile.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 transition hover:text-green-400"
              >
                <FaWhatsapp />
                واتساب
              </a>

              <a
                href={profile.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 transition hover:text-blue-400"
              >
                <FaFacebookF />
                الصفحة الرسمية
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-slate-800 pt-8 text-center text-sm text-slate-500">
          © {year} جميع الحقوق محفوظة | لشركة الامريكية للمقاولات وخدمات البيئة  {" "}
          {profile.shortName}
        </div>
      </div>
    </footer>
  );
}