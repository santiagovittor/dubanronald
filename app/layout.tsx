import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"

export const metadata: Metadata = {
  title: "Duban Ronald | Growth systems for digital acquisition",
  description:
    "Digital marketing and growth systems for teams that treat marketing as a continuous system, not isolated campaigns.",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Duban Ronald — growth systems for digital acquisition",
    description:
      "Digital acquisition, paid media, and performance infrastructure for teams that treat marketing as a system, not a campaign.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Duban Ronald — growth systems for digital acquisition",
    description:
      "Digital acquisition, paid media, and performance infrastructure for teams that treat marketing as a system, not a campaign.",
  },
  alternates: {
    languages: {
      en: "/",
      es: "/es",
    },
  },
}

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
