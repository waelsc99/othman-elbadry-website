import type { Metadata } from "next";
import { Cairo, Poppins, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
});

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  variable: "--font-cairo",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "عثمان البدري | الموقع الرسمي",
  description:
    "الموقع الرسمي للأستاذ عثمان أحمد محمد عبدالله البدري - رجل أعمال وشخصية عامة ورئيس مجلس إدارة مجموعة شركات الأمريكية.",

  keywords: [
    "عثمان البدري",
    "مجموعة شركات الأمريكية",
    "رجل أعمال",
    "الشركة الأمريكية للمقاولات",
    "الشركة الأمريكية للأمن والحراسة",
    "الشركة الأمريكية لخدمات البيئة",
  ],

  verification: {
    google: "U05MwD_5BaXOKYx10CH2Sps-WzELu_BHbex5VeekQjk",
  },

  openGraph: {
    title: "عثمان البدري | الموقع الرسمي",
    description:
      "الموقع الرسمي للأستاذ عثمان أحمد محمد عبدالله البدري.",
    url: "https://othman-elbadry-website.vercel.app",
    siteName: "عثمان البدري",
    locale: "ar_EG",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "عثمان البدري | الموقع الرسمي",
    description:
      "الموقع الرسمي للأستاذ عثمان أحمد محمد عبدالله البدري.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={cn(
        cairo.variable,
        poppins.variable,
        geist.variable,
        "font-sans"
      )}
    >
      <body className="bg-slate-950 text-white">
        {children}
      </body>
    </html>
  );
}