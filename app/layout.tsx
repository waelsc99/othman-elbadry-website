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
  metadataBase: new URL("https://othman-elbadry-website.vercel.app"),

  title: {
    default: "عثمان أحمد محمد عبدالله البدري | الموقع الرسمي",
    template: "%s | الموقع الرسمي",
  },

  description:
    "الموقع الرسمي للأستاذ عثمان أحمد محمد عبدالله البدري، رجل أعمال مصري ورئيس مجلس إدارة مجموعة شركات الأمريكية، ويضم السيرة الذاتية، المناصب، الإنجازات، التكريمات، معرض الصور ووسائل التواصل.",

  keywords: [
    "عثمان البدري",
    "عثمان أحمد محمد عبدالله البدري",
    "الموقع الرسمي عثمان البدري",
    "مجموعة شركات الأمريكية",
    "الشركة الأمريكية للمقاولات",
    "الشركة الأمريكية للأمن والحراسة",
    "الشركة الأمريكية لخدمات البيئة",
    "رجل أعمال مصري",
    "مدينة بدر",
    "جمعية أبناء سوهاج",
  ],

  authors: [
    {
      name: "عثمان أحمد محمد عبدالله البدري",
    },
  ],

  creator: "عثمان أحمد محمد عبدالله البدري",

  publisher: "الموقع الرسمي للأستاذ عثمان البدري",

  verification: {
    google: "U05MwD_5BaXOKYx10CH2Sps-WzELu_BHbex5VeekQjk",
  },

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "عثمان أحمد محمد عبدالله البدري | الموقع الرسمي",
    description:
      "الموقع الرسمي للأستاذ عثمان أحمد محمد عبدالله البدري.",
    url: "https://othman-elbadry-website.vercel.app",
    siteName: "عثمان البدري",
    locale: "ar_EG",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "عثمان أحمد محمد عبدالله البدري | الموقع الرسمي",
    description:
      "الموقع الرسمي للأستاذ عثمان أحمد محمد عبدالله البدري.",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
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