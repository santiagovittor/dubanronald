import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://dubanronald.com"
  const lastModified = new Date()

  return [
    { url: `${base}/`, lastModified, changeFrequency: "monthly", priority: 1 },
    { url: `${base}/es`, lastModified, changeFrequency: "monthly", priority: 0.9 },

    { url: `${base}/real-estate`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/es/real-estate`, lastModified, changeFrequency: "monthly", priority: 0.8 },

    {
      url: `${base}/analytics-tracking`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${base}/es/analytics-tracking`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ]
}
