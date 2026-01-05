import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://dubanronald.com"

  return [
    { url: `${base}/`, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: `${base}/es`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
  ]
}
