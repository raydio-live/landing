import type { MetadataRoute } from "next";

const baseUrl = "https://raydio.live";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: baseUrl,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/privacy`,
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/terms`,
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/delete-account`,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
