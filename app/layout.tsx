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
  metadataBase: new URL("https://www.othmanelbadry.com"),

  title: {
    default: "عثمان البدري | الموقع الرسمي",
    template: "%s | عثمان البدري",
  },

  description:
    "الموقع الرسمي للأستاذ عثمان أحمد محمد عبدالله البدري - رجل أعمال وشخصية عامة ورئيس مجلس إدارة مجموعة شركات الأمريكية.",

  keywords: [
    "عثمان البدري",
    "عثمان أحمد محمد عبدالله البدري",
    "مجموعة شركات الأمريكية",
    "رجل أعمال مصري",
    "الشركة الأمريكية للمقاولات",
  ],

  authors: [
    {
      name: "عثمان أحمد محمد عبدالله البدري",
    },
  ],

  creator: "عثمان أحمد محمد عبدالله البدري",

  openGraph: {
    title: "عثمان البدري | الموقع الرسمي",
    description:
      "الموقع الرسمي للأستاذ عثمان أحمد محمد عبدالله البدري.",
    url: "https://www.othmanelbadry.com",
    siteName: "الموقع الرسمي للأستاذ عثمان البدري",
    locale: "ar_EG",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "عثمان البدري",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "عثمان البدري | الموقع الرسمي",
    description:
      "الموقع الرسمي للأستاذ عثمان أحمد محمد عبدالله البدري.",
    images: ["/og-image.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
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