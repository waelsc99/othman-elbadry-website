export default function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",

    name: "عثمان أحمد محمد عبدالله البدري",

    alternateName: "عثمان البدري",

    url: "https://othman-elbadry-website.vercel.app",

    image:
      "https://othman-elbadry-website.vercel.app/images/profile/profile.jpg",

    description:
      "رجل أعمال مصري ورئيس مجلس إدارة مجموعة شركات الأمريكية وشخصية عامة.",

    jobTitle: "رئيس مجلس إدارة مجموعة شركات الأمريكية",

    nationality: "Egyptian",

    address: {
      "@type": "PostalAddress",
      addressLocality: "مدينة بدر",
      addressCountry: "EG",
    },

    email: "mailto:egku2012@hotmail.com",

    telephone: "+201001070686",

    sameAs: [
      "https://www.facebook.com/thmanalbdry.2025/",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd),
      }}
    />
  );
}