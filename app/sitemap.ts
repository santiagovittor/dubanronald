import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://dubanronald.com"

  return [
    { url: `${base}/`, changeFrequency: "monthly", priority: 1 },
    { url: `${base}/es`, changeFrequency: "monthly", priority: 0.9 },

    { url: `${base}/real-estate`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/es/real-estate`, changeFrequency: "monthly", priority: 0.8 },

    { url: `${base}/analytics-tracking`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/es/analytics-tracking`, changeFrequency: "monthly", priority: 0.8 },
  ]
}
