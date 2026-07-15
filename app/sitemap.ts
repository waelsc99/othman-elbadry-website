import type { MetadataRoute } from "next";
import companies from "@/data/companies";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://othman-elbadry-website.vercel.app";

  const companyPages = companies.map((company) => ({
    url: `${baseUrl}/companies/${company.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/companies`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    ...companyPages,
  ];
}